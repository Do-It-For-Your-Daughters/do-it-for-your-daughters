document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("userStory");
    const submitBtn = document.getElementById("storySubmit");
    const output = document.getElementById("output");

    // Input page logic
    if (textarea && submitBtn) {
      submitBtn.addEventListener("click", function () {
        const text = textarea.value.trim();
        if (!text) return;
  
        // Get existing entries or start fresh
        let entries = JSON.parse(localStorage.getItem("userInputs")) || [];
        if (!entries.includes(text)) entries.push(text);

        localStorage.setItem("userInputs", JSON.stringify(entries));
        window.location.href = "stories.html";
      });
    }
    
    // Display page logic
    if (output) {
      const savedEntries = JSON.parse(localStorage.getItem("userInputs")) || [];
  
      if (savedEntries.length === 0) {
        output.textContent = "No stories yet";
      } else {
        savedEntries.forEach((entry) => {
          const para = document.createElement("div");
          para.textContent = entry;
          para.id = "storyDiv";
          output.appendChild(para);
        });
      }
    }
  });

  
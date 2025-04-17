// Import necessary Firestore functions from firebase-init.js
import { db, collection, addDoc, getDocs, query, orderBy } from './firebase-init.js';

document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("userStory");
    const submitBtn = document.getElementById("storySubmit");
    const output = document.getElementById("output");

    // Input page logic
    if (textarea && submitBtn) {
      submitBtn.addEventListener("click", async function () {
        const text = textarea.value.trim();
        if (!text) return;

        try {
          // Add story to Firestore
          await addDoc(collection(db, "stories"), {
            text: text,
            timestamp: new Date()
          });

          window.location.href = "stories.html"; // Redirect to stories page
        } catch (err) {
          console.error("Error saving story:", err);
        }
      });
    }

    // Display page logic (stories page)
    if (output) {
      const storiesQuery = query(collection(db, "stories"), orderBy("timestamp", "desc"));

      getDocs(storiesQuery)
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            output.textContent = "No stories yet";
          } else {
            querySnapshot.forEach((doc) => {
              const para = document.createElement("div");
              para.textContent = doc.data().text;
              para.id = "storyDiv";
              output.appendChild(para);
            });
          }
        })
        .catch((err) => {
          console.error("Error getting stories:", err);
        });
    }
  });

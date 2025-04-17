// Import necessary functions from Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCCp5VB7FTGwhfy4PA_asqF_cvjZaiYe4",
  authDomain: "do-it-for-your-daughters.firebaseapp.com",
  projectId: "do-it-for-your-daughters",
  storageBucket: "do-it-for-your-daughters.firebasestorage.app",
  messagingSenderId: "1093017161660",
  appId: "1:1093017161660:web:df70f48a68eccb730165b9",
  measurementId: "G-YRDLT35XW1"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export the Firestore functions that are needed in other files
export { db, collection, addDoc, getDocs, query, orderBy };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHAjnjhfqecdd7fzrOcjMG1JlgwZXDPDw",
  authDomain: "dragon-news-1e7bf.firebaseapp.com",
  projectId: "dragon-news-1e7bf",
  storageBucket: "dragon-news-1e7bf.firebasestorage.app",
  messagingSenderId: "385652233574",
  appId: "1:385652233574:web:6d2509dffa5c4776b124a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
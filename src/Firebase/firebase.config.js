// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCRiR6dXh-vKp_7M03GmqsC3IXAjGDgUg",
  authDomain: "dragon-news-project-b95f4.firebaseapp.com",
  projectId: "dragon-news-project-b95f4",
  storageBucket: "dragon-news-project-b95f4.firebasestorage.app",
  messagingSenderId: "638676180210",
  appId: "1:638676180210:web:2022363339f1c9114b446b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-Di-sHHhBlyVFSYMJchHgPq6GUYqEbRg",
  authDomain: "dragon-news-authenticati-8f336.firebaseapp.com",
  projectId: "dragon-news-authenticati-8f336",
  storageBucket: "dragon-news-authenticati-8f336.firebasestorage.app",
  messagingSenderId: "302341049978",
  appId: "1:302341049978:web:2796e3319cbc318e4f35c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
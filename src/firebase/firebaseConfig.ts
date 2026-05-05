// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXMLZuVTgKDd-w3ndEbuNGe6_aKZLCXVo",
  authDomain: "first-firebase-55965.firebaseapp.com",
  projectId: "first-firebase-55965",
  storageBucket: "first-firebase-55965.firebasestorage.app",
  messagingSenderId: "778206222313",
  appId: "1:778206222313:web:7d8f7a4b4ae75b1a045d78",
  measurementId: "G-E5Y55JBLPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);

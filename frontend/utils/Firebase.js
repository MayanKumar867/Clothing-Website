// Import the functions you need from the SDKs you need
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginriyu-sfashon.firebaseapp.com",
  projectId: "loginriyu-sfashon",
  storageBucket: "loginriyu-sfashon.firebasestorage.app",
  messagingSenderId: "423012542730",
  appId: "1:423012542730:web:4327f9adaa2f764a5632f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth , provider}
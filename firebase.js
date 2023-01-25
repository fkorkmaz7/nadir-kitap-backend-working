import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP-3K5SFhcRvXQPwx-qmnl6bvl1bABq0U",
  authDomain: "nadirnuxt.firebaseapp.com",
  projectId: "nadirnuxt",
  storageBucket: "nadirnuxt.appspot.com",
  messagingSenderId: "1094084305061",
  appId: "1:1094084305061:web:c95ccbff75079542e6ed4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
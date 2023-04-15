// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2j8W1pzoHU2wrZYjM4cRTInD3asCKG20",
  authDomain: "seungmin-s-quiz.firebaseapp.com",
  projectId: "seungmin-s-quiz",
  storageBucket: "seungmin-s-quiz.appspot.com",
  messagingSenderId: "1048645537648",
  appId: "1:1048645537648:web:549d46e92c9b21a2de09b5",
  measurementId: "G-1F3013NGF5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

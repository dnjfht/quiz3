// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQCzx3TeRMhfQ14uI1xPuxKIeyOukr2zs",
  authDomain: "seungmin-s-quiz2.firebaseapp.com",
  projectId: "seungmin-s-quiz2",
  storageBucket: "seungmin-s-quiz2.appspot.com",
  messagingSenderId: "764474150624",
  appId: "1:764474150624:web:e3932df48db64f86c44a85",
  measurementId: "G-NK0EYYQQFF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

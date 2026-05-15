// Firebase Configuration
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCB6HpvGzvGT-2OUPsJmScL5qHNR3QkmYE",
  authDomain: "pro-scorer-2a5ef.firebaseapp.com",
  projectId: "pro-scorer-2a5ef",
  storageBucket: "pro-scorer-2a5ef.firebasestorage.app",
  messagingSenderId: "201783156427",
  appId: "1:201783156427:web:10933b1bd40d054ff0854e",
  measurementId: "G-DYNB9PX92F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
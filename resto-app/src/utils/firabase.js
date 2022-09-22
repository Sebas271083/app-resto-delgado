// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsrAGaedvPB2eWKYOYu07JnE7QHl4Pip4",
  authDomain: "ecommerce-ca79b.firebaseapp.com",
  projectId: "ecommerce-ca79b",
  storageBucket: "ecommerce-ca79b.appspot.com",
  messagingSenderId: "139662228875",
  appId: "1:139662228875:web:2e48d825a5fb1d7bf6438e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Base de datos
export const db = getFirestore(app)



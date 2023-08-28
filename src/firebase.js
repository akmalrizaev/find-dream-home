// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcKxsXg3Y5VY5uMJ6SDyL6xy3uRST4z0w",
  authDomain: "realtor-clone-react-65b70.firebaseapp.com",
  projectId: "realtor-clone-react-65b70",
  storageBucket: "realtor-clone-react-65b70.appspot.com",
  messagingSenderId: "854112270750",
  appId: "1:854112270750:web:5f8d0a98e0330cbdd5be8f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore() 
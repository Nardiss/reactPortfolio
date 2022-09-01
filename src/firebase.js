
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBPlfRsb1uE68v-mHVywrYZQcUdfOpu2Pk",
  authDomain: "react-portfolio-projects.firebaseapp.com",
  projectId: "react-portfolio-projects",
  storageBucket: "react-portfolio-projects.appspot.com",
  messagingSenderId: "773111053968",
  appId: "1:773111053968:web:2c9619ed1707cdb736a215"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
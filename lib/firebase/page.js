// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_4CMDzJz1ApCA_gsedGgV80bha88zjNk",
  authDomain: "urbankitchen-71bd0.firebaseapp.com",
  projectId: "urbankitchen-71bd0",
  storageBucket: "urbankitchen-71bd0.appspot.com",
  messagingSenderId: "677754514589",
  appId: "1:677754514589:web:b80b8fa6d715f0fab97874"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
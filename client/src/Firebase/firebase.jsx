// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d33cf.firebaseapp.com",
  projectId: "mern-estate-d33cf",
  storageBucket: "mern-estate-d33cf.appspot.com",
  messagingSenderId: "908822545239",
  appId: "1:908822545239:web:8319f9e272c4b424cbf412"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

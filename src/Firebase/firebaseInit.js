// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChUDKoVX8Up5Tt9k1KeqmqY3wRdT1ZCkc",
  authDomain: "e-commerce-app-2adbc.firebaseapp.com",
  projectId: "e-commerce-app-2adbc",
  storageBucket: "e-commerce-app-2adbc.appspot.com",
  messagingSenderId: "438800797000",
  appId: "1:438800797000:web:364bc997fe23944132f77d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

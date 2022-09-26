import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeiYBlug-Gsrz2h1QZC7QjjAr3ROxyXpE",
  authDomain: "chat-830ef.firebaseapp.com",
  projectId: "chat-830ef",
  storageBucket: "chat-830ef.appspot.com",
  messagingSenderId: "601477246133",
  appId: "1:601477246133:web:bc19a049f538b84ab6e2fc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

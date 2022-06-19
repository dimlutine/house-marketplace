// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK3RthJ6qShdd9hOCHdB38FWms56hcnPs",
  authDomain: "house-marketplace-app-45ab1.firebaseapp.com",
  projectId: "house-marketplace-app-45ab1",
  storageBucket: "house-marketplace-app-45ab1.appspot.com",
  messagingSenderId: "978664536636",
  appId: "1:978664536636:web:d6e0fc6789945e5ae52139"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
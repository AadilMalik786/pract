// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBDm-t9h6XIZ1lhWvhg8eX0OVKgtjvreVE",
  authDomain: "newproject-f307a.firebaseapp.com",
  projectId: "newproject-f307a",
  storageBucket: "newproject-f307a.appspot.com",
  messagingSenderId: "297225820050",
  appId: "1:297225820050:web:7ad9a84967448f218c134b",
  measurementId: "G-1PVS09478D"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 
 


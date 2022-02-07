// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG8s9J0533oL5yZYsHQ50WX9fmkjVd1Oo",
  authDomain: "instagram-acaa7.firebaseapp.com",
  projectId: "instagram-acaa7",
  storageBucket: "instagram-acaa7.appspot.com",
  messagingSenderId: "610626502188",
  appId: "1:610626502188:web:00988b88253ce41100db89",
  measurementId: "G-8QYXE373NP"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
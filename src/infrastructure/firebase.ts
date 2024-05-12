// src/infrastructure/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAH7t5y8luwI3AwqK8jwzUZN1uiKXvGhh4",
  authDomain: "chk-building-block.firebaseapp.com",
  projectId: "chk-building-block",
  storageBucket: "chk-building-block.appspot.com",
  messagingSenderId: "103258429168",
  appId: "1:103258429168:web:79ccc1fe5e8c77d843d435",
  measurementId: "G-X2TQKQH3PE",
};

const app = initializeApp(firebaseConfig);

// 認証周り
const auth = getAuth(app);
// firestore
const db = getFirestore(app);

export { db, auth };

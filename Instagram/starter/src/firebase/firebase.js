import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBG5T9UImtM3oqjikWj9tIjD2Qlor7L2fQ",
  authDomain: "instagram-a3ba7.firebaseapp.com",
  projectId: "instagram-a3ba7",
  storageBucket: "instagram-a3ba7.appspot.com",
  messagingSenderId: "438711998189",
  appId: "1:438711998189:web:fad3f1df825a8582619ee4",
  measurementId: "G-LZMFVRJJ4N",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };

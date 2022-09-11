import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";

// collection, getDocs

const firebaseConfig = {
  apiKey: "AIzaSyCtwdtz2qRkmki_42b8tAL9LGJOvsGO6tU",
  authDomain: "wks-database.firebaseapp.com",
  projectId: "wks-database",
  storageBucket: "wks-database.appspot.com",
  messagingSenderId: "702588654999",
  appId: "1:702588654999:web:e934a22c349f56b74320d2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const database = getFirestore();

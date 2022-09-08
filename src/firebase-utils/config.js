import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtwdtz2qRkmki_42b8tAL9LGJOvsGO6tU",
  authDomain: "wks-database.firebaseapp.com",
  projectId: "wks-database",
  storageBucket: "wks-database.appspot.com",
  messagingSenderId: "702588654999",
  appId: "1:702588654999:web:e934a22c349f56b74320d2",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };

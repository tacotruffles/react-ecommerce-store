// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn58-PvEsNQdvGl0JFeLyPbC62GxeduXQ",
  authDomain: "react-clothing-db-2d206.firebaseapp.com",
  projectId: "react-clothing-db-2d206",
  storageBucket: "react-clothing-db-2d206.appspot.com",
  messagingSenderId: "989835079035",
  appId: "1:989835079035:web:73d97f29a2ff5bc440e1de"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
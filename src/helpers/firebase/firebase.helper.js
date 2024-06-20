import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// NOTE: https://firebase.google.com/docs/web/setup#available-libraries

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

// Google Authentication Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});

// Authentication Helper Functions
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// Firestore Database Helper Functions
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  // if user does not exist
  // create new document with data from userAuth in `users` collection
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, { 
        displayName, 
        email, 
        createdAt 
      });
    } catch (e) {
      console.log('error creating the user: ', e.message);
    }
  }

  // return the user Auth 
  return userDocRef;
} 
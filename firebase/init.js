// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDsQV9igb21BHx9HcHdYgz6srnNlbJdgUQ",

  authDomain: "golden-shoe-aa08b.firebaseapp.com",

  projectId: "golden-shoe-aa08b",

  storageBucket: "golden-shoe-aa08b.appspot.com",

  messagingSenderId: "750790441572",

  appId: "1:750790441572:web:6323e8ac8ccbad218cfd71",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

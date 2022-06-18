// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,

  authDomain: process.env.AUTHDOMAIN,

  projectId: process.env.PROJECTID,

  storageBucket: process.env.STORAGEBUCKET,

  messagingSenderId: process.env.MESSAGINGSENDERID,

  appId: process.env.APID,
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

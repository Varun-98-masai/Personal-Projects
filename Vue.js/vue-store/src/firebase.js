import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnP_mRBKjA34-wKJzDbbReR0xqW4gE4tY",
    authDomain: "vueonlinestore-d8d4d.firebaseapp.com",
    projectId: "vueonlinestore-d8d4d",
    storageBucket: "vueonlinestore-d8d4d.appspot.com",
    messagingSenderId: "470006455472",
    appId: "1:470006455472:web:17d9d08570f5651c2eef75",
    measurementId: "G-VDVVHC2DLC"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, collection, getDocs }
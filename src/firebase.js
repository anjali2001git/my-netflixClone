//import { initializeApp } from 'firebase/app'
//import { getAuth } from 'firebase/auth'
//import { getFirestore } from 'firebase/firestore'

import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAcnhGZtCFNZD0jB0KFNcRgEeRlkrO2Nlc",
  authDomain: "clone-netflix-29556.firebaseapp.com",
  projectId: "clone-netflix-29556",
  storageBucket: "clone-netflix-29556.appspot.com",
  messagingSenderId: "895841121630",
  appId: "1:895841121630:web:f8378ab1184c952e9ccbcf"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export { auth }
export default db
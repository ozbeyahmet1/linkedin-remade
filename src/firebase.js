import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlc_7UJWKKMdSmG07W1zhLyX-OxJyXi4k",
  authDomain: "linkedin-remade.firebaseapp.com",
  projectId: "linkedin-remade",
  storageBucket: "linkedin-remade.appspot.com",
  messagingSenderId: "1049518044165",
  appId: "1:1049518044165:web:6d1af4c727623ede2cd86c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };


import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC5s6SUrvRm8uLImYiNvQPSFFZqrAbhUr4",
  authDomain: "week7-junchen.firebaseapp.com",
  projectId: "week7-junchen",
  storageBucket: "week7-junchen.firebasestorage.app",
  messagingSenderId: "39343364463",
  appId: "1:39343364463:web:fa70ad4b3369326e65709a"
};


initializeApp(firebaseConfig)

const db = getFirestore();
export default db;
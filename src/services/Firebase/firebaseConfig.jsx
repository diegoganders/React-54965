import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCsea4TDJMub7wERjrKbonMDmdD5RtfyUg",
    authDomain: "appreactanders.firebaseapp.com",
    projectId: "appreactanders",
    storageBucket: "appreactanders.appspot.com",
    messagingSenderId: "260122878447",
    appId: "1:260122878447:web:1a9a9456cf8cbd1285d61a"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
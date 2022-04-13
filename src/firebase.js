// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAuth, connectAuthEmulator, createUserWithEmailAndPassword} from 'firebase/auth';
// import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDExHP6AmigsZBrUdnvrviobiKoFtR2TDg",
    authDomain: "challenge-55dce.firebaseapp.com",
    projectId: "challenge-55dce",
    storageBucket: "challenge-55dce.appspot.com",
    messagingSenderId: "359619740266",
    appId: "1:359619740266:web:0d9dcded77fdd6afbe0013",
    measurementId: "G-V1B8Z7M2BE"
  };
  const app = initializeApp(firebaseConfig);

  // export const db = getFirestore(firebaseApp);
  export const auth = getAuth(app);
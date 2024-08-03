import { initializeApp } from "firebase/app";
import { getStorage} from 'firebase/storage';
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYCo1oIpSSPgHOV1sSH-I-PuYUUfjVlkU",
  authDomain: "bashaytcfirebase.firebaseapp.com",
  projectId: "bashaytcfirebase",
  storageBucket: "bashaytcfirebase.appspot.com",
  messagingSenderId: "1005459060431",
  appId: "1:1005459060431:web:4401ce31339338e818a9ba",
  measurementId: "G-2NXEVJS3PN"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
export const db = getFirestore(app)



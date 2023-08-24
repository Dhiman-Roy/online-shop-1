
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAsnwmxw528BlYaMaQ1_cdkdZqcyru97uA",
  authDomain: "reactshopone.firebaseapp.com",
  projectId: "reactshopone",
  storageBucket: "reactshopone.appspot.com",
  messagingSenderId: "793904527030",
  appId: "1:793904527030:web:1716033a0a243a08f65817",
  measurementId: "G-4G0S0PHDF9"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
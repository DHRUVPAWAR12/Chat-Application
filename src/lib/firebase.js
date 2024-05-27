import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyD-Qqrcfrza5BVQBL0gtoOxesRXiX7xbh4",
  authDomain: "reactchat-3efd9.firebaseapp.com",
  projectId: "reactchat-3efd9",
  storageBucket: "reactchat-3efd9.appspot.com",
  messagingSenderId: "22096330817",
  appId: "1:22096330817:web:eaf126eadb3c9d921986c0"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
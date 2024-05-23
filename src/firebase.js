
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";    
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "",
  authDomain: "chat-application-30fea.firebaseapp.com",
  projectId: "chat-application-30fea",
  storageBucket: "chat-application-30fea.appspot.com",
  messagingSenderId: "330758176624",
  appId: "1:330758176624:web:c31bc8008e4fb4d64f19b5",
  measurementId: "G-2FHF4MP2ZP"
};



export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

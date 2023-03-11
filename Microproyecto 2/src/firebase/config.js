import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyDI0LcEa7bicKOllOiZT6mGgOV9OxcaQGw",
  authDomain: "microproyecto-2-ac799.firebaseapp.com",
  projectId: "microproyecto-2-ac799",
  storageBucket: "microproyecto-2-ac799.appspot.com",
  messagingSenderId: "279790915019",
  appId: "1:279790915019:web:5fdc4aee5bf1544337ba4e",
  measurementId: "G-KEWCNL619N"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);//Conexion modulo de firebase
export const db = getFirestore(app);//conexion base de datos firestore
export const store = getStorage(app);//conexion con el storage de firebase

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:"select_account"})
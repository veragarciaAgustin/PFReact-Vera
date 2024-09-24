// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPX-KnVldoRupN5EI102Kw9Jck4eA_lQ4",
  authDomain: "pfreactvera.firebaseapp.com",
  projectId: "pfreactvera",
  storageBucket: "pfreactvera.appspot.com",
  messagingSenderId: "881547496597",
  appId: "1:881547496597:web:419b2ac35a4a7b84ed9f9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Inicializamos la base de datos
export const db = getFirestore(app);
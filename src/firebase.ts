// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6vR8LZCFW0DfR_W1n13oHbcpZ8N-jN3I",
  authDomain: "stockstore-bfac3.firebaseapp.com",
  projectId: "stockstore-bfac3",
  storageBucket: "stockstore-bfac3.appspot.com",
  messagingSenderId: "205986263644",
  appId: "1:205986263644:web:a6698ff5a474d5dc3aec99",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;

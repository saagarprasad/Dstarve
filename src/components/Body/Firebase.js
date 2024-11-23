// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV4QHyKuQMxN7f-m1TLtQ99vDREr1l6CE",
  authDomain: "dstarve-cb4ec.firebaseapp.com",
  projectId: "dstarve-cb4ec",
  storageBucket: "dstarve-cb4ec.firebasestorage.app",
  messagingSenderId: "712455391450",
  appId: "1:712455391450:web:9de3632e0efd6b5851fde3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
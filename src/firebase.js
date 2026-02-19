import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5qOQBLcWr-KdOk_BmLjOTKbNQpcXoAto",
    authDomain: "personal-finance-tracker-d6763.firebaseapp.com",
    projectId: "personal-finance-tracker-d6763",
    storageBucket: "personal-finance-tracker-d6763.firebasestorage.app",
    messagingSenderId: "228768407873",
    appId: "1:228768407873:web:0d2a3b16f9c761714081c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

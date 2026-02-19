import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;

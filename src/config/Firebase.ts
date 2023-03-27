// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtReUaJWm52XJZu1pZ_reSUE-3ACgNAA0",
    authDomain: "cloud8minds.firebaseapp.com",
    projectId: "cloud8minds",
    storageBucket: "cloud8minds.appspot.com",
    messagingSenderId: "422514335341",
    appId: "1:422514335341:web:fd0fd7eddcc33c4136a964",
    measurementId: "G-154CCYQ8KR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

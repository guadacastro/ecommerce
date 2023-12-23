// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG8qmH1cpJMNhiqL7er5PURvB3RKh88DA",
  authDomain: "ecommerce-9ecf0.firebaseapp.com",
  projectId: "ecommerce-9ecf0",
  storageBucket: "ecommerce-9ecf0.appspot.com",
  messagingSenderId: "648286441158",
  appId: "1:648286441158:web:546fb8fbb0f4b2fdc611c7",
  measurementId: "G-KHQ61BRGLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
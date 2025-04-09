// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyANffqDfzNwtG5vJdSCQMmcwKQ5KAEatAE",
authDomain: "crud-reactjs-f1e0e.firebaseapp.com",
projectId: "crud-reactjs-f1e0e",
storageBucket: "crud-reactjs-f1e0e.firebasestorage.app",
messagingSenderId: "996310321709",
appId: "1:996310321709:web:1c970be757cc165976c6a4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// Initialize Cloud Firestore and get a reference to the service 
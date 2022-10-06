import {getFirestore} from "firebase/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAATBCjWpZRbeIIUe_2reozhiaoHHs2tF4",
  authDomain: "react-user-app-cf167.firebaseapp.com",
  projectId: "react-user-app-cf167",
  storageBucket: "react-user-app-cf167.appspot.com",
  messagingSenderId: "76979276333",
  appId: "1:76979276333:web:8f5ec48ef7ee83a0a746a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
export const db =getFirestore (app)
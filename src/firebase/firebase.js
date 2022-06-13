
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Fire base products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJhfwYJ2XekZaAJntRdvwM3HRSxGy1rQo",
  authDomain: "dolpeadminpanel.firebaseapp.com",
  projectId: "dolpeadminpanel",
  storageBucket: "dolpeadminpanel.appspot.com",
  messagingSenderId: "964376691107",
  appId: "1:964376691107:web:8e5b1cf197ab6b20b25a16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
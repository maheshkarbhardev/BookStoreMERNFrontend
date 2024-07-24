// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlth0DBa_rOlyQ0Wd2j9DvQ48tt28ylUk",
  authDomain: "mern-book-store-dc0b4.firebaseapp.com",
  projectId: "mern-book-store-dc0b4",
  storageBucket: "mern-book-store-dc0b4.appspot.com",
  messagingSenderId: "580403342501",
  appId: "1:580403342501:web:ae5b814be1c23b7467b14c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
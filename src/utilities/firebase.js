// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQLHZyQ1xetfSrvl61K3y7SRWdeORFGJw",
  authDomain: "react-tutorial-85633.firebaseapp.com",
  projectId: "react-tutorial-85633",
  storageBucket: "react-tutorial-85633.appspot.com",
  messagingSenderId: "353387393336",
  appId: "1:353387393336:web:ea7a62f1e38996f22e91cd",
  measurementId: "G-0BD43E0ZQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
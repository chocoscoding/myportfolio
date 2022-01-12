// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDihVSAA9l_mn9xDFn_WouCE71brmPymrM",
  authDomain: "cdportfolio-95923.firebaseapp.com",
  projectId: "cdportfolio-95923",
  storageBucket: "cdportfolio-95923.appspot.com",
  messagingSenderId: "387255990340",
  appId: "1:387255990340:web:76fc6db3da788f946f6411",
  measurementId: "G-9QGH5SRN0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6Tu5Z_tUe8VDX0sALK8B6S2ud2Hzs63g",
  authDomain: "nodejs-7cc79.firebaseapp.com",
  projectId: "nodejs-7cc79",
  storageBucket: "nodejs-7cc79.appspot.com",
  messagingSenderId: "1052314849019",
  appId: "1:1052314849019:web:c5e2e6c802aba39be36a5e",
  measurementId: "G-HF53S2WTNV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

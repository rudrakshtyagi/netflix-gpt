// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmDVG2C40Tosjr-vS_O7WBQAfDcfsBtUY",
  authDomain: "netflixgpt-5ecb5.firebaseapp.com",
  projectId: "netflixgpt-5ecb5",
  storageBucket: "netflixgpt-5ecb5.firebasestorage.app",
  messagingSenderId: "909144606808",
  appId: "1:909144606808:web:015c9acbc3cc165c78e22d",
  measurementId: "G-98VXQQY8PP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();
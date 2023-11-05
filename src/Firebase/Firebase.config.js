// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB29g3zhYWxn5o4wJlFMeR2SMCL5MDTDoQ",
  authDomain: "travelnest-c18b1.firebaseapp.com",
  projectId: "travelnest-c18b1",
  storageBucket: "travelnest-c18b1.appspot.com",
  messagingSenderId: "927075855221",
  appId: "1:927075855221:web:b3e65840c96b6e7003813c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

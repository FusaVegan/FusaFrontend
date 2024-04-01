// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


/*
const apiKey = process.env.REACT_APP_firebase_API_key;
const authDomain = process.env.REACT_APP_firebase_API_key;
const projectId = process.env.REACT_APP_firebase_API_key;
const storageBucket = process.env.REACT_APP_firebase_API_key;
const messagingSenderId = process.env.REACT_APP_firebase_API_key;
const appId = process.env.REACT_APP_firebase_API_key;
*/



const firebaseConfig = {
  apiKey: "AIzaSyD9nRnMHtFrbG4d7ELbuPbYNn8OMXmVEeA",
  authDomain: "fusa-be06d.firebaseapp.com",
  projectId: "fusa-be06d",
  storageBucket: "fusa-be06d.appspot.com",
  messagingSenderId: "926565605659",
  appId: "1:926565605659:web:1c730fa981e199000273be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.addScope('email');
export { auth, provider };
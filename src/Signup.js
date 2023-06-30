import React from 'react'
import './style.css'
import Nav from './Nav'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCd7ipT3S2c0AlgrXAHzUMGQJ7WDpukc5s",
  authDomain: "react-b37a7.firebaseapp.com",
  projectId: "react-b37a7",
  storageBucket: "react-b37a7.appspot.com",
  messagingSenderId: "858554683112",
  appId: "1:858554683112:web:85db05230557f7f55a835d",
  measurementId: "G-W77BJ8JHXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();


const Signup = () => {

    const handleClick = () => {
        const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }


  return (
    <div className='wrap'>
        <Nav />
        <h1>This is Sign Up page</h1>
        <button onClick={handleClick}>Sign Up with Google</button>
    </div>
  )
}

export default Signup

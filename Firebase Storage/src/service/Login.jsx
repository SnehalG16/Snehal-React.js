import React, { useState } from 'react'
import GoogleButton from 'react-google-button'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firbase';

const provider = new GoogleAuthProvider();

const Login = () => {
    
    const handleGoogleSignIn = (e) => {
      e.preventDefault();
      signInWithPopup(auth, provider)
      .then((res) => {
        console.log('User signed in:', res.user);
      })
      .catch((err) => {
        console.error('Error during sign in:', err.message);
      });
    };
  
  return (
    <div>
      <h1>Login</h1>
        <p>Please log in to your account</p>

        <GoogleButton style={{ marginLeft: "40%" }} onClick={handleGoogleSignIn} />
    </div>
  )
}

export default Login

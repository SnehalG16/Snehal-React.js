import {signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, provider } from './firebase'
import GoogleButton from 'react-google-button'

const Login = () => {
    const [email,setemail]=useState()
    const [password,setpassword]=useState()
   
    const handelsubmit=(e)=>{
        e.praventDefalut()
        signInWithEmailAndPassword(auth, email, password)
  .then((res) => {
    console.log(res)
    alert("SIGN IN SUCCESSFULLY")
  })
  .catch((err) =>{
    console.log(err)
 });
    }

    const googlebtn=(e)=>{
      e.preventDefault()
      signInWithPopup(auth,provider)
      .then((res)=>console.log(res))
      .catch((err)=>console.log(err))
    }
     
  return (
    <div>
        <form action="" onSubmit={()=>handelsubmit()}>
              <label htmlFor="">EMAIL :- </label>
              <input type="email" placeholder='enter your email' onClick={(e)=>setemail(email)} />
              <br /><br />
              <label htmlFor="">PASSWORD :- </label>
              <input type="text" placeholder='enter your password' onClick={(e)=>setpassword()} />
              <br /><br />
              <GoogleButton
        onClick={googlebtn}
      />
        </form>
    </div>
  )
}

export default Login

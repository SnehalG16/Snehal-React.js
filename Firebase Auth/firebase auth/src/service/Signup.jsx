import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';

const Signup = () => {
    const [email,setemail]=useState()
    const [password,setpassword]=useState()

    const handelsubmit=(e)=>{
        e.praventDefalut()
createUserWithEmailAndPassword(auth, email, password)
  .then((res) => {
    console.log(res)
    alert("SIGN IN SUCCESSFULLY")
  })
  .catch((err) =>{
    console.log(err) });
  }
  return (
    <div>
        <label htmlFor="">EMAIL :- </label>
        <input type="email" placeholder='enter your email' onClick={(e)=>setemail()} />
        <br /><br />
        <label htmlFor="">PASSWORD :- </label>
        <input type="text" placeholder='enter your password' onClick={(e)=>setpassword()} />
        <br /><br />
        <input type="submit" onChange={handelsubmit} />
    </div>
  )
}

export default Signup

import React, { useState } from 'react'

const Signup = () => {
    const [email,setemail]=useState()
    const [password,setpassword]=useState()
  return (
    <div>
      <input type="email" placeholder='enetr email' />
      <input type="password" placeholder='enter password' />
    </div>
  )
}

export default Signup

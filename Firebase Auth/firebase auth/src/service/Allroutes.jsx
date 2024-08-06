import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { Route, Routes } from 'react-router-dom'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default Allroutes

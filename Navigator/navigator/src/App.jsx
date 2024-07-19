import { useState } from 'react'
import './App.css'
import Navlink from './componets/Navlink'
import Allroutes from './componets/Allroutes'
import { NavLink } from 'react-router-dom'

function App() {

  return (
    <>
      <Navlink />
      <Allroutes/>
    </>
  )
}

export default App

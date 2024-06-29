import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './componentes/product'

function App() {
  
const [toggle,settogle]=useState(false)
  return (
    <>
      <button onClick={()=>settogle(!toggle)}>{toggle ? "BACK":"GET POST"}</button>
        {toggle ? <Product /> :"" } 
    </>
  )
}

export default App

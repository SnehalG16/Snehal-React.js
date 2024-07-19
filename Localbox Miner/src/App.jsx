import { useContext, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import MidSection from './Components/MidSection'
import Button from './Components/Button'
import { themeContext } from './context/ThemeContex'

function App() {
  const {theme}=useContext(themeContext)
  return (
    <>
    <div style={{backgroundColor:theme=="light"?"white":"#FFB200",color:theme=="light"?"#FFB200":"white",borderRadius:"40px",height:"400px"}}>
      <Navbar />
      <MidSection />
    </div>
    <Button />
    </>
  )
}

export default App

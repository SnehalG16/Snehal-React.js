import React, { useContext } from 'react'
import { themeContext } from '../context/ThemeContex'

const Navbar = () => {
    const {theme}=useContext(themeContext)
  return (
    <div>
      <h1>RESIN</h1>
      <h3>The resin art is {theme}</h3>
    </div>
  )
}

export default Navbar

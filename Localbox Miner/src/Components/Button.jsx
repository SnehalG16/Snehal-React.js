import React, { useContext, useState } from 'react'
import { themeContext } from '../context/ThemeContex'
import { IoPartlySunnyOutline } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs"

const Button = () => {
    const {themeupdaterfunction,theme} = useContext(themeContext)
  return (
    <div>
          <button style={{marginTop:"5px",backgroundColor:theme=="light"?"white":"#FFB200",color:theme=="light"? "#FFB200":"white"}} onClick={themeupdaterfunction}>
               {theme=="light"?<BsMoonStars />:<IoPartlySunnyOutline />}
          </button>     
    </div>

  )
}


export default Button

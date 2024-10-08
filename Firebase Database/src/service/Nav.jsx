import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <div style={{display:"flex",justifyContent:"space-between",height:"70px",backgroundColor:"#D2649A"}}>
        <NavLink style={({isActive}) => { return isActive ? {color:"white"}:{color:"#FFCDEA"}}} to={"/"} className='nav'>home</NavLink>
      <NavLink style={({isActive}) =>{ return isActive ? {color:"white"}:{color:"#FFCDEA"}}} to={"/product"} className='nav'>Product</NavLink>
      <NavLink style={({isActive}) =>{ return isActive ? {color:"white"}:{color:"#FFCDEA"}}} to={"/login"} className='nav'>Login</NavLink>
      <NavLink style={({isActive}) =>{ return isActive ? {color:"white"}:{color:"#FFCDEA"}}} to={"addpage"} className='nav'>Addpage</NavLink>


        </div>
     </div>

  )
}

export default Nav

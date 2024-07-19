import React from 'react'
import { Link , NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <div style={{display:"flex",justifyContent:"space-between",height:"70px",backgroundColor:"#8D493A"}}>
             <NavLink style={({isActive}) => { return isActive ? {color:"white"}:{color:"black"}}} to={"/"} className='nav'>Home</NavLink>
             <NavLink style={({isActive}) =>{ return isActive ? {color:"white"}:{color:"black"}}} to={"/Product"} className='nav'>Product</NavLink>
             <NavLink style={({isActive}) =>{ return isActive ? {color:"white"}:{color:"black"}}}  to={"/Login"}className='nav'>Login</NavLink>
             <NavLink style={({isActive}) =>{ return isActive ? {color:"white"}:{color:"black"}}}  to={"/About"}className='nav'>About</NavLink>
        </div>
     </div>

  )
}

export default Nav

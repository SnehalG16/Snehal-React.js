import React from 'react'
import { Link } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Login from './Login'
import Private from './Private'
import About from './About'
import Description from './Description'



const Allroutes = () => {
  return (
    <div>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Product" element={<Private><Product /></ Private>} />
         <Route path="/login" element={<Login />} />
         <Route path="/singlepage/:id" element={<Description/>}/>
         <Route path='/About' element={<About/>}/>
         <Route path="*" element={"page not found "} /> 
      </Routes>
    </div>
  )
}

export default Allroutes

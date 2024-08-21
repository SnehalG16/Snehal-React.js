import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './service/Home'
import Login from './service/Login'
import About from './service/About'
import Product from './service/Product'
import Addpage from './service/Addpage'
import Edit from './service/Edit'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path="/Addpage" element={<Addpage />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  )
}

export default Allroutes

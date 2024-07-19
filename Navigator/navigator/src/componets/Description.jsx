import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Description = () => {
 const{id}=useParams()
 const[data,setdata]=useState({})
 const getdata=()=>{
    axios.get(`http://localhost:3000/Product/${id}`).then((res)=>{
      
        setdata(res.data)
    }).catch((err)=>{console.log(err)})
 }
 useEffect(()=>{
    getdata()
 },[])
 return(
    <div style={{height:"500px", width:"800px" ,color:"#8D493A"}}>
         <h1>description page</h1>
      {data ? (
        <>
          <h1>{data.id}</h1>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <h3 style={{ margin: "0 25%" }}>{data.category}</h3>
          <img src={data.image} alt={data.title} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
 )
}
export default Description

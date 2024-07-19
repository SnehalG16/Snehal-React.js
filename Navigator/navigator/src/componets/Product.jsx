import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  const [data, setdata] = useState([])
  const [order, setorder] = useState(null)
  const [page, setpage] = useState(1)
  const getdatafunction = () => {
    axios.get("https://fakestoreapi.com/products", {
      params:
      {
        _page: page,
        _limit: 3,
        _sort: "price",
        _order: order
      }
    })

      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))
  }
  const handeldelete = (id) => {

    axios.delete(`http://localhost:3000/Product/${id}`)
      .then((res) => {
        alert("DELETE")
        getdatafunction()
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    getdatafunction()
  }, [page,order])
  return (
    <div  style={{color:"#8D493A"}}>
      <h1>Product</h1>
      <hr />
      
      <hr />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {data.map((el) => (
          <div key={el.id} style={{ boxShadow: "#8D493A 2px 3px 3px", margin: "10px 20px" }} >
            <h3>Title :- {el.title}</h3>
            <h3>Price :- {el.price}</h3>
            <h3>{el.category}</h3>
            <Link to={`/singlepage/${el.id}`}>
              <img src={el.image} alt="" style={{ height: "150px", width: "150px" }} />
            </Link>
            <br /><br />
            
            <button style={{ height: "50px", width: "100px", fontSize: "15px", margin: "0 10px" }} onClick={() => handeldelete(el.id)}>DELETE</button>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center" }} className='btn'>
        <button disabled={page==1} onClick={() => setpage(page - 1)}>prev</button>
        <span style={{margin:" 30px 20px"}}>{page}</span>
        <button disabled={page==page} onClick={() => setpage(page + 1)}>next</button>
      </div>
    </div>

  )
}

export default Product 
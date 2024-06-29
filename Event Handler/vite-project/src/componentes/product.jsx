import { useEffect, useState } from 'react';

function product() {
const[data,setdata]=useState([]);
const[page,setpage]=useState(1);

    const fetchdata = ()=>{
        fetch(`https://jsonplaceholder.typicode.com/postshttps://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
        .then((res)=>res.json())
        .then((data)=>{
          setdata(data);
        })
        .catch((err)=>console.log(err))
    }
   
     useEffect(()=>{
     fetchdata();
         },[page])
    
   
        return (
          <div>
            {/* <button onClick={fetchPost}>GET POST</button> */}
           {data.map((el)=>(
            <div style={{border:"2px solid #D63484",margin:"40px 30px"}}>
              <h4 style={{color:"#FF9BD2"}}>id:{el.id}</h4>
              <h3 style={{width:"600px",height:"",color:"#D63484"}}>{el.title}</h3><hr />
              <h3 style={{width:"600px",height:"",color:"#D63484"}}>{el.body}</h3>
              </div>
           ))}
           <button onClick={()=>setpage(page+1)} style={{color:"#D63484",margin:"20px 20px"}}>+</button>
           <span style={{color:"#D63484",margin:"20px 20px"}}>{page}</span>
           <button  onClick={()=>setpage(page-1)} style={{color:"#D63484",margin:"20px 20px"}} disabled={page==0} >-</button>
          </div>
        );
}
export default product

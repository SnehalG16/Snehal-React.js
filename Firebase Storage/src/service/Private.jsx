

const Private=({children})=>{
    const isAuth=localStorage.getItem("Token")
    if(!isAuth)
     {
       window.location.href="/login"
     }
     return children
  }
  export default Private
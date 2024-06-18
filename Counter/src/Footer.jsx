import './App.css';
import { PiFireSimpleBold } from "react-icons/pi";
import { GiFireSilhouette } from "react-icons/gi";
import { FcWiFiLogo } from "react-icons/fc";
import { FaSquareInstagram } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import { IoIosLink } from "react-icons/io";
function Footer (){
  return(
   <div className="last">
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
      <div className='one'>
         <h1>LOGO</h1>
         <img src="https://drive.google.com/file/d/1xrlt5xzEp3CbnRSNr_pzkulU47NUJLkb/view?usp=drive_link" alt="" />
      <p>Copyright 2022</p>
      <h3>ARTSY_WITSY_BY_SNEHAL</h3>
      </div>
      <div className='two'>
         <h2>PRE-SALES FAQS</h2> 
         <p>SUBMIT TICKET</p>
         <p>GET TICKET</p> 
         <p>WEEBLY THEMES</p>
      </div>
      <div className='three'>
         <h2>SERIVECE</h2> 
         <p>THEAME-TWEARK</p>
         <p>CHILD BDAY PARTY </p> 
         <p>CARD DECORATION</p>
      </div>
      <div className='four'>
         <h2>SHOW CASE</h2> 
         <p>WID-CART</p>
         <p>SUPPORT </p> 
         <p>CARD DECORATION</p>
      </div>
      
      </div>
      <hr />
     <p>OUR SERIVECE</p>
     <PiFireSimpleBold  style={{margin: "70px 10px",fontSize:"40px"}}/>
     <GiFireSilhouette style={{margin: "70px 10px",fontSize:"40px"}} />
     <FcWiFiLogo style={{margin: "70px 10px",fontSize:"40px"}}/>
     <FaSquareInstagram style={{margin: "70px 10px",fontSize:"40px"}}/>
     <FcAbout style={{margin: "70px 10px",fontSize:"40px"}}/>
     <IoIosLink style={{margin: "70px 10px",fontSize:"40px", color:"black"}}/>
   
   </div>
  )
}
export default Footer;

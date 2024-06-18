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
      {/* <div style={{display:"flex",justifyContent:"space-evenly"}}>
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
      
      </div> */}
      <footer className="footer" >
	<div className="waves">
		<div className="wave" id="wave1"></div>
		<div className="wave" id="wave2"></div>
		<div className="wave" id="wave3"></div>
		<div class="wave" id="wave4"></div>
	</div>

	<ul className="menu">
		<li className="menu__item"><a className="menu__link" href="#">Home</a></li>
		<li className="menu__item"><a className="menu__link" href="#">About us</a></li>
		<li className="menu__item"><a className="menu__link" href="#">Contact us</a></li>


	</ul>
	<p style={{opacity: 0.75}}>Made with 🤍 by ARTSY_WITSY_BY_SNEHAL</p>

</footer>
   
   </div>
  )
}
export default Footer;

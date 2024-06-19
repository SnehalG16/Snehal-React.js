import { FaSquareInstagram } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import { IoIosLink } from "react-icons/io";
import './App.css';

function Header (){
    return(
        <div style={{position:"fixed",backgroundcolor:"#006769",height:"100px"}}>
             <header className="header" style={{display:"flex",height:"200px",width:"100%",justifyContent:"space-evenly"}}>
               <img src="https://th.bing.com/th/id/OIP.kZBV_aLvHoYAeMzTxh2vjQHaC2?w=304&h=134&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" style={{height:"100px",width:"100px"}}/>

    
               <ul style={{display:"flex",margin:"30px 20px"}}>
                  <li><a href="" >HOME</a></li>
                  <li><a href="" >ABOUT</a></li>
                  <li><a href="">CONTACT</a></li>
               </ul>
               <FaSquareInstagram style={{margin: "25px 10px",fontSize:"40px"}}/>
               <FcAbout style={{margin: "25px 10px",fontSize:"40px"}}/>
               <IoIosLink style={{margin: "25px 10px",fontSize:"40px", color:"black"}}/>
    
            </header>
            
        </div>
        

    )    
}
export default Header;
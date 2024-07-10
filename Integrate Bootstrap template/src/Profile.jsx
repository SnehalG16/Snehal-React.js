import React from 'react'
import img from './img/mypic.png'
import './profile.css'
import { GrFacebookOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoSnapchat } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";
import { MdOutlinePictureAsPdf } from "react-icons/md";
import { GiHiveMind } from "react-icons/gi";

export function Profile(){
  return (
    <div>
        <div className='cnt d-flex flex-sm-column flex-md-row'>
                <div className='disc text-start ps-5 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-sm-center text-md-start '>
                    <h1 style={{margin:"90px 10px"}}>Hi. I'm Snehal Gulale ! </h1>
                
                    <p className='text-sm-center text-md-start' style={{margin:"0px 10px"}}>she is a freelance journalist. If someone works freelance, they are not employed by one organization, but are paid for each piece of work. she is now working freelance from her home.</p>
                    <br />
                    <button style={{padding:"15px",margin:"10px 150px",borderRadius:"25px",backgroundColor:"#AF8F6F",borderColor:"#543310"}}>I'M AVAILBLE</button>
                    <br />
                    <br />
                    <div className='icons'>
                    <GrFacebookOption  />
                    <BiLogoSnapchat style={{marginLeft:"10px"}} />
                    <RiInstagramFill style={{marginLeft:"10px"}} />
                    <FaXTwitter style={{marginLeft:"10px"}}/>
                    <MdOutlinePictureAsPdf style={{marginLeft:"10px"}}/>
                    <GiHiveMind style={{marginLeft:"10px"}}/>

                </div>
                </div>
                <div className='imgs col-sm-12 col-md-6 col-lg-6 col-xl-6 d-sm-none d-md-block'>
                    <img src={img} style={{height:"450px",width:"450px"}}/>
                </div>
        </div>
    </div>
  )
}

export default Profile
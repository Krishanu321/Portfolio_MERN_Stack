import React,{useState} from 'react'
import './MobileNav.css'
import { IoMenu } from "react-icons/io5";
import { RiMenuUnfold4Fill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { FaUserGraduate } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { FaProjectDiagram } from "react-icons/fa";
import { FcPortraitMode } from "react-icons/fc";
import { BiSolidContact } from "react-icons/bi";
import { Link } from 'react-scroll';

const MobileNav = () => {
    const [open,setOpen] = useState(false)
    //handle open
    const handleOpen =() => {
        setOpen(!open);
    };
    //handle menu clicks
    const handleMenuClick =() => {
        setOpen(false);
    }


  return (
    <>
      <div className='mobile-nav'>
        <div className='mobile-nav-header'>
            {open ? (<RiMenuUnfold4Fill size= {30} className='mobile-nav-icon' onClick={handleOpen}/>) :
            (<IoMenu size={30} className='mobile-nav-icon' onClick={handleOpen}/>)}
            
            <span className='mobile-nav-title'>My Portfolio App</span>
        </div>
        {open &&(
             <div className='mobile-nav-menu'>
             <div className ="nav-items">
                 <div className ="nav-item">
                     <div className= "nav-link">
                         <Link to="home" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                         <AiFillHome />
                         Home</Link>
                     </div>
                     <div className= "nav-link">
                         <Link to="about" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                         <FcAbout />
                         About
                         </Link>
                     </div>
                     <div className= "nav-link">
                         <Link to="education" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                         <FaUserGraduate />
                         Education
                         </Link>
                     </div>
                     <div className= "nav-link">
                         <Link to="techskill" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                         <GiSkills />
                         Technical skills
                         </Link>
                     </div>
                     <div className= "nav-link">
                         <Link to="projects" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                         <FaProjectDiagram />
                         Projects
                         </Link>
                     </div>
                     <div className= "nav-link">
                         <Link to="exp" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                         <FcPortraitMode />
                         Experience
                         </Link>
                     </div>
                     <div className= "nav-link">
                         <Link to="contact" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                         <BiSolidContact />
                         Contact
                         </Link>
                     </div>
                 </div>
             </div>
             </div>
        )}
      </div>
    </>
  )
}

export default MobileNav

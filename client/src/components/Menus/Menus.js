import React from 'react'
import "./Menus.css";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import { AiFillHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { FaUserGraduate } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { FaProjectDiagram } from "react-icons/fa";
import { FcPortraitMode } from "react-icons/fc";
import { BiSolidContact } from "react-icons/bi";
import { Link } from 'react-scroll';

const Menus = ({toggle}) => {
  return (
    <>
    {toggle ? (
    <>
    <Zoom>
    <div className= "navbar-profile-pic">
        <img src = "mypic.jpg" alt= "profile-pic"/>
    </div>
    </Zoom>
    <Fade left>
        <div className ="nav-items">
            <div className ="nav-item">
                <div className= "nav-link">
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                    <AiFillHome />
                    Home</Link>
                </div>
                <div className= "nav-link">
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                    <FcAbout />
                    About
                    </Link>
                </div>
                <div className= "nav-link">
                    <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
                    <FaUserGraduate />
                    Education
                    </Link>
                </div>
                <div className= "nav-link">
                    <Link to="techskill" spy={true} smooth={true} offset={-100} duration={100}>
                    <GiSkills />
                    Technical skills
                    </Link>
                </div>
                <div className= "nav-link">
                    <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
                    <FaProjectDiagram />
                    Projects
                    </Link>
                </div>
                <div className= "nav-link">
                    <Link to="exp" spy={true} smooth={true} offset={-100} duration={100}>
                    <FcPortraitMode />
                    Experience
                    </Link>
                </div>
                <div className= "nav-link">
                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                    <BiSolidContact />
                    Contact
                    </Link>
                </div>
            </div>
        </div>
        </Fade>
        </>
    ) : (
        <>
        <div className ="nav-items">
            <div className ="nav-item">
                <div className= "nav-link">
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                    <AiFillHome />
                    </Link>
                </div>
                <div className= "nav-link">
                <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                    <FcAbout />
                    </Link>
                </div>
                <div className= "nav-link">
                <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
                    <FaUserGraduate />
                    </Link>
                    
                </div>
                <div className= "nav-link">
                <Link to="techskill" spy={true} smooth={true} offset={-100} duration={100}>
                    <GiSkills />
                    
                    </Link>
                </div>
                <div className= "nav-link">
                <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
                    <FaProjectDiagram />
                
                    </Link>
                    
                </div>
                <div className= "nav-link">
                <Link to="exp" spy={true} smooth={true} offset={-100} duration={100}>
                    <FcPortraitMode />
                   
                    </Link>
                    
                </div>
                <div className= "nav-link">
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                    <BiSolidContact />
                    
                    </Link>
                    
                </div>
            </div>
        </div>
        </>
    )}
    </>
  )
}

export default Menus

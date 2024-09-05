import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Typewriter from 'typewriter-effect';
import'./Home.css';
import Resume from '../../assets/docs/KrishanuSantra_Resume.pdf';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";
import Fade from 'react-reveal/Fade';

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  }
  return (
    <>
    <div className='container-fluid home-container' id='home'>
     
      <div className='theme-btn' onClick={handleTheme}>
        {theme === 'light' ? (<BsFillMoonStarsFill size={20}/>) : (<IoMdSunny size={25}/>)}
      </div>
      <div className='container home-content'>
        <Fade right>
        <h2>Hi 👋 I'm a</h2>
        <h1>
        <Typewriter
  options={{
    strings: ['Full Stack Developer', 
       'MERN Stack Developer' , 
       'React Developer' , 
       'Web Developer'],
    autoStart: true,
    loop: true,
  }}
/>
        </h1>
        </Fade>
        <Fade bottom> 
        <div className="home-buttons">
          <a className="btn btn-hire" 
          href='https://api.whatsapp.com/send?phone=9083108496'
          rel="noreferrer"
          target='_blank'
          >Hire Me</a>
          <a className="btn btn-cv" href={Resume} download="">My Resume</a>
        </div>
        </Fade>
      </div>
    </div>
    </>
  );
};

export default Home;
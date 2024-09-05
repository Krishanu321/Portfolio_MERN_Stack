import React from 'react'
import './About.css'
import Jump from 'react-reveal/Jump';

const About = () => {
  return (
    <>
    <Jump>
    <div className='about' id='about'>
        <div className='row'>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                <img src="about.jpg" alt="about_pic"/>
            </div>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
                <h1>About Me</h1>
                <p>Hello! I'm Krishanu Santra, a final-year Computer Science and Engineering student at Kalyani Government Engineering College. As a dedicated software developer, I have extensive hands-on experience in full-stack development, particularly with the MERN stack (MongoDB, Express.js, React.js, Node.js). I am proficient in programming languages such as C++, Java, Python, HTML, CSS, and JavaScript. I am passionate about building web applications and solving complex problems, continually enhancing my coding skills to stay updated with the latest technologies. Eager to contribute to innovative tech solutions, I am committed to growing as a developer and making a meaningful impact in the tech industry.
                  
                </p>
            </div>
        </div>
    </div>
    </Jump>
    </>
  )
}

export default About

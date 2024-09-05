import React from 'react';
import { FaReact } from "react-icons/fa6";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./WorkExp.css";

const WorkExp = () => {
  return (
    <>
      <div className='work' id='exp'>
        <div className='container work-exp'>
        <h2 className="col-12 mt-0 mb-1 text-center text-uppercase">
        Work Experience</h2>
      <hr/>
      <VerticalTimeline lineColor='#0d0327'>
      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#0d0327' }}
    contentArrowStyle={{ borderRight: '7px solid white' }}
    date="1st August 2024 - present"
    iconStyle={{ background: '#042c5e', color: '#fff' }}
    icon={<FaReact />}
  >
    <h3 className="vertical-timeline-element-title">Web Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Techoctanet Services Pvt Ltd</h4>
    <p>
    2-month internship program with live training and hands on experience in Web Development.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#0d0327' }}
    contentArrowStyle={{ borderRight: '7px solid white' }}
    date="14 Jun, 2023 - 18 Sept 2023"
    iconStyle={{ background: '#042c5e', color: '#fff' }}
    icon={<FaReact />}
  >
    <h3 className="vertical-timeline-element-title">MERN Stack Development</h3>
    <h4 className="vertical-timeline-element-subtitle">Euphoria Genx | Kolkata</h4>
    <p>
    Completed industrial training at Ephoria Gnex, specializing in MERN stack development. Gained hands-on experience
in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js.
    </p>
  </VerticalTimelineElement>
      </VerticalTimeline>
        </div>
      </div>
    </>
  )
}

export default WorkExp

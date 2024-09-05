import React from 'react';
import { IoSchoolSharp } from "react-icons/io5";
import { LuSchool2 } from "react-icons/lu";
import { IoSchoolOutline } from "react-icons/io5";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css';

const Education = () => {
  return (
    <>
      <div className='conatainer education' id='education'>
      <h2 className="col-12 mt-1 mb-1 text-center text-uppercase">
        Education Details</h2>
      <hr/>
      <VerticalTimeline>
      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2022 - 2025"
    iconStyle={{ background: '#03256e', color: '#fff' }}
    icon={<IoSchoolSharp />}
  >
    <h3 className="vertical-timeline-element-title">B.Tech </h3>
    <h4 className="vertical-timeline-element-subtitle">Kalyani Government Engineering College, Nadia</h4>
    <h5 className="vertical-timeline-element-line">Computer Science and Engineering</h5>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2020 - 2022"
    iconStyle={{ background: '#03256e', color: '#fff' }}
    icon={<IoSchoolOutline />}
  >
    <h3 className="vertical-timeline-element-title">Diploma</h3>
    <h4 className="vertical-timeline-element-subtitle">Raja Ranjit Kishore Government Polytechnic, Jhargram</h4>
    <h5 className="vertical-timeline-element-line">Computer Science and Technology</h5>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2018 - 2020"
    iconStyle={{ background: '#03256e', color: '#fff' }}
    icon={<LuSchool2/>}
  >
    <h3 className="vertical-timeline-element-title">Higher Secondary</h3>
    <h4 className="vertical-timeline-element-subtitle">Shyampur high school, Howrah</h4>
  </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
    </>
  )
}

export default Education

import React from 'react'
import './Techskill.css'
import { TechskillList } from '../../utils/TechskillList'
import RubberBand from 'react-reveal/RubberBand';
import Fade from 'react-reveal/Fade';

const Techskill = () => {
  return (
    <>
      <div className="container techskill" id='techskill'>
        <RubberBand>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Technical skills</h2>
        <hr/>
        <p className='pb-3 text-center'> 👉including programming Languages, frameworks, databases, front-end, back-end tools, and APIs.
        </p>
        </RubberBand>
      <div className='row'>
        {TechskillList.map((tech) =>(
        <Fade left>
            <div key={tech._id} className='col-md-3'>
                <div className='card m-2'>
                    <div className='card-content'>
                        <div className='card-body'>
                            <div className='media d-flex justify-center'>
                                <div className='alig-self-center'>
                                <tech.icon className='tech-icon'/>
                                </div>
                                <div className='media-body'>
                                    <h5>{tech.name}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Fade>
        ))}
      </div>
      </div>
    </>
  )
}

export default Techskill

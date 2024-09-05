import React from 'react'
import './projects.css';
import RubberBand from 'react-reveal/RubberBand';

const Projects = () => {
  return (
    <>
      <div className='continer projects' id='projects'>
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">RECENT PROJECTS</h2>
        <hr/>
        <p className='pb-3 text-center'> 
            👉here are my top recent projects with live links or source code
        </p>
        {/*card design */}
        <div className='row' id='ads'>
          <RubberBand>
            <div className='col-md-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>Full Stack</span>
                        <img src='ecommerce.jpg' alt='Project 1' />
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                      <span className='card-detail-badge'>HTML</span>
                      <span className='card-detail-badge'>CSS</span>
                      <span className='card-detail-badge'>Java Script</span>
                    </div>
                    <div className='card-body text-center'>
                      <div className='ad-title m-auto'>
                        <h5 className='text-uppercase'>Krish Shoppy</h5>
                      </div>
                      <a className='ad-btn' href='https://krish-shoppy-ecommerce.netlify.app/'>View</a>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>MERN Stack</span>
                        <img src='doc.png' alt='Project 2' />
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                      <span className='card-detail-badge'>MongoDB</span>
                      <span className='card-detail-badge'>ReactJs</span>
                      <span className='card-detail-badge'>NodeJs</span>
                    </div>
                    <div className='card-body text-center'>
                      <div className='ad-title m-auto'>
                        <h5 className='text-uppercase'>Doctor Appoinment system </h5>
                      </div>
                      <a className='ad-btn' href='https://github.com/Krishanu321/Doc-Appoinment-system'>View</a>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>Frontend</span>
                        <img src='chatGPT.png' alt='Project 3' />
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                      <span className='card-detail-badge'>React</span>
                      <span className='card-detail-badge'>API</span>
                    </div>
                    <div className='card-body text-center'>
                      <div className='ad-title m-auto'>
                        <h5 className='text-uppercase'>Open AI Chat GPT Clone</h5>
                      </div>
                      <a className='ad-btn' href='https://github.com/Krishanu321/ChatGPT_Clone'>View</a>
                    </div>
                </div>
            </div>
            </RubberBand>
        </div>
      </div>
    </>
  )
}

export default Projects

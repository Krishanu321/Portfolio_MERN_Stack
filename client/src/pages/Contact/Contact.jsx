/*import React from 'react';
import './Contact.css';
import LightSpeed from 'react-reveal/LightSpeed';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";


const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className='card card0 border-0'>
        <div className='row'>
          <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
            <div className='card1'>
              <div className='row border-line'>
                <LightSpeed>
                <img src='contact.avif' alt='contact' 
                className='image' />
                </LightSpeed>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6'>
              <div className='card2 d-flex card border-0 px-4 py-5'>
              <div className='row'>
                <div className='row'>
                  <h6>Contact With 
                    <FaLinkedin color='blue' size={30} className='ms-2'/>
                    <FaGithub color='black' size={30} className='ms-2'/>
                    <SiFacebook color='blue' size={30} className='ms-2'/>
                    <FaSquareInstagram color='deeppink' size={30} className='ms-2'/>
                  </h6>
                  </div>
                <div className='row px-3 mb-4'>
                  <div className='line' />
                  <small className='or text-center'>OR</small>
                  <div className='line' />
                </div>
                <div className='row px-3'>
                  <input 
                    type='text' 
                    name='name' 
                    placeholder='Enter Your Name' 
                    className='mb-3' 
                  />
                </div>
                <div className='row px-3'>
                  <input 
                    type='email' 
                    name='email' 
                    placeholder='Enter Your Email Address' 
                    className='mb-3' 
                  />
                </div>
                <div className='row px-3'>
                  <textarea 
                    name='msg' 
                    placeholder='Write your message' 
                    className='mb-3' 
                  />
                </div>
                <div className='row px-3'>
                  <button className ="button" type='submit'>
                    SEND MESSAGE</button>
                </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;*/

import emailjs from '@emailjs/browser';
import React from 'react';
import './Contact.css';
import LightSpeed from 'react-reveal/LightSpeed';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import  { useRef, useState } from 'react';

const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a6qy4z8', 'template_bksnw1m', form.current, 'NNBStBUR689BZheQd')
      .then(() => {
        console.log('SUCCESS!');
        setMessageStatus('success');
        form.current.reset();
      }, (error) => {
        console.log('FAILED...', error.text);
        setMessageStatus('error');
      });
  };

  return (
    <div className='contact' id='contact'>
      <div className='card card0 border-0'>
        <div className='row'>
          <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
            <div className='card1'>
              <div className='row border-line'>
                <LightSpeed>
                  <img src='contact.avif' alt='contact' className='image' />
                </LightSpeed>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6'>
            <div className='card2 d-flex card border-0 px-4 py-5'>
              <div className='row'>
                <div className='row'>
                  <h6>Contact With 
                  <a href="https://www.linkedin.com/in/krishanu-santra-l003/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin color='blue' size={30} className='ms-2'/>
                    </a>
                    <a href="https://github.com/Krishanu321" target="_blank" rel="noopener noreferrer">
                      <FaGithub color='black' size={30} className='ms-2'/>
                    </a>
                    <a href="https://www.facebook.com/krishanu.santra.0311" target="_blank" rel="noopener noreferrer">
                      <SiFacebook color='blue' size={30} className='ms-2'/>
                    </a>
                    <a href="https://www.instagram.com/krishanu_1103/?hl=en" target="_blank" rel="noopener noreferrer">
                      <FaSquareInstagram color='deeppink' size={30} className='ms-2'/>
                    </a>
                  </h6>
                </div>
                <div className='row px-3 mb-4'>
                  <div className='line' />
                  <small className='or text-center'>OR</small>
                  <div className='line' />
                </div>
                <form ref={form} onSubmit={sendEmail}>
                  <div className='row px-3'>
                    <input 
                      type='text' 
                      name='user_name' 
                      placeholder='Enter Your Name' 
                      className='mb-3' 
                      required
                    />
                  </div>
                  <div className='row px-3'>
                    <input 
                      type='email' 
                      name='user_email' 
                      placeholder='Enter Your Email Address' 
                      className='mb-3' 
                      required
                    />
                  </div>
                  <div className='row px-3'>
                    <textarea 
                      name='message' 
                      placeholder='Write your message' 
                      className='mb-3' 
                      required
                    />
                  </div>
                  <div className='row px-3'>
                    <button className="button" type='submit'>
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
                {messageStatus && (
                  <div className={`message ${messageStatus === 'success' ? 'success-message' : 'error-message'}`}>
                    <p>{messageStatus === 'success' ? 'Message sent successfully!' : 'Failed to send message.'}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

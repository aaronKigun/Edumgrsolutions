import React from 'react'
import './Footer.css'
import {Facebook, Twitter, Whatsapp, Edumgr} from '../assets/index'



const Footer = () => {
  return (
    <div className='footer'>
      <div className='upper'>
        <div>
        <img src={Edumgr} alt='' width={140}/>
          <h4>Edumgr Solutions</h4>
          </div>
        <div>
          <h4>Links</h4>
          <ul>
            <li className='f1'><a href='/'>Home</a></li>
            <li className='f1'><a href='/feature'>Features</a></li>
            <li className='f1'><a href='/pricing'>Pricing</a></li>
            <li className='f1'><a href='/contact'>Contact Us</a></li>
          </ul>
        </div>
        <div>
        <h4> Our Services</h4>
          <ul>
            <li className='f2'>Academic Reports</li>
            <li className='f2'>Academic Performance Training</li>
            <li className='f2'>Classroom Management</li>
            <li className='f2'>Tuition Management</li>
          </ul>
        </div>
        <div>
          <h4>Our Impact</h4>
          <ul>
            <li className='f3'>Secure</li>
            <li className='f3'>Reliable</li>
            <li className='f3'>Faster</li>
            <li className='f3'>50+ Schools Trained</li>
          </ul>
        </div>
        <div>
        <h4>Socials</h4>
        <div className='f114'>
        <div className='f14'>
              <a href='https://facebook.com'>
              <img src={Facebook} width={25}/>&nbsp;
              <p className='f4'>Edumgr Solutions</p>
              </a>
            </div>
            <div className='f14'>
              <a href='https://twitter.com'>
              <img src={Twitter} width={25}/>&nbsp;
              <p className='f4'>@Edumgr</p>
              </a>
            </div>
            <div className='f14'>
              <a href='https://whatsapp.com'>
              <img src={Whatsapp} width={25}/>&nbsp;
              <p className='f4'>+2348036363869</p>
              </a>
            </div>
        </div>
        </div>
      </div>
      <div className='lower'>
        <div className='f115'>
          <p>&copy;Copyright</p>
          <p>2021-2023</p>
          <p>Edumgr Solutions-Africa</p>
          <p>All Rights Reserved</p>
        </div>
        <p className='tech'>Built&nbsp;&nbsp;By&nbsp;&nbsp;<span>HASO TECHNOLOGIE</span></p>
      </div>
    </div>
  )
}

export default Footer
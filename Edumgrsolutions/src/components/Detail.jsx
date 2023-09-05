import React from 'react'
import './Detail.css'
// import { fadeIn,textVariant } from './utils/motion'
import Slider from './Slider/swiper'
import { FAQ } from '../assets'
import {GoDotFill} from 'react-icons/go'
const Detail = () => {
    React
  return (
    <>
    <div className='detail'>
        <h1>Our Impact</h1>
        <div className='impact'>
          <div className='mp'>
          <GoDotFill className='go'/>
          <p className='mp1'>50+ Schools Trained</p>
          </div>
          <div className='mp'>
          <GoDotFill className='go'/>
          <p className='mp1'>200+ Staffs Trained</p>
          </div>
          <div className='mp'>
          <GoDotFill className='go'/>
          <p className='mp1'>Secure</p>
          </div>
          <div className='mp'>
          <GoDotFill className='go'/>
          <p className='mp1'>Easier</p>
          </div>
          <div className='mp'>
          <GoDotFill className='go'/>
          <p className='mp1'>Faster</p>
          </div>
          <div className='mp'>
          <GoDotFill className='go'/> 
          <p className='mp1'>Reliable</p>
          </div>
        </div>
    </div>
    <div className='slider'>
        <h1>Our Schools</h1>
        <div className='schools'>
          {/* <Slidderr/> */}
          <Slider/>
        </div>
    </div>
    <div className='Faqs'>
        <h1>Frequently Asked Questions</h1>
        <div className='QI'>
        <div className='question'>
          <p>What is Edumgr Solutions ?</p><br></br><br></br>
          <hr style={{border: '1px solid black'}} className='black-hr'></hr>
          <p>How many Students can my School enroll in the System ?</p><br></br><br></br>
          <hr style={{border: '1px solid black'}} className='black-hr'></hr>
          <p>Are there Additional Charges ?</p><br></br><br></br>
          <hr style={{border: '1px solid black'}} className='black-hr'></hr>
        </div>
        <div className='image'>
          <img src={FAQ} alt=''/>
        </div>
        </div>
    </div>
    </>
  )
}

export default Detail
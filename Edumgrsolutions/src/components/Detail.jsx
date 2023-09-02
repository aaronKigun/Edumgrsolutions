import React from 'react'
import './Detail.css'
// import { fadeIn,textVariant } from './utils/motion'
import Slider from './Slider/swiper'
import { FAQ } from '../assets'
const Detail = () => {
    React
  return (
    <>
    <div className='detail'>
        <h1>Our Impact</h1>
        <div className='impact'>
              <li>50+ Schools Trained</li>
              <li>200+ Staffs Trained</li>
              <li>Secure</li>
              <li>Easier</li>
              <li>Faster</li>
              <li>Reliable</li>
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
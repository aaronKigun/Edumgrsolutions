import React from 'react'
import './Detail.css'
// import { fadeIn,textVariant } from './utils/motion'
// import Slider from './Slider/Sliderr'
// import Slidderr from './Slider/Slidderr'
import Slider from './Slider/swiper'
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
        <div classnmae>

        </div>
    </div>
    </>
  )
}

export default Detail
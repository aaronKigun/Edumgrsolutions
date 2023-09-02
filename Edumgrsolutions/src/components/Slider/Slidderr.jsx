import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import './style.css'
import { AES,BMMS,Fatima,SJCVOM } from '../../assets';

const Slidderr = () => {
  return (
    <div>
        <Carousel infiniteLoop autoPlay>
            <div className='image'>
                <img src={AES} alt='mobile'/>
                <p>AT-Ta&apos;awuun Educational Services, Minna</p>
            </div>
            <div className='image'>
                <img src={BMMS} alt='mobile'/>
                <p>Blooming Minds Model School, Minna</p>
            </div>
            <div className='image'>
                <img src={Fatima} alt='mobile'/>
                <p>Our Lady Of Fatima Girl&apos;s Sec Sch Shendam</p>
            </div>
            <div className='image'>
                <img src={SJCVOM} alt='mobile'/>
                <p>St. Joseph College, Vom</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Slidderr
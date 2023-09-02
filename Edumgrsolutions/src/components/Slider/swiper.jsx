import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { AES,BMMS,Fatima,SJCVOM } from '../../assets';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.css';


import { EffectCoverflow, Pagination,Navigation,Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={{
            delay:2500,
            disableOnInteraction:false,
        }}
        coverflowEffect={{
            rotate: 50,          
            stretch: 0,          
            depth: 100,          
            modifier: 1,         
            slideShadows: true,
        }}
        navigation={true}
        pagination={{
            clickable:true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={AES} />
          <p>AT-Ta&apos;awuun Educational Services,Minna</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={BMMS} />
          <p>Blooming Minds Model School, Minna</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={SJCVOM} />
          <p>St. Joseph College, Vom</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Fatima} />
          <p>Our Lady Of Fatima Girls&apos; Sec Sch</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

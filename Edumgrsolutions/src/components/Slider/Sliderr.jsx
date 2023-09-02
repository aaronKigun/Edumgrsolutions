import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Sdata from '../../Sdata'
import './Sliderr.css'

const Sliderr = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
      }
      return (
        <>
          <Slider {...settings}>
            {Sdata.map((value, index) => {
              return (
                <>
                  <div className='name' key={index}>
                    <div className='img'>
                      <img src={value.cover} alt='' width='80%' />
                    </div>
                    <h4>{value.name}</h4>
                  </div>
                </>
              )
            })}
          </Slider>
        </>
      )
    }

export default Sliderr
import React from 'react'
import Image from 'next/image'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const Carousel = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  }

  return (
    <>
      <section className='section max-md:hidden xl:max-w-[1280px] mx-auto'>
        <div className='overflow-x-hidden'>
          <Slider {...settings} className=''>
            <div className="slides">unforgettable flavors</div>
            <div className="slides">fresh</div>
            <div className='slides'>taste of innovation</div>
            <div className='slides'>impeccable service</div>
            <div className='slides'>inspiration</div>
            <div className='slides'>history of taste</div>
            <div className='slides'>professionalism</div>
            <div className='slides'>attention</div>
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Carousel
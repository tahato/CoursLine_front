import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './SwiperHome.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import CardCourse from '../../Components/CardCourse/CardCourse';

export default function SwiperHome({courses}) {
   
  return (
    <>
    
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        
        {courses?.map((course)=>( 
            <SwiperSlide key={course._id} >
          <CardCourse course={course}></CardCourse>
          </SwiperSlide>
        ))}
       
      </Swiper>
    </>
  );
}

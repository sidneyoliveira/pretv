import React, { useRef, useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './app.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
    <div className='container'>
      
      <div className="col1">
        <div className="images logo">
          <img src="src\assets\logo.png" alt="logo" />
        </div>
        <div className="images redes">
          <img src="src\assets\redes.png" alt="redes" />
        </div>
        <div className="footer-img">
            <img src="src\assets\foto.png" alt="redes" />
        </div>
      </div>
      
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="image-container">
            <img src="./img/a1.jpg" alt="" class='item' />
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div class="image-container">
            <img src="./img/a2.jpg" alt="" class='item' />
          </div>
        </SwiperSlide>

      </Swiper>
      </div>
    </>
  );
}

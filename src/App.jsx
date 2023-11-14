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
          <img src="./images/logo.png" alt="logo" />
        </div>
        <div className="images redes">
          <img src="./images/redes.png" alt="redes" />
        </div>
        <div className="footer-img">
            <img src="./images/foto.png" alt="redes" />
        </div>
      </div>

      <div className="col2">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="Slide-img"
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
    </div>
    </>
  );
}

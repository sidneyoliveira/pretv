import React, { useRef, useState } from 'react';
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
          <div class="image-container1">
            <img src="./img/a1.jpg" alt="" class='background1' />
            <img src="./img/a1.jpg" alt="" class='item1' />
          </div>
        </SwiperSlide>

        <SwiperSlide >
          <div class="image-container2">
            <img src="./img/a2.jpg" alt="" class='background2' />
            <img src="./img/a2.jpg" alt="" class='item2' />
          </div>
        </SwiperSlide>

        <SwiperSlide >
          <div class="image-container3">
            <img src="./img/a3.jpg" alt="" class='background3' />
            <img src="./img/a3.jpg" alt="" class='item3' />
          </div>
        </SwiperSlide>

        <SwiperSlide >
          <div class="image-container4">
            <img src="./img/a4.jpg" alt="" class='background4' />
            <img src="./img/a4.jpg" alt="" class='item4' />
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}

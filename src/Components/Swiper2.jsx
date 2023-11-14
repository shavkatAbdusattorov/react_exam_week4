import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../src/Swiper2.css"

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Swiper2() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="src/assets/photo_2023-10-08_20-38-27.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/photo_2023-10-08_20-38-32.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/photo_2023-10-08_20-38-37.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/photo_2023-10-08_20-38-42.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/photo_2023-10-08_20-38-47.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/photo_2023-10-08_20-38-52.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/photo_2023-10-08_20-38-57.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/photo_2023-10-08_20-39-03.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/photo_2023-10-08_20-39-08.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

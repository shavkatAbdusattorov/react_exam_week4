import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../src/Swiper3.css"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Swiper3() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src="src/assets/photo_2023-10-08_20-38-57.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/photo_2023-10-08_20-39-03.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/photo_2023-10-08_20-39-08.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/photo_2023-10-08_21-01-21.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/photo_2023-10-08_21-01-25.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/photo_2023-10-08_21-01-31.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/photo_2023-10-08_21-01-37.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/photo_2023-10-08_21-01-43.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/photo_2023-10-08_21-01-49.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/photo_2023-10-08_21-01-56.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}

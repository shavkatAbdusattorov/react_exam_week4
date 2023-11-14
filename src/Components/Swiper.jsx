import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../src/Swiper.css"

// import required modules
import { Pagination } from "swiper/modules";

export default function Swiperr() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="src/assets/photo_2023-10-08_18-09-07.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/photo_2023-10-08_18-09-31.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/photo_2023-10-08_18-09-35.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/photo_2023-10-08_18-09-43.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}

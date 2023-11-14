import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../src/Swiper4.css"

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Swiper4() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

//   const prepend2 = () => {
//     swiperRef.prependSlide([
//       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
//       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
//     ]);
//   };

//   const prepend = () => {
//     swiperRef.prependSlide(
//       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
//     );
//   };

//   const append = () => {
//     swiperRef.appendSlide(
//       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
//     );
//   };

//   const append2 = () => {
//     swiperRef.appendSlide([
//       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
//       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
//     ]);
//   };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="src/assets/photo_2023-10-08_21-25-56.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/photo_2023-10-08_21-26-01.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/photo_2023-10-08_21-26-06.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/photo_2023-10-08_21-26-12.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/photo_2023-10-08_21-26-16.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/photo_2023-10-08_21-26-22.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/photo_2023-10-08_21-27-26.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/photo_2023-10-08_21-27-30.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="src/assets/photo_2023-10-08_21-27-34.jpg" alt="" /></SwiperSlide>
      </Swiper>

      <p className="append-buttons">
        {/* <button onClick={() => prepend2()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => prepend()} className="prepend-slide">
          Prepend Slide
        </button>
        <button onClick={() => append()} className="append-slide">
          Append Slide
        </button>
        <button onClick={() => append2()} className="append-2-slides">
          Append 2 Slides
        </button> */}
      </p>
    </>
  );
}

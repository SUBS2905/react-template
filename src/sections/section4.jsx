import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel from "../components/carousel";

import "swiper/css";

function Section4() {
  return (
    <section className="black-container" id="section-4">
      <div className="carousel">
        <h1>Carousel</h1>
        <Swiper
          spaceBetween={5}
          slidesPerView={1}
          width={350}
          breakpoints={{
            900: { slidesPerView: 2, width: 900 },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide id="carousel1">
            <Carousel colour="Orange" />
          </SwiperSlide>
          <SwiperSlide id="carousel2">
            <Carousel colour="Blue" />
          </SwiperSlide>
          <SwiperSlide id="carousel3">
            <Carousel colour="Red" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Section4;

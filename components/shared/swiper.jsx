"use client";

import { heroImg } from "@/api/data";
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const HeroSwiper = () => {
  return (
    <section className="mb-[64px]">
      <div className="max-w-[1336px] w-full sm:flex-wrap ml-auto mr-auto pl-[20px] pr-[20px]">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {heroImg?.map((item) => (
            <SwiperSlide>
              <Image
                src={item?.img}
                width={1290}
                height={341}
                alt="hero swiper image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSwiper;

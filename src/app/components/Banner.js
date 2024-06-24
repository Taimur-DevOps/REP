"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import img1 from "@/assets/bnr1.jpg";
import img2 from "@/assets/bnr2.jpg";
import img3 from "@/assets/bnr3.jpg";
import img4 from "@/assets/bnr4.jpg";
import Image from "next/image";

const banner = [
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img4,
  },
];

const Banner = () => {
  const breakpoints = {
    1024: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    767: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  };
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={breakpoints}
        navigation
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {banner.map((item, index) => {
          const { img } = item;
          return (
            // eslint-disable-next-line react/jsx-key
            <SwiperSlide key={index}>
              <div className="h-[600px] flex justify-center items-center">
                <Image
                  alt="hero section slider"
                  src={img}
                  className="w-full lg:h-auto object-cover h-[600px]"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Banner;

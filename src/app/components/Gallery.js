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
import { SlPicture } from "react-icons/sl";

const gallery = [
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

const Gallery = () => {
  const breakpoints = {
    767: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  };
  return (
    <>
      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={breakpoints}
          navigation
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper mainBanner"
        >
          {gallery.map((item, index) => {
            const { img } = item;
            return (
              // eslint-disable-next-line react/jsx-key
              <SwiperSlide key={index}>
                <div className="lg:h-[600px] h-[380px] flex justify-center items-center relative ">
                  <Image
                    alt="hero section slider"
                    src={img}
                    className="w-full lg:h-auto object-cover h-[600px]"
                  />
                  <div className="gallery">
                    <SlPicture className="w-4 h-4" />{" "}
                    <span className="text-sm font-light">1/5</span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Gallery;

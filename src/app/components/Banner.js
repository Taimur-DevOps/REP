"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import img1 from "@/assets/bnr1.jpg";
import img2 from "@/assets/bnr2.jpg";
import img3 from "@/assets/bnr3.jpg";
import img4 from "@/assets/bnr4.jpg";
import Image from "next/image";
import { LuBedDouble } from "react-icons/lu";
import { PiShowerLight } from "react-icons/pi";
import { TfiRulerAlt2 } from "react-icons/tfi";
import Button from "./Button";

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
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={breakpoints}
        navigation
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 10500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {banner.map((item, index) => {
          const { img } = item;
          return (
            // eslint-disable-next-line react/jsx-key
            <SwiperSlide key={index}>
              <div className="h-[600px] flex justify-center items-center relative">
                <Image
                  alt="hero section slider"
                  src={img}
                  className="w-full lg:h-auto object-cover h-[600px]"
                />
                <div className="absolute lg:left-[12%] md:left-[12%] lg:w-[500px] lg:h-[170px] md:w-[375px] w-[300px] md:h-auto bg-gray-50 text-black py-6 px-[30px] rounded-[4px]">
                  <div className="flex lg:justify-between lg:items-baseline lg:flex-row md:flex-col lg:gap-0 md:gap-2 flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <span className="text-base font-semibold">
                        Luxury apartment bay view
                      </span>
                      <span className="text-xs font-light">
                        4599 N Lois Ave, Tampa, FL 33614, USA
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-base font-semibold">
                        {" "}
                        $97,000.00
                      </span>
                      <span>$6,350.00/sq ft</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-iconClr text-sm mt-3">
                    <div className="flex items-center gap-1">
                      <span>
                        <LuBedDouble className="w-[18px] h-[18px]" />
                      </span>
                      <span>4</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {" "}
                      <span>
                        <PiShowerLight className="w-[18px] h-[18px]" />
                      </span>
                      <span>2</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>
                        <TfiRulerAlt2 className="w-[18px] h-[18px]" />
                      </span>
                      <span>3410</span>
                    </div>
                  </div>
                  <p className="text-xs font-light uppercase mt-2">Apartment</p>
                  <div className="flex justify-end mr-[-30px] mb-[-24px] lg:mb-0">
                    <Button text="Details" variant="primary" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Banner;

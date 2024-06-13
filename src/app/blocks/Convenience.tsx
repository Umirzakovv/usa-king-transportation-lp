"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/swiper.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { convenience } from "@/app/data/convenience";
import SwiperCard from "../components/Main/SwiperCard";
import Title from "../components/reusable/Title";

const Convenience: React.FC = () => {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        (1 - progress).toString()
      );
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div id="for-drivers" className="py-20">
      
        <Title className="text-center">Conveniences for Drivers</Title>
        <p className="text-2xl text-main_blue block mx-auto my-0 w-[900px] py-10 text-center">
          At Usa King Transportation, we value our drivers as the backbone of
          our operations. Joining our team means gaining access to a range of
          benefits and services designed to support and empower you in your
          career:
        </p>
      <div className="h-[700px]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {convenience?.map((item) => {
            return (
              <SwiperSlide key={item?.id}>
                <SwiperCard item={item} />
              </SwiperSlide>
            );
          })}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Convenience;

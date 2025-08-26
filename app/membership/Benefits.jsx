"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { companyInfo } from "@/data/companyinfo";

export default function Benefits() {
  return (
    <section id="snippet-1" className="wrapper !bg-[#ffffff] ">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <p className="text-center text-xl !mb-8">Benefits of Joining</p>
        <div className="swiper-container clients !mb-36 relative z-10">
          <Swiper
            spaceBetween={30}
            loop
            modules={[Autoplay]}
            autoplay={{
              delay: 1,
            }}
            breakpoints={{
              0: { slidesPerView: 3 },
              575: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
              1400: {
                slidesPerView: 7,
              },
            }}
            speed={5000}
            className="swiper pointer-events-none ticker"
          >
            {companyInfo.benefits.map((elem, index) => (
              <SwiperSlide className="swiper-slide px-5" key={index}>
                <span className="block font-semibold text-center">{elem}</span>
              </SwiperSlide>
            ))}

            {/*/.swiper-wrapper */}
          </Swiper>
          {/* /.swiper */}
        </div>
        {/* /.swiper-container */}
      </div>
      {/* /.container */}

      {/* /.container */}
    </section>
  );
}

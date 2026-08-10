"use client";

import useWow from "@/hooks/use-wow";
import CustomButton from "../common/custom-button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { heroSlides } from "@/data";

const Hero = () => {
  useWow();

  return (
    <section className="relative md:h-screen h-[600px] w-full overflow-hidden" id="hero">
      <Swiper
        slidesPerView={1}
        effect={"fade"}
        loop={true}
        speed={1000}
        autoplay={false}
        pagination={{
          clickable: true,
          renderBullet: function (_index, className) {
            return `<div class="${className} my-custom-bullet"></div>`;
          }
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="md:h-full h-[600px] w-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative flex md:h-full min-h-[600px] md:min-h-screen w-full items-center justify-center bg-cover bg-center text-center md:text-left"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 mx-auto h-full w-full max-w-7xl md:p-0">
                <div className="flex h-full w-full flex-col items-center justify-center p-8 md:flex-row md:items-end md:justify-between md:p-[5%]">
                  <div className="flex w-full flex-col items-center text-center md:order-1 md:w-auto md:items-start md:text-left">
                    <h2 className="max-w-4xl text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl xl:text-7xl font-heading">
                      {slide.title}
                    </h2>
                    <p
                      className="wow fadeInDown text-background/90 mt-4 max-w-2xl text-base md:text-lg lg:text-xl"
                      dangerouslySetInnerHTML={{ __html: slide.subtitle }}
                    ></p>
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                      <CustomButton
                        label="EXPLORE MORE"
                        variant="default"
                        className="wow fadeInLeft"
                        onClick={() => (window.location.href = "#about")}
                      />
                      <CustomButton
                        label="OUR CAUSES"
                        variant="secondary"
                        className="wow fadeInRight"
                        onClick={() => (window.location.href = "/causes")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;

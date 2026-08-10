"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import React from "react";

interface CustomSwiperProps<T> {
  data: T[];
  renderSlide: (item: T, index: number) => React.ReactNode;
  breakpoints?: {
    [key: number]: {
      slidesPerView: number;
    };
  };
  navigation?: {
    prevEl: string;
    nextEl: string;
  };
  navigationColor?: string;
  arrowsPosition?: {
    top: string;
    left: string;
    right: string;
  };
}

export default function CustomSwiper<T>({
  data,
  renderSlide,
  breakpoints = {
    750: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  },
  navigation
}: CustomSwiperProps<T>) {
  return (
    <div className="relative">
      <div className="container max-w-[90rem] md:px-6 lg:mx-auto">
        <Swiper
          modules={[Navigation]}
          navigation={navigation}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={breakpoints}
          loop
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx}>{renderSlide(item, idx)}</SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation arrows */}
      {navigation && (
        <div className="mt-8 flex justify-center gap-4">
          <ArrowLeftIcon
            className={
              "swiper-button-prev hover:!text-accent !relative !top-auto !left-auto !m-0 !h-12 !w-12 cursor-pointer rounded-full stroke-1 !text-black transition-colors duration-300 md:!h-16 md:!w-16"
            }
          />

          <ArrowRightIcon
            className={
              "swiper-button-next hover:!text-accent !relative !top-auto !left-auto !m-0 !h-12 !w-12 cursor-pointer rounded-full stroke-1 !text-black transition-colors duration-300 md:!h-16 md:!w-16"
            }
          />
        </div>
      )}
    </div>
  );
}

"use client";

import { useRef } from "react";
import LightGallery from "lightgallery/react";
import type { LightGallery as LightGalleryType } from "lightgallery/lightgallery";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import type { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { PlusIcon } from "lucide-react";
import { galleryImages } from "@/data";
import Image from "next/image";

export default function ImageGallery() {
  const lightGalleryRef = useRef<LightGalleryType>(null);
  const swiperRef = useRef<SwiperClass>(null);

  const handleImageClick = (index: number) => {
    if (lightGalleryRef.current) {
      lightGalleryRef.current.openGallery(index);
    }
  };

  return (
    <section id="gallery" className="py-20">
      {/* Swiper for continuous auto-scroll */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        allowTouchMove={false}
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: true
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="px-6"
      >
        {galleryImages?.map((img, i) => (
          <SwiperSlide key={i} className="!h-auto">
            <div
              onClick={() => handleImageClick(i)}
              className="relative block cursor-pointer overflow-hidden rounded-xl shadow-md transition-transform duration-500 hover:scale-105"
            >
              <Image
                src={img.thumb}
                alt={`Gallery Image: ${img.alt}`}
                width={200}
                height={200}
                className="h-[180px] w-full object-cover md:h-[220px]"
              />

              {/* Overlay */}
              <div className="from-accent/60 via-accent/20 absolute inset-0 flex items-center justify-center bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100">
                <span className="flex items-center justify-center rounded-full border-2 border-white p-4">
                  <PlusIcon className="h-5 w-5 text-white" />
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hidden LightGallery for fullscreen/zoom */}
      <div className="hidden">
        <LightGallery
          onInit={(ref) => (lightGalleryRef.current = ref.instance)}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          dynamic={true}
          dynamicEl={galleryImages.map((img) => ({
            src: img.large,
            thumb: img.thumb,
            subHtml: img.subHtml
          }))}
        />
      </div>
    </section>
  );
}

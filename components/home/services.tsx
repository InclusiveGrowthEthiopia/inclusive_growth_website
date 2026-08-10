"use client";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import SectionTitle from "../common/section-title";
import CustomSwiper from "../common/custom-swiper";
import { services } from "@/data";
import { ComponentType } from "react";

interface Service {
  image: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-10 bg-gray-100 py-20">
      <div className="px-6 text-center">
        <div className="mb-10 md:mb-20">
          <SectionTitle title="Our Services" />
          <h2 className="wow fadeInDown mt-2 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl font-heading">
            How We Make a Difference
          </h2>
        </div>
        <CustomSwiper
          data={services}
          renderSlide={renderServiceSlide}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }}
          breakpoints={{
            950: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1500: { slidesPerView: 3 }
          }}
        />
      </div>
    </section>
  );
}

const renderServiceSlide = (service: Service) => (
  <div className="group relative flex h-[320px] w-full items-center justify-center md:h-[420px]">
    <div className="relative h-[320px] w-[320px] md:h-[420px] md:w-[420px]">
      <div
        className="relative h-full w-[320px] overflow-hidden md:w-[420px]"
        style={{
          WebkitMaskImage: "url('/assets/img/service_img_masking.svg')",
          WebkitMaskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskImage: "url('/assets/img/service_img_masking.svg')",
          maskSize: "100% 100%",
          maskRepeat: "no-repeat",
          maskPosition: "center"
        }}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 left-1/2 z-10 flex w-[320px] -translate-x-1/2 flex-col justify-start bg-black/50 p-10 md:pt-20 text-left text-white md:w-[420px]">
          <h3 className="mb-4 text-2xl md:text-4xl">{service.title}</h3>
          <p className="text-sm leading-relaxed text-gray-100 md:text-base">
            {service.description}
          </p>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 flex h-[80px] w-[80px] items-center justify-center md:h-[110px] md:w-[110px]">
        <service.icon className="text-accent h-12 w-12" />
      </div>
    </div>
  </div>
);

"use client";

import React from "react";
import Image from "next/image";
import { testimonialData } from "@/data";
import CustomSwiper from "../common/custom-swiper";
import SectionTitle from "../common/section-title";
import { StarIcon } from "lucide-react";

interface TestimonialType {
  authorImg: string;
  authorName: string;
  authorTitle: string;
  authorQuote: string;
  color: string;
}

const renderTestimonialSlide = (data: TestimonialType) => (
  <div
    className={`relative flex h-[400px] flex-col justify-between rounded-xl p-8 text-left text-white ${data.color}`}
  >
    <div className="mb-6 flex items-center">
      <Image
        width={65}
        height={65}
        src={data.authorImg}
        className="rounded-full object-cover"
        alt="user"
      />
      <div className="ml-4">
        <h6 className="mb-0 text-xl font-bold">{data.authorName}</h6>
        <small className="text-sm text-white/80">{data.authorTitle}</small>
      </div>
    </div>
    <blockquote className="text-lg leading-relaxed text-white/90">
      {data.authorQuote}
    </blockquote>
    <Rating />
  </div>
);

export default function Testimonial() {
  const testimonialBreakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 24
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  };

  return (
    <section id="testimonial" className="relative scroll-mt-10 py-20">
      <div className="px-6 text-center">
        <div className="mb-10 md:mb-20">
          <SectionTitle title="Testimonial" />
          <h2 className="wow fadeInDown mt-2 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
            What People Think About Us
          </h2>
        </div>
        <CustomSwiper
          data={testimonialData}
          renderSlide={renderTestimonialSlide}
          breakpoints={testimonialBreakpoints} // Pass the breakpoints
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }}
          navigationColor="!text-black" // Assuming black arrows for this section
        />
      </div>
    </section>
  );
}

const Rating = () => {
  return (
    <div className="mt-6 flex">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} className="h-4 fill-black text-black" />
      ))}
    </div>
  );
};

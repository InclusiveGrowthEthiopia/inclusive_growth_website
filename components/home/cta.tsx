"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "../common/animated-counter";
import CustomButton from "../common/custom-button";

export default function CtaOne() {
  return (
    <section className="relative overflow-hidden py-40 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse items-center gap-10 text-center">
          {/* Text Content */}
          <div className="relative z-10 mx-auto max-w-4xl space-y-12">
            <h3 className="font-heading mx-auto text-xl font-semibold text-gray-800 md:max-w-[70%] md:text-2xl">
              Be a catalyst for positive change by joining our community and
              making a difference through donations.
            </h3>

            <div className="flex flex-col items-center">
              <h2 className="mb-6 flex items-center text-[70px] leading-none font-bold text-gray-900 md:text-[120px] font-heading">
                <AnimatedCounter prefix="$" value={0} suffix="" />
              </h2>
              <p className="text-xl font-medium text-gray-800 md:text-2xl">
                Joining Our Community Now
              </p>
            </div>

            {/* Button */}
            <Link href="#contact">
              <CustomButton
                label={"Join As A Volunteer"}
                className="md:text-2xl"
              />
            </Link>
          </div>

          {/* Images Wrapper */}
          <div className="flex h-full w-full justify-center gap-5 md:gap-5">
            {/* Top Left */}
            <div className="top-[10%] left-[10%] hidden overflow-hidden rounded-tl-[60px] sm:block lg:absolute">
              <Image
                src="/assets/img/cta_img_1.jpg"
                alt="CTA Image 1"
                width={100}
                height={100}
                className="h-40 w-36 object-cover lg:h-48 lg:w-44"
              />
            </div>

            {/* Top Right */}
            <div className="top-[15%] right-[10%] hidden overflow-hidden rounded-tl-[60px] sm:block lg:absolute lg:rounded-tr-[60px]">
              <Image
                src="/assets/img/cta_img_2.jpg"
                alt="CTA Image 2"
                width={100}
                height={100}
                className="h-40 w-36 object-cover lg:h-38 lg:w-34"
              />
            </div>

            {/* Bottom Left */}
            <div className="bottom-[15%] left-[15%] hidden overflow-hidden rounded-tl-[60px] sm:block lg:absolute lg:rounded-bl-[60px]">
              <Image
                src="/assets/img/cta_img_3.jpg"
                alt="CTA Image 3"
                width={100}
                height={100}
                className="h-40 w-36 object-cover lg:h-38 lg:w-34"
              />
            </div>

            {/* Bottom Right */}
            <div className="right-[15%] bottom-[15%] hidden overflow-hidden rounded-tl-[60px] sm:block lg:absolute lg:rounded-br-[60px]">
              <Image
                src="/assets/img/cta_img_4.jpg"
                alt="CTA Image 4"
                width={100}
                height={100}
                className="h-40 w-36 object-cover lg:h-44 lg:w-44"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Orange blurred shape */}
      <div className="bg-secondary/20 absolute top-36 left-1/2 h-[284px] w-[284px] -translate-x-1/2 rounded-full blur-[100px]" />
    </section>
  );
}

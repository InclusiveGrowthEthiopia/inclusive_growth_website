"use client";

import PageHeader from "@/components/common/page-header";
import React from "react";
import useWow from "@/hooks/use-wow";
import Image from "next/image";

export default function OurStoryPage() {
  useWow();

  return (
    <div className="wow fadeInDown">
      <PageHeader
        title="Our Story"
        description="From our founding to our future, discover the milestones that define our commitment to inclusive growth."
        className="bg-[url(/assets/img/our-story-bg.jpg)]"
      />

      <section className="wow fadeInUp my-20 px-4 sm:px-[30px] lg:px-[50px]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20 text-center">
            <h2 className="wow fadeInDown text-3xl font-bold md:text-4xl lg:text-5xl font-heading">
              Our Journey to Inclusive Growth
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-gray-600">
              Inclusive Growth (IG) was born from a simple but powerful realization: talent is everywhere, but opportunity is not. In communities across Ethiopia, women, persons with disabilities, and youth continue to face systemic barriers. We saw not a lack of potential — but a lack of inclusive systems. That realization became our calling.
            </p>
          </div>

          {/* Timeline Content */}
          <div className="relative mt-24">
            {/* Vertical Line */}
            <div className="absolute left-1/2 -ml-0.5 hidden h-full w-1 bg-gray-200 md:block" />

            {/* Item 1: Founded */}
            <div className="relative mb-16 md:flex md:items-center md:justify-between">
              <div className="absolute top-1/2 left-1/2 -mt-2.5 hidden -translate-x-1/2 rounded-full bg-white p-2 md:block">
                <div className="bg-accent h-5 w-5 rounded-full" />
              </div>
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <span className="text-accent mb-2 block font-bold tracking-wider uppercase font-heading">July 2, 2025</span>
                <h3 className="mb-4 text-3xl font-extrabold text-gray-900">
                  The Foundation
                </h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  Our journey began with a bold vision: to dismantle structural barriers and build pathways where everyone can participate, contribute, and thrive. Guided by the principle “Nothing About Us, Without Us,” IG was established as a locally grounded organization.
                </p>
              </div>
              <div className="mt-8 md:mt-0 md:w-1/2 md:pl-12">
                <Image
                  src="/assets/img/our_story_img_1.jpg"
                  alt="IG Foundation"
                  width={600}
                  height={400}
                  className="w-full rounded-2xl shadow-md"
                />
              </div>
            </div>

            {/* Item 2: Expansion */}
            <div className="relative mb-16 md:flex md:flex-row-reverse md:items-center md:justify-between">
              <div className="absolute top-1/2 left-1/2 -mt-2.5 hidden -translate-x-1/2 rounded-full bg-white p-2 md:block">
                <div className="bg-accent h-5 w-5 rounded-full" />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <span className="text-accent mb-2 block font-bold tracking-wider uppercase font-heading">Act Local. Think Global.</span>
                <h3 className="mb-4 text-3xl font-extrabold text-gray-900">
                  Expansion of Our Reach
                </h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  While our energy is grounded locally, our vision is continental and global. IG connects grassroots action with national dialogue, regional collaboration, and international partnerships to advance inclusive, center-led solutions.
                </p>
              </div>
              <div className="mt-8 md:mt-0 md:w-1/2 md:pr-12">
                <Image
                  src="/assets/img/our_story_img_2.jpg"
                  alt="Expansion of Reach"
                  width={600}
                  height={400}
                  className="w-full rounded-2xl shadow-md"
                />
              </div>
            </div>

            {/* Item 3: Key Milestone */}
            <div className="relative mb-8 md:flex md:items-center md:justify-between">
              <div className="absolute top-1/2 left-1/2 -mt-2.5 hidden -translate-x-1/2 rounded-full bg-white p-2 md:block">
                <div className="bg-accent h-5 w-5 rounded-full" />
              </div>
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <span className="text-accent mb-2 block font-bold tracking-wider uppercase font-heading">The Future</span>
                <h3 className="mb-4 text-3xl font-extrabold text-gray-900">
                  A New Chapter in Development
                </h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  IG represents a new chapter in development — one where inclusion is not an afterthought, but the foundation. From capacity building and policy advocacy to innovation... IG is shaping a future where development is not delivered to people — but built with them.
                </p>
              </div>
              <div className="mt-8 md:mt-0 md:w-1/2 md:pl-12">
                <Image
                  src="/assets/img/our_story_img_3.jpg"
                  alt="A New Chapter"
                  width={600}
                  height={400}
                  className="w-full rounded-2xl shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
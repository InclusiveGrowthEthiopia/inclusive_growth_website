"use client";

import React from "react";
import useWow from "@/hooks/use-wow";
import AnimatedCounter from "../common/animated-counter";
import SectionTitle from "../common/section-title";
import Image from "next/image";
import CustomButton from "../common/custom-button";
import Link from "next/link";

interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 0, suffix: "", label: "Project Complete" },
  { value: 0, prefix: "$", suffix: "", label: "Total Fund Raised" },
  { value: 35, suffix: "", label: "Local Volunteers" },
  { value: 2, suffix: "", label: "World Wide Volunteers" }
];
const About = () => {
  useWow();

  return (
    <section className="relative py-10 md:py-20" id="about">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap-reverse items-center">
          <div className="max-h-min w-full px-4 py-10 lg:mb-0 lg:w-1/2">
            <div className="relative">
              <div className="wow fadeInUp relative overflow-hidden rounded-lg">
                <Image
                  src="/assets/img/about_img_1.jpg"
                  alt="Image"
                  width={1924}
                  height={500}
                  className="h-auto w-full"
                />
              </div>
              <div className="wow fadeInLeft absolute right-0 bottom-0 w-[200px] overflow-hidden rounded-br-lg border-t-16 border-l-16 border-white sm:w-[250px] lg:w-[300px]">
                <Image
                  src="/assets/img/about_img_2.jpg"
                  alt="Image"
                  width={250}
                  height={300}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="container mx-auto lg:mx-0">
              <div className="mb-4 text-center md:text-left">
                <SectionTitle title="About Us" />
                <h2 className="wow fadeInDown mt-2 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl font-heading">
                  Act today for a better tomorrow
                </h2>
              </div>
              <p className="text-muted-foreground mb-6 text-center text-lg md:text-left">
                Breaking down barriers and championing accessibility as a
                fundamental right, not an afterthought. We believe that true
                progress requires the meaningful participation of all
                individuals, regardless of ability. Ensuring full inclusion and
                meaningful participation of individuals across every sector of
                societal development.
              </p>
              <div className="mb-8 grid grid-cols-1 gap-6 text-center md:grid-cols-2 md:text-left">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <h3 className="stat-number">
                      <AnimatedCounter
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                      />
                    </h3>
                    <p className="mt-2 text-lg text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="text-center md:text-left flex flex-col md:flex-row gap-4">
                <Link href="/about/our-story">
                  <CustomButton label="Who we are?" variant="secondary" />
                </Link>
                <Link href="/about/our-story">
                  <CustomButton label="SEE OUR STORY" variant="secondary" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

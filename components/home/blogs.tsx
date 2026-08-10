import React from "react";
import SectionTitle from "../common/section-title";
import BlogCard from "../common/blog-card";
import Link from "next/link";
import CustomButton from "../common/custom-button";

export default function Blogs() {
  return (
    <section id="services" className="relative scroll-mt-10 bg-gray-100 py-20">
      <div className="px-6 text-center">
        <div className="mb-10 md:mb-20">
          <SectionTitle title="Blogs" />
          <h2 className="wow fadeInDown mt-2 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
            Explore What&apos;s New
          </h2>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl space-y-6 px-4 sm:px-[30px] lg:px-[50px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className="text-center">
          <Link href={"/blogs"}>
            <CustomButton label={"Explore Other Blogs"} />
          </Link>
        </div>
      </div>
    </section>
  );
}

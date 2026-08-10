"use client";

import PageHeader from "@/components/common/page-header";
import React from "react";
import useWow from "@/hooks/use-wow";
import BlogCard from "@/components/common/blog-card";
import { Input } from "@/components/ui/input";

export default function Page() {
  useWow();

  return (
    <div className="wow fadeInDown">
      <PageHeader
        title="Blogs"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima velit
          numquam assumenda nulla."
        className="bg-[url(/assets/img/blogs-bg.jpg)]"
      />
      <section className="wow fadeInUp container mx-auto mb-20 max-w-7xl space-y-10 px-4 pt-20 sm:px-[30px] lg:px-[50px]">
        <div className="flex items-center justify-center">
          <Input placeholder="Search blogs..." />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
    </div>
  );
}

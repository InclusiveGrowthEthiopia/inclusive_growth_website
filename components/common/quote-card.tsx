"use client";

import { QuoteIcon } from "lucide-react";
import React from "react";
import useWow from "@/hooks/use-wow";

interface QuoteCardProps {
  content: string;
  author: string;
  role?: string;
}

export default function QuoteCard({ content, author, role }: QuoteCardProps) {
  useWow();

  return (
    <section className="all-center font-heading relative scroll-mt-10 overflow-clip px-6 py-30">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-fixed"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?q=80&w=2070&auto=format&fit=crop)"
        }}
      >
        <div className="from-background to-background/30 absolute inset-0 bg-gradient-to-t" />
      </div>
      {/* Main animated card */}
      <div
        className="wow fadeInDown relative max-w-lg min-w-80 rounded-xl border border-black/5 bg-white p-6 pt-12 shadow-2xl"
        data-wow-duration="1s"
        data-wow-delay="0.2s"
      >
        {/* Nails Bubble */}
        <div className="bg-accent inset-shadow absolute top-5 left-10 h-3 w-3 rounded-full shadow-2xl drop-shadow-2xl" />
        <div className="bg-accent inset-shadow absolute top-5 right-10 h-3 w-3 rounded-full shadow-2xl drop-shadow-2xl" />

        {/* Hanger Bubble */}
        <div className="absolute right-11 bottom-[100%] h-50 w-1 bg-white shadow-2xl" />
        <div className="absolute bottom-[100%] left-11 h-50 w-1 bg-white shadow-2xl" />

        {/* Chat Tail Bubble */}
        <div className="absolute top-[99%] left-8 h-0 w-0 rounded-b-md border-b-[50px] border-l-[60px] border-b-transparent border-l-white drop-shadow-2xl" />

        {/* Text content */}
        <blockquote className="text-center text-lg text-black/70 italic">
          &ldquo;{content}&rdquo;
        </blockquote>

        {/* Name + job title */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900">{author}</h3>
          {role && <p className="text-gray-500">{role}</p>}
        </div>
      </div>

      {/* Side decorative card with swing animation */}
      <div
        className="wow fadeInDown relative -ml-5 hidden h-40 w-50 rounded-xl border border-black/5 bg-white p-6 pt-12 shadow-2xl drop-shadow-2xl md:block"
        data-wow-duration="1.5s"
        data-wow-delay="0.6s"
      >
        {/* Nails Bubble */}
        <div className="bg-accent inset-shadow absolute top-5 right-1/2 h-2 w-2 rounded-full shadow-2xl drop-shadow-2xl" />

        {/* Hanger Bubble */}
        <div className="absolute right-[52%] bottom-[100%] h-100 w-0.5 bg-white shadow-2xl" />

        {/* Chat Tail Bubble */}
        <div className="absolute top-[99%] right-8 h-0 w-0 rounded-b-md border-r-[40px] border-b-[30px] border-r-white border-b-transparent drop-shadow-2xl" />

        {/* Quote Icon */}

        {/* The rest of your card elements */}

        <QuoteIcon
          className="fill-accent/50 absolute top-[50%] left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl"
          strokeWidth={0}
        />
      </div>
    </section>
  );
}

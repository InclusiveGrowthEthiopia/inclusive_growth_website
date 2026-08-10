"use client";

import { Bookmark } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard() {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <span className="absolute flex items-center gap-1 bg-amber-300 px-2 py-1 text-xs text-black shadow">
          <Bookmark className="h-3 w-3" /> Category
        </span>
        <Image
          src={"/assets/img/contact-bg.jpg"}
          alt=""
          width={400}
          height={250}
          className="mb-3 h-auto w-full rounded-md object-cover"
        />
      </div>
      <div className="my-2 flex items-center gap-2">
        <span className="text-muted-foreground flex items-center gap-2 text-xs">
          By Mikias Wondim
        </span>
        <span className="bg-muted-foreground h-1 w-1 rounded-full" />
        <span className="text-muted-foreground text-xs">3 days ago</span>
      </div>
      <div className="h-25 space-y-1">
        <Link
          href={`/blogs/slug`}
          className="hover:text-accent line-clamp-1 text-lg font-semibold underline-offset-4 hover:underline"
        >
          Lorem ipsum dolor sit amet consectetur.
        </Link>
        <p className="text-muted-foreground line-clamp-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          doloremque expedita commodi provident non, omnis odit! Ullam dolorum
          quibusdam non ipsa ipsum earum autem. Inventore, eum aut? Eveniet,
          aperiam nobis!
        </p>
      </div>
    </div>
  );
}

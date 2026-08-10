import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  title: string;
  description: string;
  className?: string;
}

export default function PageHeader({
  title,
  description: desc,
  className
}: Props) {
  return (
    <section
      className={cn(
        "bg-secondary/50 relative flex h-[50vh] items-center justify-center bg-cover bg-no-repeat px-4 py-20 text-center sm:px-[30px] lg:px-[50px] bg-center bg-blend-darken",
        className
      )}
    >
      <div className="absolute inset-0 z-0 bg-black/70" />
      <div className="z-10 flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-white sm:text-5xl font-heading">{title}</h1>
        <p className="text-lg text-white/80 max-w-5xl">{desc}</p>
      </div>
    </section>
  );
}

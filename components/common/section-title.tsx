import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  title: string;
  className?: string;
}

export default function SectionTitle({ title, className }: Props) {
  return (
    <h1
      className={cn(
        "text-accent font-heading text-xl font-semibold",
        className
      )}
    >
      {title}
    </h1>
  );
}

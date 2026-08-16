import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  title: string;
  className?: string;
}

/**
 * Eyebrow/section label. It is intentionally a paragraph rather than a
 * heading so it does not create a second heading level before the section's
 * actual h2.
 */
export default function SectionTitle({ title, className }: Props) {
  return (
    <p
      className={cn(
        "text-secondary font-heading text-xl font-semibold uppercase",
        className
      )}
    >
      {title}
    </p>
  );
}

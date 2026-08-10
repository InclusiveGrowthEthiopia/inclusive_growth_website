import { cn } from "@/lib/utils";
import React from "react";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  label: string;
  type?: "button" | "submit";
  variant?: "default" | "secondary" | "outline";
  className?: string;
}

export default function CustomButton({
  label,
  type = "button",
  variant = "default",
  className,
  ...props
}: Props) {
  const baseStyles =
    "inline-block relative z-[1] leading-none text-center border-0 py-4 px-10 font-bold capitalize whitespace-nowrap overflow-hidden cursor-pointer tracking-wide font-['Nunito_Sans'] transition-all duration-300 ease-in-out rounded-[30px]";

  const variantStyles = {
    default: "bg-accent hover:bg-secondary text-white",

    secondary: "bg-secondary hover:bg-accent text-white",

    outline:
      "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black"
  };

  return (
    <button
      type={type}
      className={cn(
        baseStyles,
        variantStyles[variant],
        className,

        ""
      )}
      {...props}
    >
      <span className="relative z-[1]">{label}</span>
    </button>
  );
}

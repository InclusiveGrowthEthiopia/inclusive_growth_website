import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

interface TeamCardProps {
  name: string;
  position: string;
  image: string;
  social?: {
    linkedIn?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
  variant: "red" | "green" | "blue" | "yellow" | "purple" | "orange";
}

export function TeamCard({
  name,
  position,
  image,
  social,
  variant
}: TeamCardProps) {
  const hasSocialLinks = Object.values(social || {}).some((href) => href && href !== "#");
  const overlayVariant = {
    red: "from-red-400/80 via--red-400/10 to-transparent",
    green: "from-green-400/80 via--green-400/10 to-transparent",
    blue: "from-blue-400/80 via--blue-400/10 to-transparent",
    yellow: "from-yellow-400/80 via--yellow-400/10 to-transparent",
    orange: "from-orange-400/80 via--orange-400/10 to-transparent",
    purple: "from-purple-400/80 via--purple-400/10 to-transparent"
  };

  const borderVariant = {
    red: "border-red-400",
    green: "border-green-400",
    blue: "border-blue-400",
    yellow: "border-yellow-400",
    orange: "border-orange-400",
    purple: "border-purple-400",
  };

  const textHoverVariant = {
    red: "hover:fill-white",
    green: "hover:fill-white",
    blue: "hover:fill-white",
    yellow: "hover:fill-white",
    orange: "hover:fill-white",
    purple: "hover:fill-white",
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="group relative overflow-hidden rounded-full">
        <div
          className={cn(
            "absolute inset-0 z-10 flex origin-bottom scale-y-0 transform flex-col items-center justify-end rounded-full bg-linear-to-t from-10% via-40% to-70% transition-all duration-500 ease-in-out group-hover:scale-y-100",
            overlayVariant[variant]
          )}
        >
          <div className="relative">
            {hasSocialLinks && social && (
              <div className="absolute bottom-10 left-1/2 mb-4 flex -translate-x-1/2 gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {social.facebook && social.facebook !== "#" && (
                  <Link href={social.facebook} aria-label={`${name} on Facebook`} target="_blank" rel="noreferrer">
                    <FacebookIcon className={cn("h-6 w-6 text-white transition-colors duration-300", textHoverVariant[variant])} />
                  </Link>
                )}
                {social.linkedIn && social.linkedIn !== "#" && (
                  <Link href={social.linkedIn} aria-label={`${name} on LinkedIn`} target="_blank" rel="noreferrer">
                    <LinkedinIcon className={cn("h-6 w-6 text-white transition-colors duration-300", textHoverVariant[variant])} />
                  </Link>
                )}
                {social.twitter && social.twitter !== "#" && (
                  <Link href={social.twitter} aria-label={`${name} on Twitter`} target="_blank" rel="noreferrer">
                    <TwitterIcon className={cn("h-6 w-6 text-white transition-colors duration-300", textHoverVariant[variant])} />
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
        <Image
          src={image}
          alt={name}
          width={250}
          height={250}
          className={cn(
            "rounded-full border-4 border-b-0",
            borderVariant[variant]
          )}
        />
      </div>
      <div className="space-y-2 text-center">
        <h3 className="text-secondary text-xl uppercase">{position}</h3>
        <p className="text-4xl">{name}</p>
      </div>
    </div>
  );
}

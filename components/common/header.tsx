"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CustomButton from "./custom-button";
import {
  ChevronDown,
  MenuIcon,
  MinusIcon,
  PlusIcon,
  XIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { headerLinks } from "@/data";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expand, setExpand] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (href: string, sublinks?: { href: string }[]) => {
    if (href !== "#" && pathname === href) return true;
    if (sublinks) {
      return sublinks.some((sub) => pathname === sub.href);
    }
    return false;
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => !prev);

    if (isMobileOpen) {
      setExpand("");
    }
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setExpand("");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled || isMobileOpen ? "bg-white shadow-xs" : ""
      )}
    >
      <div className="relative z-1 h-[100px] w-full">
        <div className="flex h-full items-center justify-between px-4 sm:px-[30px] lg:px-[50px]">
          <div className="flex items-center">
            <Link className="inline-block" href="/" aria-label="Inclusive Growth home">
              <Image src="/logo.png" alt="Inclusive Growth NGO Logo - Opportunity for All, Barrier to None" width={70} height={70} priority />
            </Link>
          </div>
          {/* Desktop View */}
          <nav className="hidden h-full flex-1 justify-center lg:flex" aria-label="Primary navigation">
            <div
              className={cn(
                "font-heading flex items-center justify-center gap-6 text-base font-bold uppercase xl:gap-8",
                isScrolled ? "text-black" : "text-white"
              )}
            >
              {headerLinks.map((link, index) => {
                const active = isActive(link.href, link.sublinks);

                return link.sublinks ? (
                  <div
                    key={index}
                    className="group relative flex h-full cursor-pointer items-center justify-center"
                  >
                    <span className={cn(
                      "group-hover:text-accent flex items-center gap-2 transition-all duration-300",
                      active && "text-accent"
                    )}>
                      {link.label} <ChevronDown />
                    </span>
                    <div className="border-t-accent absolute top-full left-0 hidden min-w-72 w-fit rounded-b-sm border-t-2 bg-white group-hover:block pb-2">
                      <div className="flex flex-col">
                        {link.sublinks.map((sublink, subIndex) => (
                          <Link
                            key={subIndex}
                            className={cn(
                              "hover:text-accent text-black transition-colors p-4 hover-underline-anim",
                              pathname === sublink.href && "text-accent font-black"
                            )}
                            href={sublink.href}
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={index}
                    className={cn(
                      "hover:text-accent transition-all duration-300 hover-underline-anim",
                      active && "text-accent"
                    )}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/donate"
              aria-label="Donate to Inclusive Growth"
              className="bg-accent hover:bg-secondary hidden rounded-[30px] px-10 py-4 font-bold capitalize leading-none tracking-wide text-white transition-all duration-300 ease-in-out md:inline-block"
              data-modal="donation"
            >
              Donate to Inclusive Growth
            </Link>

            {/* Mobile View */}
            <div className="flex lg:hidden">
              <button type="button" onClick={toggleMobileMenu} aria-expanded={isMobileOpen} aria-controls="mobile-navigation" aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}>
                {isMobileOpen ? (
                  <XIcon className={cn("h-10 w-10 cursor-pointer text-black")} />
                ) : (
                  <MenuIcon className={cn("h-10 w-10 cursor-pointer", isScrolled ? "text-black" : "text-white")} />
                )}
              </button>
              {/* Mobile Full-Screen Menu */}
              <div
                className={cn(
                  "fixed left-0 w-full overflow-hidden bg-zinc-100 transition-all duration-500 ease-in-out lg:hidden",
                  isMobileOpen
                    ? "bottom-0 max-h-screen"
                    : "-bottom-[101%] max-h-0"
                )}
                style={{ height: "calc(100vh - 100px)" }} id="mobile-navigation"
              >
                <div className="flex h-full flex-col space-y-8 p-6 pt-8 text-black">
                  <ul className="flex w-full flex-col items-start space-y-6 text-xl font-semibold uppercase">
                    {headerLinks.map((link, index) => {
                      const active = isActive(link.href, link.sublinks);

                      return link.sublinks ? (
                        <li key={index} className="w-full">
                          <button
                            onClick={() => {
                              const value =
                                expand === link.label ? "" : link.label;
                              setExpand(value);
                            }}
                            className={cn(
                              "flex w-full cursor-pointer items-center justify-between gap-4 uppercase",
                              active && "text-accent"
                            )}
                          >
                            {link.label}
                            {expand === link.label ? (
                              <MinusIcon className="stroke-3" />
                            ) : (
                              <PlusIcon className="stroke-3" />
                            )}
                          </button>
                          <div
                            className={cn(
                              "flex flex-col gap-4 overflow-hidden pl-4 text-lg transition-all duration-500 ease-in-out",
                              expand === link.label
                                ? "h-fit max-h-screen py-4"
                                : "max-h-0"
                            )}
                          >
                            {link.sublinks.map((sublink, subIndex) => (
                              <Link
                                key={subIndex}
                                className={cn("hover:text-accent", pathname === sublink.href && "text-accent")}
                                href={sublink.href}
                                onClick={closeMobileMenu}
                              >
                                {sublink.label}
                              </Link>
                            ))}
                          </div>
                        </li>
                      ) : (
                        <li key={index} className="w-full">
                          <Link
                            onClick={closeMobileMenu}
                            href={link.href}
                            className={cn(
                              "hover:text-accent w-full transition-colors",
                              active && "text-accent"
                            )}
                          >
                            {link.label}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                  <Link
                    href="/donate"
                    aria-label="Donate to Inclusive Growth"
                    className="bg-accent hover:bg-secondary mt-8 inline-block rounded-[30px] px-10 py-4 text-center text-lg font-bold capitalize leading-none tracking-wide text-white transition-all duration-300 ease-in-out md:hidden"
                    data-modal="donation"
                    onClick={closeMobileMenu}
                  >
                    Donate to Inclusive Growth
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

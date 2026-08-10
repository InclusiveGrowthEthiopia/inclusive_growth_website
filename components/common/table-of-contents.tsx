"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ChartNoAxesGantt } from "lucide-react";
import { Header } from "@/lib/text";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  headers: Header[];
}

export function TableOfContents({ headers }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [clickedId, setClickedId] = useState<string | null>(null);
  const [lastClickTime, setLastClickTime] = useState<number>(0);

  // Smooth scroll to header and update URL hash without pushing history
  const handleLinkClick = useCallback((e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setClickedId(id);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      // Update URL without adding to history
      window.history.replaceState(null, "", `#${id}`);
    }
  }, []);

  useEffect(() => {
    if (headers.length === 0) return;

    let animationFrameId: number;
    let timeoutId: NodeJS.Timeout;

    const headingElements = Array.from(
      document.querySelectorAll(
        "#preview-content h1, #preview-content h2, #preview-content h3"
      )
    ) as HTMLElement[];

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      // Cancel any pending updates
      window.cancelAnimationFrame(animationFrameId);

      animationFrameId = window.requestAnimationFrame(() => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");

          if (entry.isIntersecting && id) {
            // Only update if not recently clicked (to prevent flickering during smooth scroll)
            if (!clickedId || Date.now() - lastClickTime > 500) {
              setActiveId(id);
              setClickedId(null);
            }
          }
        });
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px 0px -70% 0px",
      threshold: 0.1
    });

    headingElements.forEach((el) => observer.observe(el));

    // Handle initial hash if present
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      const element = document.getElementById(hash);
      if (element && headers.some((header) => header.id === hash)) {
        timeoutId = setTimeout(() => {
          setActiveId(hash);
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      observer?.disconnect();
      clearTimeout(timeoutId);
    };
  }, [headers, clickedId, lastClickTime]);

  if (headers.length === 0) return null;

  return (
    <div className="w-full space-y-2">
      <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
        <ChartNoAxesGantt className="h-5 w-5 -rotate-180" />
        On This Page
      </h3>
      <ul className="space-y-1 text-sm">
        {headers.map((header) => (
          <li
            key={header.id}
            className={cn(
              "transition-colors duration-200",
              header.level > 2 ? "pl-6" : header.level > 1 ? "pl-4" : "",
              activeId === header.id
                ? "border-primary border-l-2"
                : "border-l-2 border-transparent"
            )}
          >
            <Link
              href={`#${header.id}`}
              onClick={(e) => {
                setLastClickTime(Date.now());
                handleLinkClick(e, header.id);
              }}
              className={cn(
                "block py-1.5 pl-3 transition-colors duration-200",
                activeId === header.id
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-primary"
              )}
              aria-current={activeId === header.id ? "location" : undefined}
            >
              {header.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

export function GsapParallax({
  children,
  className,
  speed = 1,
  direction = "y",
  start = "top bottom",
  end = "bottom top",
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number; // 1 means it moves 100px for every 100px scrolled. 0.5 means it moves slower (parallax depth)
  direction?: "y" | "x";
  start?: string;
  end?: string;
}) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const target = targetRef.current;
    const trigger = triggerRef.current;

    if (!target || !trigger) return;

    // Calculate movement based on speed
    const yValue = direction === "y" ? 100 * speed : 0;
    const xValue = direction === "x" ? 100 * speed : 0;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        target,
        {
          y: direction === "y" ? -yValue : 0,
          x: direction === "x" ? -xValue : 0,
        },
        {
          y: direction === "y" ? yValue : 0,
          x: direction === "x" ? xValue : 0,
          ease: "none",
          scrollTrigger: {
            trigger: trigger,
            start: start,
            end: end,
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, [speed, direction, start, end]);

  return (
    <div ref={triggerRef} className={cn("relative", className)}>
      <div ref={targetRef} className="w-full h-full">
        {children}
      </div>
    </div>
  );
}

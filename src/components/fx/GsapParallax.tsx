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
  scaleDepth = 1, // 1 = no scaling. <1 = shrinks into background. >1 = zooms into foreground.
  opacityFade = false, // If true, fades out as it scrolls.
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number; 
  direction?: "y" | "x" | "none";
  start?: string;
  end?: string;
  scaleDepth?: number;
  opacityFade?: boolean;
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
          scale: 1,
          opacity: 1,
        },
        {
          y: direction === "y" ? yValue : 0,
          x: direction === "x" ? xValue : 0,
          scale: scaleDepth,
          opacity: opacityFade ? 0 : 1,
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
  }, [speed, direction, start, end, scaleDepth, opacityFade]);

  return (
    <div ref={triggerRef} className={cn("relative", className)}>
      <div ref={targetRef} className="w-full h-full transform-style-3d">
        {children}
      </div>
    </div>
  );
}

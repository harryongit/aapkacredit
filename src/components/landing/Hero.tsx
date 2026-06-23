"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const textWrapper = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Intro Sequence (Massive typography reveal)
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Initial states for clipping mask reveal
    gsap.set(".mask-text", { yPercent: 120 });
    gsap.set(".hero-divider", { scaleX: 0, transformOrigin: "left" });
    gsap.set(".hero-subtext", { opacity: 0, y: 20 });
    gsap.set(".hero-btn", { opacity: 0, y: 20 });

    tl.to(".mask-text", { yPercent: 0, duration: 1.5, stagger: 0.15 }, 0.2)
      .to(".hero-divider", { scaleX: 1, duration: 1.5, ease: "power3.inOut" }, 0.8)
      .to(".hero-subtext", { opacity: 1, y: 0, duration: 1 }, 1.2)
      .to(".hero-btn", { opacity: 1, y: 0, duration: 1 }, 1.4);

    // ScrollTrigger Pinned Effect
    // The hero section stays pinned while the next section slides over it
    ScrollTrigger.create({
      trigger: container.current,
      start: "top top",
      end: "+=100%", // Pin for 100% of viewport height
      pin: true,
      pinSpacing: false, // Don't add padding below, let next section slide over
    });

    // Parallax elements out as user scrolls (Z-axis zoom out)
    gsap.to(textWrapper.current, {
      scale: 0.5,
      yPercent: -20,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
      }
    });

  }, { scope: container });

  return (
    <section
      ref={container}
      id="home"
      className="relative flex h-screen w-full flex-col justify-center overflow-hidden bg-background px-4 sm:px-8 lg:px-16"
    >
      {/* Absolute dark background overlay just in case */}
      <div className="absolute inset-0 bg-[#07090F] -z-20" />

      {/* Stark Geometric Lines in Background */}
      <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-white/5 -z-10" />
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -z-10" />
      <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-white/5 -z-10" />

      <div ref={textWrapper} className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center h-full pt-20">

        <div className="flex flex-col gap-2 sm:gap-4 uppercase font-display font-bold tracking-tighter text-[12vw] sm:text-[8vw] lg:text-[7vw] leading-[0.85]">
          <div className="overflow-hidden py-2">
            <div className="mask-text text-foreground">Next-Gen</div>
          </div>
          <div className="overflow-hidden py-2">
            <div className="mask-text text-foreground flex items-center gap-4 sm:gap-8">
              Lending
              <span className="hidden md:inline-flex h-3 w-3 sm:h-6 sm:w-6 bg-primary rounded-none"></span>
              <span className="text-white/20">Platform</span>
            </div>
          </div>
        </div>

        <div className="hero-divider mt-12 mb-8 h-[1px] w-full max-w-2xl bg-white/20" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between max-w-5xl gap-8">
          <p className="hero-subtext max-w-md text-sm sm:text-base text-foreground/60 leading-relaxed font-medium uppercase tracking-widest">
            Institutional-grade financial solutions.
            <br className="hidden sm:block" /> Fast, secure, transparent.
          </p>

          <div className="hero-btn">
            <MagneticButton href="#contact" variant="primary" className="rounded-none px-8 py-4 font-bold tracking-widest uppercase text-xs">
              Check Eligibility <ArrowRight className="h-4 w-4 ml-2" />
            </MagneticButton>
          </div>
        </div>

      </div>
    </section>
  );
}

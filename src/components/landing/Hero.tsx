"use client";

import { useRef } from "react";
import { ArrowRight, ShieldCheck, Zap, Lightbulb, Lock } from "lucide-react";
import { Aurora, Grid } from "@/components/fx/Aurora";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { HeroScene } from "./HeroScene";
import { GsapParallax } from "@/components/fx/GsapParallax";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const metrics = [
  {
    icon: ShieldCheck,
    label: "Loan Eligibility",
    value: "Instant",
    tone: "from-[#3B82F6] to-[#2563EB]",
  },
  { icon: Zap, label: "Quick Approval", value: "< 24 hrs", tone: "from-[#10B981] to-[#3B82F6]" },
  {
    icon: Lightbulb,
    label: "Smart Insights",
    value: "AI-led",
    tone: "from-[#a78bfa] to-[#3B82F6]",
  },
  { icon: Lock, label: "Secure Platform", value: "256-bit", tone: "from-[#10B981] to-[#34d399]" },
];

export function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Cinematic Intro Timeline
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Initial states
    gsap.set(".hero-badge", { y: 30, opacity: 0 });
    gsap.set(".hero-title .word", { y: 100, opacity: 0, rotateX: -80, transformOrigin: "0% 50% -50" });
    gsap.set(".hero-desc", { y: 30, opacity: 0 });
    gsap.set(".hero-cta", { y: 30, opacity: 0, scale: 0.95 });
    gsap.set(".hero-metric", { y: 40, opacity: 0, scale: 0.9 });
    gsap.set(".hero-scene-wrapper", { scale: 1.2, opacity: 0, filter: "blur(10px)" });
    gsap.set(".hero-bg-glow", { scale: 0.8, opacity: 0 });

    // Animate Sequence
    tl.to(".hero-bg-glow", { scale: 1, opacity: 0.6, duration: 2, ease: "power2.out" }, 0)
      .to(".hero-badge", { y: 0, opacity: 1, duration: 1 }, 0.2)
      .to(".hero-title .word", { 
        y: 0, 
        opacity: 1, 
        rotateX: 0, 
        duration: 1.2, 
        stagger: 0.1 
      }, 0.3)
      .to(".hero-desc", { y: 0, opacity: 1, duration: 1 }, 0.6)
      .to(".hero-cta", { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1 }, 0.8)
      .to(".hero-metric", { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 0.8, 
        stagger: 0.05,
        ease: "back.out(1.5)"
      }, 1)
      .to(".hero-scene-wrapper", { 
        scale: 1, 
        opacity: 1, 
        filter: "blur(0px)", 
        duration: 1.5,
        ease: "power3.inOut"
      }, 0.5);

    // ScrollTrigger Parallax Sequence
    const stTl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.5, // Smooth scrubbing
      }
    });

    stTl.to(".hero-left-content", { y: -100, opacity: 0 }, 0)
        .to(".hero-scene-wrapper", { y: 150, scale: 1.1, opacity: 0.5 }, 0)
        .to(".hero-bg-glow", { y: 200, scale: 1.5, opacity: 0 }, 0);

  }, { scope: container });

  // Split title for staggered cinematic effect
  const title1 = "Get the right loan".split(" ");
  const title2 = "with confidence.".split(" ");

  return (
    <section ref={container} id="home" className="relative isolate min-h-screen overflow-hidden pt-32 noise perspective-[1000px]">
      <Aurora />
      <Grid />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-24 lg:grid-cols-12 lg:gap-8 relative z-10">
        <div className="hero-left-content lg:col-span-7 transform-style-3d">
          <div className="hero-badge inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-foreground/80">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            India&apos;s next-generation lending platform
          </div>

          <h1 className="hero-title mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl flex flex-wrap gap-x-4 gap-y-2">
            {title1.map((word, i) => (
              <span key={i} className="word inline-block">{word}</span>
            ))}
            <div className="w-full h-0" />
            {title2.map((word, i) => (
              <span key={`t2-${i}`} className="word inline-block text-gradient">{word}</span>
            ))}
          </h1>

          <p className="hero-desc mt-6 max-w-xl text-base text-foreground/65 sm:text-lg">
            Aapka Credit helps you discover loan opportunities, understand eligibility, and make
            smarter borrowing decisions through a transparent, modern digital experience.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <div className="hero-cta">
              <MagneticButton href="#contact" variant="primary">
                Check Eligibility <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </div>
            <div className="hero-cta">
              <MagneticButton href="#features" variant="ghost">
                Explore Features
              </MagneticButton>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {metrics.map((m, i) => (
              <div key={m.label} className="hero-metric glass rounded-2xl p-4">
                <div
                  className={`mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${m.tone}`}
                >
                  <m.icon className="h-4 w-4 text-white" />
                </div>
                <p className="text-[11px] uppercase tracking-wider text-foreground/50">{m.label}</p>
                <p className="mt-0.5 text-sm font-semibold text-foreground">{m.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative aspect-square w-full">
            <GsapParallax speed={0.5} className="absolute inset-0">
              <div className="hero-scene-wrapper w-full h-full">
                <HeroScene />
              </div>
            </GsapParallax>
            <div className="hero-bg-glow pointer-events-none absolute -inset-10 -z-10 rounded-[40px] opacity-60 blur-3xl bg-radial-blue" />
          </div>
        </div>
      </div>
    </section>
  );
}

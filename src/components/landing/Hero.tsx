"use client";
import { ArrowRight, ShieldCheck, Zap, Lightbulb, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { Aurora, Grid } from "@/components/fx/Aurora";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { Parallax } from "@/components/fx/Reveal";
import { HeroScene } from "./HeroScene";

const metrics = [
  { icon: ShieldCheck, label: "Loan Eligibility", value: "Instant", tone: "from-[#3B82F6] to-[#2563EB]" },
  { icon: Zap, label: "Quick Approval", value: "< 24 hrs", tone: "from-[#10B981] to-[#3B82F6]" },
  { icon: Lightbulb, label: "Smart Insights", value: "AI-led", tone: "from-[#a78bfa] to-[#3B82F6]" },
  { icon: Lock, label: "Secure Platform", value: "256-bit", tone: "from-[#10B981] to-[#34d399]" },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden pt-32 noise">
      <Aurora />
      <Grid />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-24 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-white/80"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            India&apos;s next-generation lending platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Get the right loan
            <br />
            <span className="text-gradient">with confidence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-6 max-w-xl text-base text-white/65 sm:text-lg"
          >
            Aapka Credit helps you discover loan opportunities, understand eligibility, and make smarter
            borrowing decisions through a transparent, modern digital experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#contact" variant="primary">
              Check Eligibility <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#features" variant="ghost">
              Explore Features
            </MagneticButton>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.08 }}
                className="glass rounded-2xl p-4"
              >
                <div className={`mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${m.tone}`}>
                  <m.icon className="h-4 w-4 text-white" />
                </div>
                <p className="text-[11px] uppercase tracking-wider text-white/50">{m.label}</p>
                <p className="mt-0.5 text-sm font-semibold text-white">{m.value}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative aspect-square w-full">
            <Parallax offset={80} className="absolute inset-0">
              <HeroScene />
            </Parallax>
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[40px] opacity-60 blur-3xl"
              style={{ background: "radial-gradient(closest-side, rgba(59,130,246,0.5), transparent 70%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { ShieldCheck, Lock, Eye, Cpu } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SpotlightCard } from "@/components/fx/SpotlightCard";
import { StaggerGroup, itemVariants } from "@/components/fx/Reveal";
import { motion } from "framer-motion";
import { GsapParallax } from "@/components/fx/GsapParallax";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Security First",
    text: "Bank-grade encryption and zero-trust architecture protect every interaction.",
  },
  {
    icon: Eye,
    title: "Privacy Focused",
    text: "We collect only what we need, store it safely, and put you in control.",
  },
  {
    icon: Lock,
    title: "Transparent Lending",
    text: "Clear terms, honest comparisons, and no hidden fine print, ever.",
  },
  {
    icon: Cpu,
    title: "Technology Driven",
    text: "Built on a modern intelligent stack for faster, smarter lending decisions.",
  },
];

export function TrustPillars() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Trust"
          title={
            <>
              Trusted. Transparent. <span className="text-gradient-blue">Secure.</span>
            </>
          }
          subtitle="Aapka Credit is engineered around four uncompromising principles."
        />

        <GsapParallax speed={0.2} direction="y">
          <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <motion.div key={p.title} variants={itemVariants}>
                <SpotlightCard className="h-full p-6">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB]/30 to-[#10B981]/20 ring-1 ring-white/10">
                    <p.icon className="h-5 w-5 text-[#93c5fd]" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/60">{p.text}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </StaggerGroup>
        </GsapParallax>
      </div>
    </section>
  );
}

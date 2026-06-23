"use client";
import { ShieldCheck, Lock, Eye, Cpu } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
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
    <section className="relative py-32 bg-background z-10 border-t border-white/10">
      {/* Background grid lines for structured look */}
      <div className="absolute inset-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
           
      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <SectionHeading
          eyebrow="Core Principles"
          title={
            <>
              Trusted. Transparent. <br/><span className="text-white/40">Secure.</span>
            </>
          }
          subtitle="Aapka Credit is engineered around four uncompromising institutional principles."
        />

        <GsapParallax speed={0.1} direction="y" scaleDepth={0.95}>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 border border-white/10">
            {pillars.map((p, index) => (
              <div 
                key={p.title} 
                className={`group relative p-10 sm:p-14 border-white/10 transition-colors duration-500 hover:bg-white/[0.02]
                  ${index % 2 === 0 ? 'border-b md:border-r md:border-b-0' : 'border-b'}
                  ${index >= 2 ? 'md:border-b-0' : 'md:border-b'}
                `}
              >
                {/* Huge geometric number in background */}
                <span className="absolute top-8 right-8 text-[8rem] font-display font-bold text-white/[0.03] leading-none transition-transform duration-500 group-hover:scale-110">
                  0{index + 1}
                </span>

                <div className="relative z-10">
                  <div className="mb-8 inline-flex h-12 w-12 items-center justify-center bg-primary/10 text-primary border border-primary/20 transition-transform duration-500 group-hover:-translate-y-2">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-foreground uppercase tracking-wider">{p.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-foreground/60 max-w-sm">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </GsapParallax>
      </div>
    </section>
  );
}

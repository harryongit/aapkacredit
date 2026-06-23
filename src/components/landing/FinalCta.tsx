"use client";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { Reveal } from "@/components/fx/Reveal";

export function FinalCta() {
  return (
    <section className="relative py-32 bg-background z-10 border-t border-white/10">
      {/* Background grid lines for structured look */}
      <div className="absolute inset-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <Reveal>
          <div className="relative border border-white/10 bg-background/80 px-6 py-20 text-center sm:px-12 sm:py-32 backdrop-blur-sm">
            <div className="relative">
              <h2 className="mx-auto max-w-4xl font-display text-4xl font-bold uppercase tracking-tighter text-foreground sm:text-7xl leading-none">
                Take control of your <br/><span className="text-white/40">financial journey.</span>
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-sm sm:text-base text-foreground/60 uppercase tracking-widest font-bold">
                Find loan opportunities with absolute clarity and transparency.
              </p>
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <MagneticButton href="#contact" variant="primary" className="rounded-none border border-primary px-8 py-4 font-bold tracking-widest uppercase text-xs">
                  Check Eligibility <ArrowRight className="h-4 w-4 ml-2" />
                </MagneticButton>
                <MagneticButton href="#contact" variant="ghost" className="rounded-none border border-white/20 px-8 py-4 font-bold tracking-widest uppercase text-xs">
                  Contact Us
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

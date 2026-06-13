"use client";
import { ArrowRight } from "lucide-react";
import { Aurora } from "@/components/fx/Aurora";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { Reveal } from "@/components/fx/Reveal";

export function FinalCta() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-foreground/10 px-6 py-20 text-center sm:px-12 sm:py-28">
            <Aurora />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
                Take control of your <span className="text-gradient">financial journey</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base text-foreground/65 sm:text-lg">
                Find loan opportunities with clarity, confidence, and transparency.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <MagneticButton href="#contact" variant="primary">
                  Check Eligibility <ArrowRight className="h-4 w-4" />
                </MagneticButton>
                <MagneticButton href="#contact" variant="ghost">
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

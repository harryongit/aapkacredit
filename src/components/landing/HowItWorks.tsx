"use client";
import { UserPlus, FileCheck, Gauge, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { GsapParallax } from "@/components/fx/GsapParallax";

const steps = [
  {
    icon: UserPlus,
    title: "Create Account",
    text: "Sign up in under a minute with secure mobile-first onboarding.",
  },
  {
    icon: FileCheck,
    title: "Verify Details",
    text: "Quick digital KYC with PAN and Aadhaar — encrypted end-to-end.",
  },
  {
    icon: Gauge,
    title: "Check Eligibility",
    text: "Soft credit check returns personalised offers in real time.",
  },
  {
    icon: Sparkles,
    title: "Access Opportunities",
    text: "Review your offers, EMIs, tenures, and apply with one click.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-32 bg-background z-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Process"
          title={
            <>
              From sign-up to <br/><span className="text-white/40">smart offer.</span>
            </>
          }
          subtitle="Four structured steps stand between you and the right loan."
        />

        <div className="relative mt-24">
          <GsapParallax speed={0.15} direction="y">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-white/10">
              {steps.map((s, i) => (
                <div key={s.title} className={`group relative p-8 border-white/10 transition-all hover:bg-white/[0.02] ${i !== steps.length - 1 ? 'border-b md:border-r md:border-b-0' : ''}`}>
                  
                  {/* Step Connector Line */}
                  {i !== steps.length - 1 && (
                    <div className="hidden md:block absolute top-14 -right-[15px] w-8 h-[1px] bg-primary z-20" />
                  )}

                  <div className="relative flex flex-col h-full justify-between">
                    <div>
                      <span className="text-5xl font-display font-bold text-white/20 mb-6 block transition-colors group-hover:text-primary">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="mb-6 inline-flex h-10 w-10 items-center justify-center border border-white/20 text-white">
                        <s.icon className="h-4 w-4" />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-display text-lg font-bold uppercase tracking-wide text-foreground mb-3">{s.title}</h3>
                      <p className="text-sm leading-relaxed text-foreground/60">{s.text}</p>
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>
          </GsapParallax>
        </div>
      </div>
    </section>
  );
}

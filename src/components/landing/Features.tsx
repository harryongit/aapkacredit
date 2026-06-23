"use client";
import { Brain, Compass, BarChart3, ShieldCheck, FileCheck2, LayoutDashboard } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { GsapParallax } from "@/components/fx/GsapParallax";

const features = [
  {
    icon: Brain,
    title: "Smart Eligibility Assessment",
    text: "Soft-check models that show what you can borrow without hurting your score.",
  },
  {
    icon: Compass,
    title: "Loan Discovery",
    text: "Curated offers tailored to your profile directly from our lending suite.",
  },
  {
    icon: BarChart3,
    title: "Financial Insights",
    text: "Plain-English breakdowns of EMI, tenure, and total cost of borrowing.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Experience",
    text: "End-to-end encryption, secure infrastructure, and responsible data handling.",
  },
  {
    icon: FileCheck2,
    title: "Transparent Process",
    text: "Every fee, every rate, every term — visible upfront. No surprises.",
  },
  {
    icon: LayoutDashboard,
    title: "User-Friendly Dashboard",
    text: "Track applications, repayments, and offers from one elegant workspace.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-32 bg-background z-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Capabilities"
          title={
            <>
              Everything you need <br/><span className="text-white/40">before you borrow.</span>
            </>
          }
          subtitle="A complete toolkit designed for confident, informed financial decisions."
        />

        <GsapParallax speed={0.1} direction="y">
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/10">
            {features.map((f, i) => (
              <div 
                key={f.title} 
                className={`group relative p-10 sm:p-12 border-white/10 transition-colors duration-500 hover:bg-white/[0.02]
                  ${i < 3 ? 'border-b' : ''}
                  ${i % 3 !== 2 ? 'md:border-r' : ''}
                `}
              >
                <div className="relative z-10">
                  <div className="mb-8 inline-flex h-12 w-12 items-center justify-center border border-white/20 text-white transition-transform duration-500 group-hover:bg-primary group-hover:border-primary group-hover:-translate-y-2">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground uppercase tracking-wider">{f.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/60">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </GsapParallax>
      </div>
    </section>
  );
}

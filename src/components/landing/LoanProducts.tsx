"use client";
import { User, Briefcase, GraduationCap, Gauge, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { GsapParallax } from "@/components/fx/GsapParallax";

const products = [
  {
    icon: User,
    title: "Personal Loans",
    text: "Fast access to flexible financing for life's important moments.",
    tag: "Up to ₹40L",
    href: "/personal-loan",
  },
  {
    icon: Briefcase,
    title: "Business Loans",
    text: "Working capital and growth funding for ambitious businesses.",
    tag: "Up to ₹2Cr",
    href: "/business-loan",
  },
  {
    icon: GraduationCap,
    title: "Education Loans",
    text: "Invest in your future without compromising on the program.",
    tag: "Up to ₹75L",
    href: "/education-loan",
  },
  {
    icon: Gauge,
    title: "Eligibility Check",
    text: "Know your borrowing options in seconds, with zero impact on credit score.",
    tag: "Instant",
    href: "/#how",
  },
];

export function LoanProducts() {
  return (
    <section id="loans" className="relative py-32 bg-background z-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Products"
          title={
            <>
              Loans built for <br/><span className="text-white/40">every stage.</span>
            </>
          }
          subtitle="Discover, evaluate, and choose the right loan with absolute clarity."
        />

        <div className="relative mt-24">
          <GsapParallax speed={0.12} direction="y" scaleDepth={0.95}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10">
              {products.map((p, i) => (
                <a
                  key={p.title}
                  href={p.href}
                  className={`group relative flex flex-col justify-between p-10 sm:p-14 border-white/10 transition-colors duration-500 hover:bg-white/[0.02] min-h-[300px]
                    ${i < 2 ? 'border-b' : ''}
                    ${i % 2 === 0 ? 'md:border-r' : ''}
                  `}
                >
                  <div className="flex items-start justify-between relative z-10">
                    <div className="inline-flex h-12 w-12 items-center justify-center border border-white/20 text-white transition-colors duration-500 group-hover:border-primary group-hover:text-primary">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <span className="border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-foreground/70">
                      {p.tag}
                    </span>
                  </div>
                  
                  <div className="relative z-10 mt-16">
                    <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-foreground mb-4">{p.title}</h3>
                    <p className="max-w-sm text-sm leading-relaxed text-foreground/60">{p.text}</p>
                    <div className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 transition-colors duration-500 group-hover:text-primary">
                      Explore <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </GsapParallax>
        </div>
      </div>
    </section>
  );
}

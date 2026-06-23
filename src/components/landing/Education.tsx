"use client";
import { BookOpen, TrendingUp, Calculator, HandCoins, Heart, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { GsapParallax } from "@/components/fx/GsapParallax";
import Link from "next/link";

const items = [
  {
    icon: BookOpen,
    title: "Understanding Loans",
    read: "6 min",
    href: "/blog/personal-loan-eligibility",
  },
  {
    icon: TrendingUp,
    title: "Understanding Credit Scores",
    read: "6 min",
    href: "/blog/how-to-improve-credit-score",
  },
  {
    icon: Calculator,
    title: "EMI Planning",
    read: "4 min",
    href: "/blog/emi-calculation-guide",
  },
  {
    icon: HandCoins,
    title: "Responsible Borrowing",
    read: "5 min",
    href: "/blog/debt-management-tips",
  },
  {
    icon: Heart,
    title: "Financial Wellness",
    read: "7 min",
    href: "/blog/home-loan-tax-benefits",
  },
];

export function Education() {
  return (
    <section className="relative py-32 bg-background z-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Insights"
          title={
            <>
              Borrow <span className="text-white/40">smarter.</span>
            </>
          }
          subtitle="Honest, institutional-grade insights to guide your financial decisions."
        />

        <div className="mt-20">
          <GsapParallax speed={0.08} direction="y">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border border-white/10">
              {items.map((i, idx) => (
                <Link
                  key={i.title}
                  href={i.href}
                  className={`group relative flex h-full flex-col p-8 transition-colors duration-500 hover:bg-white/[0.02]
                    ${idx !== items.length - 1 ? 'border-b lg:border-r lg:border-b-0' : ''}
                    ${idx === 1 || idx === 3 ? 'md:border-b-0' : ''}
                  `}
                >
                  <div className="mb-12 inline-flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-colors duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-background">
                    <i.icon className="h-4 w-4" />
                  </div>
                  <div className="mt-auto">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-2">{i.read} read</p>
                    <h3 className="font-display text-base font-bold uppercase tracking-wide leading-snug text-foreground">
                      {i.title}
                    </h3>
                  </div>
                  
                  {/* Hover Arrow */}
                  <div className="absolute bottom-8 right-8 opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                </Link>
              ))}
            </div>
          </GsapParallax>
        </div>
      </div>
    </section>
  );
}

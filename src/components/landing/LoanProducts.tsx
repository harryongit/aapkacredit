"use client";
import { User, Briefcase, GraduationCap, Gauge, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { StaggerGroup, itemVariants } from "@/components/fx/Reveal";
import { motion } from "framer-motion";

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
    <section id="loans" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Lending"
          title={
            <>
              Loans built for <span className="text-gradient-blue">every life stage</span>
            </>
          }
          subtitle="Discover, evaluate, and choose the right loan with clarity and confidence."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {products.map((p) => (
            <motion.a
              key={p.title}
              variants={itemVariants}
              href={p.href}
              className="group relative overflow-hidden rounded-3xl p-px"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.4), rgba(16,185,129,0.25) 50%, rgba(255,255,255,0.05))",
              }}
            >
              <div className="relative h-full rounded-[calc(1.5rem-1px)] bg-card dark:bg-[#0a1428] p-8 transition-transform duration-500 group-hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/5 ring-1 ring-border">
                    <p.icon className="h-5 w-5 text-primary dark:text-[#93c5fd]" />
                  </div>
                  <span className="rounded-full bg-foreground/5 px-3 py-1 text-[11px] font-medium text-foreground/70 ring-1 ring-border">
                    {p.tag}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-foreground/60">{p.text}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary dark:text-[#93c5fd] transition-transform duration-500 group-hover:translate-x-1">
                  Explore <ArrowUpRight className="h-4 w-4" />
                </div>
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: "radial-gradient(closest-side, rgba(59,130,246,0.45), transparent)",
                  }}
                />
              </div>
            </motion.a>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

"use client";
import { BookOpen, TrendingUp, Calculator, HandCoins, Heart } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { StaggerGroup, itemVariants } from "@/components/fx/Reveal";
import { motion } from "framer-motion";

const items = [
  { icon: BookOpen, title: "Understanding Loans", read: "6 min" },
  { icon: TrendingUp, title: "Understanding Credit Scores", read: "5 min" },
  { icon: Calculator, title: "EMI Planning", read: "4 min" },
  { icon: HandCoins, title: "Responsible Borrowing", read: "7 min" },
  { icon: Heart, title: "Financial Wellness", read: "8 min" },
];

export function Education() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Knowledge"
          title={<>Borrow <span className="text-gradient-blue">smarter</span></>}
          subtitle="Short, honest reads to help you make confident financial decisions."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((i) => (
            <motion.a
              key={i.title} variants={itemVariants} href="#"
              className="group rounded-2xl glass p-6 transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                <i.icon className="h-4 w-4 text-[#93c5fd]" />
              </div>
              <p className="text-[11px] uppercase tracking-wider text-white/40">{i.read} read</p>
              <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-white">{i.title}</h3>
              <p className="mt-6 text-xs text-[#93c5fd] opacity-0 transition group-hover:opacity-100">Read article →</p>
            </motion.a>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

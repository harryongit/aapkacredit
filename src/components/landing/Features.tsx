"use client";
import { Brain, Compass, BarChart3, ShieldCheck, FileCheck2, LayoutDashboard } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SpotlightCard } from "@/components/fx/SpotlightCard";
import { StaggerGroup, itemVariants } from "@/components/fx/Reveal";
import { motion } from "framer-motion";

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
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Features"
          title={
            <>
              Everything you need <span className="text-gradient-blue">before you borrow</span>
            </>
          }
          subtitle="A complete toolkit designed for confident, informed financial decisions."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <motion.div key={f.title} variants={itemVariants}>
              <SpotlightCard className="h-full p-7">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <f.icon className="h-5 w-5 text-[#93c5fd]" />
                </div>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{f.text}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

"use client";
import { UserPlus, FileCheck, Gauge, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { StaggerGroup, itemVariants } from "@/components/fx/Reveal";
import { motion } from "framer-motion";

const steps = [
  { icon: UserPlus, title: "Create Account", text: "Sign up in under a minute with secure mobile-first onboarding." },
  { icon: FileCheck, title: "Verify Details", text: "Quick digital KYC with PAN and Aadhaar — encrypted end-to-end." },
  { icon: Gauge, title: "Check Eligibility", text: "Soft credit check returns personalised offers in real time." },
  { icon: Sparkles, title: "Access Opportunities", text: "Review your offers, EMIs, tenures, and apply with one click." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Process"
          title={<>From sign-up to <span className="text-gradient-blue">smart offer</span></>}
          subtitle="Four simple steps stand between you and the right loan."
        />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px lg:block"
            style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), rgba(16,185,129,0.5), transparent)" }}
          />

          <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div key={s.title} variants={itemVariants} className="relative">
                <div className="relative grid h-24 w-24 place-items-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2563EB]/20 to-[#10B981]/10 blur-xl" />
                  <div className="relative grid h-24 w-24 place-items-center rounded-full bg-[#0a1428] ring-1 ring-white/10">
                    <s.icon className="h-6 w-6 text-[#93c5fd]" />
                    <span className="absolute -top-2 -right-2 grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[#3B82F6] to-[#10B981] text-xs font-semibold text-white">
                      {i + 1}
                    </span>
                  </div>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/60">{s.text}</p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}

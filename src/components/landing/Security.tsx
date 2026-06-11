"use client";
import { ShieldCheck, KeyRound, Server, FileLock, Building2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { GlobeScene } from "./GlobeScene";
import { StaggerGroup, itemVariants } from "@/components/fx/Reveal";
import { motion } from "framer-motion";

const items = [
  { icon: KeyRound, title: "256-bit Encryption", text: "All data in transit and at rest is AES-256 encrypted." },
  { icon: Server, title: "Secure Infrastructure", text: "ISO-27001 aligned cloud with isolation and audit logs." },
  { icon: ShieldCheck, title: "Privacy Protection", text: "Strict data-minimisation and granular consent." },
  { icon: FileLock, title: "Responsible Data Practices", text: "Transparent policies and user-controlled deletion." },
  { icon: Building2, title: "Enterprise Standards", text: "Compliance-first engineering with regular pen-tests." },
];

export function Security() {
  return (
    <section id="security" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2">
          <GlobeScene />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Security"
          title={<>Security you can <span className="text-gradient-blue">trust</span></>}
          subtitle="Built on enterprise-grade foundations so your money and data stay protected."
        />

        <div className="mt-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* shield visual */}
          <div className="relative flex items-center justify-center lg:col-span-5">
            <div className="relative h-72 w-72">
              <div className="absolute inset-0 rounded-full border border-white/10 animate-pulse-ring" />
              <div className="absolute inset-6 rounded-full border border-white/10 animate-pulse-ring" style={{ animationDelay: "0.6s" }} />
              <div className="absolute inset-12 rounded-full border border-white/10 animate-pulse-ring" style={{ animationDelay: "1.2s" }} />
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid h-32 w-32 place-items-center rounded-3xl bg-gradient-to-br from-[#2563EB] to-[#10B981] shadow-glow">
                  <ShieldCheck className="h-14 w-14 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* list */}
          <StaggerGroup className="space-y-3 lg:col-span-7">
            {items.map((it) => (
              <motion.div key={it.title} variants={itemVariants}
                className="group flex items-start gap-4 rounded-2xl glass p-5 transition hover:-translate-y-0.5 hover:shadow-elegant"
              >
                <div className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <it.icon className="h-5 w-5 text-[#93c5fd]" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">{it.title}</h4>
                  <p className="mt-1 text-sm text-white/60">{it.text}</p>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}

"use client";
import { ShieldCheck, KeyRound, Server, FileLock, Building2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { GlobeScene } from "./GlobeScene";
import { GsapParallax } from "@/components/fx/GsapParallax";

const items = [
  {
    icon: KeyRound,
    title: "256-bit Encryption",
    text: "All data in transit and at rest is AES-256 encrypted.",
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    text: "ISO-27001 aligned cloud with isolation and audit logs.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy Protection",
    text: "Strict data-minimisation and granular consent.",
  },
  {
    icon: FileLock,
    title: "Responsible Data Practices",
    text: "Transparent policies and user-controlled deletion.",
  },
  {
    icon: Building2,
    title: "Enterprise Standards",
    text: "Compliance-first engineering with regular pen-tests.",
  },
];

export function Security() {
  return (
    <section id="security" className="relative overflow-hidden py-32 bg-background z-10 border-t border-white/10">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2">
          <GlobeScene />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Security"
          title={
            <>
              Security you can <br/><span className="text-white/40">trust.</span>
            </>
          }
          subtitle="Built on enterprise-grade foundations so your money and data stay protected."
        />

        <div className="mt-20 grid grid-cols-1 items-center gap-0 lg:grid-cols-12 border border-white/10 bg-background/80 backdrop-blur-sm">
          {/* shield visual */}
          <div className="relative flex items-center justify-center p-12 lg:p-0 lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/10 h-full">
            <div className="relative h-72 w-72">
              <div className="absolute inset-0 border border-white/10 animate-pulse-ring rounded-none" />
              <div
                className="absolute inset-6 border border-white/10 animate-pulse-ring rounded-none"
                style={{ animationDelay: "0.6s" }}
              />
              <div
                className="absolute inset-12 border border-white/10 animate-pulse-ring rounded-none"
                style={{ animationDelay: "1.2s" }}
              />
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid h-32 w-32 place-items-center bg-primary/10 border border-primary/20">
                  <ShieldCheck className="h-14 w-14 text-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* list */}
          <div className="lg:col-span-7 flex flex-col">
            <GsapParallax speed={0.1} direction="y">
              {items.map((it, i) => (
                <div
                  key={it.title}
                  className={`group flex items-start gap-6 p-8 transition-colors duration-500 hover:bg-white/[0.02] ${i !== items.length - 1 ? 'border-b border-white/10' : ''}`}
                >
                  <div className="grid h-12 w-12 flex-none place-items-center border border-white/20 transition-colors duration-500 group-hover:border-primary group-hover:text-primary">
                    <it.icon className="h-5 w-5 text-white transition-colors duration-500 group-hover:text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold uppercase tracking-wide text-foreground">{it.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/60">{it.text}</p>
                  </div>
                </div>
              ))}
            </GsapParallax>
          </div>
        </div>
      </div>
    </section>
  );
}

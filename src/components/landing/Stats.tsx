"use client";
import { CountUp } from "@/components/fx/CountUp";
import { Reveal } from "@/components/fx/Reveal";

const stats = [
  { value: 100000, suffix: "+", label: "Users Served" },
  { value: 500000, suffix: "+", label: "Loan Opportunities Explored" },
  { value: 99.9, suffix: "%", label: "Platform Uptime" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
];

export function Stats() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-3xl border border-white/10 p-8 sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-40"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.15), transparent 50%, rgba(16,185,129,0.15))",
              }}
            />
            <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-white/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

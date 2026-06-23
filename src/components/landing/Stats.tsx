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
    <section className="relative py-24 bg-background z-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-white/10">
            {stats.map((s, i) => (
              <div 
                key={s.label} 
                className={`flex flex-col items-center justify-center p-12 text-center transition-colors duration-500 hover:bg-white/[0.02]
                  ${i !== stats.length - 1 ? 'border-b lg:border-r lg:border-b-0' : ''}
                  ${i === 1 ? 'md:border-b-0' : ''}
                `}
              >
                <p className="font-display text-4xl font-bold tracking-tighter text-foreground sm:text-6xl mb-4 text-gradient-blue">
                  <CountUp to={s.value} suffix={s.suffix} />
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-foreground/60">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

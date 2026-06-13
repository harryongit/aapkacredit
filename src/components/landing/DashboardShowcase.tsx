"use client";
import { TrendingUp, Wallet, CheckCircle2, Activity, Calculator } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/fx/Reveal";

function HealthRing({ value = 78 }: { value?: number }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  const dash = (value / 100) * c;
  return (
    <div className="relative h-32 w-32">
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        <circle cx="50" cy="50" r={r} stroke="rgba(255,255,255,0.08)" strokeWidth="8" fill="none" />
        <circle
          cx="50"
          cy="50"
          r={r}
          stroke="url(#hg)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${c - dash}`}
        />
        <defs>
          <linearGradient id="hg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <p className="font-display text-3xl font-semibold text-foreground">{value}</p>
          <p className="text-[10px] uppercase tracking-wider text-foreground/50">Health</p>
        </div>
      </div>
    </div>
  );
}

const offers = [
  {
    product: "Aapka Prime",
    rate: "10.4%",
    emi: "₹18,420",
    tag: "Best Match",
    tone: "text-emerald-400",
  },
  {
    product: "Aapka Express",
    rate: "10.9%",
    emi: "₹18,850",
    tag: "Fast Approval",
    tone: "text-sky-400",
  },
  {
    product: "Aapka Plus",
    rate: "11.2%",
    emi: "₹19,070",
    tag: "Low Fees",
    tone: "text-violet-400",
  },
];

export function DashboardShowcase() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Product"
          title={
            <>
              A workspace as <span className="text-gradient-blue">smart as your money</span>
            </>
          }
          subtitle="Your credit profile, offers, EMI planning and timeline — together in one place."
        />

        <Reveal className="relative mt-16">
          <div
            className="pointer-events-none absolute -inset-8 -z-10 rounded-[40px] opacity-50 blur-3xl"
            style={{
              background: "radial-gradient(closest-side, rgba(59,130,246,0.5), transparent 70%)",
            }}
          />
          <div className="glass-strong relative rounded-3xl border border-foreground/10 p-3 shadow-elegant sm:p-5">
            {/* window chrome */}
            <div className="mb-4 flex items-center gap-2 px-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
              <span className="ml-3 text-[11px] text-foreground/40">aapkacredit.app / dashboard</span>
            </div>

            <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
              {/* profile */}
              <div className="glass rounded-2xl p-5 lg:col-span-4">
                <p className="text-[11px] uppercase tracking-wider text-foreground/50">Credit Profile</p>
                <div className="mt-3 flex items-center gap-4">
                  <HealthRing value={78} />
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs text-foreground/50">Score</p>
                      <p className="font-display text-2xl font-semibold text-foreground">782</p>
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50">Utilization</p>
                      <p className="text-sm font-medium text-emerald-400">28%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* offers */}
              <div className="glass rounded-2xl p-5 lg:col-span-5">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-wider text-foreground/50">Loan Offers</p>
                  <Wallet className="h-4 w-4 text-foreground/40" />
                </div>
                <ul className="mt-3 space-y-2">
                  {offers.map((o) => (
                    <li
                      key={o.product}
                      className="flex items-center justify-between rounded-xl bg-white/[0.03] p-3 ring-1 ring-white/5"
                    >
                      <div>
                        <p className="text-sm font-medium text-foreground">{o.product}</p>
                        <p className={`text-[11px] ${o.tone}`}>{o.tag}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-foreground/50">EMI</p>
                        <p className="text-sm font-semibold text-foreground">{o.emi}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-foreground/50">Rate</p>
                        <p className="text-sm font-semibold text-foreground">{o.rate}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* EMI calc */}
              <div className="glass rounded-2xl p-5 lg:col-span-3">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-wider text-foreground/50">EMI Planner</p>
                  <Calculator className="h-4 w-4 text-foreground/40" />
                </div>
                <p className="mt-3 font-display text-3xl font-semibold text-foreground">₹18,420</p>
                <p className="text-xs text-foreground/50">/ month</p>
                <div className="mt-4 space-y-2 text-xs">
                  <div className="flex justify-between text-foreground/60">
                    <span>Amount</span>
                    <span className="text-foreground">₹10,00,000</span>
                  </div>
                  <div className="flex justify-between text-foreground/60">
                    <span>Tenure</span>
                    <span className="text-foreground">60 mo</span>
                  </div>
                  <div className="flex justify-between text-foreground/60">
                    <span>Rate</span>
                    <span className="text-foreground">10.4%</span>
                  </div>
                </div>
              </div>

              {/* timeline */}
              <div className="glass rounded-2xl p-5 lg:col-span-7">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-wider text-foreground/50">Activity</p>
                  <Activity className="h-4 w-4 text-foreground/40" />
                </div>
                <ul className="mt-3 space-y-3 text-sm">
                  {[
                    {
                      t: "Eligibility check completed",
                      s: "Profile matched",
                      time: "2m ago",
                      ok: true,
                    },
                    { t: "KYC verified", s: "PAN + Aadhaar", time: "1h ago", ok: true },
                    { t: "Profile updated", s: "Income & employment", time: "Today", ok: true },
                  ].map((a) => (
                    <li key={a.t} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
                      <div className="flex-1">
                        <p className="text-foreground">{a.t}</p>
                        <p className="text-xs text-foreground/50">{a.s}</p>
                      </div>
                      <span className="text-xs text-foreground/40">{a.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* trend */}
              <div className="glass rounded-2xl p-5 lg:col-span-5">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-wider text-foreground/50">
                    Repayment Trend
                  </p>
                  <TrendingUp className="h-4 w-4 text-emerald-400" />
                </div>
                <svg viewBox="0 0 300 100" className="mt-3 h-24 w-full">
                  <defs>
                    <linearGradient id="ar" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,80 C40,60 60,70 90,50 C120,30 150,55 180,40 C210,28 240,35 300,15 L300,100 L0,100 Z"
                    fill="url(#ar)"
                  />
                  <path
                    d="M0,80 C40,60 60,70 90,50 C120,30 150,55 180,40 C210,28 240,35 300,15"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="2"
                  />
                </svg>
                <div className="mt-2 flex justify-between text-[11px] text-foreground/50">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>May</span>
                  <span>Jul</span>
                  <span>Sep</span>
                  <span>Nov</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

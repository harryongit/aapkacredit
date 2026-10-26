"use client";

import { CountUp } from "@/components/fx/CountUp";
import { Users, IndianRupee, Zap, ThumbsUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 50,
    suffix: " Lakh+",
    label: "Registered Users",
    sub: "Across 2,400+ pin codes in India",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: IndianRupee,
    value: 2500,
    suffix: "+ Cr",
    label: "Total Disbursed",
    sub: "Directly into verified bank accounts",
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    icon: Zap,
    value: 2,
    suffix: " Mins",
    label: "Sanction Decision",
    sub: "Powered by instant bureau analytics",
    color: "text-amber-600 bg-amber-50",
  },
  {
    icon: ThumbsUp,
    value: 99.4,
    suffix: "%",
    label: "Happy Borrowers",
    sub: "Rated 4.8★ on Google Play Store",
    color: "text-purple-600 bg-purple-50",
  },
];

export function Stats() {
  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="bg-slate-50/80 rounded-3xl p-6 border border-slate-200/80 text-center flex flex-col items-center justify-between shadow-xs hover:shadow-md transition"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${s.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-1">
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <p className="text-sm font-bold text-slate-800">{s.label}</p>
                <p className="text-xs text-slate-500 mt-1">{s.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

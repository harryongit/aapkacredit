"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Gauge, ShieldCheck, CheckCircle2, ArrowRight, Star, Lock } from "lucide-react";

export function CreditScoreCheck() {
  const router = useRouter();
  const [mobile, setMobile] = useState("");
  const [pan, setPan] = useState("");

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/apply?mobile=${encodeURIComponent(mobile)}&pan=${encodeURIComponent(pan)}`);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50/60 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <Gauge className="w-3.5 h-3.5" /> Free Credit Health Report
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Check Your Credit Bureau Score For FREE With Zero Impact
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                Know where you stand before applying. Soft credit inquiry powered by TransUnion CIBIL and Experian. Uncover your personalized loan interest rates and pre-approved limits.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Free • No hidden fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero score deduction (Soft Pull)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Detailed credit health summary</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Exclusive lower interest offers</span>
                </div>
              </div>

              {/* Form Input */}
              <form onSubmit={handleCheck} className="pt-4 max-w-md">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="Enter 10-digit mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                    className="flex-1 px-4 py-3 bg-white/10 rounded-xl text-white placeholder:text-slate-400 text-sm border border-white/20 focus:outline-hidden focus:bg-white/15 font-semibold"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm rounded-xl transition shadow-md shadow-emerald-500/25 active:scale-98 inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Check Score</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-[11px] text-slate-400 mt-2 flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>Your information is strictly encrypted with bank-grade 256-bit SSL</span>
                </p>
              </form>
            </div>

            {/* Right Bureau Score Gauge Visual */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 text-center">
              <div className="relative w-44 h-44 flex items-center justify-center mb-4">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#10B981"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="200"
                    strokeDashoffset="45"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-black text-white">782</span>
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">Excellent</span>
                </div>
              </div>

              <div className="w-full space-y-2 pt-2 border-t border-white/10 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Score Range</span>
                  <span className="font-bold text-white">300 to 900</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Official Partners</span>
                  <span className="font-bold text-white">CIBIL • Experian • CRIF</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

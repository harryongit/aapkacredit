"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, ShieldCheck, Zap, Lock } from "lucide-react";

export function FinalCta() {
  const router = useRouter();
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobile.length >= 10) {
      router.push(`/apply?mobile=${encodeURIComponent(mobile)}`);
    } else {
      router.push("/apply");
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 px-6 py-16 sm:px-16 sm:py-20 text-white shadow-xl shadow-blue-500/20 text-center">
          
          {/* Subtle Glows */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/15 text-white backdrop-blur-xs border border-white/20">
              <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" /> Instant Disbursal Guarantee
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Ready To Get Instant Funds In Your Bank Account?
            </h2>

            <p className="text-base sm:text-lg text-blue-100 max-w-xl mx-auto leading-relaxed">
              Join over 50 Lakh+ happy borrowers across India. Check your sanction limit in under 60 seconds with zero credit score impact.
            </p>

            {/* Quick Action Form */}
            <form onSubmit={handleSubmit} className="pt-4 max-w-md mx-auto flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1 bg-white rounded-xl flex items-center pl-3.5 shadow-sm">
                <span className="text-sm font-bold text-slate-400 mr-2">+91</span>
                <input
                  type="tel"
                  maxLength={10}
                  placeholder="Enter 10-digit mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                  className="w-full text-sm text-slate-900 placeholder:text-slate-400 py-3 font-semibold focus:outline-hidden"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm rounded-xl transition shadow-md shadow-emerald-500/30 active:scale-98"
              >
                <span>Apply in 2 Mins</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-200">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-300" /> 100% Paperless DigiLocker e-KYC
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-emerald-300" /> Bank-Grade 256-Bit SSL
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-300" /> Zero Prepayment Fees
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

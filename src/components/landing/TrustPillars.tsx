"use client";

import { ShieldCheck, Lock, Zap, Clock, CheckCircle2, Award } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "RBI Regulated Lending",
    text: "Loans sanctioned strictly through RBI-registered NBFC lending partners adhering to digital lending guidelines.",
    badge: "100% Compliant",
    color: "text-blue-600 bg-blue-50 border-blue-200",
  },
  {
    icon: Zap,
    title: "100% Paperless KYC",
    text: "Instant digital verification using DigiLocker Aadhaar e-KYC and NSDL PAN verification in under 2 minutes.",
    badge: "Instant Approval",
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
  },
  {
    icon: Clock,
    title: "Zero Prepayment Fees",
    text: "Repay your loan early or close it anytime with absolutely zero foreclosure penalties or hidden charges.",
    badge: "Full Transparency",
    color: "text-indigo-600 bg-indigo-50 border-indigo-200",
  },
  {
    icon: Lock,
    title: "Bank-Grade 256-bit SSL",
    text: "ISO 27001 certified infrastructure ensures your personal information and documents remain encrypted & safe.",
    badge: "Data Protected",
    color: "text-purple-600 bg-purple-50 border-purple-200",
  },
];

export function TrustPillars() {
  return (
    <section className="py-20 bg-slate-50/60 border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 mb-3">
            <Award className="w-3.5 h-3.5" /> Why India Trusts Aapka Credit
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Fair, Transparent & Compliant Digital Lending
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Engineered from the ground up to give you stress-free access to funds with complete peace of mind.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${pillar.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{pillar.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{pillar.text}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified & Guaranteed</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

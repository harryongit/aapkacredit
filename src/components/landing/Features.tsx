"use client";

import { Check, X, Zap, Shield, Smartphone, HeartHandshake, RefreshCw, Clock } from "lucide-react";

const comparisons = [
  {
    feature: "Approval & Disbursal Speed",
    aapka: "5 to 10 Minutes via automated instant sanction",
    banks: "7 to 15 Days with multiple branch visits",
  },
  {
    feature: "Documentation",
    aapka: "100% Paperless DigiLocker e-KYC (Aadhaar & PAN)",
    banks: "Heavy physical dossiers, salary slips, photo proofs",
  },
  {
    feature: "Credit Score Requirement",
    aapka: "Flexible (Starter profiles 600+ welcomed)",
    banks: "Strict cutoff (750+ CIBIL score mandatory)",
  },
  {
    feature: "Prepayment & Foreclosure Charges",
    aapka: "Zero charges anytime after 1st EMI",
    banks: "2% to 5% penal foreclosure fee",
  },
  {
    feature: "Disbursal Channel",
    aapka: "Instant 24x7 IMPS directly to verified bank account",
    banks: "Delayed NEFT / Cheque clearing during working hours",
  },
];

const capabilities = [
  {
    icon: Zap,
    title: "Real-Time Eligibility Engine",
    desc: "Proprietary algorithmic underwriting computes instant sanction limits without affecting your credit score.",
  },
  {
    icon: Clock,
    title: "Instant 24x7 Disbursal",
    desc: "Once approved, funds are transferred straight to your bank account via IMPS within minutes — day or night.",
  },
  {
    icon: Shield,
    title: "100% RBI NBFC Compliant",
    desc: "Every loan adheres strictly to RBI digital lending guidelines and fair practice codes for borrower safety.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    desc: "Apply, track repayments, download NOCs, and request top-up loans conveniently from your smartphone.",
  },
  {
    icon: RefreshCw,
    title: "AutoPay via UPI & e-NACH",
    desc: "Hassle-free automated monthly instalments via NPCI e-Mandate or Google Pay, PhonePe, Paytm UPI.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Grievance Support",
    desc: "Friendly, responsive support team and dedicated nodal grievance officer to assist you at every step.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 mb-3">
            Better Than Banks
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Millions Of Indians Choose Aapka Credit
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Compare the modern fintech lending experience with slow legacy banking systems.
          </p>
        </div>

        {/* ── Side-by-Side Comparison Matrix (Like Navi & KreditBee) ── */}
        <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-16 overflow-x-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Digital Fintech vs Traditional Branch Banking</h3>
              <p className="text-xs text-slate-500">Transparent comparison of turnaround time, costs, and flexibility</p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold border border-emerald-200">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Saves Avg. ₹18,500 & 12 Days</span>
            </div>
          </div>

          <table className="w-full text-left border-collapse min-w-[620px]">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="pb-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-2/5">
                  Lending Feature
                </th>
                <th className="pb-4 text-sm font-extrabold text-blue-700 w-3/10 bg-blue-50/80 px-4 py-2.5 rounded-t-xl">
                  <div className="flex items-center gap-1.5">
                    <span>⚡ Aapka Credit</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white uppercase tracking-wider">
                      Winner
                    </span>
                  </div>
                </th>
                <th className="pb-4 text-xs font-bold text-slate-400 w-3/10 pl-4">
                  🏦 Traditional Banks
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/80">
              {comparisons.map((row) => (
                <tr key={row.feature} className="hover:bg-white/80 transition">
                  <td className="py-4 text-sm font-bold text-slate-800 pr-4">{row.feature}</td>
                  <td className="py-4 text-sm font-semibold text-emerald-800 pr-4 bg-blue-50/50 px-4 border-x border-blue-100">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{row.aapka}</span>
                    </div>
                  </td>
                  <td className="py-4 text-sm text-slate-500 pl-4">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{row.banks}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── 6 Capabilities Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200/60 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{c.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

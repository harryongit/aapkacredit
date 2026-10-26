"use client";

import Link from "next/link";
import { UserCheck, FileCheck2, CheckCircle, Banknote, ArrowRight, ShieldAlert, Sparkles } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Quick Registration",
    time: "Takes 60 Seconds",
    desc: "Enter your mobile number and verify via instant OTP. Enter basic employment and PAN details.",
    icon: UserCheck,
    color: "from-blue-600 to-indigo-600",
  },
  {
    step: "02",
    title: "100% Paperless KYC",
    time: "Takes 2 Minutes",
    desc: "Fast digital verification using DigiLocker Aadhaar XML and live liveness selfie match.",
    icon: FileCheck2,
    color: "from-indigo-600 to-purple-600",
  },
  {
    step: "03",
    title: "Instant Sanction Limit",
    time: "Instant Evaluation",
    desc: "Our automated credit engine analyzes bureau records and calculates your maximum loan sanction.",
    icon: CheckCircle,
    color: "from-purple-600 to-pink-600",
  },
  {
    step: "04",
    title: "Instant Money in Bank",
    time: "Direct IMPS Credit",
    desc: "Accept terms, complete instant penny-drop bank verification, and receive funds directly.",
    icon: Banknote,
    color: "from-emerald-600 to-teal-600",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24 bg-slate-50/70 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> 4 Simple Steps
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            From Application To Bank Credit In 5 Minutes
          </h2>
          <p className="mt-3 text-base text-slate-600">
            No physical branch visits. No mountain of paperwork. Experience modern fintech lending.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition duration-300 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-slate-300">
                      {s.step}
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">
                      {s.time}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center mb-4 shadow-sm shadow-blue-500/20">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>Step {idx + 1} of 4</span>
                  <span className="text-emerald-600 font-semibold">100% Online</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Representative Example Box (KreditBee & Moneyview Regulatory Compliance) ── */}
        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-amber-100 text-amber-800 rounded-md">
                  RBI Fair Practice Disclosure
                </span>
                <span className="text-xs font-medium text-slate-500">Representative Loan Calculation</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-2">
                Transparent Pricing Guarantee — Zero Hidden Surprises
              </h3>
            </div>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition shadow-xs self-start md:self-auto"
            >
              <span>Get Your Sanction Letter</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Key Metric Numbers */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-6 text-center">
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[11px] font-semibold text-slate-500 block">Principal Loan</span>
              <span className="text-base font-extrabold text-slate-900">₹1,00,000</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[11px] font-semibold text-slate-500 block">Tenure</span>
              <span className="text-base font-extrabold text-slate-900">12 Months</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[11px] font-semibold text-slate-500 block">Interest Rate</span>
              <span className="text-base font-extrabold text-emerald-600">12% p.a.</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[11px] font-semibold text-slate-500 block">Monthly EMI</span>
              <span className="text-base font-extrabold text-blue-600">₹8,885</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[11px] font-semibold text-slate-500 block">Total Interest</span>
              <span className="text-base font-extrabold text-slate-900">₹6,619</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[11px] font-semibold text-slate-500 block">Total Repayment</span>
              <span className="text-base font-extrabold text-slate-900">₹1,06,619</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">
            *Representative Example: For a loan of ₹1,00,000 borrowed for 12 months at an annual interest rate (APR) of 12%, processing fee of 2% (₹2,000 + 18% GST = ₹2,360), net disbursed amount is ₹97,640. Monthly EMI will be ₹8,885. Total interest payable is ₹6,619. Total amount repayable is ₹1,06,619. Annual Percentage Rate (APR) comes to 14.8%.
          </p>
        </div>

      </div>
    </section>
  );
}

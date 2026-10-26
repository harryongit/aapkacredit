"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";

export function EligibilityCalculator() {
  const [empType, setEmpType] = useState<"salaried" | "self-employed">("salaried");
  const [income, setIncome] = useState<number>(45000);
  const [existingEmi, setExistingEmi] = useState<number>(5000);

  // Industry Standard: Max 50% FOIR (Fixed Obligation to Income Ratio)
  const foirLimit = empType === "salaried" ? 0.50 : 0.45;
  const maxAllowableEmi = Math.max(0, Math.round(income * foirLimit - existingEmi));
  
  // Approximate loan eligibility based on 36-month tenure at 10.49% p.a.
  const r = 10.49 / 12 / 100;
  const n = 36;
  const eligibleAmount = maxAllowableEmi > 0
    ? Math.min(5000000, Math.round(maxAllowableEmi * ((Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n)))))
    : 0;

  const currentFoirPercent = Math.min(100, Math.round(((existingEmi + maxAllowableEmi) / income) * 100));

  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 mb-3">
            <Calculator className="w-3.5 h-3.5" /> FOIR Assessment Tool
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Check Your Maximum Borrowing Capacity In Real Time
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Our instant underwriting algorithm uses standard RBI FOIR guidelines to estimate how much loan you can comfortably afford.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Employment Type Selector */}
              <div>
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2.5">
                  Employment Status
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setEmpType("salaried")}
                    className={`py-3 px-4 rounded-xl font-bold text-sm border transition text-center ${
                      empType === "salaried"
                        ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    Salaried Professional
                  </button>
                  <button
                    type="button"
                    onClick={() => setEmpType("self-employed")}
                    className={`py-3 px-4 rounded-xl font-bold text-sm border transition text-center ${
                      empType === "self-employed"
                        ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    Self-Employed / Business
                  </button>
                </div>
              </div>

              {/* Slider 1: Monthly Income */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Net Monthly Take-Home Income
                  </label>
                  <span className="text-lg font-black text-blue-600">₹{income.toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range"
                  min={15000}
                  max={300000}
                  step={5000}
                  value={income}
                  onChange={(e) => setIncome(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-slate-400 font-medium">
                  <span>₹15,000 / mo</span>
                  <span>₹3,00,000 / mo</span>
                </div>
              </div>

              {/* Slider 2: Existing EMIs */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Existing Monthly Loan EMIs (if any)
                  </label>
                  <span className="text-lg font-black text-slate-900">₹{existingEmi.toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100000}
                  step={2000}
                  value={existingEmi}
                  onChange={(e) => setExistingEmi(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-slate-400 font-medium">
                  <span>₹0 (No existing loans)</span>
                  <span>₹1,00,000 / mo</span>
                </div>
              </div>

            </div>

            {/* Right Sanction Result Card */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col justify-between text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                Instant Sanction
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  You Are Eligible For Up To
                </span>
                <div className="text-3xl sm:text-4xl font-black text-emerald-600 mb-2">
                  ₹{eligibleAmount > 0 ? eligibleAmount.toLocaleString("en-IN") : "0"}
                </div>
                <p className="text-xs text-slate-500">
                  Calculated at 10.49% p.a. for a 36-month tenure
                </p>

                {/* Breakdown Details */}
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5 text-xs text-left">
                  <div className="flex justify-between text-slate-600">
                    <span>Safe Disposable EMI</span>
                    <span className="font-bold text-slate-900">₹{maxAllowableEmi.toLocaleString("en-IN")} / mo</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>FOIR Ratio</span>
                    <span className="font-bold text-emerald-600">{currentFoirPercent}% (Healthy)</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Sanction Speed</span>
                    <span className="font-bold text-blue-600">Under 5 Minutes</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href={`/apply?amount=${eligibleAmount > 0 ? eligibleAmount : 100000}&tenure=36`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition shadow-md shadow-blue-500/25 active:scale-98"
                >
                  <span>Claim Sanction Letter</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-[11px] text-slate-400 mt-2 font-medium">
                  Zero impact on your credit score
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

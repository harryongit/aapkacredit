"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  ArrowRight,
  Star,
  Building2,
  Lock,
  Smartphone,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

const liveDisbursals = [
  { name: "Rahul M.", city: "Bengaluru", amount: "₹1,50,000", time: "2m ago" },
  { name: "Ananya S.", city: "Jaipur", amount: "₹75,000", time: "3m ago" },
  { name: "Vikram P.", city: "Mumbai", amount: "₹3,00,000", time: "5m ago" },
  { name: "Deepak K.", city: "Hyderabad", amount: "₹45,000", time: "8m ago" },
  { name: "Sneha G.", city: "Delhi NCR", amount: "₹2,20,000", time: "11m ago" },
];

export function Hero() {
  const router = useRouter();
  const [mobileNumber, setMobileNumber] = useState("");
  const [loanAmount, setLoanAmount] = useState<number>(300000);
  const [tenureMonths, setTenureMonths] = useState<number>(24);
  const [tickerIdx, setTickerIdx] = useState(0);
  const interestRate = 10.49; // 10.49% p.a.

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIdx((prev) => (prev + 1) % liveDisbursals.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // EMI Formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const monthlyRate = interestRate / 12 / 100;
  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
      (Math.pow(1 + monthlyRate, tenureMonths) - 1)
  );
  const totalPayable = emi * tenureMonths;
  const totalInterest = totalPayable - loanAmount;

  const handleMobileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileNumber.length >= 10) {
      router.push(`/apply?mobile=${encodeURIComponent(mobileNumber)}&amount=${loanAmount}&tenure=${tenureMonths}`);
    } else {
      router.push(`/apply?amount=${loanAmount}&tenure=${tenureMonths}`);
    }
  };

  const amountPresets = [50000, 100000, 300000, 500000, 1000000, 2500000];
  const tenurePresets = [6, 12, 24, 36, 48, 60];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50/40 pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-blue-100/40 via-emerald-100/30 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ── Left Column: Value Proposition & High Trust ── */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Micro Badges Row */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/90 px-3.5 py-1 text-xs font-bold text-blue-700 border border-blue-200/60 shadow-xs">
                <Zap className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                <span>5-Min Disbursal • RBI Regulated</span>
              </div>

              {/* Dynamic Live Disbursal Ticker (Navi / KreditBee Style) */}
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 border border-emerald-200/80 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>
                  Disbursed <strong className="font-extrabold text-emerald-950">{liveDisbursals[tickerIdx].amount}</strong> to {liveDisbursals[tickerIdx].name} ({liveDisbursals[tickerIdx].city}) • {liveDisbursals[tickerIdx].time}
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Get Instant Loans Up To{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600">
                ₹50,00,000
              </span>{" "}
              in 5 Minutes
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              India&apos;s most trusted digital lending platform. 100% paperless KYC, low interest rates starting from{" "}
              <strong className="text-slate-900 font-semibold">10.49% p.a.</strong>, and instant IMPS cash transfer directly to your bank account.
            </p>

            {/* Quick Benefits Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>100% Digital via DigiLocker & Aadhaar</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Instant Bank Disbursal via IMPS</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Zero Prepayment & Foreclosure Charges</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Starter CIBIL Score (600+) Welcomed</span>
              </div>
            </div>

            {/* Instant Mobile Sanction Form */}
            <div className="pt-4 max-w-lg">
              <form onSubmit={handleMobileSubmit} className="flex flex-col sm:flex-row gap-2.5 p-1.5 bg-white rounded-2xl shadow-lg border border-slate-200">
                <div className="relative flex-1 flex items-center pl-3">
                  <span className="text-sm font-bold text-slate-400 mr-2">+91</span>
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="Enter 10-digit mobile number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ""))}
                    className="w-full text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden py-2.5 font-medium"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-sm rounded-xl transition shadow-md shadow-blue-500/25 active:scale-98"
                >
                  <span>Check Sanction</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              <p className="text-xs text-slate-500 mt-2 flex items-center gap-1.5 pl-1">
                <Lock className="h-3 w-3 text-emerald-600" />
                <span>Zero spam • 256-bit bank grade encryption • No impact on CIBIL score</span>
              </p>
            </div>

            {/* Social Proof Strip */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-6 sm:gap-10">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-800">4.8 / 5 Rating</span>
              </div>
              <div className="text-xs text-slate-600 font-medium">
                <strong className="text-slate-900 font-bold">50 Lakh+</strong> Happy Customers
              </div>
              <div className="text-xs text-slate-600 font-medium">
                <strong className="text-slate-900 font-bold">₹2,500+ Cr</strong> Disbursed
              </div>
            </div>
          </div>

          {/* ── Right Column: Interactive Loan EMI Calculator (Navi / KreditBee Style) ── */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/90 relative">
              
              {/* Badge */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Instant EMI Calculator</h3>
                  <p className="text-xs text-slate-500">Calculate customized monthly instalments</p>
                </div>
                <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">
                  From 10.49% p.a.
                </span>
              </div>

              {/* Slider 1: Loan Amount */}
              <div className="pt-5 space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Loan Amount</label>
                  <span className="text-lg font-extrabold text-blue-600">₹{loanAmount.toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range"
                  min={10000}
                  max={5000000}
                  step={10000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                {/* Preset Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {amountPresets.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setLoanAmount(preset)}
                      className={`text-[11px] font-semibold px-2 py-1 rounded-md border transition ${
                        loanAmount === preset
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      ₹{preset >= 100000 ? `${preset / 100000}L` : `${preset / 1000}K`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 2: Tenure */}
              <div className="pt-6 space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Loan Tenure</label>
                  <span className="text-lg font-extrabold text-slate-900">{tenureMonths} Months</span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={60}
                  step={1}
                  value={tenureMonths}
                  onChange={(e) => setTenureMonths(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                {/* Tenure Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {tenurePresets.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTenureMonths(t)}
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-md border transition ${
                        tenureMonths === t
                          ? "bg-slate-900 text-white border-slate-900"
                          : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {t}M
                    </button>
                  ))}
                </div>
              </div>

              {/* Output Box */}
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-50/60 border border-blue-100">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-600">Estimated Monthly EMI</span>
                  <span className="text-2xl font-black text-blue-700">₹{emi.toLocaleString("en-IN")}<span className="text-xs text-slate-500 font-normal"> / mo</span></span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-blue-200/60 text-xs">
                  <div>
                    <span className="text-slate-500 block">Total Interest</span>
                    <span className="font-bold text-slate-800">₹{totalInterest.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-500 block">Total Payable</span>
                    <span className="font-bold text-slate-800">₹{totalPayable.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-5">
                <Link
                  href={`/apply?amount=${loanAmount}&tenure=${tenureMonths}`}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition shadow-md shadow-emerald-600/25 active:scale-98"
                >
                  <span>Apply for ₹{loanAmount.toLocaleString("en-IN")} Now</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <p className="text-[11px] text-center text-slate-400 mt-2 font-medium">
                  Instant decision in 2 minutes • 100% online
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

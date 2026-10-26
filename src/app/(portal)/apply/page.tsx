"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  ChevronRight,
  FileText,
  CreditCard,
  ShieldCheck,
  Building2,
  Lock,
  ArrowRight,
  User,
  Phone,
  Mail,
  Zap,
} from "lucide-react";
import Link from "next/link";

function ApplyForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialAmount = Number(searchParams.get("amount")) || 200000;
  const initialTenure = Number(searchParams.get("tenure")) || 24;
  const initialMobile = searchParams.get("mobile") || "";
  const initialPan = searchParams.get("pan") || "";

  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState("Aarav Sharma");
  const [mobile, setMobile] = useState(initialMobile || "9876543210");
  const [email, setEmail] = useState("aarav.sharma@example.com");
  const [empType, setEmpType] = useState<"salaried" | "self-employed">("salaried");
  const [monthlyIncome, setMonthlyIncome] = useState(65000);

  // Step 2 KYC
  const [pan, setPan] = useState(initialPan || "ABCDE1234F");
  const [aadhaar, setAadhaar] = useState("982348102914");

  // Step 3 Loan terms & bank
  const [amount, setAmount] = useState(initialAmount);
  const [tenure, setTenure] = useState(initialTenure);
  const [bankName, setBankName] = useState("HDFC Bank");
  const [accountNumber, setAccountNumber] = useState("50100482910482");
  const [ifsc, setIfsc] = useState("HDFC0001234");
  const [loading, setLoading] = useState(false);

  // EMI computation
  const interestRate = 10.49;
  const r = interestRate / 12 / 100;
  const emi = Math.round((amount * r * Math.pow(1 + r, tenure)) / (Math.pow(1 + r, tenure) - 1));

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (mobile.length >= 10 && fullName.length >= 2) setStep(2);
    } else if (step === 2) {
      if (pan.length >= 10 && aadhaar.length >= 12) setStep(3);
    } else {
      setLoading(true);
      setTimeout(() => {
        sessionStorage.setItem("loan_application_status", "approved");
        sessionStorage.setItem("loan_application_amount", amount.toString());
        sessionStorage.setItem("loan_application_tenure", tenure.toString());
        sessionStorage.setItem("loan_application_emi", emi.toString());
        sessionStorage.setItem("loan_application_user", fullName);
        sessionStorage.setItem("loan_application_bank", `${bankName} (A/C ••••${accountNumber.slice(-4)})`);
        router.push("/apply/status");
      }, 800);
    }
  };

  return (
    <div className="mx-auto max-w-3xl p-4 sm:p-6 lg:p-8">
      {/* Top Header */}
      <div className="mb-8 text-center sm:text-left">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 mb-2">
          <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> Fast-Track Application
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          Apply For Instant Loan Sanction
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          100% paperless digital verification. Funds disbursed directly via IMPS.
        </p>
      </div>

      {/* 3-Step Visual Progress Bar */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`flex items-center justify-center h-8 w-8 rounded-full font-bold text-xs ${step >= 1 ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-600"}`}>
            1
          </div>
          <span className="text-xs font-bold text-slate-800 hidden sm:inline">Profile</span>
        </div>
        <div className={`flex-1 h-1 mx-3 rounded-full ${step >= 2 ? "bg-blue-600" : "bg-slate-200"}`} />
        
        <div className="flex items-center gap-2">
          <div className={`flex items-center justify-center h-8 w-8 rounded-full font-bold text-xs ${step >= 2 ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-600"}`}>
            2
          </div>
          <span className="text-xs font-bold text-slate-800 hidden sm:inline">Digital KYC</span>
        </div>
        <div className={`flex-1 h-1 mx-3 rounded-full ${step >= 3 ? "bg-blue-600" : "bg-slate-200"}`} />

        <div className="flex items-center gap-2">
          <div className={`flex items-center justify-center h-8 w-8 rounded-full font-bold text-xs ${step >= 3 ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-600"}`}>
            3
          </div>
          <span className="text-xs font-bold text-slate-800 hidden sm:inline">Bank Disbursal</span>
        </div>
      </div>

      {/* Application Form Card */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg">
        <form onSubmit={handleNext}>
          
          {/* ── STEP 1: Personal & Employment Details ── */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Personal & Income Details</h2>
                  <p className="text-xs text-slate-500">Enter your details as recorded in your bank account.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name (as per PAN)
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:outline-hidden focus:border-blue-600"
                    placeholder="e.g. Aarav Sharma"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    10-Digit Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:outline-hidden focus:border-blue-600"
                    placeholder="9876543210"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:outline-hidden focus:border-blue-600"
                    placeholder="name@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Employment Type
                  </label>
                  <select
                    value={empType}
                    onChange={(e) => setEmpType(e.target.value as any)}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:outline-hidden focus:border-blue-600 bg-white"
                  >
                    <option value="salaried">Salaried (Private / Govt)</option>
                    <option value="self-employed">Self-Employed / Business Owner</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Net Monthly Take-Home Income
                  </label>
                  <span className="text-base font-extrabold text-blue-600">₹{monthlyIncome.toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range"
                  min={15000}
                  max={250000}
                  step={5000}
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition shadow-md shadow-blue-500/25 active:scale-98"
                >
                  <span>Proceed to Digital KYC</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 2: Instant Digital KYC (DigiLocker & NSDL) ── */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Paperless Identity Verification</h2>
                  <p className="text-xs text-slate-500">Government approved DigiLocker e-KYC integration.</p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Permanent Account Number (PAN)
                </label>
                <input
                  type="text"
                  required
                  maxLength={10}
                  value={pan}
                  onChange={(e) => setPan(e.target.value.toUpperCase())}
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm font-bold text-slate-900 uppercase tracking-widest focus:outline-hidden focus:border-blue-600 font-mono"
                  placeholder="ABCDE1234F"
                />
                <p className="text-[11px] text-emerald-600 font-medium mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> NSDL Database Connected
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  12-Digit Aadhaar Number (DigiLocker)
                </label>
                <input
                  type="text"
                  required
                  maxLength={12}
                  value={aadhaar}
                  onChange={(e) => setAadhaar(e.target.value.replace(/\D/g, ""))}
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm font-bold text-slate-900 tracking-wider focus:outline-hidden focus:border-blue-600 font-mono"
                  placeholder="123456789012"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  We will perform a secure DigiLocker XML verification via OTP.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs text-slate-600 space-y-1">
                <span className="font-bold text-slate-900 block">UIDAI Compliance Notice</span>
                <span>Your full Aadhaar number is masked per UIDAI regulations. Only the last 4 digits are stored in compliant encrypted vaults.</span>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 px-4 rounded-xl border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={pan.length < 10 || aadhaar.length < 12}
                  className="flex-[2] flex items-center justify-center gap-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition shadow-md shadow-blue-500/25 disabled:opacity-50"
                >
                  <span>Verify & Set Loan Terms</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 3: Loan Customization & Bank Selection ── */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Confirm Terms & Bank Account</h2>
                  <p className="text-xs text-slate-500">Direct 24x7 IMPS disbursal to your verified account.</p>
                </div>
              </div>

              {/* Amount Slider */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Sanction Amount Required
                  </label>
                  <span className="text-xl font-black text-blue-600">₹{amount.toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range"
                  min={10000}
                  max={5000000}
                  step={10000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              {/* Tenure Selection */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Repayment Tenure
                  </label>
                  <span className="text-base font-extrabold text-slate-900">{tenure} Months</span>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {[6, 12, 24, 36, 48, 60].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTenure(t)}
                      className={`py-2 text-xs font-bold rounded-xl border transition ${
                        tenure === t
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {t}M
                    </button>
                  ))}
                </div>
              </div>

              {/* Live EMI Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 font-medium block">Monthly Instalment (EMI)</span>
                  <span className="text-2xl font-black text-blue-700">₹{emi.toLocaleString("en-IN")}<span className="text-xs font-normal text-slate-500"> / mo</span></span>
                </div>
                <div className="text-right text-xs">
                  <span className="text-slate-500 block">Interest Rate</span>
                  <span className="font-extrabold text-emerald-600">10.49% p.a.</span>
                </div>
              </div>

              {/* Bank Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Bank Account Number
                  </label>
                  <input
                    type="text"
                    required
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value.replace(/\D/g, ""))}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm font-bold text-slate-900 focus:outline-hidden focus:border-blue-600 font-mono"
                    placeholder="e.g. 50100482910482"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    IFSC Code
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={11}
                    value={ifsc}
                    onChange={(e) => setIfsc(e.target.value.toUpperCase())}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm font-bold text-slate-900 focus:outline-hidden focus:border-blue-600 font-mono uppercase"
                    placeholder="e.g. HDFC0001234"
                  />
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 py-3 px-4 rounded-xl border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-[2] flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition shadow-md shadow-emerald-600/25 disabled:opacity-50"
                >
                  <span>{loading ? "Sanctioning..." : `Disburse ₹${amount.toLocaleString("en-IN")} Now`}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </form>
      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500">Loading application engine...</div>}>
      <ApplyForm />
    </Suspense>
  );
}

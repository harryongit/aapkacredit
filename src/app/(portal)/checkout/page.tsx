"use client";

import { useState } from "react";
import { RazorpayCheckoutButton } from "@/components/payments/RazorpayCheckoutButton";
import { ShieldCheck, CreditCard, Sparkles, CheckCircle2, Lock, ArrowRight } from "lucide-react";

export default function CheckoutDemoPage() {
  const [selectedAmount, setSelectedAmount] = useState<number>(4500);
  const [purpose, setPurpose] = useState<string>("Upcoming EMI Payment");
  const [lastPayment, setLastPayment] = useState<any>(null);

  const presets = [
    { label: "Assessment Fee", amount: 299, desc: "One-time digital KYC & bureau underwriting" },
    { label: "Processing Fee", amount: 999, desc: "Mandate setup & document clearance" },
    { label: "EMI Repayment", amount: 4500, desc: "Monthly installment for Loan #LNF-987654321" },
    { label: "Advance Settlement", amount: 12500, desc: "Principal reduction payment" },
  ];

  return (
    <div className="mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 mb-2">
          <ShieldCheck className="w-3.5 h-3.5" /> Razorpay Standard Checkout Gateway
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Digital Loan Repayment & Fee Checkout
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Seamless, bank-grade payment processing powered by Razorpay Standard Web Checkout.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Payment Options */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-blue-600" /> Select Payment Type
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {presets.map((p) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => {
                    setSelectedAmount(p.amount);
                    setPurpose(p.label);
                  }}
                  className={`p-3.5 rounded-2xl border text-left transition ${
                    selectedAmount === p.amount
                      ? "border-blue-600 bg-blue-50/70 shadow-xs"
                      : "border-slate-200 bg-slate-50/50 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-slate-800">{p.label}</span>
                    <span className="text-sm font-extrabold text-blue-600">₹{p.amount.toLocaleString("en-IN")}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-snug">{p.desc}</p>
                </button>
              ))}
            </div>

            {/* Custom Amount Field */}
            <div className="pt-2">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1.5">
                Or Enter Custom Amount (₹)
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-2.5 text-sm font-bold text-slate-400">₹</span>
                <input
                  type="number"
                  min={1}
                  value={selectedAmount}
                  onChange={(e) => setSelectedAmount(Math.max(1, Number(e.target.value)))}
                  className="w-full pl-8 pr-4 py-2 text-sm font-bold text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:border-blue-600"
                />
              </div>
            </div>
          </div>

          {/* Institutional Security Notice */}
          <div className="p-4 rounded-2xl bg-slate-100/70 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
            <Lock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-800 block">Bank-Grade 256-Bit TLS Encryption</span>
              <span>All card, UPI, netbanking, and wallet transactions are processed securely via Razorpay PCI-DSS certified gateway.</span>
            </div>
          </div>
        </div>

        {/* Right Column: Checkout Summary Card */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-5">
            <div className="pb-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-900">Order Summary</h3>
                <p className="text-xs text-slate-500">{purpose}</p>
              </div>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                Test Mode Active
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Payable Amount:</span>
                <span className="font-bold text-slate-900">₹{selectedAmount.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Gateway Convenience Fee:</span>
                <span className="font-bold text-emerald-600">₹0 (Free)</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>GST (18% included):</span>
                <span className="font-medium text-slate-500">₹0.00</span>
              </div>
              <div className="pt-2 border-t border-slate-100 flex justify-between items-baseline text-sm">
                <span className="font-bold text-slate-900">Total Due:</span>
                <span className="text-2xl font-black text-blue-600">₹{selectedAmount.toLocaleString("en-IN")}</span>
              </div>
            </div>

            {/* Standard Checkout Button */}
            <div className="pt-2">
              <RazorpayCheckoutButton
                amount={selectedAmount}
                purpose={purpose}
                className="w-full justify-center py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition shadow-md shadow-blue-500/25 active:scale-98"
                buttonText={`Pay ₹${selectedAmount.toLocaleString("en-IN")} via Razorpay`}
                onSuccess={(data) => setLastPayment(data)}
              />
              <p className="text-[11px] text-center text-slate-400 mt-2">
                Supports UPI, Credit/Debit Cards, NetBanking & Wallets
              </p>
            </div>

            {/* Success Details Box */}
            {lastPayment && (
              <div className="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-1 animate-fade-in">
                <div className="flex items-center gap-1.5 font-bold text-emerald-800 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified & Confirmed</span>
                </div>
                <p>
                  <strong>Payment ID:</strong> <span className="font-mono">{lastPayment.payment_id}</span>
                </p>
                <p>
                  <strong>Order ID:</strong> <span className="font-mono">{lastPayment.order_id}</span>
                </p>
                <p className="text-[11px] text-emerald-700 pt-1">
                  Signature verified with HMAC-SHA256 on backend server.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

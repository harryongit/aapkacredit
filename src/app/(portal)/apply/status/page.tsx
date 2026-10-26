"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, ShieldCheck, ArrowRight, Download, Printer, Banknote, Building2 } from "lucide-react";
import Link from "next/link";

export default function ApplyStatusPage() {
  const [amount, setAmount] = useState<string>("300000");
  const [tenure, setTenure] = useState<string>("24");
  const [emi, setEmi] = useState<string>("13908");
  const [user, setUser] = useState<string>("Aarav Sharma");
  const [bank, setBank] = useState<string>("HDFC Bank (A/C ••••4821)");
  const [utrNumber, setUtrNumber] = useState<string>("IMPS9182904812");
  const router = useRouter();

  useEffect(() => {
    const loanAmount = sessionStorage.getItem("loan_application_amount");
    const loanTenure = sessionStorage.getItem("loan_application_tenure");
    const loanEmi = sessionStorage.getItem("loan_application_emi");
    const loanUser = sessionStorage.getItem("loan_application_user");
    const loanBank = sessionStorage.getItem("loan_application_bank");

    if (loanAmount) setAmount(loanAmount);
    if (loanTenure) setTenure(loanTenure);
    if (loanEmi) setEmi(loanEmi);
    if (loanUser) setUser(loanUser);
    if (loanBank) setBank(loanBank);

    setUtrNumber(`IMPS${Math.floor(1000000000 + Math.random() * 9000000000)}`);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="mx-auto max-w-3xl p-4 sm:p-6 lg:p-8">
      {/* ── Official Sanction Certificate ── */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl relative overflow-hidden">
        
        {/* Top Watermark / Status Badge */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-slate-200 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block">
                Sanction Approved & Disbursed
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900">
                Official Loan Sanction Letter
              </h1>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono font-bold px-3 py-1 bg-slate-100 text-slate-800 rounded-lg border border-slate-200">
              REF: AC-2026-9810
            </span>
            <p className="text-[11px] text-slate-400 mt-1">RBI Compliant NBFC Loan</p>
          </div>
        </div>

        {/* Big Amount Card */}
        <div className="my-6 p-6 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 border border-emerald-200 text-center">
          <span className="text-xs uppercase font-bold text-slate-500 tracking-wider block mb-1">
            Total Sanctioned Principal Amount
          </span>
          <div className="text-4xl sm:text-5xl font-black text-emerald-700">
            ₹{Number(amount).toLocaleString("en-IN")}
          </div>
          <p className="text-xs text-slate-600 mt-2 font-medium">
            Approved for {user} • Interest rate: 10.49% p.a. • Tenure: {tenure} Months
          </p>
        </div>

        {/* Structured Terms Table */}
        <div className="border border-slate-200 rounded-2xl overflow-hidden mb-6 text-xs">
          <table className="w-full text-left">
            <tbody className="divide-y divide-slate-100">
              <tr className="bg-slate-50/70">
                <td className="p-3 font-semibold text-slate-500 w-1/3">Borrower Name</td>
                <td className="p-3 font-bold text-slate-900">{user}</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-500">Monthly EMI</td>
                <td className="p-3 font-bold text-blue-600">₹{Number(emi).toLocaleString("en-IN")} / month</td>
              </tr>
              <tr className="bg-slate-50/70">
                <td className="p-3 font-semibold text-slate-500">Disbursal Bank</td>
                <td className="p-3 font-bold text-slate-900">{bank}</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-500">IMPS Payout UTR</td>
                <td className="p-3 font-mono font-bold text-emerald-600">{utrNumber} (SUCCESS)</td>
              </tr>
              <tr className="bg-slate-50/70">
                <td className="p-3 font-semibold text-slate-500">Prepayment / Foreclosure</td>
                <td className="p-3 font-semibold text-emerald-600">Zero charges after 1st EMI</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 4-Step Disbursal Status Milestones */}
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-3">
            Real-Time Payout Status
          </span>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>DigiLocker KYC & Bureau Assessment verified</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Penny drop bank account verification matched 100%</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Digital loan agreement digitally signed via OTP</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-700 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Funds transferred via 24x7 IMPS (Credited to bank)</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2 print:hidden">
          <button
            type="button"
            onClick={handlePrint}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 border border-slate-300 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-50 transition"
          >
            <Printer className="w-4 h-4" />
            <span>Print Official Sanction Letter</span>
          </button>

          <Link
            href="/"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition shadow-md shadow-blue-500/25"
          >
            <span>Back to Home</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}

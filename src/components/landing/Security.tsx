"use client";

import { ShieldCheck, KeyRound, Server, FileLock, Building2, CheckCircle2, Lock } from "lucide-react";

const securityFeatures = [
  {
    icon: KeyRound,
    title: "256-Bit Bank-Grade Encryption",
    text: "All customer data in transit and at rest is protected with AES-256 encryption, matching tier-1 banking standards.",
  },
  {
    icon: Server,
    title: "Data Localized in India",
    text: "100% of user data and loan documents are hosted on secure Indian cloud servers adhering strictly to RBI data localization norms.",
  },
  {
    icon: ShieldCheck,
    title: "RBI NBFC Compliant Architecture",
    text: "Direct integration with licensed RBI-registered NBFCs ensuring strict adherence to the Digital Lending Guidelines (DLG).",
  },
  {
    icon: FileLock,
    title: "DigiLocker & UIDAI Approved",
    text: "Paperless identity verification powered by official government DigiLocker XML e-KYC and NSDL PAN verification APIs.",
  },
  {
    icon: Building2,
    title: "Zero Data Sharing Policy",
    text: "We never sell or share your phone number, contacts, or documents with third-party telemarketers. Your privacy is inviolable.",
  },
];

export function Security() {
  return (
    <section id="security" className="py-24 bg-slate-50/80 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-3">
            <Lock className="w-3.5 h-3.5" /> Institutional Safety
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bank-Grade Security Built For Your Peace Of Mind
          </h2>
          <p className="mt-3 text-base text-slate-600">
            We hold ourselves to the highest standards of financial data security and regulatory compliance.
          </p>
        </div>

        {/* Big Security Banner Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Big Shield */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50/60 rounded-3xl border border-blue-100 text-center">
              <div className="w-24 h-24 rounded-3xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/25 mb-6">
                <ShieldCheck className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">100% Safe & Encrypted</h3>
              <p className="text-xs text-slate-600 max-w-xs leading-relaxed">
                Licensed under RBI NBFC digital lending framework with 24x7 threat monitoring and continuous penetration testing.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <span className="text-[11px] font-bold px-3 py-1 bg-white text-slate-800 rounded-full border border-slate-200">
                  ISO 27001 Certified
                </span>
                <span className="text-[11px] font-bold px-3 py-1 bg-white text-slate-800 rounded-full border border-slate-200">
                  DigiLocker Partner
                </span>
                <span className="text-[11px] font-bold px-3 py-1 bg-white text-slate-800 rounded-full border border-slate-200">
                  PCI-DSS Aligned
                </span>
              </div>
            </div>

            {/* Right Security Checklist */}
            <div className="lg:col-span-7 space-y-5">
              {securityFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div key={feat.title} className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 transition">
                    <div className="w-10 h-10 rounded-xl bg-blue-100/80 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{feat.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-0.5">{feat.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { User, Briefcase, GraduationCap, Bike, ArrowRight, Check, Zap, Percent } from "lucide-react";

const products = [
  {
    id: "personal",
    title: "Flexi Personal Loan",
    category: "Salaried & Self-Employed",
    amount: "Up to ₹5,00,000",
    rate: "From 10.49% p.a.",
    tenure: "3 to 36 Months",
    icon: User,
    color: "from-blue-600 to-indigo-600",
    bgLight: "bg-blue-50/70 border-blue-200",
    iconColor: "text-blue-600",
    badge: "Most Popular",
    features: [
      "Instant sanction in 2 minutes",
      "No physical collateral required",
      "Emergency cash directly to bank",
      "Flexible repayment via UPI/Auto-debit",
    ],
    href: "/personal-loan",
  },
  {
    id: "business",
    title: "MSME Business Loan",
    category: "Retailers, Traders & MSMEs",
    amount: "Up to ₹50,00,000",
    rate: "From 12.99% p.a.",
    tenure: "6 to 60 Months",
    icon: Briefcase,
    color: "from-emerald-600 to-teal-600",
    bgLight: "bg-emerald-50/70 border-emerald-200",
    iconColor: "text-emerald-600",
    badge: "High Sanction",
    features: [
      "Working capital & inventory funding",
      "Zero collateral up to ₹25 Lakhs",
      "Simple GST & bank statement upload",
      "Fast 24-hour disbursal to account",
    ],
    href: "/business-loan",
  },
  {
    id: "education",
    title: "Education & Career Loan",
    category: "Students & Upskilling Professionals",
    amount: "Up to ₹25,00,000",
    rate: "From 9.99% p.a.",
    tenure: "12 to 84 Months",
    icon: GraduationCap,
    color: "from-purple-600 to-indigo-600",
    bgLight: "bg-purple-50/70 border-purple-200",
    iconColor: "text-purple-600",
    badge: "Lowest Interest",
    features: [
      "100% course fee coverage",
      "Moratorium period until course finishes",
      "Domestic & international universities",
      "Tax deduction under Section 80E",
    ],
    href: "/education-loan",
  },
  {
    id: "twowheeler",
    title: "Two-Wheeler Loan",
    category: "Commuters & Delivery Partners",
    amount: "Up to ₹2,50,000",
    rate: "From 8.99% p.a.",
    tenure: "12 to 48 Months",
    icon: Bike,
    color: "from-amber-600 to-orange-600",
    bgLight: "bg-amber-50/70 border-amber-200",
    iconColor: "text-amber-600",
    badge: "100% Financing",
    features: [
      "Up to 100% on-road funding",
      "Instant showroom sanction letter",
      "Minimal documentation with Aadhaar",
      "Affordable pocket-friendly monthly EMIs",
    ],
    href: "/personal-loan",
  },
];

export function LoanProducts() {
  return (
    <section id="loans" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 mb-3">
            <Zap className="w-3.5 h-3.5" /> Tailored Lending Products
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Choose The Loan That Fits Your Life Goals
          </h2>
          <p className="mt-3 text-base text-slate-600">
            From emergency cash to major business expansion, get sanctioned with transparent rates and zero surprises.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  {/* Top Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${p.bgLight}`}>
                      <Icon className={`w-6 h-6 ${p.iconColor}`} />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mb-4">{p.category}</p>

                  {/* Highlights Box */}
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 mb-5 space-y-2">
                    <div>
                      <span className="text-[11px] uppercase font-bold text-slate-400 block">Sanction Cap</span>
                      <span className="text-lg font-black text-slate-900">{p.amount}</span>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-slate-200/60 text-xs">
                      <span className="text-slate-500 font-medium">Interest</span>
                      <span className="font-bold text-emerald-600">{p.rate}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Tenure</span>
                      <span className="font-bold text-slate-700">{p.tenure}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {p.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Apply Button */}
                <Link
                  href={`/apply?product=${p.id}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold rounded-xl transition duration-200 shadow-xs active:scale-98"
                >
                  <span>Apply for {p.title.split(" ")[0]} Loan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

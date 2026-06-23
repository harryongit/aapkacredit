"use client";

import { useState } from "react";
import { Search, Filter, Download } from "lucide-react";

const mockActiveLoans = [
  {
    id: "LNF-987654321",
    type: "Personal Loan",
    amount: 50000,
    interestRate: 14.5,
    tenure: 12,
    emi: 4500,
    nextEmiDate: "15 Aug, 2026",
    status: "Active",
    paidEmis: 4,
  }
];

const mockClosedLoans = [
  {
    id: "LNF-123456789",
    type: "Education Loan",
    amount: 200000,
    interestRate: 11.5,
    tenure: 24,
    emi: 9366,
    endDate: "10 Jan, 2025",
    status: "Closed",
  }
];

export default function LoansPage() {
  const [tab, setTab] = useState<"active" | "closed">("active");

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-8 sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">My Loans</h1>
          <p className="mt-2 text-sm text-muted-foreground">View and manage your active and closed loans.</p>
        </div>
        <div className="mt-4 flex gap-3 sm:mt-0">
          <button className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/50 transition-colors">
            <Download className="h-4 w-4" />
            Statement
          </button>
        </div>
      </div>

      <div className="mb-6 flex gap-2 border-b border-border pb-px">
        <button
          onClick={() => setTab("active")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            tab === "active" 
              ? "border-primary text-primary" 
              : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
          }`}
        >
          Active Loans ({mockActiveLoans.length})
        </button>
        <button
          onClick={() => setTab("closed")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            tab === "closed" 
              ? "border-primary text-primary" 
              : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
          }`}
        >
          Closed Loans ({mockClosedLoans.length})
        </button>
      </div>

      <div className="space-y-4">
        {tab === "active" ? (
          mockActiveLoans.length > 0 ? (
            mockActiveLoans.map((loan) => (
              <div key={loan.id} className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="border-b border-border bg-muted/10 px-6 py-4 flex flex-wrap gap-4 items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{loan.type}</h3>
                    <p className="text-xs text-muted-foreground font-mono mt-1">ID: {loan.id}</p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                    {loan.status}
                  </span>
                </div>
                <div className="p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Loan Amount</p>
                    <p className="mt-1 font-semibold text-foreground text-lg">₹ {loan.amount.toLocaleString('en-IN')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Interest Rate</p>
                    <p className="mt-1 font-semibold text-foreground text-lg">{loan.interestRate}% p.a.</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">EMI Amount</p>
                    <p className="mt-1 font-semibold text-foreground text-lg">₹ {loan.emi.toLocaleString('en-IN')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Next EMI Due</p>
                    <p className="mt-1 font-semibold text-foreground text-lg">{loan.nextEmiDate}</p>
                  </div>
                </div>
                <div className="border-t border-border bg-muted/5 px-6 py-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="font-medium text-foreground">Repayment Progress</span>
                    <span className="text-muted-foreground">{loan.paidEmis} of {loan.tenure} EMIs paid</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-1000" 
                      style={{ width: `${(loan.paidEmis / loan.tenure) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="border-t border-border p-4 flex justify-end">
                  <button className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all">
                    Pay Upcoming EMI
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-border p-12 text-center">
              <h3 className="text-lg font-medium text-foreground">No Active Loans</h3>
              <p className="mt-1 text-sm text-muted-foreground">You do not have any active loans at the moment.</p>
            </div>
          )
        ) : (
          mockClosedLoans.length > 0 ? (
            mockClosedLoans.map((loan) => (
              <div key={loan.id} className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm opacity-80 hover:opacity-100 transition-opacity">
                <div className="border-b border-border bg-muted/10 px-6 py-4 flex flex-wrap gap-4 items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{loan.type}</h3>
                    <p className="text-xs text-muted-foreground font-mono mt-1">ID: {loan.id}</p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-300">
                    {loan.status}
                  </span>
                </div>
                <div className="p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Loan Amount</p>
                    <p className="mt-1 font-semibold text-foreground text-lg">₹ {loan.amount.toLocaleString('en-IN')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Interest Rate</p>
                    <p className="mt-1 font-semibold text-foreground text-lg">{loan.interestRate}% p.a.</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">EMI Amount</p>
                    <p className="mt-1 font-semibold text-foreground text-lg">₹ {loan.emi.toLocaleString('en-IN')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Closed On</p>
                    <p className="mt-1 font-semibold text-foreground text-lg">{loan.endDate}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-border p-12 text-center">
              <h3 className="text-lg font-medium text-foreground">No Closed Loans</h3>
              <p className="mt-1 text-sm text-muted-foreground">You have not closed any loans yet.</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

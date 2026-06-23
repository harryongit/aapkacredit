import { Wallet, ArrowUpRight, ArrowDownRight, Activity } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Welcome back, Demo User</h1>
        <p className="text-muted-foreground mt-1">Here is a summary of your account and loans.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white shadow-lg">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-white/20 p-3">
              <Wallet className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-white/80">Total Active Loans</p>
              <h2 className="text-3xl font-bold">1</h2>
            </div>
          </div>
        </div>
        
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-emerald-100 p-3 dark:bg-emerald-900/50">
              <Activity className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Credit Score</p>
              <h2 className="text-3xl font-bold text-foreground">785</h2>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-emerald-600 dark:text-emerald-400">
            <ArrowUpRight className="h-4 w-4 mr-1" />
            <span>Excellent</span>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-rose-100 p-3 dark:bg-rose-900/50">
              <ArrowDownRight className="h-6 w-6 text-rose-600 dark:text-rose-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Next EMI Due</p>
              <h2 className="text-3xl font-bold text-foreground">₹ 4,250</h2>
            </div>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Due on <span className="font-semibold text-foreground">15 Aug, 2026</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card shadow-sm">
          <div className="border-b border-border p-6">
            <h3 className="font-semibold text-foreground">Active Loan Summary</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-border">
                <div>
                  <p className="font-medium text-foreground">Personal Loan</p>
                  <p className="text-xs text-muted-foreground">LNF-987654321</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-foreground">₹ 50,000</p>
                  <p className="text-xs text-emerald-500 font-medium bg-emerald-500/10 px-2 py-0.5 rounded inline-block mt-1">Active</p>
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Interest Rate</span>
                <span className="font-medium text-foreground">14% p.a.</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tenure Remaining</span>
                <span className="font-medium text-foreground">8 Months</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-border">
              <Link href="/loans" className="text-sm font-medium text-primary hover:underline">
                View all loans &rarr;
              </Link>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card shadow-sm">
          <div className="border-b border-border p-6">
            <h3 className="font-semibold text-foreground">Quick Actions</h3>
          </div>
          <div className="p-6 grid gap-4 grid-cols-2">
            <Link href="/apply" className="flex flex-col items-center justify-center p-6 text-center rounded-xl border border-border hover:bg-muted/50 transition-colors">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-3 dark:bg-blue-900/50">
                <Wallet className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-sm font-medium text-foreground">Apply for Loan</span>
            </Link>
            <div className="flex flex-col items-center justify-center p-6 text-center rounded-xl border border-border hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center mb-3 dark:bg-emerald-900/50">
                <Activity className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <span className="text-sm font-medium text-foreground">Pay EMI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

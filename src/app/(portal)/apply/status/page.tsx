"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/fx/MagneticButton";

export default function ApplyStatusPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [amount, setAmount] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loanStatus = sessionStorage.getItem("loan_application_status");
    const loanAmount = sessionStorage.getItem("loan_application_amount");
    
    if (!loanStatus) {
      router.push("/apply");
      return;
    }
    
    setStatus(loanStatus);
    setAmount(loanAmount);
  }, [router]);

  if (!status) return null;

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4">
      <div className="w-full max-w-md animate-in zoom-in-95 duration-500">
        <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-xl">
          {status === "approved" ? (
            <>
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50">
                <CheckCircle2 className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground">Congratulations!</h1>
              <p className="mb-8 text-muted-foreground">
                Your personal loan of <strong className="text-foreground">₹ {Number(amount).toLocaleString('en-IN')}</strong> has been approved and is ready to be disbursed to your registered bank account.
              </p>
              
              <div className="space-y-4">
                <Link href="/dashboard" className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all">
                  Go to Dashboard <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/loans" className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  View Loan Details
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50">
                <XCircle className="h-12 w-12 text-red-600 dark:text-red-400" />
              </div>
              <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground">Application Rejected</h1>
              <p className="mb-8 text-muted-foreground">
                We are sorry, but we cannot offer you a loan at this time. Your current credit profile does not meet our internal criteria.
              </p>
              
              <div className="space-y-4">
                <Link href="/dashboard" className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all">
                  Return to Dashboard
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

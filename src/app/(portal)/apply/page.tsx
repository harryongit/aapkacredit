"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, ChevronRight, FileText, CreditCard } from "lucide-react";

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [pan, setPan] = useState("");
  const [amount, setAmount] = useState(100000);
  const router = useRouter();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (pan.length >= 10) setStep(2);
    } else {
      // In a real app, we would make an API call here.
      // For this demo, we simulate approval or rejection randomly.
      const isApproved = Math.random() > 0.2; // 80% chance of approval
      
      // Store the result in session storage for the status page
      sessionStorage.setItem("loan_application_status", isApproved ? "approved" : "rejected");
      sessionStorage.setItem("loan_application_amount", amount.toString());
      
      router.push("/apply/status");
    }
  };

  return (
    <div className="mx-auto max-w-3xl p-4 sm:p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Apply for a Loan</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Get instant approval for a personal loan up to ₹1,00,000.
        </p>
      </div>

      <div className="mb-8 flex items-center">
        <div className={`flex items-center justify-center h-8 w-8 rounded-full ${step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'} font-semibold text-sm`}>1</div>
        <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-primary' : 'bg-muted'}`}></div>
        <div className={`flex items-center justify-center h-8 w-8 rounded-full ${step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'} font-semibold text-sm`}>2</div>
      </div>

      <div className="rounded-2xl border border-border bg-card shadow-sm">
        <div className="p-6 sm:p-8">
          <form onSubmit={handleNext}>
            {step === 1 ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/50">
                    <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">Verify your identity</h2>
                    <p className="text-sm text-muted-foreground">Enter your PAN details to check eligibility.</p>
                  </div>
                </div>

                <div>
                  <label htmlFor="pan" className="block text-sm font-medium leading-6 text-foreground">
                    PAN Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="pan"
                      name="pan"
                      type="text"
                      required
                      className="block w-full rounded-md border-0 py-2.5 px-3 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 uppercase bg-background"
                      placeholder="ABCDE1234F"
                      value={pan}
                      onChange={(e) => setPan(e.target.value.toUpperCase())}
                      maxLength={10}
                    />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">Your data is secured with bank-grade encryption.</p>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={pan.length < 10}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    Continue <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/50">
                    <CreditCard className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">Choose Loan Amount</h2>
                    <p className="text-sm text-muted-foreground">Select the amount you wish to borrow.</p>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-muted/30 p-6 text-center">
                  <span className="text-sm font-medium text-muted-foreground">Selected Amount</span>
                  <div className="mt-2 text-4xl font-bold tracking-tight text-foreground">
                    ₹ {amount.toLocaleString('en-IN')}
                  </div>
                </div>

                <div>
                  <input
                    type="range"
                    min="10000"
                    max="100000"
                    step="5000"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground font-medium">
                    <span>₹ 10,000</span>
                    <span>₹ 1,00,000</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Interest Rate (Annual)</span>
                    <span className="font-semibold text-foreground">14.5%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Tenure</span>
                    <span className="font-semibold text-foreground">12 Months</span>
                  </div>
                  <div className="flex items-center justify-between text-sm pt-3 border-t border-border">
                    <span className="font-medium text-foreground">Estimated EMI</span>
                    <span className="font-bold text-primary">₹ {Math.round((amount * 1.145) / 12).toLocaleString('en-IN')}/mo</span>
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 rounded-xl bg-muted px-4 py-3 text-sm font-semibold text-foreground shadow-sm hover:bg-muted/80 transition-all"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-[2] flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all"
                  >
                    Get Loan Offer <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

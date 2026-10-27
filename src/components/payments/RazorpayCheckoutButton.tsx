"use client";

import { useState } from "react";
import { initiateRazorpayCheckout, RazorpayCheckoutOptions } from "@/lib/razorpay";
import { CreditCard, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface RazorpayCheckoutButtonProps {
  amount: number; // in Rupees (e.g. 4500)
  buttonText?: string;
  className?: string;
  loanId?: string;
  purpose?: string;
  userDetails?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  onSuccess?: (data: any) => void;
  onFailure?: (error: any) => void;
}

export function RazorpayCheckoutButton({
  amount,
  buttonText,
  className,
  loanId,
  purpose = "Loan Repayment / Processing Fee",
  userDetails,
  onSuccess,
  onFailure,
}: RazorpayCheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [paid, setPaid] = useState(false);

  const handlePay = async () => {
    if (loading) return;
    setLoading(true);

    const amountInPaise = Math.round(amount * 100);

    await initiateRazorpayCheckout({
      amount: amountInPaise,
      currency: "INR",
      name: "Aapka Credit",
      description: purpose,
      prefill: userDetails,
      notes: {
        loan_id: loanId || "N/A",
        purpose: purpose,
      },
      onSuccess: (verifyData) => {
        setLoading(false);
        setPaid(true);
        toast.success(`Payment verified! ID: ${verifyData.payment_id || "Success"}`);
        onSuccess?.(verifyData);
      },
      onFailure: (err) => {
        setLoading(false);
        const errMsg = err?.description || err?.message || "Payment was not completed";
        toast.error(`Payment Failed: ${errMsg}`);
        onFailure?.(err);
      },
      onDismiss: () => {
        setLoading(false);
        toast.info("Payment window was cancelled by user.");
      },
    });
  };

  if (paid) {
    return (
      <button
        disabled
        className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-xs cursor-default"
      >
        <CheckCircle2 className="h-4 w-4" />
        <span>Paid Successfully</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handlePay}
      disabled={loading}
      className={
        className ||
        "inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-700 active:scale-98 transition disabled:opacity-70 cursor-pointer"
      }
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Opening Gateway...</span>
        </>
      ) : (
        <>
          <CreditCard className="h-4 w-4" />
          <span>{buttonText || `Pay ₹${amount.toLocaleString("en-IN")}`}</span>
        </>
      )}
    </button>
  );
}

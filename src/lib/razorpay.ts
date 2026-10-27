"use client";

export interface CreateOrderParams {
  amount: number; // in paise (e.g. 50000 = ₹500)
  currency?: string;
  receipt?: string;
  notes?: Record<string, string>;
}

export interface VerifyPaymentParams {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export interface RazorpayCheckoutOptions {
  amount: number; // in paise (e.g. 450000 = ₹4,500)
  currency?: string;
  name?: string;
  description?: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  onSuccess?: (verifyData: any) => void;
  onFailure?: (error: any) => void;
  onDismiss?: () => void;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

/**
 * Dynamically loads the Razorpay checkout.js script.
 */
export function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(false);
      return;
    }

    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => {
      console.error("Failed to load Razorpay checkout.js SDK");
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

/**
 * Initiates Razorpay Standard Checkout flow:
 * 1. Calls backend /api/create-order to obtain order_id
 * 2. Launches Razorpay modal window
 * 3. On success, calls backend /api/verify-payment with signature
 */
export async function initiateRazorpayCheckout(options: RazorpayCheckoutOptions): Promise<void> {
  const isLoaded = await loadRazorpayScript();
  if (!isLoaded) {
    options.onFailure?.({ message: "Unable to load Razorpay SDK. Please check your internet connection." });
    return;
  }

  const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_Tsu5pKEO9bxooL";
  const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

  // 1. Create order on backend
  let orderData: { order_id: string; amount: number; currency: string };
  try {
    // Try FastAPI endpoint first, fallback to Next.js route
    let res = await fetch(`${apiBase}/payments/create-order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: options.amount,
        currency: options.currency || "INR",
        receipt: `rcpt_${Date.now()}`,
        notes: options.notes,
      }),
    });

    if (!res.ok) {
      // Fallback to /api/create-order
      res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: options.amount,
          currency: options.currency || "INR",
          receipt: `rcpt_${Date.now()}`,
          notes: options.notes,
        }),
      });
    }

    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: "Failed to create order" }));
      throw new Error(err.detail || err.message || "Failed to create order");
    }

    const json = await res.json();
    orderData = json.data || json;
  } catch (error: any) {
    console.error("Razorpay order creation error:", error);
    options.onFailure?.({ message: error.message || "Error creating Razorpay order" });
    return;
  }

  // 2. Configure and open Razorpay modal
  const razorpayOptions = {
    key: keyId,
    amount: orderData.amount,
    currency: orderData.currency || "INR",
    name: options.name || "Aapka Credit",
    description: options.description || "EMI / Loan Processing Payment",
    order_id: orderData.order_id,
    prefill: {
      name: options.prefill?.name || "Aarav Sharma",
      email: options.prefill?.email || "aarav.sharma@example.com",
      contact: options.prefill?.contact || "9876543210",
    },
    theme: {
      color: "#2563EB", // Aapka Credit vibrant royal blue
    },
    handler: async function (response: {
      razorpay_payment_id: string;
      razorpay_order_id: string;
      razorpay_signature: string;
    }) {
      // 3. Verify payment signature on backend
      try {
        let verifyRes = await fetch(`${apiBase}/payments/verify-payment`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          }),
        });

        if (!verifyRes.ok) {
          // Fallback to /api/verify-payment
          verifyRes = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });
        }

        const verifyData = await verifyRes.json();
        if (verifyRes.ok && (verifyData.status === "success" || verifyData.success)) {
          options.onSuccess?.({
            ...verifyData,
            payment_id: response.razorpay_payment_id,
            order_id: response.razorpay_order_id,
          });
        } else {
          options.onFailure?.({
            message: verifyData.detail || verifyData.message || "Signature verification failed",
          });
        }
      } catch (err: any) {
        console.error("Payment verification network error:", err);
        options.onFailure?.({ message: "Network error while verifying payment signature." });
      }
    },
    modal: {
      ondismiss: function () {
        options.onDismiss?.();
      },
    },
  };

  const rzp = new window.Razorpay(razorpayOptions);

  rzp.on("payment.failed", function (response: any) {
    console.error("Payment failed event:", response.error);
    options.onFailure?.(response.error);
  });

  rzp.open();
}

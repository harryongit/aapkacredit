import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount, currency = "INR", receipt = `rcpt_${Date.now()}`, notes = {} } = body;

    // Minimum amount: 100 paise
    if (!amount || amount < 100) {
      return NextResponse.json(
        { detail: "Amount must be at least 100 paise (₹1.00)" },
        { status: 400 }
      );
    }

    const keyId = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_Tsu5pKEO9bxooL";
    const keySecret = process.env.RAZORPAY_KEY_SECRET || "cSHhio7Tan70f6ML5c5134o3";

    const authHeader = `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString("base64")}`;

    const res = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
      body: JSON.stringify({
        amount,
        currency,
        receipt,
        notes,
      }),
    });

    if (res.status === 401) {
      return NextResponse.json(
        { detail: "Razorpay authentication failed" },
        { status: 401 }
      );
    }

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return NextResponse.json(
        { detail: err.error?.description || "Razorpay API error" },
        { status: 500 }
      );
    }

    const data = await res.json();
    return NextResponse.json({
      order_id: data.id,
      amount: data.amount,
      currency: data.currency,
      receipt: data.receipt,
    });
  } catch (error: any) {
    console.error("Create order error:", error);
    return NextResponse.json(
      { detail: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}

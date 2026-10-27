import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { detail: "Missing required fields: order_id, payment_id, and signature are required" },
        { status: 400 }
      );
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET || "cSHhio7Tan70f6ML5c5134o3";

    // Algorithm: HMAC-SHA256(order_id + "|" + payment_id, KEY_SECRET)
    const expectedSignature = crypto
      .createHmac("sha256", keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    const isMatch = crypto.timingSafeEqual(
      Buffer.from(expectedSignature),
      Buffer.from(razorpay_signature)
    );

    if (!isMatch) {
      return NextResponse.json(
        { detail: "Invalid signature mismatch. Payment verification failed." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      status: "success",
      message: "Payment verified successfully",
      order_id: razorpay_order_id,
      payment_id: razorpay_payment_id,
    });
  } catch (error: any) {
    console.error("Verify payment error:", error);
    return NextResponse.json(
      { detail: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}

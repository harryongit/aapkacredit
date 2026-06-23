"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { signJWT } from "@/lib/auth";

export async function customerLoginAction() {
  // Generate a mock JWT for the demo customer
  const token = await signJWT({ user: "demo_customer", role: "customer" });

  const cookieStore = await cookies();
  cookieStore.set("customer_session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  });

  // Redirect to the customer dashboard
  redirect("/dashboard");
}

export async function customerLogoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("customer_session");
  redirect("/");
}

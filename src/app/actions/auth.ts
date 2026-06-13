"use server";

import { cookies } from "next/headers";
import { signJWT } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function loginAction(prevState: any, formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (username === "admin" && password === "admin") {
    // Generate JWT
    const token = await signJWT({ user: "admin", role: "super_admin" });

    // Set HTTP-only cookie
    const cookieStore = await cookies();
    cookieStore.set("admin_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });

    redirect("/admin");
  }

  return { error: "Invalid username or password" };
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  redirect("/admin/login");
}

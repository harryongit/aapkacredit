import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJWT } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect all /admin routes except /admin/login
  if (pathname.startsWith("/admin")) {
    const isLoginPage = pathname === "/admin/login";
    const sessionCookie = request.cookies.get("admin_session")?.value;
    
    // Verify token
    const payload = sessionCookie ? await verifyJWT(sessionCookie) : null;
    const isAuthenticated = !!payload;

    if (!isAuthenticated && !isLoginPage) {
      // Redirect unauthenticated users trying to access dashboard to login page
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    if (isAuthenticated && isLoginPage) {
      // Redirect authenticated users trying to access login page to dashboard
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

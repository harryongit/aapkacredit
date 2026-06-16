import Link from "next/link";
import type { Metadata } from "next";
import { Home, ArrowLeft, Calculator, BookOpen, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | Aapka Credit",
  description: "The page you are looking for doesn't exist. Explore our instant personal loans, business loans, education loans, and EMI calculator.",
  robots: { index: false, follow: false },
};

const quickLinks = [
  { label: "Personal Loans", href: "/personal-loan", desc: "Instant loans up to ₹40 Lakhs", icon: "💳" },
  { label: "Business Loans", href: "/business-loan", desc: "Collateral-free up to ₹2 Crores", icon: "🏢" },
  { label: "Education Loans", href: "/education-loan", desc: "Study abroad up to ₹75 Lakhs", icon: "🎓" },
  { label: "EMI Calculator", href: "/calculator", desc: "Plan your loan repayment", icon: "🧮" },
  { label: "Finance Blog", href: "/blog", desc: "Expert guides & tips", icon: "📖" },
  { label: "About Us", href: "/about", desc: "Our story & mission", icon: "ℹ️" },
];

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-background flex items-center justify-center px-4 py-32 overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 20%, rgba(59,130,246,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-3xl text-center">
        {/* 404 number */}
        <div className="mb-6 font-display">
          <span
            className="text-[8rem] sm:text-[10rem] font-bold leading-none tracking-tighter"
            style={{
              background: "linear-gradient(135deg, rgba(59,130,246,0.25) 0%, rgba(16,185,129,0.25) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            404
          </span>
        </div>

        {/* Icon */}
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full glass border border-foreground/10">
          <Search className="h-9 w-9 text-primary" aria-hidden="true" />
        </div>

        <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl mb-4 tracking-tight">
          Page not found
        </h1>
        <p className="text-lg text-muted-foreground mb-3 max-w-md mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <p className="text-sm text-foreground/50 mb-10">
          Error 404 — aapkacredit.com
        </p>

        {/* Primary actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/"
            id="cta-go-home"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#10B981] px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-90 hover:-translate-y-0.5"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            Go to Homepage
          </Link>
          <Link
            href="/blog"
            id="cta-visit-blog"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 glass px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:-translate-y-0.5"
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            Read Finance Guides
          </Link>
        </div>

        {/* Quick links grid */}
        <div className="text-left">
          <p className="text-xs uppercase tracking-wider text-foreground/40 mb-5 text-center">
            Or explore these pages
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                id={`404-link-${link.href.replace("/", "").replace("-", "") || "home"}`}
                className="group flex items-start gap-3 rounded-2xl glass border border-foreground/10 p-4 transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-elegant"
              >
                <span className="text-xl leading-none mt-0.5" aria-hidden="true">
                  {link.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition">
                    {link.label}
                  </p>
                  <p className="text-xs text-foreground/50 mt-0.5 leading-snug">
                    {link.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Help line */}
        <p className="mt-12 text-sm text-foreground/40">
          Need help?{" "}
          <Link href="/#contact" className="text-primary hover:underline">
            Contact our team
          </Link>
        </p>
      </div>
    </main>
  );
}

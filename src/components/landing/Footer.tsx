"use client";
import { Instagram, Linkedin, Facebook, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import whitelogo from "@/assets/whitelogo.svg";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const cols = [
  {
    title: "Product",
    links: [
      { label: "Personal Loans", href: "/personal-loan" },
      { label: "Business Loans", href: "/business-loan" },
      { label: "Education Loans", href: "/education-loan" },
      { label: "EMI Calculator", href: "/calculator" },
      { label: "Blog & Guides", href: "/blog" },
      { label: "FAQs", href: "/#faq" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Compliance", href: "/compliance" },
      { label: "Grievance Redressal", href: "/grievance" },
    ],
  },
];

// Social profiles — TODO: replace Facebook and X URLs with actual handles
const socialLinks = [
  {
    href: "https://www.linkedin.com/showcase/aapkacredit/",
    label: "Follow Aapka Credit on LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://www.instagram.com/aapkacredit",
    label: "Follow Aapka Credit on Instagram",
    icon: Instagram,
  },
  {
    href: "https://www.youtube.com/channel/UCqveHQesgiWUyAjeb9-YU3A",
    label: "Subscribe to Aapka Credit on YouTube",
    // Custom YouTube SVG
    icon: null,
    customIcon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  // TODO: Replace with actual Facebook URL
  {
    href: "https://www.facebook.com/aapkacredit",
    label: "Follow Aapka Credit on Facebook",
    icon: Facebook,
  },
  // TODO: Replace with actual X/Twitter URL
  {
    href: "https://x.com/aapkacredit",
    label: "Follow Aapka Credit on X (Twitter)",
    icon: Twitter,
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-foreground/10">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand + NAP */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-display text-base font-semibold text-foreground"
            >
              <Image src={whitelogo} alt="Aapka Credit Logo" className="h-8 w-auto" />
              Aapka Credit
            </Link>
            <p className="mt-4 max-w-sm text-sm text-foreground/60">
              Smarter Loans. Better Financial Decisions. India&apos;s next-generation digital lending
              platform.
            </p>

            {/* ✅ NAP — Name, Address, Phone (critical for FinancialService local SEO) */}
            {/* TODO: Replace with actual registered business address and phone */}
            <address className="mt-6 not-italic space-y-2">
              <div className="flex items-start gap-2 text-sm text-foreground/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40" aria-hidden="true" />
                <span>
                  Prism Cosmic Private Limited<br />
                  {/* TODO: Replace with actual address */}
                  TODO: Street, City, State – PIN<br />
                  India
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <Phone className="h-4 w-4 shrink-0 text-foreground/40" aria-hidden="true" />
                {/* TODO: Replace with actual phone */}
                <a href="tel:+91XXXXXXXXXX" className="hover:text-foreground transition">
                  +91-XXXXXXXXXX
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <Mail className="h-4 w-4 shrink-0 text-foreground/40" aria-hidden="true" />
                <a href="mailto:support@aapkacredit.com" className="hover:text-foreground transition">
                  support@aapkacredit.com
                </a>
              </div>
            </address>

            <p className="mt-6 text-[11px] uppercase tracking-wider text-foreground/40">Built by</p>
            <a
              href="https://prismcosmic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground hover:text-[#3B82F6] transition"
            >
              Prism Cosmic Private Limited
            </a>

            {/* ✅ Social links — all 5 platforms with descriptive aria-labels */}
            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full glass text-foreground/70 transition hover:text-foreground"
                >
                  {s.icon ? (
                    <s.icon className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    s.customIcon
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="text-[11px] uppercase tracking-wider text-foreground/40">{c.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      {l.href.startsWith("#") || l.href.startsWith("/#") ? (
                        <a
                          href={l.href}
                          className="text-sm text-foreground/70 transition hover:text-foreground"
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link
                          href={l.href}
                          className="text-sm text-foreground/70 transition hover:text-foreground"
                        >
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-foreground/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-foreground/40">© 2026 Aapka Credit by Prism Cosmic Private Limited. All Rights Reserved.</p>
          <p className="text-xs text-foreground/40">Made with care in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}

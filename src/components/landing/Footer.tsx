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
    icon: null,
    customIcon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/aapkacredit",
    label: "Follow Aapka Credit on Facebook",
    icon: Facebook,
  },
  {
    href: "https://x.com/aapkacredit",
    label: "Follow Aapka Credit on X (Twitter)",
    icon: Twitter,
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#07090F] z-10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Brand + NAP */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3 font-display text-xl font-bold uppercase tracking-widest text-foreground"
            >
              <Image src={whitelogo} alt="Aapka Credit Logo" className="h-8 w-auto" />
              Aapka Credit
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-foreground/50">
              Smarter Loans. Better Financial Decisions. India&apos;s next-generation digital lending
              platform.
            </p>

            <address className="mt-8 not-italic space-y-4">
              <div className="flex items-start gap-4 text-sm text-foreground/50">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-foreground/30" aria-hidden="true" />
                <span>
                  Prism Cosmic Private Limited<br />
                  TODO: Street, City, State – PIN<br />
                  India
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-foreground/50">
                <Phone className="h-4 w-4 shrink-0 text-foreground/30" aria-hidden="true" />
                <a href="tel:+91XXXXXXXXXX" className="hover:text-primary transition-colors">
                  +91-XXXXXXXXXX
                </a>
              </div>
              <div className="flex items-center gap-4 text-sm text-foreground/50">
                <Mail className="h-4 w-4 shrink-0 text-foreground/30" aria-hidden="true" />
                <a href="mailto:support@aapkacredit.com" className="hover:text-primary transition-colors">
                  support@aapkacredit.com
                </a>
              </div>
            </address>

            <div className="mt-12">
              <p className="text-[10px] uppercase tracking-widest text-foreground/30 mb-4">Built by</p>
              <a
                href="https://prismcosmic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors"
              >
                Prism Cosmic Private Limited
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center border border-white/10 text-foreground/50 transition-colors hover:border-primary hover:text-primary hover:bg-primary/5"
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
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="text-[10px] uppercase tracking-widest text-foreground/30 font-bold">{c.title}</p>
                <ul className="mt-8 space-y-4">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      {l.href.startsWith("#") || l.href.startsWith("/#") ? (
                        <a
                          href={l.href}
                          className="text-sm text-foreground/60 transition-colors hover:text-primary"
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link
                          href={l.href}
                          className="text-sm text-foreground/60 transition-colors hover:text-primary"
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

        <div className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-[10px] uppercase tracking-widest text-foreground/30 font-bold">© 2026 Aapka Credit by Prism Cosmic Private Limited. All Rights Reserved.</p>
          <p className="text-[10px] uppercase tracking-widest text-foreground/30 font-bold">Made with care in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}

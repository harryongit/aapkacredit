"use client";
import { Sparkles, Instagram, Linkedin, Facebook, Github } from "lucide-react";
import Image from "next/image";
import whitelogo from "@/assets/whitelogo.svg";
import Link from "next/link";

const cols = [
  {
    title: "Product",
    links: [
      { label: "Loans", href: "#loans" },
      { label: "Features", href: "#features" },
      { label: "Security", href: "#security" },
      { label: "FAQs", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
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
      { label: "Grievance", href: "/grievance" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-foreground/10">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
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
            <p className="mt-6 text-[11px] uppercase tracking-wider text-foreground/40">Built by</p>
            <a
              href="https://www.prismcosmic.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground hover:text-[#3B82F6] transition"
            >
              Prism Cosmic Private Limited
            </a>

            <div className="mt-6 flex gap-2">
              {[
                Instagram,
                Linkedin,
                Facebook,
                (props: any) => (
                  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M18.244 2H21l-6.5 7.43L22 22h-6.844l-4.78-6.245L4.8 22H2l7-7.987L1.6 2h6.978l4.32 5.71L18.244 2Zm-2.4 18h1.66L8.245 4h-1.78l9.379 16Z" />
                  </svg>
                ),
                Github,
              ].map((Icon: any, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="grid h-9 w-9 place-items-center rounded-full glass text-foreground/70 transition hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="text-[11px] uppercase tracking-wider text-foreground/40">{c.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      {l.href.startsWith("#") ? (
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
          <p className="text-xs text-foreground/40">© 2026 Aapka Credit. All Rights Reserved.</p>
          <p className="text-xs text-foreground/40">Made with care in India.</p>
        </div>
      </div>
    </footer>
  );
}

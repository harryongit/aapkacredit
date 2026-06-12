"use client";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import Image from "next/image";
import whitelogo from "@/assets/whitelogo.svg";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "Loans", href: "#loans" },
  { label: "Eligibility", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Security", href: "#security" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border border-transparent px-4 py-2.5 transition-all duration-500 sm:px-6",
            scrolled && "glass-strong border-white/10",
          )}
        >
          <a
            href="#home"
            className="flex items-center gap-2 font-display text-base font-semibold tracking-tight text-white"
          >
            <Image src={whitelogo} alt="Aapka Credit Logo" className="h-8 w-auto" priority />
            <span>Aapka Credit</span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-sm text-white/70 transition hover:text-white"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-[#3B82F6] to-[#10B981] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <MagneticButton href="#contact" variant="primary" className="px-5 py-2.5 text-xs">
              Check Eligibility
            </MagneticButton>
          </div>

          <button
            type="button"
            className="rounded-full p-2 text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="glass-strong mt-2 rounded-3xl border border-white/10 p-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#10B981] px-3 py-2.5 text-center text-sm font-medium text-white"
              >
                Check Eligibility
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

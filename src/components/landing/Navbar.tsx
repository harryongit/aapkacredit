"use client";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import whitelogo from "@/assets/whitelogo.svg";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LoginModal } from "@/components/auth/LoginModal";

const links = [
  { label: "Loans", href: "/#loans" },
  { label: "Calculator", href: "/calculator" },
  { label: "Blog", href: "/blog" },
  { label: "Eligibility", href: "/#how" },
  { label: "Features", href: "/#features" },
  { label: "Security", href: "/#security" },
  { label: "FAQs", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

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
            scrolled && "glass-strong border-foreground/10",
          )}
        >
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-base font-semibold tracking-tight text-foreground"
          >
            <Image src={whitelogo} alt="Aapka Credit Logo" className="h-8 w-auto dark:invert-0 invert" priority />
            <span>Aapka Credit</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-sm text-foreground/70 transition hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-[#3B82F6] to-[#10B981] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <MagneticButton onClick={() => setIsLoginModalOpen(true)} variant="primary" className="px-5 py-2.5 text-xs">
              Login / Apply
            </MagneticButton>
          </div>

          <button
            type="button"
            className="rounded-full p-2 text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="glass-strong mt-2 rounded-3xl border border-foreground/10 p-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setIsLoginModalOpen(true);
                }}
                className="mt-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#10B981] px-3 py-2.5 text-center text-sm font-medium text-foreground"
              >
                Login / Apply
              </button>
            </nav>
          </div>
        )}
      </div>
      <LoginModal isOpen={isLoginModalOpen} onOpenChange={setIsLoginModalOpen} />
    </header>
  );
}

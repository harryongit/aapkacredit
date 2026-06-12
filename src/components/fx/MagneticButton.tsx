"use client";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  variant = "primary",
  type,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  type?: "button" | "submit";
}) {
  const ref = useRef<HTMLSpanElement>(null);

  function onMove(e: MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  }
  function onLeave() {
    const el = ref.current;
    if (el) el.style.transform = "translate(0,0)";
  }

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";
  const styles =
    variant === "primary"
      ? "text-white shadow-glow hover:shadow-[0_28px_90px_-20px_rgba(59,130,246,0.7)]"
      : "glass text-white/90 hover:text-white";

  const inner = (
    <span
      ref={ref}
      className="relative z-10 pointer-events-none inline-flex items-center gap-2 transition-transform duration-200 ease-out"
    >
      {children}
    </span>
  );

  const bg =
    variant === "primary" ? (
      <span
        aria-hidden
        className="absolute inset-0 rounded-full"
        style={{ background: "linear-gradient(135deg, #2563EB 0%, #3B82F6 60%, #10B981 130%)" }}
      />
    ) : null;

  if (href) {
    return (
      <a
        href={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={cn(base, styles, "overflow-hidden", className)}
      >
        {bg}
        {inner}
      </a>
    );
  }
  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(base, styles, "overflow-hidden", className)}
    >
      {bg}
      {inner}
    </button>
  );
}

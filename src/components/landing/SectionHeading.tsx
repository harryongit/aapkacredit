"use client";
import type { ReactNode } from "react";
import { Reveal } from "@/components/fx/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
}) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-3xl ${a}`}>
      {eyebrow && (
        <div
          className={`mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-foreground/60`}
        >
          <span className="h-1 w-1 rounded-full bg-emerald-400" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base text-foreground/60 sm:text-lg">{subtitle}</p>}
    </Reveal>
  );
}

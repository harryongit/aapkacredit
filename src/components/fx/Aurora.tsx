"use client";
export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="absolute -top-1/3 -left-1/4 h-[60vmax] w-[60vmax] rounded-full opacity-50 blur-3xl animate-aurora"
        style={{
          background: "radial-gradient(closest-side, rgba(37,99,235,0.55), transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/4 -right-1/4 h-[55vmax] w-[55vmax] rounded-full opacity-40 blur-3xl animate-aurora"
        style={{
          background: "radial-gradient(closest-side, rgba(59,130,246,0.5), transparent 70%)",
          animationDelay: "-4s",
        }}
      />
      <div
        className="absolute -bottom-1/3 left-1/3 h-[50vmax] w-[50vmax] rounded-full opacity-30 blur-3xl animate-aurora"
        style={{
          background: "radial-gradient(closest-side, rgba(16,185,129,0.45), transparent 70%)",
          animationDelay: "-8s",
        }}
      />
    </div>
  );
}

export function Grid({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 100%)",
      }}
    />
  );
}

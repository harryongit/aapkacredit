"use client";

import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, User, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/fx/Reveal";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email address").max(160),
  phone: z.string().trim().min(10, "Enter a valid 10-digit mobile number").max(15),
  message: z.string().trim().min(10, "Please provide more details").max(1000),
});

type Field = "name" | "email" | "phone" | "message";

function FloatInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  icon: Icon,
  textarea,
  error,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  icon: React.ComponentType<{ className?: string }>;
  textarea?: boolean;
  error?: string;
}) {
  const common =
    "w-full rounded-xl bg-slate-50 border border-slate-200 px-4 pt-5 pb-2 text-sm text-slate-900 outline-none transition focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100";
  return (
    <div className="relative">
      <Icon className="pointer-events-none absolute right-4 top-4 h-4 w-4 text-slate-400" />
      {textarea ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className={common}
          placeholder=" "
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={common}
          placeholder=" "
        />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-[10px] uppercase font-bold tracking-wider text-slate-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs"
      >
        {label}
      </label>
      {error && <p className="mt-1 text-xs text-red-500 font-medium">{error}</p>}
    </div>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Partial<Record<Field, string>> = {};
      parsed.error.issues.forEach((i) => {
        const k = i.path[0] as Field;
        errs[k] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      toast.success("Message received! Our lending advisor will call you shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
      setLoading(false);
    }, 600);
  }

  return (
    <section id="contact" className="py-24 bg-slate-50/70 border-t border-slate-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Speak With Our Digital Lending Advisors
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Have questions about loan limits, interest rates, or eligibility? We are here to help.
          </p>
        </div>

        <Reveal>
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg">
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FloatInput
                  id="name"
                  label="Full Name (as per PAN)"
                  icon={User}
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  error={errors.name}
                />
                <FloatInput
                  id="phone"
                  label="10-Digit Mobile Number"
                  type="tel"
                  icon={Phone}
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                  error={errors.phone}
                />
              </div>

              <FloatInput
                id="email"
                label="Email Address"
                type="email"
                icon={Mail}
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                error={errors.email}
              />

              <FloatInput
                id="message"
                label="How can we assist you? (Loan amount, type, questions)"
                icon={MessageSquare}
                textarea
                value={form.message}
                onChange={(v) => setForm({ ...form, message: v })}
                error={errors.message}
              />

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Your enquiry is kept 100% confidential under RBI privacy norms</span>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition shadow-md shadow-blue-500/25 active:scale-98 disabled:opacity-70"
                >
                  <span>{loading ? "Sending..." : "Submit Enquiry"}</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, User, MessageSquare, Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { Reveal } from "@/components/fx/Reveal";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Please share your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  message: z.string().trim().min(10, "Tell us a little more").max(1000),
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
    "peer w-full rounded-2xl bg-white/[0.04] px-4 pt-6 pb-2 text-sm text-white outline-none ring-1 ring-white/10 transition focus:ring-2 focus:ring-[#3B82F6]";
  return (
    <div className="relative">
      <Icon className="pointer-events-none absolute right-4 top-5 h-4 w-4 text-white/30" />
      {textarea ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={5}
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
        className="pointer-events-none absolute left-4 top-2 text-[11px] uppercase tracking-wider text-white/50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-wider"
      >
        {label}
      </label>
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

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
    toast.success("Thanks! Our team will reach out shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Talk to <span className="text-gradient-blue">Aapka Credit</span>
            </>
          }
          subtitle="Tell us a bit about you and we'll get back within one business day."
        />

        <Reveal className="mt-14">
          <form
            onSubmit={onSubmit}
            className="glass-strong relative overflow-hidden rounded-3xl border border-white/10 p-6 sm:p-10"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-40"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.18), transparent 50%, rgba(16,185,129,0.18))",
              }}
            />
            <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FloatInput
                id="name"
                label="Full Name"
                icon={User}
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                error={errors.name}
              />
              <FloatInput
                id="email"
                label="Email"
                icon={Mail}
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                error={errors.email}
              />
              <div className="sm:col-span-2">
                <FloatInput
                  id="phone"
                  label="Phone"
                  icon={Phone}
                  type="tel"
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                  error={errors.phone}
                />
              </div>
              <div className="sm:col-span-2">
                <FloatInput
                  id="message"
                  label="Message"
                  icon={MessageSquare}
                  textarea
                  value={form.message}
                  onChange={(v) => setForm({ ...form, message: v })}
                  error={errors.message}
                />
              </div>
            </div>
            <div className="relative mt-6 flex justify-end">
              <MagneticButton type="submit" variant="primary">
                Send message <Send className="h-4 w-4" />
              </MagneticButton>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

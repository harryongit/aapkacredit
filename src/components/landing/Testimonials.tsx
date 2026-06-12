"use client";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { AnimatePresence, motion } from "framer-motion";

const quotes = [
  {
    text: "Aapka Credit made getting a loan incredibly simple. I closed in two days, with full clarity on every fee.",
    name: "Aarav Sharma",
    role: "Founder, Indie Studio",
  },
  {
    text: "The eligibility check felt like magic — no impact on score, instant offers directly from Aapka Credit.",
    name: "Priya Iyer",
    role: "Product Manager",
  },
  {
    text: "Finally a fintech that treats borrowers as family, not leads. The dashboard is genuinely useful.",
    name: "Rohan Mehta",
    role: "Small Business Owner",
  },
  {
    text: "Honest, fast, and beautifully designed. This is what modern lending should feel like.",
    name: "Neha Krishnan",
    role: "Engineering Lead",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % quotes.length), 5500);
    return () => clearInterval(id);
  }, []);
  const q = quotes[i];

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="Voices"
          title={
            <>
              Loved by <span className="text-gradient-blue">borrowers across India</span>
            </>
          }
        />
        <div className="relative mt-14">
          <div className="glass-strong relative overflow-hidden rounded-3xl border border-white/10 p-10 sm:p-14">
            <Quote className="absolute right-8 top-8 h-12 w-12 text-white/5" />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5 }}
                className="font-display text-2xl font-medium leading-snug text-white sm:text-3xl"
              >
                &ldquo;{q.text}&rdquo;
              </motion.blockquote>
            </AnimatePresence>
            <div className="mt-8 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">{q.name}</p>
                <p className="text-xs text-white/50">{q.role}</p>
              </div>
              <div className="flex gap-2">
                {quotes.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setI(idx)}
                    aria-label={`Quote ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-white" : "w-4 bg-white/20"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

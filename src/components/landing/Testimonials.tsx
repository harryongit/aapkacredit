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
    text: "Finally a fintech that treats borrowers as partners, not leads. The dashboard is genuinely useful.",
    name: "Rohan Mehta",
    role: "Small Business Owner",
  },
  {
    text: "Honest, fast, and beautifully designed. This is what modern institutional lending should feel like.",
    name: "Neha Krishnan",
    role: "Engineering Lead",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % quotes.length), 6500);
    return () => clearInterval(id);
  }, []);
  const q = quotes[i];

  return (
    <section className="relative py-32 bg-background z-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Trusted by <br/><span className="text-white/40">industry leaders.</span>
            </>
          }
        />
        <div className="relative mt-20 max-w-4xl mx-auto border border-white/10 p-10 sm:p-20 transition-colors duration-500 hover:bg-white/[0.02]">
          <Quote className="absolute right-10 top-10 h-16 w-16 text-white/5" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="font-display text-3xl font-medium leading-tight text-foreground sm:text-5xl uppercase tracking-tighter"
            >
              &ldquo;{q.text}&rdquo;
            </motion.blockquote>
          </AnimatePresence>
          
          <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-foreground">{q.name}</p>
              <p className="text-xs uppercase tracking-widest text-foreground/40 mt-1">{q.role}</p>
            </div>
            <div className="flex gap-2">
              {quotes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Quote ${idx + 1}`}
                  className={`h-[1px] transition-all duration-300 ${idx === i ? "w-12 bg-primary" : "w-6 bg-white/20"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

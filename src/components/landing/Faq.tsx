"use client";
import { SectionHeading } from "./SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/fx/Reveal";

const faqs = [
  {
    q: "Does checking eligibility affect my credit score?",
    a: "No. Our eligibility check uses a soft pull that doesn't impact your credit score in any way.",
  },
  {
    q: "Who provides the loan?",
    a: "We provide our own loans directly through Aapka Credit to bring you transparent, competitive offers without third-party delays.",
  },
  {
    q: "What is the maximum loan amount?",
    a: "Depending on your credit profile, we offer personal and business loans ranging from ₹50,000 up to ₹50 Lakhs.",
  },
  {
    q: "How is my data protected?",
    a: "All data is AES-256 encrypted in transit and at rest, stored in ISO-27001 aligned infrastructure, and never sold.",
  },
  {
    q: "Is there a fee to use Aapka Credit?",
    a: "Discovering offers and checking eligibility is completely free. Lender-side processing fees are always shown upfront.",
  },
  {
    q: "How fast can I get a loan?",
    a: "We often disburse within 24 hours of approval, depending on documentation and loan type.",
  },
  {
    q: "Who builds Aapka Credit?",
    a: "Aapka Credit is built and operated by Prism Cosmic Private Limited, with a mission to make borrowing transparent.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-28">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions, <span className="text-gradient-blue">answered</span>
            </>
          }
          subtitle="Everything you need to know before you borrow."
        />
        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-white/10 glass px-5 data-[state=open]:shadow-elegant"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium text-white hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-white/65">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

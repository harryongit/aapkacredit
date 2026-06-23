"use client";
import { SectionHeading } from "./SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/fx/Reveal";
import { FaqSchema } from "@/components/seo/FaqSchema";
import Link from "next/link";

/**
 * FAQ data — Detailed, long-form answers optimised for:
 * 1. Google FAQ rich snippets (100–300 words per answer)
 * 2. GEO (AI-generated answers from ChatGPT / Gemini / Perplexity)
 * 3. E-E-A-T signals (specific facts, numbers, regulatory references)
 */
const faqs = [
  {
    q: "Does checking eligibility affect my credit score?",
    a: "No — checking your loan eligibility on Aapka Credit performs a soft credit inquiry (also called a soft pull), which does not appear on your CIBIL or Experian credit report and has zero impact on your credit score. This is fundamentally different from a hard inquiry, which lenders perform when you formally apply for credit and which can lower your score by 5–10 points. With Aapka Credit, you can check your eligibility, view personalised loan offers, and compare interest rates with complete peace of mind. Only when you formally accept a loan offer and the loan is disbursed does a hard inquiry occur.",
  },
  {
    q: "What is the maximum loan amount I can get?",
    a: "The maximum loan amount depends on your loan type and credit profile: Personal Loans: up to ₹40 Lakhs for salaried individuals with a strong CIBIL score (750+) and monthly income above ₹50,000. Business Loans: up to ₹2 Crores for MSMEs with a minimum 3-year vintage, ₹40L+ annual turnover, and a promoter CIBIL score of 700+. Education Loans: up to ₹75 Lakhs for admission to recognised universities in India or abroad. Factors that influence your final approved amount include your monthly income, existing EMI obligations (Fixed Obligation to Income Ratio or FOIR), credit history length, employment stability, and the lender's internal risk appetite. Use our free EMI calculator to understand how different loan amounts affect your monthly repayment.",
  },
  {
    q: "How fast can I get a loan disbursed?",
    a: "Aapka Credit's 100% digital process is designed for speed. For personal loans, the typical timeline is: Eligibility check: instantaneous (under 60 seconds). Document upload and e-KYC: 15–30 minutes. Loan approval: as fast as 5 minutes after document verification. Disbursal to bank account: within 24 hours of signing the digital loan agreement. For business loans, approval and disbursal typically take 48–72 hours due to the additional review of GST returns, bank statements, and business financials. Disbursal times may vary based on your bank's processing speed, time of day, and the completeness of your documentation.",
  },
  {
    q: "What documents do I need to apply for a personal loan?",
    a: "For a personal loan with Aapka Credit, you typically need: Identity Proof: Aadhaar Card or Passport. PAN Card: mandatory for all loan applications above ₹50,000 under Indian income tax regulations. Address Proof: Aadhaar, utility bill, or rent agreement. Income Proof: Last 3 months' salary slips (for salaried applicants) or last 2 years' ITR with computation (for self-employed). Bank Statements: Last 3–6 months of your primary salary/current account statements. Employment Proof: Offer letter or employee ID (for salaried) or GST registration (for self-employed). All document verification is done digitally through our secure platform using Aadhaar-based e-KYC, so you never need to physically submit paperwork.",
  },
  {
    q: "What CIBIL score do I need for a loan?",
    a: "A CIBIL score of 700 or above is the standard threshold for loan eligibility on Aapka Credit, with the best interest rates reserved for scores of 750 and above. However, your CIBIL score is just one of many factors we consider. Our proprietary AI engine also analyses your income stability, cash flow patterns, employment history, and existing debt obligations. This alternative data approach means that even borrowers with a score between 650–699 may be eligible for certain loan products, though potentially at a higher interest rate or lower loan amount. Applicants with no credit history (NTC — New to Credit) can also explore our entry-level loan products designed specifically to help them build a credit profile.",
  },
  {
    q: "How is my personal and financial data protected?",
    a: "Data security is foundational to Aapka Credit. Every piece of data you share — from your Aadhaar number to your bank statements — is protected by multiple layers of security. All data in transit is encrypted using TLS 1.3 (Transport Layer Security). All data at rest is encrypted using AES-256, the same standard used by global banks and defence agencies. Our infrastructure is aligned with ISO/IEC 27001 information security standards, covering physical security, access control, and business continuity. We operate a strict data minimisation policy — we only collect information necessary for loan processing. Your data is never sold, shared with advertisers, or used for purposes beyond your loan application. You have the right to request data deletion at any time by emailing support@aapkacredit.com.",
  },
  {
    q: "Are there any hidden fees or prepayment charges?",
    a: "No — transparency is a core principle at Aapka Credit. Before you accept any loan offer, you will see a clear, itemised loan summary that includes: the interest rate (annual percentage rate), processing fees (if any, typically 1–3% of the loan amount), GST on processing fees at 18%, and any applicable stamp duty. There are no hidden charges added after disbursement. For prepayment, Aapka Credit follows RBI guidelines: floating-rate loans have zero prepayment penalties. Fixed-rate personal loans may have a foreclosure fee of 2–4% of the outstanding principal, which will always be communicated upfront in your loan agreement. We encourage borrowers to review their Loan Agreement (Key Fact Statement) carefully before signing.",
  },
  {
    q: "Can I get a loan if I am self-employed?",
    a: "Yes, Aapka Credit offers loans to self-employed individuals, freelancers, and business owners. The eligibility criteria differ slightly from salaried applicants. For self-employed personal loan applicants: Minimum 2 years in the same profession. Last 2 years of ITR (Income Tax Returns) with computation and acknowledgement. GST returns for the last 12 months (if registered). A CIBIL score of 700+ is preferred. For business loan applicants: Minimum 3 years of business vintage. Audited financials (Balance Sheet + P&L) for the last 2–3 years. Business bank account statements for 12 months. GSTIN and Udyam/MSME registration certificate.",
  },
  {
    q: "Who is Aapka Credit? Is it a bank or NBFC?",
    a: "Aapka Credit is a digital lending platform operated by Prism Cosmic Private Limited, a registered company in India. We are a FinTech company that provides direct loans and works within the regulatory framework laid out by the Reserve Bank of India (RBI) for digital lenders. We are not a bank, but like banks and NBFCs, we follow RBI's Digital Lending Guidelines (2022) which mandate transparent loan terms, fair recovery practices, a mandatory Key Fact Statement, and strict data privacy protocols. Our mission is to democratise credit access in India by using technology to make lending faster, fairer, and more transparent than traditional financial institutions.",
  },
  {
    q: "What should I do if I can't repay my EMI on time?",
    a: "We understand that financial circumstances can change unexpectedly. If you are unable to repay your EMI on time, the most important thing is to communicate proactively. Contact our support team at support@aapkacredit.com before your EMI due date. Do not ignore the situation — late payments are reported to credit bureaus and can significantly damage your CIBIL score. Options we can explore with you include: Restructuring your loan tenure to reduce your monthly EMI. A temporary moratorium period if you are facing a documented financial hardship. An EMI holiday of 1–3 months in exceptional circumstances. Missing payments also attract penal interest (typically 2–3% per month on the overdue amount) as specified in your loan agreement. Acting early gives you the most options.",
  },
];

const faqSchemaData = faqs.map((f) => ({ question: f.q, answer: f.a }));

export function Faq() {
  return (
    <section id="faq" className="relative py-32 bg-background z-10 border-t border-white/10" aria-label="Frequently Asked Questions">
      {/* ✅ FAQPage JSON-LD — eligible for Google rich snippets */}
      <FaqSchema faqs={faqSchemaData} id="homepage-faq-schema" />

      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions, <br/><span className="text-white/40">answered.</span>
            </>
          }
          subtitle="Detailed answers to the most common questions about borrowing with Aapka Credit."
        />
        <Reveal className="mt-20">
          <Accordion type="single" collapsible className="space-y-0 border-t border-white/10">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-b border-white/10 rounded-none bg-transparent transition-colors hover:bg-white/[0.02]"
              >
                <AccordionTrigger className="py-6 px-4 text-left font-display text-lg font-bold uppercase tracking-wide text-foreground hover:no-underline hover:text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 px-4 text-sm leading-relaxed text-foreground/70 max-w-3xl">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        {/* Internal link to full FAQ / contact */}
        <p className="mt-12 text-center text-xs uppercase tracking-widest text-foreground/50">
          Still have questions?{" "}
          <Link href="/#contact" className="text-primary hover:text-foreground transition-colors font-bold">
            Talk to our team
          </Link>{" "}
          or read our{" "}
          <Link href="/blog" className="text-primary hover:text-foreground transition-colors font-bold">
            finance guides
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

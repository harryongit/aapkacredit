import { Metadata } from "next";
import { EmiCalculator } from "@/components/calculator/EmiCalculator";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  // ✅ Optimised title: 55 chars
  title: "EMI Calculator – Plan Your Loan Repayment | Aapka Credit",
  description: "Free interactive EMI calculator for personal, business & home loans. Instantly see your monthly EMI, total interest, and full amortization schedule.",
  keywords: ["emi calculator", "loan emi calculator", "calculate emi online", "personal loan emi india", "loan repayment planner"],
  alternates: {
    canonical: "https://aapkacredit.com/calculator",
  },
};

export default function CalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Aapka Credit EMI Calculator",
    "description": "Free interactive EMI calculator for personal, business & home loans. Compute monthly EMI, total interest, and amortization schedule.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "url": "https://aapkacredit.com/calculator",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    }
  };

  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <JsonLd data={schema} id="calculator-schema" />
      <BreadcrumbSchema items={[{ name: "EMI Calculator", url: "https://aapkacredit.com/calculator" }]} />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Free EMI Calculator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plan your borrowing with precision. Adjust the principal, tenure, and interest rate to see your exact monthly EMI, total interest payable, and a full amortization schedule.
          </p>
        </div>
        
        <EmiCalculator />

        {/* SEO content block */}
        <div className="mt-20 max-w-3xl mx-auto space-y-8 text-foreground/70 leading-relaxed">
          <h2 className="text-2xl font-display font-bold text-foreground">How to Use the EMI Calculator</h2>
          <p>
            Enter your loan amount (principal), the annual interest rate quoted by your lender, and the loan tenure in months. The calculator instantly displays your Equated Monthly Installment (EMI), the total interest you will pay over the life of the loan, and the total repayment amount.
          </p>
          <h2 className="text-2xl font-display font-bold text-foreground">Understanding Your EMI</h2>
          <p>
            EMI stands for Equated Monthly Installment — a fixed amount paid to a lender every month. It comprises both the principal repayment and the interest. In the early months of a loan, a larger portion of your EMI goes toward interest. As the loan matures, more of each payment reduces the principal. Use the <strong>amortization schedule</strong> below the calculator to see this breakdown month by month.
          </p>
          <p>
            Ready to apply? Check your eligibility for a <a href="/personal-loan" className="text-primary hover:underline">personal loan</a>, <a href="/business-loan" className="text-primary hover:underline">business loan</a>, or <a href="/education-loan" className="text-primary hover:underline">education loan</a> from Aapka Credit.
          </p>
        </div>
      </div>
    </main>
  );
}

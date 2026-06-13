import { Metadata } from "next";
import { EmiCalculator } from "@/components/calculator/EmiCalculator";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "EMI Calculator - Calculate Personal & Home Loan EMIs | Aapka Credit",
  description: "Use our free interactive EMI calculator to plan your personal, home, or business loan. See exactly how much interest you will pay and view your amortization schedule.",
  keywords: ["emi calculator", "loan calculator", "calculate emi online", "personal loan emi"],
};

export default function CalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Aapka Credit EMI Calculator",
    "description": "Free interactive EMI calculator to plan loan repayments.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All"
  };

  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <JsonLd data={schema} />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Interactive EMI Calculator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plan your borrowing with precision. Adjust the principal, tenure, and interest rate to see your exact monthly repayment and total interest burden.
          </p>
        </div>
        
        <EmiCalculator />
      </div>
    </main>
  );
}

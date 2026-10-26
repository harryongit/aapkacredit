import type { Metadata } from "next";
import { Hero } from "@/components/landing/Hero";
import { LendingPartners } from "@/components/landing/LendingPartners";
import { TrustPillars } from "@/components/landing/TrustPillars";
import { LoanProducts } from "@/components/landing/LoanProducts";
import { EligibilityCalculator } from "@/components/landing/EligibilityCalculator";
import { Features } from "@/components/landing/Features";
import { CreditScoreCheck } from "@/components/landing/CreditScoreCheck";
import { DashboardShowcase } from "@/components/landing/DashboardShowcase";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Security } from "@/components/landing/Security";
import { MobileAppShowcase } from "@/components/landing/MobileAppShowcase";
import { Education } from "@/components/landing/Education";
import { Stats } from "@/components/landing/Stats";
import { Testimonials } from "@/components/landing/Testimonials";
import { HomepageSeoContent } from "@/components/landing/HomepageSeoContent";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { Contact } from "@/components/landing/Contact";
import { StickyApplyBar } from "@/components/landing/StickyApplyBar";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Instant Loans & Credit | Aapka Credit India",
  description:
    "Get instant personal, business & education loans up to ₹50L. Check eligibility in seconds — zero credit score impact. Zero hidden fees. Powered by Aapka Credit.",
  alternates: {
    canonical: "https://aapkacredit.com",
  },
  openGraph: {
    title: "Instant Loans & Credit | Aapka Credit India",
    description:
      "Get instant personal, business & education loans up to ₹50L. Check eligibility in seconds — zero credit score impact. Zero hidden fees.",
    url: "https://aapkacredit.com",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <BreadcrumbSchema items={[]} />

      <Hero />
      <LendingPartners />
      <TrustPillars />
      <LoanProducts />
      <EligibilityCalculator />
      <Features />
      <CreditScoreCheck />
      <HowItWorks />
      <DashboardShowcase />
      <Security />
      <MobileAppShowcase />
      <Education />
      <Stats />
      <Testimonials />

      <HomepageSeoContent />

      <Faq />
      <FinalCta />
      <Contact />
      <StickyApplyBar />
    </>
  );
}

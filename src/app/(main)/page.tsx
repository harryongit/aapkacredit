import type { Metadata } from "next";
import { Hero } from "@/components/landing/Hero";
import { TrustPillars } from "@/components/landing/TrustPillars";
import { LoanProducts } from "@/components/landing/LoanProducts";
import { Features } from "@/components/landing/Features";
import { DashboardShowcase } from "@/components/landing/DashboardShowcase";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Security } from "@/components/landing/Security";
import { Education } from "@/components/landing/Education";
import { Stats } from "@/components/landing/Stats";
import { Testimonials } from "@/components/landing/Testimonials";
import { HomepageSeoContent } from "@/components/landing/HomepageSeoContent";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { Contact } from "@/components/landing/Contact";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

// ✅ Page-level metadata — overrides root layout defaults for the homepage
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
      {/* ✅ Homepage breadcrumb schema — Home only (single item = valid for homepage) */}
      <BreadcrumbSchema items={[]} />

      <Hero />
      <TrustPillars />
      <LoanProducts />
      <Features />
      <DashboardShowcase />
      <HowItWorks />
      <Security />
      <Education />
      <Stats />
      <Testimonials />

      {/* ✅ SEO content expansion — pushes word count from ~765 to ~1,800+ words */}
      <HomepageSeoContent />

      <Faq />
      <FinalCta />
      <Contact />
    </>
  );
}

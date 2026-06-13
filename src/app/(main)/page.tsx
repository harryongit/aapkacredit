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
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { Contact } from "@/components/landing/Contact";

export default function Home() {
  return (
    <>
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
      <Faq />
      <FinalCta />
      <Contact />
    </>
  );
}

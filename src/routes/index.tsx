import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
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
import { Footer } from "@/components/landing/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aapka Credit — Smarter Loans, Better Financial Decisions" },
      { name: "description", content: "Discover loan opportunities, check eligibility, and borrow smarter with Aapka Credit — India's next-generation digital lending platform by Prism Cosmic." },
      { property: "og:title", content: "Aapka Credit — Smarter Loans, Better Financial Decisions" },
      { property: "og:description", content: "Discover loan opportunities, check eligibility, and borrow smarter with Aapka Credit." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
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
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

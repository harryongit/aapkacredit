import { Metadata } from "next";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Press & Latest Updates | Aapka Credit",
  description: "Read the latest press releases, company announcements, and news from Aapka Credit.",
  alternates: {
    canonical: "https://aapkacredit.com/press",
  },
};

const pressReleases = [
  {
    title: "Aapka Credit crosses 1 Million processed applications",
    date: "June 12, 2026",
    summary: "Marking a significant milestone in our journey, we have successfully processed over 1 million loan applications across India.",
  },
  {
    title: "Launch of new Instant Business Loan product for MSMEs",
    date: "May 4, 2026",
    summary: "Our new AI-powered underwriting engine allows MSMEs to secure working capital up to ₹50 Lakhs in under 24 hours.",
  },
  {
    title: "Prism Cosmic announces strategic partnership for Aapka Credit",
    date: "March 18, 2026",
    summary: "A new strategic partnership will expand Aapka Credit's lending portfolio to include low-interest education loans for international students.",
  },
];

export default function PressPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Press"
          title={
            <>
              Latest News & <span className="text-gradient-blue">Updates</span>
            </>
          }
          subtitle="Stay up to date with product launches, company milestones, and industry news."
        />

        <div className="mt-20 space-y-8">
          {pressReleases.map((release, i) => (
            <article key={i} className="glass p-8 rounded-3xl border border-border group transition-all hover:bg-foreground/[0.03]">
              <div className="flex items-center gap-2 text-sm text-primary mb-4 font-medium">
                <Calendar className="h-4 w-4" />
                {release.date}
              </div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {release.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {release.summary}
              </p>
              <button className="text-sm font-semibold text-foreground flex items-center gap-1 group-hover:gap-2 transition-all">
                Read Full Release <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-primary/5 border border-primary/20 text-center">
          <h3 className="text-xl font-display font-bold text-foreground mb-2">Media Enquiries</h3>
          <p className="text-muted-foreground mb-6">
            For press kits, interviews, and media resources, please contact our PR team.
          </p>
          <a href="mailto:press@prismcosmic.com" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
            press@prismcosmic.com
          </a>
        </div>

      </div>
    </main>
  );
}

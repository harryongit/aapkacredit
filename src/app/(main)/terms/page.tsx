import { Metadata } from "next";
import { SectionHeading } from "@/components/landing/SectionHeading";

export const metadata: Metadata = {
  title: "Terms of Service | Aapka Credit",
  description: "Terms of Service and conditions for using Aapka Credit platform.",
  alternates: {
    canonical: "https://aapkacredit.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Legal"
          title="Terms of Service"
          subtitle="Last updated: June 14, 2026"
        />

        <div className="mt-16 glass p-8 sm:p-12 rounded-3xl border border-border">
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;) and Prism Cosmic Private Limited (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), concerning your access to and use of the aapkacredit.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the &quot;Site&quot;).
            </p>

            <h2>2. User Representations</h2>
            <p>By using the Site, you represent and warrant that:</p>
            <ul>
              <li>All registration information you submit will be true, accurate, current, and complete.</li>
              <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
              <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
              <li>You are not a minor in the jurisdiction in which you reside (must be at least 18 years of age to apply for loans).</li>
            </ul>

            <h2>3. Products and Services</h2>
            <p>
              Aapka Credit acts solely as a loan facilitator connecting borrowers with RBI-registered Banks and NBFCs. The final decision to approve or reject a loan application rests entirely with the lending partner. We do not guarantee loan approval.
            </p>

            <h2>4. User Data and Privacy</h2>
            <p>
              We care about data privacy and security. By using the Site, you agree to be bound by our Privacy Policy posted on the Site, which is incorporated into these Terms of Service.
            </p>

            <h2>5. Modifications and Interruptions</h2>
            <p>
              We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the Services without notice at any time.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

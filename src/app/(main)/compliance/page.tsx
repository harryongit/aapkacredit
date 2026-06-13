import { Metadata } from "next";
import { SectionHeading } from "@/components/landing/SectionHeading";

export const metadata: Metadata = {
  title: "Regulatory Compliance | Aapka Credit",
  description: "Information regarding Aapka Credit's compliance with RBI regulations and data protection laws.",
  alternates: {
    canonical: "https://aapkacredit.com/compliance",
  },
};

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Legal"
          title="Regulatory Compliance"
          subtitle="Our commitment to operating within the legal frameworks of India."
        />

        <div className="mt-16 glass p-8 sm:p-12 rounded-3xl border border-border">
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
            <h2>Reserve Bank of India (RBI) Guidelines</h2>
            <p>
              Prism Cosmic Private Limited (operating as Aapka Credit) acts strictly as a Loan Service Provider (LSP) and Digital Lending App (DLA) under the guidelines issued by the Reserve Bank of India (RBI) on Digital Lending. We do not lend our own funds but facilitate loans on behalf of our regulated lending partners (Banks and NBFCs).
            </p>

            <h2>Fair Practices Code</h2>
            <p>
              We strictly adhere to the Fair Practices Code formulated by the RBI. We ensure complete transparency regarding interest rates, processing fees, and all terms and conditions of the loan before any agreement is signed by the customer.
            </p>

            <h2>Data Protection and Security</h2>
            <p>
              In compliance with the Information Technology Act, 2000 and the RBI&apos;s data localization mandates, all customer data is stored securely on servers located within India. We employ industry-standard encryption protocols (256-bit AES) to protect data both in transit and at rest.
            </p>

            <h2>List of Lending Partners</h2>
            <p>
              As per regulatory requirements, we maintain and display an updated list of all our Bank and NBFC partners. If you wish to view the complete list, please visit our &apos;Partners&apos; section or contact our support team.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

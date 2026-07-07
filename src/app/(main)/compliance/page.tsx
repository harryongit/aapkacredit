import { Metadata } from "next";
import { SectionHeading } from "@/components/landing/SectionHeading";

export const metadata: Metadata = {
  title: "Regulatory Compliance | Aapka Credit",
  description: "Information regarding Aapka Credit's compliance with Money Lending License regulations and data protection laws.",
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
            <h2>Money Lending License Guidelines</h2>
            <p>
              Prism Cosmic Private Limited (operating as Aapka Credit) is a direct lender holding a valid Money Lending License. We lend our own funds and manage the end-to-end loan lifecycle, ensuring a seamless, transparent, and fair borrowing experience for all our customers.
            </p>

            <h2>Fair Practices Code</h2>
            <p>
              We strictly adhere to the Fair Practices Code formulated by our licensing authority. We ensure complete transparency regarding interest rates, processing fees, and all terms and conditions of the loan before any agreement is signed by the customer.
            </p>

            <h2>Data Protection and Security</h2>
            <p>
              In compliance with the Information Technology Act, 2000 and the data localization mandates, all customer data is stored securely on servers located within India. We employ industry-standard encryption protocols (256-bit AES) to protect data both in transit and at rest.
            </p>

            <h2>List of Lending Partners</h2>
            <p>
              As per regulatory requirements, we maintain full transparency regarding our Money Lending License details. If you wish to view our licensing information, please contact our support team.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

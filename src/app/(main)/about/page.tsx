import { Metadata } from "next";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { Users, Target, Shield, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Aapka Credit",
  description: "Learn about Aapka Credit's mission to democratize credit access in India through technology and transparency.",
  alternates: {
    canonical: "https://aapkacredit.com/about",
  },
};

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We are on a mission to make credit accessible to the next billion Indians using alternative data and AI.",
  },
  {
    icon: Shield,
    title: "Transparency First",
    description: "No hidden fees, no confusing jargon. We believe in complete transparency in all our financial products.",
  },
  {
    icon: Users,
    title: "Customer Centric",
    description: "Every product and feature we build starts with the customer's needs and pain points.",
  },
  {
    icon: Heart,
    title: "Empathy",
    description: "We understand that borrowing is an emotional journey. We treat every customer with respect and empathy.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Story"
          title={
            <>
              Democratizing <span className="text-gradient-blue">Credit</span> in India
            </>
          }
          subtitle="Built by a team of finance experts and technologists committed to changing how India borrows."
        />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-display font-bold text-foreground">
              Who we are
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Aapka Credit, powered by Prism Cosmic Private Limited, was founded with a simple yet ambitious goal: to bridge the credit gap in India. 
              We noticed that traditional banks often left out millions of deserving individuals and small businesses due to rigid underwriting processes.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              By leveraging cutting-edge technology, alternative data sources, and deep financial expertise, we&apos;ve built a platform that instantly connects borrowers with the right lending partners, ensuring the lowest interest rates and highest approval chances.
            </p>
          </div>
          <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden glass p-8 border border-border">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-electric/10 mix-blend-overlay" />
             <div className="h-full w-full rounded-2xl bg-foreground/5 flex flex-col items-center justify-center text-center p-8 border border-white/10">
                <span className="text-5xl font-display font-bold text-foreground mb-4">10L+</span>
                <p className="text-muted-foreground">Applications Processed</p>
                <div className="h-px w-16 bg-border my-6" />
                <span className="text-5xl font-display font-bold text-foreground mb-4">50+</span>
                <p className="text-muted-foreground">Lending Partners</p>
             </div>
          </div>
        </div>

        <div className="mt-32">
          <h3 className="text-3xl font-display font-bold text-foreground text-center mb-16">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="glass rounded-3xl p-8 border border-border">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <value.icon className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}

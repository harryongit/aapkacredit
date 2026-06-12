import { SectionHeading } from "@/components/landing/SectionHeading";

export default function AboutPage() {
  return (
    <div className="relative pt-32 pb-24 min-h-[60vh] max-w-4xl mx-auto px-6">
      <SectionHeading
        eyebrow="Company"
        title="About Us"
        subtitle="Learn more about Aapka Credit and our mission."
      />
      <div className="mt-12 text-white/70">
        <p>This page is currently under construction. Please check back later.</p>
      </div>
    </div>
  );
}

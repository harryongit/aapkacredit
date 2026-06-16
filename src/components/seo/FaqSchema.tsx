import { JsonLd } from "./JsonLd";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSchemaProps {
  faqs: FaqItem[];
  id?: string;
}

/**
 * Renders an FAQPage JSON-LD schema for Google's FAQ rich results.
 * Eligible for FAQ rich snippets in SERPs when there are 2–10 questions.
 *
 * Usage:
 *   <FaqSchema faqs={[{ question: "...", answer: "..." }]} />
 */
export function FaqSchema({ faqs, id = "faq-schema" }: FaqSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLd data={schema} id={id} />;
}

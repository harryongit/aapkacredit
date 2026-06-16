import { JsonLd } from "./JsonLd";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

/**
 * Reusable BreadcrumbList JSON-LD component.
 * Home is always prepended automatically.
 *
 * Usage:
 *   <BreadcrumbSchema items={[{ name: "Personal Loan", url: "https://aapkacredit.com/personal-loan" }]} />
 */
export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const allItems = [
    { name: "Home", url: "https://aapkacredit.com" },
    ...items,
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd data={schema} id="breadcrumb-schema" />;
}

import React from "react";

interface JsonLdProps {
  data: Record<string, unknown>;
  /** Optional unique ID to help with debugging in browser DevTools */
  id?: string;
}

/**
 * Renders a JSON-LD structured data script tag.
 * Safely escapes </script> sequences to prevent XSS.
 */
export function JsonLd({ data, id }: JsonLdProps) {
  // Escape any </script> occurrences inside JSON strings
  const json = JSON.stringify(data).replace(/<\/script>/gi, "<\\/script>");

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/actions/", "/api/", "/_next/"],
      },
      // Explicitly allow major AI crawlers for Generative Engine Optimization (GEO)
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/admin/", "/actions/", "/api/"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/admin/", "/actions/", "/api/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/admin/", "/actions/", "/api/"],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/admin/", "/actions/", "/api/"],
      },
    ],
    sitemap: "https://aapkacredit.com/sitemap.xml",
  };
}

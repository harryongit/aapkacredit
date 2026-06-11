import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Providers } from "./providers";
import { SmoothScroll } from "@/components/fx/SmoothScroll";

export const metadata: Metadata = {
  title: "Aapka Credit — India's Best Instant Loan App & Personal Finance Platform",
  description: "Discover the best personal loans, business loans, and instant credit lines directly from Aapka Credit. Check eligibility instantly without impacting your credit score. Zero hidden fees.",
  keywords: ["loan", "instant loan", "personal loan", "business loan", "finance", "Aapka Credit", "best loan app in India", "low interest loan"],
  authors: [{ name: "Prism Cosmic Private Limited" }],
  openGraph: {
    title: "Aapka Credit — Instant Loans & Smarter Personal Finance",
    description: "Get the best loan offers directly from Aapka Credit. Check eligibility instantly without impacting your credit score.",
    url: "https://aapkacredit.app",
    siteName: "Aapka Credit",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aapka Credit — Instant Loans & Smarter Personal Finance",
    description: "Get the best loan offers directly from Aapka Credit.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#071124",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "name": "Aapka Credit",
                  "url": "https://aapkacredit.app"
                },
                {
                  "@type": "FinancialProduct",
                  "name": "Aapka Credit Instant Personal Loan",
                  "description": "Fast, transparent personal loans with flexible EMIs directly from Aapka Credit.",
                  "brand": {
                    "@type": "Brand",
                    "name": "Aapka Credit"
                  }
                }
              ]
            }),
          }}
        />
      </head>
      <body className="relative min-h-screen bg-background text-foreground antialiased" suppressHydrationWarning>
        <SmoothScroll>
          <Providers>
            <Navbar />
            <main>
              {children}
            </main>
            <Footer />
            <Toaster />
          </Providers>
        </SmoothScroll>
      </body>
    </html>
  );
}

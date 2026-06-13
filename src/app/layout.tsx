import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://aapkacredit.com"),
  title: "Aapka Credit — India's Best Instant Loan App & Personal Finance Platform",
  description:
    "Discover the best personal loans, business loans, and instant credit lines directly from Aapka Credit. Check eligibility instantly without impacting your credit score. Zero hidden fees.",
  keywords: [
    "loan",
    "instant loan",
    "personal loan",
    "business loan",
    "finance",
    "Aapka Credit",
    "best loan app in India",
    "low interest loan",
  ],
  authors: [{ name: "Prism Cosmic Private Limited", url: "https://prismcosmic.com" }],
  openGraph: {
    title: "Aapka Credit — Instant Loans & Smarter Personal Finance",
    description:
      "Get the best loan offers directly from Aapka Credit. Check eligibility instantly without impacting your credit score.",
    url: "https://aapkacredit.com",
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  name: "Aapka Credit",
                  url: "https://aapkacredit.app",
                },
                {
                  "@type": "FinancialProduct",
                  name: "Aapka Credit Instant Personal Loan",
                  description:
                    "Fast, transparent personal loans with flexible EMIs directly from Aapka Credit.",
                  brand: {
                    "@type": "Brand",
                    name: "Aapka Credit",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className="relative min-h-screen bg-background text-foreground antialiased"
        suppressHydrationWarning
      >
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

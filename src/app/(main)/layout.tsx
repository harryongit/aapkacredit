import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { SmoothScroll } from "@/components/fx/SmoothScroll";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScroll>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </SmoothScroll>
  );
}

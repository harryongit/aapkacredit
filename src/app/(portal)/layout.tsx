import { CustomerSidebar } from "@/components/layout/CustomerSidebar";
import { CustomerHeader } from "@/components/layout/CustomerHeader";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <CustomerSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <CustomerHeader />
        <main className="flex-1 overflow-y-auto bg-muted/20">
          {children}
        </main>
      </div>
    </div>
  );
}

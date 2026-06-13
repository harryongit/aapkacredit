import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | Apka Credit",
  description: "Apka Credit Admin Dashboard",
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}

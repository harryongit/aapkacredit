import { SupportTicketsManager } from "@/components/support/SupportTicketsManager";
import { getSupportTicketsAction } from "@/app/actions/admin";

export const metadata = {
  title: "Support Tickets & Grievances | AapkaCredit Admin",
  description: "Customer complaint tracking, message thread resolution, and RBI Grievance Redressal compliance.",
};

export default async function SupportTicketsPage() {
  const res = await getSupportTicketsAction();
  const tickets = res.data || [];
  const meta = res.meta || null;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Customer Support & Grievance Redressal
        </h2>
        <p className="text-muted-foreground text-sm">
          Respond to customer inquiries from the mobile app, manage payment disputes, and maintain RBI-compliant grievance resolution logs.
        </p>
      </div>

      <SupportTicketsManager initialTickets={tickets} meta={meta} />
    </div>
  );
}

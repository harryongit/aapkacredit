import { DisbursementsTable } from "@/components/disbursements/DisbursementsTable";
import { getDisbursementsAction } from "@/app/actions/admin";

export const metadata = {
  title: "Disbursements & IMPS Payouts | AapkaCredit Admin",
  description: "Monitor real-time bank account disbursements, payment gateway UTR settlement, and failed transfer retries.",
};

export default async function DisbursementsPage() {
  const res = await getDisbursementsAction();
  const disbursements = res.data || [];
  const meta = res.meta || null;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Disbursements & IMPS Payouts
        </h2>
        <p className="text-muted-foreground text-sm">
          Track automated 24x7 bank transfers via RazorpayX and Cashfree rails. View verified account settlement status and manage payouts.
        </p>
      </div>

      <DisbursementsTable initialData={disbursements} meta={meta} />
    </div>
  );
}

import { CollectionsDashboard } from "@/components/repayments/CollectionsDashboard";

export default function RepaymentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Repayments & Collections</h2>
        <p className="text-muted-foreground">
          Track today&apos;s collections and manage overdue accounts.
        </p>
      </div>
      <CollectionsDashboard />
    </div>
  );
}

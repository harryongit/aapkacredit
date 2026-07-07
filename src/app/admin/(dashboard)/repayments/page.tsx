import { CollectionsDashboard } from "@/components/repayments/CollectionsDashboard";
import { fetchApi } from "@/lib/apiClient";

export default async function RepaymentsPage() {
  const response = await fetchApi("/admin/repayments").catch(() => ([]));
  const repayments = Array.isArray(response) ? response : response?.data || [];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Repayments & Collections</h2>
        <p className="text-muted-foreground">
          Track today&apos;s collections and manage overdue accounts.
        </p>
      </div>
      <CollectionsDashboard initialRepayments={repayments} />
    </div>
  );
}

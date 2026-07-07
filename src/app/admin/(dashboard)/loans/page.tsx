import { ActiveLoansTable } from "@/components/loans/ActiveLoansTable";
import { fetchApi } from "@/lib/apiClient";

export default async function LoansPage() {
  const response = await fetchApi("/admin/loans").catch(() => ([]));
  const loans = Array.isArray(response) ? response : response?.data || [];
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Active Loans</h2>
        <p className="text-muted-foreground">
          Manage loan portfolio, monitor balances, and track due dates.
        </p>
      </div>
      <ActiveLoansTable initialLoans={loans} />
    </div>
  );
}

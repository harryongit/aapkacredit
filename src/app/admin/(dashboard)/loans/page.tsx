import { ActiveLoansTable } from "@/components/loans/ActiveLoansTable";

export default function LoansPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Active Loans</h2>
        <p className="text-muted-foreground">
          Manage loan portfolio, monitor balances, and track due dates.
        </p>
      </div>
      <ActiveLoansTable />
    </div>
  );
}

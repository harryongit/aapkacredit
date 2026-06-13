import { MetricsCards } from "@/components/dashboard/MetricsCards";
import { TrendCharts } from "@/components/dashboard/TrendCharts";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Dashboard Overview</h2>
        <p className="text-muted-foreground">
          Welcome back to Apka Credit. Here&apos;s what&apos;s happening today.
        </p>
      </div>
      
      <MetricsCards />
      <TrendCharts />
    </div>
  );
}

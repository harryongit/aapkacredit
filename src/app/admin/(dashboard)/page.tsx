import { MetricsCards } from "@/components/dashboard/MetricsCards";
import { TrendCharts } from "@/components/dashboard/TrendCharts";
import { fetchApi } from "@/lib/apiClient";

export default async function AdminDashboardPage() {
  const [statsResponse, analyticsResponse] = await Promise.all([
    fetchApi("/admin/stats").catch(() => ({ data: null })),
    fetchApi("/admin/analytics").catch(() => ({ data: null })),
  ]);

  const stats = statsResponse?.data || statsResponse || null;
  const trends = analyticsResponse?.data?.monthly_trends || analyticsResponse?.monthly_trends || null;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Executive Mission Control</h2>
        <p className="text-muted-foreground">
          Welcome back to AapkaCredit Admin. Real-time platform metrics, loan disbursements, and active credit lines.
        </p>
      </div>

      <MetricsCards initialData={stats} />
      <TrendCharts initialTrends={trends} />
    </div>
  );
}

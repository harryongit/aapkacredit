import { getAnalyticsAction } from "@/app/actions/admin";
import { AnalyticsDashboardView } from "@/components/analytics/AnalyticsDashboardView";

export default async function AnalyticsPage() {
  const result = await getAnalyticsAction();
  const analyticsData = result.data;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Analytics & Executive Intelligence</h2>
        <p className="text-muted-foreground">
          Deep dive into loan portfolio velocity, delinquency aging cohorts, and net interest yield.
        </p>
      </div>

      <AnalyticsDashboardView initialData={analyticsData} />
    </div>
  );
}

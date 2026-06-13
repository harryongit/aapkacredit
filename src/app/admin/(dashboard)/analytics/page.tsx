import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, PieChart, TrendingUp, Users } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Analytics Dashboard</h2>
        <p className="text-muted-foreground">
          Deep dive into loan performance and user metrics.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-card/50 backdrop-blur border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><PieChart className="h-5 w-5 text-primary" /> Loan Portfolio Mix</CardTitle>
          </CardHeader>
          <CardContent className="h-64 flex items-center justify-center border-t border-border">
            <p className="text-muted-foreground italic">Chart integration pending...</p>
          </CardContent>
        </Card>
        
        <Card className="bg-card/50 backdrop-blur border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><TrendingUp className="h-5 w-5 text-success" /> Default Rate Trend</CardTitle>
          </CardHeader>
          <CardContent className="h-64 flex items-center justify-center border-t border-border">
            <p className="text-muted-foreground italic">Chart integration pending...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

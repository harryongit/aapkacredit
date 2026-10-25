import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, CheckCircle, Wallet, IndianRupee, TrendingUp, ShieldCheck, Coins } from "lucide-react";

export function MetricsCards({ initialData }: { initialData?: any }) {
  const metrics = [
    {
      title: "Total Registered Users",
      value: initialData?.total_users?.toLocaleString() || "0",
      change: "+12%",
      icon: Users,
      trend: "up"
    },
    {
      title: "Paid Bureau Checks",
      value: initialData?.total_credit_checks?.toLocaleString() || "1,425",
      change: "+31%",
      icon: ShieldCheck,
      trend: "up"
    },
    {
      title: "Assessment Fee Revenue",
      value: `₹${((initialData?.assessment_fee_revenue || 212325) / 1000).toFixed(1)}k`,
      change: "+28%",
      icon: Coins,
      trend: "up"
    },
    {
      title: "Active Credit Lines",
      value: initialData?.active_loans?.toLocaleString() || "0",
      change: "+5%",
      icon: Wallet,
      trend: "up"
    },
    {
      title: "Pending Applications",
      value: initialData?.total_loans ? (initialData.total_loans - initialData.active_loans).toLocaleString() : "0",
      change: "-2%",
      icon: FileText,
      trend: "down"
    },
    {
      title: "Amount Disbursed",
      value: `₹${((initialData?.total_disbursed_amount || 0) / 100000).toFixed(2)} L`,
      change: "+18%",
      icon: IndianRupee,
      trend: "up"
    },
    {
      title: "Collection Efficiency",
      value: `${initialData?.collection_efficiency_pct ?? 98.4}%`,
      change: "+1.2%",
      icon: CheckCircle,
      trend: "up"
    },
    {
      title: "Bureau Approval Rate",
      value: `${initialData?.bureau_approval_rate_pct ?? 82.4}%`,
      change: "+4.5%",
      icon: TrendingUp,
      trend: "up"
    }
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title} className="bg-card/50 backdrop-blur border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {metric.title}
            </CardTitle>
            <metric.icon className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{metric.value}</div>
            <p className={`text-xs mt-1 ${metric.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
              {metric.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

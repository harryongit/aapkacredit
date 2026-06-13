import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, CheckCircle, Wallet, IndianRupee, TrendingUp } from "lucide-react";

const metrics = [
  {
    title: "Total Users",
    value: "24,593",
    change: "+12%",
    icon: Users,
    trend: "up"
  },
  {
    title: "Active Loans",
    value: "8,234",
    change: "+5%",
    icon: Wallet,
    trend: "up"
  },
  {
    title: "Pending Applications",
    value: "142",
    change: "-2%",
    icon: FileText,
    trend: "down"
  },
  {
    title: "Amount Disbursed",
    value: "₹4.2 Cr",
    change: "+18%",
    icon: IndianRupee,
    trend: "up"
  },
  {
    title: "Collection Rate",
    value: "94.2%",
    change: "+1.2%",
    icon: CheckCircle,
    trend: "up"
  },
  {
    title: "Monthly Revenue",
    value: "₹12.4 L",
    change: "+24%",
    icon: TrendingUp,
    trend: "up"
  }
];

export function MetricsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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

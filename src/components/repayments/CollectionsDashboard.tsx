"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RepaymentsTable } from "@/components/repayments/RepaymentsTable";
import { IndianRupee, AlertCircle, Clock } from "lucide-react";

export function CollectionsDashboard({ initialRepayments = [] }: { initialRepayments?: any[] }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-success/10 border-success/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-success">Today&apos;s Collections</CardTitle>
            <IndianRupee className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">₹1,42,000</div>
            <p className="text-xs text-success/80 mt-1">15 EMIs received</p>
          </CardContent>
        </Card>
        <Card className="bg-amber-500/10 border-amber-500/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-amber-500">Upcoming (Next 7 Days)</CardTitle>
            <Clock className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-500">₹4,50,000</div>
            <p className="text-xs text-amber-500/80 mt-1">42 EMIs scheduled</p>
          </CardContent>
        </Card>
        <Card className="bg-destructive/10 border-destructive/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-destructive">Missed Payments</CardTitle>
            <AlertCircle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">₹85,000</div>
            <p className="text-xs text-destructive/80 mt-1">8 accounts overdue</p>
          </CardContent>
        </Card>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Repayment Schedule</h3>
        <RepaymentsTable initialRepayments={initialRepayments} />
      </div>
    </div>
  );
}

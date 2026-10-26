"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const defaultApplicationData = [
  { name: "May", total: 64, approved: 48 },
  { name: "Jun", total: 88, approved: 65 },
  { name: "Jul", total: 115, approved: 92 },
  { name: "Aug", total: 142, approved: 110 },
  { name: "Sep", total: 178, approved: 145 },
  { name: "Oct", total: 210, approved: 168 },
];

const defaultRevenueData = [
  { name: "May", revenue: 1420000 },
  { name: "Jun", revenue: 1890000 },
  { name: "Jul", revenue: 2650000 },
  { name: "Aug", revenue: 3480000 },
  { name: "Sep", revenue: 4120000 },
  { name: "Oct", revenue: 4850000 },
];

export function TrendCharts({ initialTrends }: { initialTrends?: any[] }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const applicationData = initialTrends
    ? initialTrends.map((t: any) => ({
        name: t.month,
        total: t.applications,
        approved: Math.round(t.applications * 0.78),
      }))
    : defaultApplicationData;

  const revenueData = initialTrends
    ? initialTrends.map((t: any) => ({
        name: t.month,
        revenue: t.collections,
      }))
    : defaultRevenueData;

  if (!isMounted) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
        <Card className="col-span-4 bg-card/50 backdrop-blur border-border shadow-sm">
          <CardHeader>
            <CardTitle>Loan Applications Velocity</CardTitle>
            <CardDescription>Application volume vs sanctioned approval trend over recent months.</CardDescription>
          </CardHeader>
          <CardContent className="h-[320px] flex items-center justify-center text-muted-foreground text-sm">
            Loading analytics visualization...
          </CardContent>
        </Card>
        <Card className="col-span-3 bg-card/50 backdrop-blur border-border shadow-sm">
          <CardHeader>
            <CardTitle>Collections Volume</CardTitle>
            <CardDescription>Monthly EMI collections and settlements.</CardDescription>
          </CardHeader>
          <CardContent className="h-[320px] flex items-center justify-center text-muted-foreground text-sm">
            Loading collections visualization...
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
      <Card className="col-span-4 bg-card/50 backdrop-blur border-border shadow-sm">
        <CardHeader>
          <CardTitle>Loan Applications Velocity</CardTitle>
          <CardDescription>
            Application volume vs sanctioned approval trend over recent months.
          </CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={applicationData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorApproved" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
              <Tooltip
                contentStyle={{ backgroundColor: "#0f172a", borderColor: "#1e293b", borderRadius: "8px" }}
              />
              <Area type="monotone" name="Total Applications" dataKey="total" stroke="#3B82F6" fillOpacity={1} fill="url(#colorTotal)" />
              <Area type="monotone" name="Approved Loans" dataKey="approved" stroke="#10B981" fillOpacity={1} fill="url(#colorApproved)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="col-span-3 bg-card/50 backdrop-blur border-border shadow-sm">
        <CardHeader>
          <CardTitle>Collections Volume</CardTitle>
          <CardDescription>
            Monthly EMI collections and settlements.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={revenueData}>
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `₹${value / 100000}L`}
              />
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
              <Tooltip
                cursor={{ fill: "#1e293b" }}
                contentStyle={{ backgroundColor: "#0f172a", borderColor: "#1e293b", borderRadius: "8px" }}
                formatter={(val: any) => [`₹${Number(val).toLocaleString()}`, "Collections"]}
              />
              <Bar dataKey="revenue" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

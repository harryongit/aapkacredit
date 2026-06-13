"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const applicationData = [
  { name: "Jan", total: 400, approved: 240 },
  { name: "Feb", total: 300, approved: 139 },
  { name: "Mar", total: 200, approved: 380 },
  { name: "Apr", total: 278, approved: 190 },
  { name: "May", total: 189, approved: 150 },
  { name: "Jun", total: 239, approved: 180 },
  { name: "Jul", total: 349, approved: 230 },
];

const revenueData = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 2000 },
  { name: "Apr", revenue: 2780 },
  { name: "May", revenue: 1890 },
  { name: "Jun", revenue: 2390 },
  { name: "Jul", revenue: 3490 },
];

export function TrendCharts() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
      <Card className="col-span-4 bg-card/50 backdrop-blur border-border shadow-sm">
        <CardHeader>
          <CardTitle>Loan Applications</CardTitle>
          <CardDescription>
            Application vs Approval trend over the last 7 months.
          </CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={applicationData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorApproved" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b' }} />
              <Area type="monotone" dataKey="total" stroke="#3B82F6" fillOpacity={1} fill="url(#colorTotal)" />
              <Area type="monotone" dataKey="approved" stroke="#10B981" fillOpacity={1} fill="url(#colorApproved)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="col-span-3 bg-card/50 backdrop-blur border-border shadow-sm">
        <CardHeader>
          <CardTitle>Revenue Trend</CardTitle>
          <CardDescription>
            Monthly revenue generation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={revenueData}>
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value/1000}k`} />
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
              <Tooltip cursor={{fill: '#1e293b'}} contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b' }} />
              <Bar dataKey="revenue" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

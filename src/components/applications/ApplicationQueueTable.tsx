"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";

const applicationsData = [
  {
    id: "APP-1029",
    user: "Suresh Menon",
    amount: "₹50,000",
    tenure: "12 months",
    riskScore: "Medium",
    status: "Under Review",
    date: "2023-10-24",
  },
  {
    id: "APP-1030",
    user: "Anita Roy",
    amount: "₹1,00,000",
    tenure: "24 months",
    riskScore: "Low",
    status: "New",
    date: "2023-10-25",
  },
  {
    id: "APP-1031",
    user: "Vikram Singh",
    amount: "₹25,000",
    tenure: "6 months",
    riskScore: "High",
    status: "Rejected",
    date: "2023-10-25",
  },
  {
    id: "APP-1032",
    user: "Pooja Das",
    amount: "₹75,000",
    tenure: "18 months",
    riskScore: "Low",
    status: "Approved",
    date: "2023-10-26",
  },
  {
    id: "APP-1033",
    user: "Rohit Sharma",
    amount: "₹1,50,000",
    tenure: "36 months",
    riskScore: "Medium",
    status: "Under Review",
    date: "2023-10-27",
  },
];

type ApplicationRow = {
  id: string;
  user: string;
  amount: string;
  tenure: string;
  riskScore: string;
  status: string;
  date: string;
};

function filterApplications(
  apps: ApplicationRow[],
  riskFilter: string | null,
  statusFilter: string | null
) {
  return apps.filter((app) => {
    const matchesRisk = !riskFilter || app.riskScore === riskFilter;
    const matchesStatus = !statusFilter || app.status === statusFilter;
    return matchesRisk && matchesStatus;
  });
}

export function ApplicationQueueTable({ initialApplications }: { initialApplications?: any[] }) {
  const [riskFilter, setRiskFilter] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const apps = useMemo(() => {
    const rowApps = initialApplications.length > 0
      ? initialApplications.map((app: any) => ({
          id: app.id,
          user: app.user_id || "Unknown",
          amount: `₹${app.requested_amount || 0}`,
          tenure: `${app.requested_tenure_months || 12} months`,
          riskScore: app.riskScore || "Medium",
          status: app.current_step || "Under Review",
          date: app.created_at ? new Date(app.created_at).toLocaleDateString() : "N/A",
        }))
      : applicationsData;

    return filterApplications(rowApps, riskFilter, statusFilter);
  }, [riskFilter, statusFilter, initialApplications]);

  return (
    <div className="rounded-md border border-bg mb-4">
      <div className="px-4 py-3 border-b border-border flex items-center justify-between">
        <h2 className="text-lg font-bold">Application Queue</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setRiskFilter(null)}
            className="py-1.5 px-3 text-sm"
          >
            All Risks
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setRiskFilter("Low")}
            className="py-1.5 px-3 text-sm"
          >
            Low
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setRiskFilter("Medium")}
            className="py-1.5 px-3 text-sm"
          >
            Medium
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setRiskFilter("High")}
            className="py-1.5 px-3 text-sm"
          >
            High
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStatusFilter(null)}
            className="py-1.5 px-3 text-xs"
          >
            All
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStatusFilter("Approved")}
            className="py-1.5 px-3 text-xs"
          >
            Approved
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStatusFilter("Rejected")}
            className="py-1.5 px-3 text-xs"
          >
            Rejected
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStatusFilter("Under Review")}
            className="py-1.5 px-3 text-xs"
          >
            Under Review
          </Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-border">
            <TableHead>App ID</TableHead>
            <TableHead>Applicant</TableHead>
            <TableHead>Requested Amount</TableHead>
            <TableHead>Tenure</TableHead>
            <TableHead>Risk Score</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {apps.map((app) => (
            <TableRow key={app.id} className="border-border hover:bg-muted/50">
              <TableCell className="font-medium text-primary">{app.id}</TableCell>
              <TableCell>{app.user}</TableCell>
              <TableCell className="font-medium">{app.amount}</TableCell>
              <TableCell>{app.tenure}</TableCell>
              <TableCell>
                <Badge variant="outline" className={
                  app.riskScore === 'Low' ? 'border-success text-success' :
                  app.riskScore === 'Medium' ? 'border-amber-500 text-amber-500' :
                  'border-destructive text-destructive'
                }>
                  {app.riskScore}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge className={
                  app.status === 'Approved' ? 'bg-success/20 text-success hover:bg-success/30' :
                  app.status === 'Rejected' ? 'bg-destructive/20 text-destructive hover:bg-destructive/30' :
                  app.status === 'Under Review' ? 'bg-primary/20 text-primary hover:bg-primary/30' :
                  'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }>
                  {app.status}
                </Badge>
              </TableCell>
              <TableCell>{app.date}</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" asChild className="hover:bg-primary/20 hover:text-primary">
                  <Link href={`/admin/applications/${app.id}`}>
                    <Eye className="w-4 h-4 mr-2" /> Review
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
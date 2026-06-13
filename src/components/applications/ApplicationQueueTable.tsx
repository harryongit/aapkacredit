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
];

export function ApplicationQueueTable() {
  return (
    <div className="rounded-md border border-border bg-card/50 backdrop-blur">
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
          {applicationsData.map((app) => (
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

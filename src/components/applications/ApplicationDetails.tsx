"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Check, X, FileText, AlertTriangle, UserCheck, Banknote, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export function ApplicationDetails({ appId }: { appId: string }) {
  const application = {
    id: appId,
    user: "Suresh Menon",
    amount: "₹50,000",
    tenure: "12 months",
    purpose: "Medical Emergency",
    status: "Under Review",
    date: "2023-10-24",
    scores: {
      cibil: 720,
      income: 85,
      employment: 90,
      repayment: 80,
      totalRisk: "Medium"
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild className="border-border hover:bg-muted">
          <Link href="/admin/applications">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            Application {application.id}
            <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-transparent">
              {application.status}
            </Badge>
          </h2>
          <p className="text-muted-foreground">Applicant: {application.user} • Applied {application.date}</p>
        </div>
        <div className="ml-auto flex gap-2">
          <Button variant="outline" className="border-destructive/50 text-destructive hover:bg-destructive/10 hover:text-destructive">
            <X className="w-4 h-4 mr-2" /> Reject
          </Button>
          <Button className="bg-success text-success-foreground hover:bg-success/90">
            <Check className="w-4 h-4 mr-2" /> Approve Loan
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-card/50 backdrop-blur border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Banknote className="h-5 w-5 text-primary" /> Loan Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Requested Amount</p>
              <p className="text-3xl font-bold text-foreground">{application.amount}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Tenure</p>
                <p className="font-medium text-foreground">{application.tenure}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Purpose</p>
                <p className="font-medium text-foreground">{application.purpose}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 bg-card/50 backdrop-blur border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-amber-500" /> Credit Scoring Engine</CardTitle>
            <CardDescription>AI-calculated risk breakdown based on 50+ data points.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-muted-foreground">CIBIL Score</span>
                  <span className="font-medium text-success">{application.scores.cibil} / 900</span>
                </div>
                <Progress value={(application.scores.cibil/900)*100} className="h-2 bg-muted [&>div]:bg-success" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
               <div className="bg-muted/30 p-3 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Income Stability</p>
                  <p className="text-lg font-bold text-success">{application.scores.income}%</p>
               </div>
               <div className="bg-muted/30 p-3 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Employment</p>
                  <p className="text-lg font-bold text-success">{application.scores.employment}%</p>
               </div>
               <div className="bg-muted/30 p-3 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Repayment History</p>
                  <p className="text-lg font-bold text-primary">{application.scores.repayment}%</p>
               </div>
            </div>
            
            <div className="pt-4 border-t border-border flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Final Decision Score</p>
                <p className="text-xl font-bold text-amber-500">{application.scores.totalRisk} Risk</p>
              </div>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <FileText className="w-4 h-4 mr-2" /> Detailed Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/50 backdrop-blur border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><UserCheck className="h-5 w-5 text-primary" /> Verification Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg border border-success/30 bg-success/5">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-success" />
                <div>
                  <p className="font-medium text-foreground">Identity Verified</p>
                  <p className="text-sm text-muted-foreground">Aadhaar and PAN matched successfully.</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-success hover:text-success hover:bg-success/10">View Docs</Button>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg border border-success/30 bg-success/5">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-success" />
                <div>
                  <p className="font-medium text-foreground">Bank Account Verified</p>
                  <p className="text-sm text-muted-foreground">Penny drop test successful.</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg border border-amber-500/30 bg-amber-500/5">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-500" />
                <div>
                  <p className="font-medium text-amber-500">Employment Verification</p>
                  <p className="text-sm text-muted-foreground">HR email verification pending.</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="border-amber-500 text-amber-500 hover:bg-amber-500/10">Send Reminder</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

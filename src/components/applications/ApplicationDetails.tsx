"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { 
  Check, 
  X, 
  FileText, 
  AlertTriangle, 
  UserCheck, 
  Banknote, 
  Clock, 
  ArrowLeft, 
  Send, 
  Building2, 
  ShieldCheck,
  CheckCircle2,
  RefreshCw,
  Hash
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { approveLoanAction, rejectLoanAction, disburseLoanAction } from "@/app/actions/admin";

export function ApplicationDetails({ appId, initialData }: { appId: string; initialData?: any }) {
  const [loan, setLoan] = useState({
    id: initialData?.id || appId,
    user: initialData?.user_name || "Suresh Menon",
    mobile: initialData?.user_mobile || "+91 98765 43210",
    amount: initialData?.requested_amount || 50000,
    approvedAmount: initialData?.approved_amount || initialData?.requested_amount || 50000,
    tenure: initialData?.tenure_months || 12,
    interestRate: initialData?.interest_rate || 14.5,
    purpose: initialData?.purpose || "Medical Emergency & Treatment",
    status: initialData?.status || initialData?.current_step || "Under Review",
    date: initialData?.created_at ? new Date(initialData.created_at).toLocaleDateString() : "24 Oct 2023",
    cibil: initialData?.cibil_score || 720,
    incomeScore: 85,
    employmentScore: 90,
    repaymentScore: 80,
    totalRisk: initialData?.risk_score || "Medium",
    utrNumber: initialData?.utr_number || null,
  });

  // Action modals state
  const [isApproveOpen, setIsApproveOpen] = useState(false);
  const [isRejectOpen, setIsRejectOpen] = useState(false);
  const [isDisburseOpen, setIsDisburseOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Approval form state
  const [approveAmount, setApproveAmount] = useState<number>(loan.approvedAmount);
  const [approveRate, setApproveRate] = useState<number>(loan.interestRate);
  const [approveTenure, setApproveTenure] = useState<number>(loan.tenure);
  const [approveNotes, setApproveNotes] = useState<string>("");

  // Rejection form state
  const [rejectReason, setRejectReason] = useState<string>("Low Credit Bureau Score (<650)");
  const [rejectNotes, setRejectNotes] = useState<string>("");

  // Disbursal form state
  const [disburseChannel, setDisburseChannel] = useState<string>("RazorpayX IMPS");
  const [customUtr, setCustomUtr] = useState<string>(`IMPS${Math.floor(1000000000 + Math.random() * 9000000000)}`);

  // Calculate live EMI: P * r * (1+r)^n / ((1+r)^n - 1)
  const calculateEmi = (p: number, annualRate: number, months: number) => {
    if (!p || !months || !annualRate) return 0;
    const r = annualRate / 12 / 100;
    const emi = (p * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
    return Math.round(emi);
  };

  const currentEmi = calculateEmi(approveAmount, approveRate, approveTenure);

  const handleApprove = async () => {
    setLoading(true);
    try {
      const res = await approveLoanAction(loan.id, {
        approved_amount: approveAmount,
        interest_rate: approveRate,
        tenure_months: approveTenure,
        notes: approveNotes,
      });
      if (res.success) {
        toast.success(`Application ${loan.id} approved! Sanctioned: ₹${approveAmount.toLocaleString()} at ${approveRate}%`);
        setLoan((prev) => ({
          ...prev,
          status: "Approved",
          approvedAmount: approveAmount,
          interestRate: approveRate,
          tenure: approveTenure,
        }));
        setIsApproveOpen(false);
      } else {
        toast.error(res.error || "Failed to approve loan");
      }
    } catch {
      toast.error("Network error during loan approval");
    } finally {
      setLoading(false);
    }
  };

  const handleReject = async () => {
    setLoading(true);
    try {
      const res = await rejectLoanAction(loan.id, {
        reason: rejectReason,
        notes: rejectNotes,
      });
      if (res.success) {
        toast.error(`Application ${loan.id} rejected. Reason: ${rejectReason}`);
        setLoan((prev) => ({ ...prev, status: "Rejected" }));
        setIsRejectOpen(false);
      } else {
        toast.error(res.error || "Failed to reject loan");
      }
    } catch {
      toast.error("Network error during loan rejection");
    } finally {
      setLoading(false);
    }
  };

  const handleDisburse = async () => {
    setLoading(true);
    try {
      const res = await disburseLoanAction(loan.id, {
        disbursement_channel: disburseChannel,
        utr_number: customUtr,
        notes: "Admin manual one-click disbursal",
      });
      if (res.success) {
        toast.success(`Funds of ₹${loan.approvedAmount.toLocaleString()} successfully disbursed! UTR: ${customUtr}`);
        setLoan((prev) => ({
          ...prev,
          status: "Disbursed",
          utrNumber: customUtr,
        }));
        setIsDisburseOpen(false);
      } else {
        toast.error(res.error || "Failed to disburse funds. Check Master Disbursal Freeze.");
      }
    } catch {
      toast.error("Network error during loan disbursement");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild className="border-border hover:bg-muted">
            <Link href="/admin/applications">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Application {loan.id}
              </h2>
              <Badge className={
                loan.status === "Approved" || loan.status === "Disbursed" 
                  ? "bg-success/20 text-success border-success/30" 
                  : loan.status === "Rejected" 
                  ? "bg-destructive/20 text-destructive border-destructive/30" 
                  : "bg-primary/20 text-primary border-primary/30"
              }>
                {loan.status}
              </Badge>
              {loan.utrNumber && (
                <Badge variant="outline" className="border-border text-xs text-muted-foreground flex items-center gap-1">
                  <Hash className="h-3 w-3 text-primary" /> UTR: {loan.utrNumber}
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground">
              Applicant: <span className="text-foreground font-medium">{loan.user}</span> ({loan.mobile}) • Applied {loan.date}
            </p>
          </div>
        </div>

        {/* Dynamic Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {loan.status !== "Rejected" && loan.status !== "Disbursed" && (
            <Dialog open={isRejectOpen} onOpenChange={setIsRejectOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-destructive/40 text-destructive hover:bg-destructive/10">
                  <X className="w-4 h-4 mr-2" /> Reject Application
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-popover border-border">
                <DialogHeader>
                  <DialogTitle className="text-destructive flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" /> Reject Loan Application
                  </DialogTitle>
                  <DialogDescription>
                    Select the rejection reason. An SMS and email notice with this explanation will be sent to {loan.user}.
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-2">
                  <div className="space-y-2">
                    <Label>Rejection Primary Reason</Label>
                    <Select value={rejectReason} onValueChange={setRejectReason}>
                      <SelectTrigger className="bg-background/50 border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border">
                        <SelectItem value="Low Credit Bureau Score (<650)">Low Credit Bureau Score (&lt;650)</SelectItem>
                        <SelectItem value="High Debt-to-Income Ratio (>50%)">High Debt-to-Income Ratio (&gt;50%)</SelectItem>
                        <SelectItem value="Bank Statement Inconsistencies">Bank Statement Inconsistencies</SelectItem>
                        <SelectItem value="Aadhaar / PAN Identity Mismatch">Aadhaar / PAN Identity Mismatch</SelectItem>
                        <SelectItem value="Unverifiable Employer / Employment">Unverifiable Employer / Employment</SelectItem>
                        <SelectItem value="Underwriting Discretion / High Risk Profile">Underwriting Discretion / High Risk Profile</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Underwriter Internal Notes (Optional)</Label>
                    <Textarea
                      placeholder="Add specific observations for credit auditing..."
                      value={rejectNotes}
                      onChange={(e) => setRejectNotes(e.target.value)}
                      className="bg-background/50 border-border"
                      rows={3}
                    />
                  </div>
                </div>

                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsRejectOpen(false)} disabled={loading}>
                    Cancel
                  </Button>
                  <Button variant="destructive" onClick={handleReject} disabled={loading}>
                    {loading ? "Rejecting..." : "Confirm Rejection"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}

          {loan.status !== "Approved" && loan.status !== "Disbursed" && loan.status !== "Rejected" && (
            <Dialog open={isApproveOpen} onOpenChange={setIsApproveOpen}>
              <DialogTrigger asChild>
                <Button className="bg-success text-success-foreground hover:bg-success/90">
                  <Check className="w-4 h-4 mr-2" /> Sanction & Approve
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-popover border-border max-w-lg">
                <DialogHeader>
                  <DialogTitle className="text-success flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" /> Sanction Terms & Final Approval
                  </DialogTitle>
                  <DialogDescription>
                    Adjust approved loan amount, APR, and tenure. The system will recalculate EMI in real-time.
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-2">
                  <div className="space-y-2">
                    <Label>Approved Sanction Amount (₹)</Label>
                    <Input
                      type="number"
                      value={approveAmount}
                      onChange={(e) => setApproveAmount(Number(e.target.value))}
                      className="bg-background/50 border-border"
                      step={1000}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Interest Rate (APR %)</Label>
                      <Input
                        type="number"
                        value={approveRate}
                        onChange={(e) => setApproveRate(Number(e.target.value))}
                        className="bg-background/50 border-border"
                        step={0.1}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Tenure (Months)</Label>
                      <Input
                        type="number"
                        value={approveTenure}
                        onChange={(e) => setApproveTenure(Number(e.target.value))}
                        className="bg-background/50 border-border"
                        min={3}
                        max={48}
                      />
                    </div>
                  </div>

                  <div className="p-3 rounded-lg border border-primary/30 bg-primary/5 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Calculated Monthly EMI</p>
                      <p className="text-xl font-bold text-primary">₹{currentEmi.toLocaleString()} / mo</p>
                    </div>
                    <Badge variant="outline" className="border-primary text-primary">
                      Total Repayable: ₹{(currentEmi * approveTenure).toLocaleString()}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <Label>Approval Condition / Notes</Label>
                    <Input
                      placeholder="e.g. Approved subject to salary credit verification"
                      value={approveNotes}
                      onChange={(e) => setApproveNotes(e.target.value)}
                      className="bg-background/50 border-border"
                    />
                  </div>
                </div>

                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsApproveOpen(false)} disabled={loading}>
                    Cancel
                  </Button>
                  <Button className="bg-success text-success-foreground hover:bg-success/90" onClick={handleApprove} disabled={loading}>
                    {loading ? "Sanctioning..." : "Approve & Generate Agreement"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}

          {(loan.status === "Approved" || loan.status === "ESIGN_COMPLETED" || loan.status === "OFFER_GENERATED") && (
            <Dialog open={isDisburseOpen} onOpenChange={setIsDisburseOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Send className="w-4 h-4 mr-2" /> Disburse IMPS Funds
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-popover border-border">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" /> Direct Bank Disbursal
                  </DialogTitle>
                  <DialogDescription>
                    Trigger immediate IMPS payout of ₹{loan.approvedAmount.toLocaleString()} to applicant&apos;s verified bank account.
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-2">
                  <div className="space-y-2">
                    <Label>Disbursement Gateway / Rail</Label>
                    <Select value={disburseChannel} onValueChange={setDisburseChannel}>
                      <SelectTrigger className="bg-background/50 border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border">
                        <SelectItem value="RazorpayX IMPS">RazorpayX (Instant IMPS Rail)</SelectItem>
                        <SelectItem value="Cashfree Payouts">Cashfree (24x7 Direct Bank Transfer)</SelectItem>
                        <SelectItem value="ICICI Bank Corporate API">ICICI Bank Corporate API Direct</SelectItem>
                        <SelectItem value="Manual NEFT Transfer">Manual Offline NEFT Bank Settlement</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center justify-between">
                      <span>Bank Reference / UTR Number</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-6 text-xs text-primary"
                        onClick={() => setCustomUtr(`IMPS${Math.floor(1000000000 + Math.random() * 9000000000)}`)}
                      >
                        <RefreshCw className="h-3 w-3 mr-1" /> Regenerate
                      </Button>
                    </Label>
                    <Input
                      value={customUtr}
                      onChange={(e) => setCustomUtr(e.target.value)}
                      className="bg-background/50 border-border font-mono text-sm"
                    />
                  </div>

                  <div className="p-3 rounded-lg border border-border bg-muted/40 text-xs space-y-1">
                    <p className="font-semibold text-foreground">Verified Destination Account:</p>
                    <p className="text-muted-foreground">Bank: HDFC Bank (IFSC: HDFC0001234)</p>
                    <p className="text-muted-foreground">A/C: **********4321 • Holder: {loan.user}</p>
                    <p className="text-success font-medium flex items-center gap-1 mt-1">
                      <ShieldCheck className="h-3.5 w-3.5" /> Penny drop verification confirmed
                    </p>
                  </div>
                </div>

                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsDisburseOpen(false)} disabled={loading}>
                    Cancel
                  </Button>
                  <Button className="bg-primary text-primary-foreground" onClick={handleDisburse} disabled={loading}>
                    {loading ? "Processing Payout..." : "Initiate Instant IMPS Disbursal"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>

      {/* Main Grid: Loan Parameters & Credit Scoring */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-card/50 backdrop-blur border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Banknote className="h-5 w-5 text-primary" /> Loan Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground">Sanctioned Amount</p>
              <p className="text-3xl font-bold text-foreground">₹{loan.approvedAmount.toLocaleString()}</p>
              {loan.amount !== loan.approvedAmount && (
                <p className="text-xs text-muted-foreground">Requested: ₹{loan.amount.toLocaleString()}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border">
              <div>
                <p className="text-xs text-muted-foreground">Tenure</p>
                <p className="font-semibold text-foreground">{loan.tenure} months</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Interest APR</p>
                <p className="font-semibold text-foreground">{loan.interestRate}% p.a.</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Estimated Monthly EMI</p>
                <p className="font-semibold text-primary">₹{calculateEmi(loan.approvedAmount, loan.interestRate, loan.tenure).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Loan Purpose</p>
                <p className="font-semibold text-foreground truncate">{loan.purpose}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Credit Scoring Engine Card */}
        <Card className="md:col-span-2 bg-card/50 backdrop-blur border-border">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" /> Bureau & Credit Scoring Engine
              </span>
              <Badge variant="outline" className={
                loan.cibil >= 750 ? "border-success text-success" :
                loan.cibil >= 650 ? "border-amber-500 text-amber-500" :
                "border-destructive text-destructive"
              }>
                {loan.totalRisk} Risk
              </Badge>
            </CardTitle>
            <CardDescription>
              Comprehensive bureau pull & multi-variate machine risk assessment.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div>
              <div className="flex justify-between mb-2 text-sm">
                <span className="text-muted-foreground font-medium">Experian / CIBIL Score</span>
                <span className="font-bold text-success">{loan.cibil} / 900</span>
              </div>
              <Progress value={(loan.cibil / 900) * 100} className="h-2 bg-muted [&>div]:bg-success" />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-muted/30 p-3 rounded-lg border border-border">
                <p className="text-xs text-muted-foreground mb-1">Income Stability</p>
                <p className="text-base font-bold text-success">{loan.incomeScore}%</p>
              </div>
              <div className="bg-muted/30 p-3 rounded-lg border border-border">
                <p className="text-xs text-muted-foreground mb-1">Employment Check</p>
                <p className="text-base font-bold text-success">{loan.employmentScore}%</p>
              </div>
              <div className="bg-muted/30 p-3 rounded-lg border border-border">
                <p className="text-xs text-muted-foreground mb-1">Past Repayment Track</p>
                <p className="text-base font-bold text-primary">{loan.repaymentScore}%</p>
              </div>
            </div>

            <div className="pt-2 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
              <span>Automated Rule: Score &gt;= 700 Qualified for Instant Digital Sanction</span>
              <Button variant="ghost" size="sm" className="h-7 text-xs text-primary" onClick={() => toast.info("Full Experian PDF report available in user dossier.")}>
                <FileText className="w-3.5 h-3.5 mr-1" /> View Full Bureau PDF
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Verification Checklist */}
      <Card className="bg-card/50 backdrop-blur border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserCheck className="h-5 w-5 text-primary" /> Underwriting Verification Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center justify-between p-3.5 rounded-lg border border-success/30 bg-success/5">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-success shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Bureau Assessment Fee</p>
                  <p className="text-xs text-muted-foreground">₹149 Paid via UPI/Gateway</p>
                </div>
              </div>
              <Badge variant="outline" className="border-success/40 text-success text-[10px]">Fee Verified</Badge>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-lg border border-success/30 bg-success/5">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-success shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Clean Past History Check</p>
                  <p className="text-xs text-muted-foreground">0 Write-offs • 0 Late &gt;90 DPD</p>
                </div>
              </div>
              <Badge variant="outline" className="border-success/40 text-success text-[10px]">Passed</Badge>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-lg border border-success/30 bg-success/5">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-success shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Identity Verified</p>
                  <p className="text-xs text-muted-foreground">Aadhaar XML & PAN matched</p>
                </div>
              </div>
              <Badge variant="outline" className="border-success/40 text-success text-[10px]">100% Match</Badge>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-lg border border-success/30 bg-success/5">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-success shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Bank Account Verified</p>
                  <p className="text-xs text-muted-foreground">₹1 Penny drop confirmed name</p>
                </div>
              </div>
              <Badge variant="outline" className="border-success/40 text-success text-[10px]">Active A/C</Badge>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-lg border border-success/30 bg-success/5">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-success shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">e-Mandate / eNACH</p>
                  <p className="text-xs text-muted-foreground">Recurring debit pre-authorized</p>
                </div>
              </div>
              <Badge variant="outline" className="border-success/40 text-success text-[10px]">Mandate Live</Badge>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-lg border border-primary/30 bg-primary/5">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Starter Tier Assigned</p>
                  <p className="text-xs text-muted-foreground">Max sanction cap: ₹{loan.approvedAmount.toLocaleString()}</p>
                </div>
              </div>
              <Badge variant="outline" className="border-primary/40 text-primary text-[10px]">Tier Enforced</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

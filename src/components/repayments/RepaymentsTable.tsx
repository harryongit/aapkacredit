"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function RepaymentsTable({ initialRepayments = [] }: { initialRepayments?: any[] }) {
  const repaymentsData = initialRepayments.map((r: any) => ({
    id: `REP-${r.id.split("-")[0].toUpperCase()}`,
    loanId: `LN-${r.loan_id.split("-")[0].toUpperCase()}`,
    amount: r.amount ? `₹${r.amount.toLocaleString()}` : "Pending",
    dueDate: new Date(r.due_date).toLocaleDateString(),
    status: r.status,
  }));

  return (
    <div className="rounded-md border border-border bg-card/50 backdrop-blur">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-border">
            <TableHead>Repayment ID</TableHead>
            <TableHead>Loan ID</TableHead>
            <TableHead>EMI Amount</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {repaymentsData.map((rep) => (
            <TableRow key={rep.id} className="border-border hover:bg-muted/50">
              <TableCell className="font-medium text-primary">{rep.id}</TableCell>
              <TableCell>{rep.loanId}</TableCell>
              <TableCell className="font-bold">{rep.amount}</TableCell>
              <TableCell>{rep.dueDate}</TableCell>
              <TableCell>
                <Badge variant="outline" className={
                  rep.status === 'PAID' ? 'border-success text-success' :
                  rep.status === 'PENDING' ? 'border-amber-500 text-amber-500' :
                  'border-destructive text-destructive'
                }>
                  {rep.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
          {repaymentsData.length === 0 && (
            <TableRow>
              <TableCell colSpan={5} className="text-center text-muted-foreground py-6">
                No repayments found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

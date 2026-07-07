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

export function ActiveLoansTable({ initialLoans = [] }: { initialLoans?: any[] }) {
  const loansData = initialLoans.map((l: any) => ({
    id: `LN-${l.id.split("-")[0].toUpperCase()}`,
    user: `User ${l.user_id.split("-")[0].toUpperCase()}`,
    amount: l.approved_amount ? `₹${l.approved_amount.toLocaleString()}` : "Pending",
    interest: l.interest_rate ? `${l.interest_rate}%` : "TBD",
    emi: "TBD",
    balance: "TBD",
    dueDate: "TBD",
    status: l.current_step.replace(/_/g, ' '),
  }));

  return (
    <div className="rounded-md border border-border bg-card/50 backdrop-blur">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-border">
            <TableHead>Loan ID</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Interest</TableHead>
            <TableHead>EMI</TableHead>
            <TableHead>Balance</TableHead>
            <TableHead>Next Due Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loansData.map((loan) => (
            <TableRow key={loan.id} className="border-border hover:bg-muted/50">
              <TableCell className="font-medium text-primary">{loan.id}</TableCell>
              <TableCell>{loan.user}</TableCell>
              <TableCell>{loan.amount}</TableCell>
              <TableCell>{loan.interest}</TableCell>
              <TableCell className="font-medium">{loan.emi}</TableCell>
              <TableCell>{loan.balance}</TableCell>
              <TableCell>{loan.dueDate}</TableCell>
              <TableCell>
                <Badge variant="outline" className={
                  loan.status === 'Current' ? 'border-success text-success' :
                  loan.status === 'Due Soon' ? 'border-amber-500 text-amber-500' :
                  'border-destructive text-destructive'
                }>
                  {loan.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

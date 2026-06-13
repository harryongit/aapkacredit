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

const loansData = [
  {
    id: "LN-5001",
    user: "Karan Johar",
    amount: "₹2,50,000",
    interest: "12%",
    emi: "₹22,190",
    balance: "₹1,80,000",
    dueDate: "2023-11-05",
    status: "Current",
  },
  {
    id: "LN-5002",
    user: "Rahul Dravid",
    amount: "₹50,000",
    interest: "15%",
    emi: "₹4,512",
    balance: "₹15,000",
    dueDate: "2023-10-30",
    status: "Due Soon",
  },
  {
    id: "LN-5003",
    user: "Sanya Mirza",
    amount: "₹1,00,000",
    interest: "14%",
    emi: "₹8,970",
    balance: "₹85,000",
    dueDate: "2023-10-15",
    status: "Overdue",
  },
];

export function ActiveLoansTable() {
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

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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Eye, Edit, Ban, ShieldCheck } from "lucide-react";
import Link from "next/link";

const usersData = [
  {
    id: "USR-001",
    name: "Ravi Kumar",
    mobile: "+91 9876543210",
    email: "ravi.k@example.com",
    regDate: "2023-10-12",
    kycStatus: "Verified",
    creditScore: 750,
    loanStatus: "Active",
  },
  {
    id: "USR-002",
    name: "Priya Sharma",
    mobile: "+91 9876543211",
    email: "priya.s@example.com",
    regDate: "2023-10-14",
    kycStatus: "Pending",
    creditScore: 680,
    loanStatus: "None",
  },
  {
    id: "USR-003",
    name: "Amit Singh",
    mobile: "+91 9876543212",
    email: "amit.s@example.com",
    regDate: "2023-10-15",
    kycStatus: "Verified",
    creditScore: 520,
    loanStatus: "Defaulted",
  },
  {
    id: "USR-004",
    name: "Sneha Gupta",
    mobile: "+91 9876543213",
    email: "sneha.g@example.com",
    regDate: "2023-10-18",
    kycStatus: "Verified",
    creditScore: 810,
    loanStatus: "Closed",
  },
];

export function UsersTable() {
  return (
    <div className="rounded-md border border-border bg-card/50 backdrop-blur">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-border">
            <TableHead>User ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Registration Date</TableHead>
            <TableHead>KYC Status</TableHead>
            <TableHead>Credit Score</TableHead>
            <TableHead>Loan Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {usersData.map((user) => (
            <TableRow key={user.id} className="border-border hover:bg-muted/50">
              <TableCell className="font-medium text-primary">{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="text-sm">{user.mobile}</span>
                  <span className="text-xs text-muted-foreground">{user.email}</span>
                </div>
              </TableCell>
              <TableCell>{user.regDate}</TableCell>
              <TableCell>
                <Badge variant={user.kycStatus === 'Verified' ? 'default' : 'secondary'} 
                       className={user.kycStatus === 'Verified' ? 'bg-success/20 text-success hover:bg-success/30 border-success/30' : ''}>
                  {user.kycStatus}
                </Badge>
              </TableCell>
              <TableCell>
                <span className={user.creditScore >= 750 ? "text-success font-medium" : user.creditScore >= 650 ? "text-primary font-medium" : "text-destructive font-medium"}>
                  {user.creditScore}
                </span>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className={
                  user.loanStatus === 'Active' ? 'border-primary text-primary' :
                  user.loanStatus === 'Defaulted' ? 'border-destructive text-destructive' :
                  'border-muted-foreground text-muted-foreground'
                }>
                  {user.loanStatus}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-popover border-border">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem asChild>
                      <Link href={`/admin/users/${user.id}`} className="cursor-pointer">
                        <Eye className="mr-2 h-4 w-4" /> View Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" /> Edit Details
                    </DropdownMenuItem>
                    {user.kycStatus === 'Pending' && (
                      <DropdownMenuItem>
                        <ShieldCheck className="mr-2 h-4 w-4" /> Verify KYC
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator className="bg-border" />
                    <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive">
                      <Ban className="mr-2 h-4 w-4" /> Suspend User
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

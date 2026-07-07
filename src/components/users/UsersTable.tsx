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

export function UsersTable({ initialUsers = [] }: { initialUsers?: any[] }) {
  const usersData = initialUsers.map((u: any) => ({
    id: `USR-${u.id.split("-")[0].toUpperCase()}`,
    rawId: u.id,
    name: u.full_name || "Not Provided",
    mobile: u.mobile_number || "N/A",
    email: u.email || "N/A",
    regDate: u.created_at ? new Date(u.created_at).toISOString().split('T')[0] : "Unknown",
    kycStatus: u.pan_number ? "Verified" : "Pending",
    creditScore: u.credit_score || 0,
    loanStatus: u.is_active ? "Active" : "Closed",
  }));

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

"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, AlertTriangle, FileText, Smartphone, Ban, ArrowLeft } from "lucide-react";
import Link from "next/link";

export function UserProfileDetails({ userId, initialData }: { userId: string, initialData?: any }) {
  // Use real data if available, otherwise mock data
  const user = initialData || {
    id: userId,
    name: "Ravi Kumar",
    mobile: "+91 9876543210",
    email: "ravi.k@example.com",
    regDate: "2023-10-12",
    kycStatus: "Verified",
    creditScore: 750,
    address: "123, MG Road, Bangalore, 560001",
    employment: "Software Engineer at Tech Corp",
    monthlyIncome: "₹85,000",
    bankAccount: "HDFC Bank ending in 4321",
    deviceInfo: "iPhone 13, iOS 16.5",
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild className="border-border hover:bg-muted">
          <Link href="/admin/users">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            {user.name} 
            <Badge variant="default" className="bg-success/20 text-success hover:bg-success/30 border-success/30">
              <CheckCircle2 className="w-3 h-3 mr-1" /> {user.kycStatus}
            </Badge>
          </h2>
          <p className="text-muted-foreground">User ID: {user.id} • Joined {user.regDate}</p>
        </div>
        <div className="ml-auto flex gap-2">
          <Button variant="outline" className="border-border">Edit Profile</Button>
          <Button variant="destructive" className="bg-destructive/20 text-destructive hover:bg-destructive/30 border border-destructive/30">
            <Ban className="w-4 h-4 mr-2" /> Suspend
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="md:col-span-1 bg-card/50 backdrop-blur border-border">
          <CardHeader>
            <CardTitle>Credit Score</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center py-6">
            <div className="text-5xl font-bold text-success mb-2">{user.creditScore}</div>
            <Badge variant="outline" className="border-success text-success">Excellent</Badge>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-3 bg-card/50 backdrop-blur border-border">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">Mobile</p>
              <p className="font-medium">{user.mobile}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">{user.email}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-muted-foreground">Address</p>
              <p className="font-medium">{user.address}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="financial" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-3 bg-muted/50 border border-border">
          <TabsTrigger value="financial">Financials</TabsTrigger>
          <TabsTrigger value="loans">Loan History</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        <TabsContent value="financial" className="mt-4 space-y-4">
          <Card className="bg-card/50 backdrop-blur border-border">
            <CardHeader>
              <CardTitle>Employment & Income</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground">Occupation</p>
                <p className="font-medium">{user.employment}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Monthly Income</p>
                <p className="font-medium">{user.monthlyIncome}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-muted-foreground">Primary Bank Account</p>
                <p className="font-medium flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" /> {user.bankAccount}
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="loans" className="mt-4 space-y-4">
           <Card className="bg-card/50 backdrop-blur border-border">
            <CardHeader>
              <CardTitle>Loan Applications</CardTitle>
              <CardDescription>Recent loan history for this user.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div>
                    <p className="font-medium">Personal Loan - ₹50,000</p>
                    <p className="text-sm text-muted-foreground">Applied on Oct 20, 2023</p>
                  </div>
                  <Badge className="bg-primary/20 text-primary border-primary/30">Active</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security" className="mt-4 space-y-4">
          <Card className="bg-card/50 backdrop-blur border-border">
            <CardHeader>
              <CardTitle>Security & Devices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <Smartphone className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Primary Device</p>
                  <p className="text-sm text-muted-foreground">{user.deviceInfo}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5" />
                <div>
                  <p className="font-medium text-amber-500">Risk Assessment</p>
                  <p className="text-sm text-muted-foreground">Low risk. Device matches previous logins. No suspicious patterns detected.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

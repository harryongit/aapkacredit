import { UsersTable } from "@/components/users/UsersTable";
import { Button } from "@/components/ui/button";
import { Download, Plus } from "lucide-react";

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">User Management</h2>
          <p className="text-muted-foreground">
            Manage all registered users, view profiles, and verify KYC.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-border">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add User
          </Button>
        </div>
      </div>
      
      <UsersTable />
    </div>
  );
}

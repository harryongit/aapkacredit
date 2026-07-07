import { ApplicationQueueTable } from "@/components/applications/ApplicationQueueTable";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { fetchApi } from "@/lib/apiClient";

export default async function ApplicationsPage() {
  const response = await fetchApi("/admin/loans").catch(() => ([]));
  const applications = Array.isArray(response) ? response : response?.data || [];
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Application Queue</h2>
          <p className="text-muted-foreground">
            Review and manage all incoming loan applications.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-border">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
        </div>
      </div>
      
      <ApplicationQueueTable initialApplications={applications} />
    </div>
  );
}

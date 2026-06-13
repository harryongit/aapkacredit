import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Platform Settings</h2>
        <p className="text-muted-foreground">
          Configure global lending rules and credit scoring parameters.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-card/50 backdrop-blur border-border">
          <CardHeader>
            <CardTitle>Loan Rules</CardTitle>
            <CardDescription>Set boundaries for loan amounts and interest rates.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Minimum Loan Amount (₹)</Label>
              <Input type="number" defaultValue="5000" className="bg-background/50 border-border" />
            </div>
            <div className="space-y-2">
              <Label>Maximum Loan Amount (₹)</Label>
              <Input type="number" defaultValue="500000" className="bg-background/50 border-border" />
            </div>
            <div className="space-y-2">
              <Label>Base Interest Rate (%)</Label>
              <Input type="number" defaultValue="12.5" className="bg-background/50 border-border" />
            </div>
            <Button className="mt-4">Save Loan Rules</Button>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur border-border">
          <CardHeader>
            <CardTitle>Risk & Credit Engine</CardTitle>
            <CardDescription>Adjust minimum thresholds for automated approvals.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Minimum CIBIL Score</Label>
              <Input type="number" defaultValue="650" className="bg-background/50 border-border" />
            </div>
            <div className="space-y-2">
              <Label>Auto-Approval Threshold (Engine Score)</Label>
              <Input type="number" defaultValue="800" className="bg-background/50 border-border" />
            </div>
            <Button className="mt-4 border-border" variant="outline">Update Risk Engine</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

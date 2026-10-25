import { AuditLogsViewer } from "@/components/audit/AuditLogsViewer";
import { getAuditLogsAction } from "@/app/actions/admin";

export const metadata = {
  title: "System Audit Logs & Regulatory Trail | AapkaCredit Admin",
  description: "Cryptographically verifiable activity logs, underwriter sanctions, and platform rule alterations.",
};

export default async function AuditLogsPage() {
  const res = await getAuditLogsAction();
  const logs = res.data || [];
  const meta = res.meta || null;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          System Audit Trail & Regulatory Logs
        </h2>
        <p className="text-muted-foreground text-sm">
          Maintain complete transparency and non-repudiation for all credit underwriting decisions, score overrides, and financial disbursements.
        </p>
      </div>

      <AuditLogsViewer initialLogs={logs} meta={meta} />
    </div>
  );
}

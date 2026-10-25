import { CreditAssessmentsTable } from "@/components/credit-checks/CreditAssessmentsTable";
import { getCreditAssessmentsAction } from "@/app/actions/admin";

export const metadata = {
  title: "Bureau Assessments & Paid Score Checks | AapkaCredit Admin",
  description: "Monitor customer paid credit bureau pulls, CIBIL scores, delinquency checks, and automated sanction caps.",
};

export default async function CreditChecksPage() {
  const res = await getCreditAssessmentsAction();
  const assessments = res.data || [];
  const meta = res.meta || null;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Bureau Assessments & Paid Score Checks
        </h2>
        <p className="text-muted-foreground text-sm">
          Track customer credit score checks, paid assessment fees (₹149 / ₹199), automated past delinquency screening, and platform sanction limits.
        </p>
      </div>

      <CreditAssessmentsTable initialData={assessments} meta={meta} />
    </div>
  );
}

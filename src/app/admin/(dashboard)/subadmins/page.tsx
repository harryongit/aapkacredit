import { SubadminsManagementView } from "@/components/subadmins/SubadminsManagementView";
import { getSubadminsAction } from "@/app/actions/admin";

export const metadata = {
  title: "Sub-Admin Access Control & Staff Management | AapkaCredit Admin",
  description: "Configure subadmin accounts, operator permissions, and manual underwriting duties.",
};

export default async function SubadminsPage() {
  const res = await getSubadminsAction();
  const subadmins = res.data || [];
  const meta = res.meta || null;

  return <SubadminsManagementView initialSubadmins={subadmins} meta={meta} />;
}

import { ApplicationDetails } from "@/components/applications/ApplicationDetails";
import { fetchApi } from "@/lib/apiClient";

export default async function ApplicationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const loanResponse = await fetchApi(`/admin/loans/${id}`).catch(() => null);
  const loan = loanResponse?.data || loanResponse || null;

  return <ApplicationDetails appId={id} initialData={loan} />;
}

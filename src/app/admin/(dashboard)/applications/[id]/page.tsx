import { ApplicationDetails } from "@/components/applications/ApplicationDetails";

export default async function ApplicationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ApplicationDetails appId={id} />;
}

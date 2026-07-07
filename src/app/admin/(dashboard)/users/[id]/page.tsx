import { UserProfileDetails } from "@/components/users/UserProfileDetails";

import { fetchApi } from "@/lib/apiClient";

export default async function UserProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const response = await fetchApi(`/admin/users/${id}`).catch(() => null);
  const user = response?.data || response || null;
  return <UserProfileDetails userId={id} initialData={user} />;
}

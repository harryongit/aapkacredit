import { getPlatformSettingsAction } from "@/app/actions/admin";
import { PlatformSettingsForm } from "@/components/settings/PlatformSettingsForm";

export default async function SettingsPage() {
  const result = await getPlatformSettingsAction();
  const settings = result.data;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Platform Settings & Risk Engine</h2>
        <p className="text-muted-foreground">
          Configure global lending rules, interest APR boundaries, automated decision thresholds, and master kill switches.
        </p>
      </div>

      <PlatformSettingsForm initialSettings={settings} />
    </div>
  );
}

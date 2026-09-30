import {
  Download,
  Trash2,
  Moon,
  Bell,
} from "lucide-react";

import Field from "../components/ui/Field";
import SectionHeader from "../components/ui/SectionHeader";
import Toggle from "../components/ui/Toggle";

function SettingsCard({ title, subtitle, children }) {
  return (
    <section className="rounded-2xl border border-line bg-white p-6 shadow-card">
      <div className="mb-6 border-b border-line pb-5">
        <h2 className="text-lg font-extrabold text-ink">
          {title}
        </h2>

        <p className="mt-1 text-sm text-muted">
          {subtitle}
        </p>
      </div>

      {children}
    </section>
  );
}

function SettingRow({ title, detail, children }) {
  return (
    <div className="flex items-center justify-between gap-5 border-b border-line py-5 first:pt-0 last:border-0 last:pb-0">
      <div>
        <p className="font-bold text-ink">
          {title}
        </p>

        <p className="mt-1 text-sm text-muted">
          {detail}
        </p>
      </div>

      {children}
    </div>
  );
}

 const SettingsPage = () => {
  return (
    <div className="mx-auto max-w-4xl pb-20">
      <SectionHeader
        title="Settings"
        subtitle="Manage your profile and preferences."
      />

      <div className="space-y-6">
        {/* Profile */}
        <SettingsCard
          title="Profile"
          subtitle="Your personal information"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="grid size-20 shrink-0 place-items-center rounded-full bg-caramel text-xl font-extrabold text-white">
              ZR
            </div>

            <div className="grid flex-1 gap-4 md:grid-cols-2">
              <Field label="Name">
                <input
                  defaultValue="Zayn Rahmoun"
                  className="form-input"
                />
              </Field>

              <Field label="Email">
                <input
                  defaultValue="zayn@example.com"
                  className="form-input"
                />
              </Field>
            </div>

            <button className="flex h-11 items-center justify-center gap-2 rounded-xl bg-espresso px-5 text-sm font-bold text-white transition hover:bg-coffee">
              Save
            </button>
          </div>
        </SettingsCard>

        {/* Preferences */}
        <SettingsCard
          title="Preferences"
          subtitle="Tailor BrewLog to your routine"
        >
          <SettingRow
            title="Dark mode"
            detail="Use a darker color theme"
          >
            <Toggle checked={false} />
          </SettingRow>

          <SettingRow
            title="Notifications"
            detail="Get gentle tasting reminders"
          >
            <Toggle checked={true} />
          </SettingRow>

          <SettingRow
            title="Default coffee type"
            detail="Preselect when adding a coffee"
          >
            <select className="form-input max-w-48">
              <option>Latte</option>
              <option>Espresso</option>
              <option>Cold Brew</option>
              <option>Cappuccino</option>
              <option>Americano</option>
            </select>
          </SettingRow>
        </SettingsCard>

        {/* Account */}
        <SettingsCard
          title="Account"
          subtitle="Manage your data"
        >
          <SettingRow
            title="Export coffee data"
            detail="Download a copy as a CSV file"
          >
            <button className="flex h-11 items-center justify-center gap-2 rounded-xl bg-espresso px-5 text-sm font-bold text-white transition hover:bg-coffee">
              <Download size={17} />
              Export
            </button>
          </SettingRow>

          <SettingRow
            title="Delete account"
            detail="Permanently remove your profile and data"
          >
            <button className="flex h-11 items-center justify-center gap-2 rounded-xl bg-red-400 px-5 text-sm font-bold text-white transition hover:bg-red-600">
              <Trash2 size={17} />
              Delete account
            </button>
          </SettingRow>
        </SettingsCard>
      </div>
    </div>
  );
}
export default SettingsPage;


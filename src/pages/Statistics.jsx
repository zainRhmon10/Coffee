import {
  Coffee,
  Star,
  ChartNoAxesColumn,
  MapPin,
} from "lucide-react";

import SectionHeader from "../components/ui/SectionHeader";
import { StatCard } from "../components/coffee/StatCard";

const bars = [36, 48, 42, 70, 58, 82, 66, 88, 76, 92];

const types = [
  ["Latte", "bg-caramel", "31%"],
  ["Cold Brew", "bg-espresso", "26%"],
  ["Espresso", "bg-amber", "22%"],
  ["Other", "bg-tan", "21%"],
];

const distribution = [
  ["5 stars", 74],
  ["4 stars", 52],
  ["3 stars", 19],
  ["2 stars", 7],
  ["1 star", 2],
];

export default function Statistics() {
  return (
    <div className="space-y-6 pb-20">
      <SectionHeader
        title="Statistics"
        subtitle="A closer look at your coffee habits."
      />

      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        <StatCard
          icon={Coffee}
          value="42"
          label="Total coffees"
          detail="+16%"
        />

        <StatCard
          icon={Star}
          value="4.7"
          label="Average rating"
          detail="+0.2"
        />

        <StatCard
          icon={ChartNoAxesColumn}
          value="Latte"
          label="Favorite type"
          detail="31%"
        />

        <StatCard
          icon={MapPin}
          value="Juniper"
          label="Most visited café"
          detail="8 visits"
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.55fr_1fr]">
        {/* Ratings over time */}
        <article className="rounded-2xl border border-line bg-white p-6 shadow-card">
          <SectionHeader
            title="Ratings over time"
            subtitle="Average rating by recent entry"
          />

          <div className="flex h-64 items-end gap-3 border-b border-line px-2 pt-8">
            {bars.map((height, index) => (
              <div
                key={index}
                className="flex h-full flex-1 items-end"
              >
                <div
                  className="w-full rounded-t-lg bg-caramel transition hover:bg-espresso"
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>

          <div className="mt-3 flex justify-between text-xs text-muted">
            <span>Jan</span>
            <span>Mar</span>
            <span>May</span>
          </div>
        </article>

        {/* Coffee types */}
        <article className="rounded-2xl border border-line bg-white p-6 shadow-card">
          <SectionHeader
            title="Coffee types"
            subtitle="Your taste, by category"
          />

          <div className="flex items-center gap-8 py-4">
            <div className="grid size-36 shrink-0 place-items-center rounded-full bg-[conic-gradient(var(--color-caramel)_0_31%,var(--color-espresso)_31%_57%,var(--color-amber)_57%_79%,var(--color-tan)_79%_100%)]">
              <div className="grid size-20 place-items-center rounded-full bg-white text-center">
                <span className="text-xl font-extrabold text-ink">
                  42
                </span>
              </div>
            </div>

            <div className="w-full space-y-3 text-sm">
              {types.map(([label, color, value]) => (
                <div
                  key={label}
                  className="flex min-w-32 items-center gap-2"
                >
                  <span
                    className={`size-2.5 rounded-full ${color}`}
                  />

                  <span className="text-muted">{label}</span>

                  <strong className="ml-auto text-ink">
                    {value}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Rating distribution */}
        <article className="rounded-2xl border border-line bg-white p-6 shadow-card xl:col-span-2">
          <SectionHeader
            title="Rating distribution"
            subtitle="Most of your cups are excellent."
          />

          <div className="space-y-4">
            {distribution.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[64px_1fr_36px] items-center gap-4 text-sm"
              >
                <span className="font-semibold text-muted">
                  {label}
                </span>

                <div className="h-2 overflow-hidden rounded-full bg-cream">
                  <div
                    className="h-full rounded-full bg-amber"
                    style={{ width: `${value}%` }}
                  />
                </div>

                <span className="text-right font-bold text-ink">
                  {value}%
                </span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
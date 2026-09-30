export const StatCard = ({ icon: Icon, value, label, detail }) =>   {
  return (
    <article className="rounded-2xl border border-line bg-white p-5 shadow-card">
      <div className="flex items-start justify-between">
        <div className="grid size-11 place-items-center rounded-xl bg-cream text-coffee">
          <Icon size={20} />
        </div>
        <span className="rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-bold text-green-700">
          {detail}
        </span>
      </div>
      <p className="mt-5 text-3xl font-extrabold tracking-tight text-ink">
        {value}
      </p>
      <p className="mt-1 text-sm font-medium text-muted">
        {label}
      </p>
    </article>
  );
}

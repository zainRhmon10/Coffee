export default function IconButton({ label, children, onClick, active = false }) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className={`relative grid size-11 shrink-0 place-items-center rounded-xl border transition-all focus:outline-none focus:ring-4 focus:ring-amber/20 ${
        active
          ? "border-rose-100 bg-rose-50 text-rose-600"
          : "border-line bg-white text-muted hover:border-caramel hover:text-espresso"
      }`}
    >
      {children}
    </button>
  );
}
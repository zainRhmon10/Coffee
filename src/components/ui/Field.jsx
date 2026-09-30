export default function Field({ label, children }) {
  return (
    <label className="block text-sm font-bold text-ink">
      <span className="mb-2 block">{label}</span>
      {children}
    </label>
  );
}
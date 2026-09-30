import { Bell, Coffee, Search } from "lucide-react";
import { useLocation } from "react-router-dom";
import IconButton from "../ui/IconButton";

const pageNames = {
  "/": "Dashboard",
  "/coffees": "My Coffees",
  "/favorites": "Favorites",
  "/map": "Coffee Map",
  "/statistics": "Statistics",
  "/settings": "Settings",
};

export default function Header({ onSearch }) {
  const location = useLocation();

  const page = pageNames[location.pathname] || "Dashboard";

  return (
    <header className="sticky top-0 z-20 flex min-h-20 items-center gap-4 border-b border-line bg-background/90 px-5 backdrop-blur-md md:px-8 lg:px-10">
      <div className="lg:hidden">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-xl bg-espresso text-cream shadow-sm">
            <Coffee size={18} />
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          Workspace
        </p>

        <p className="font-bold text-ink">
          {page}
        </p>
      </div>

      <div className="relative ml-auto hidden w-full max-w-sm md:block">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted">
          <Search size={18} />
        </span>

        <input
          aria-label="Search coffees"
          placeholder="Search your coffees..."
          className="h-11 w-full rounded-xl border border-line bg-white pl-11 pr-4 text-sm text-ink outline-none transition focus:border-caramel focus:ring-4 focus:ring-amber/10"
        />
      </div>

      <IconButton label="Notifications">
        <Bell size={19} />

        <span className="absolute right-2.5 top-2.5 size-2 rounded-full bg-caramel ring-2 ring-white" />
      </IconButton>

      <button className="grid size-11 place-items-center rounded-full bg-espresso text-sm font-bold text-white ring-4 ring-white">
        ZR
      </button>
    </header>
  );
}

import { Coffee,MoreHorizontal  } from "lucide-react";
import { NavLink } from "react-router-dom";
import { navItems } from "../../data/constants";

const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-line bg-surface px-5 py-6 lg:flex">
      <div className="px-2">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-xl bg-espresso text-cream shadow-sm">
            <Coffee size={18} />
          </div>

          <span className="text-xl font-extrabold tracking-tight text-espresso">
            BrewLog
          </span>
        </div>
      </div>

      <nav className="mt-10 space-y-1.5">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex min-h-12 w-full items-center gap-3 rounded-xl px-3.5 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-espresso text-white shadow-sm"
                    : "text-muted hover:bg-cream hover:text-espresso"
                }`
              }
            >
              <Icon size={19} />
              {item.label}
            </NavLink>
          );
        })}
      </nav>

      <div className="mt-auto rounded-2xl border border-line bg-cream/70 p-3">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-full bg-caramel text-sm font-bold text-white">
            ZR
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-ink">Zayn Rahmoun</p>
            <p className="truncate text-xs text-muted">zayn@gmail.com</p>
          </div>
          <MoreHorizontal size={18} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
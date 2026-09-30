import { NavLink } from "react-router-dom";
import { navItems } from "../../data/constants";

const MobileNav = () => {
  return (
    <nav className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-5 rounded-2xl border border-line bg-white/95 p-1.5 shadow-xl backdrop-blur-lg lg:hidden">
      {navItems.slice(0, 5).map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `flex min-h-13 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-semibold ${
                isActive ? "bg-espresso text-white" : "text-muted"
              }`
            }
          >
            <Icon size={18} />
            <span>{item.label.replace("Coffee ", "")}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}

export default MobileNav;
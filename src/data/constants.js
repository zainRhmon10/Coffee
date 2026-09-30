import {
  LayoutGrid,
  Coffee,
  Heart,
  Map,
  ChartNoAxesColumn,
  Settings,
} from "lucide-react";

export const navItems = [
  { label: "Dashboard", icon: LayoutGrid, path: "/" },
  { label: "My Coffees", icon: Coffee, path: "/coffees" },
  { label: "Favorites", icon: Heart, path: "/favorites" },
//   { label: "Coffee Map", icon: Map, path: "/map" },
  { label: "Statistics", icon: ChartNoAxesColumn, path: "/statistics" },
  { label: "Settings", icon: Settings, path: "/settings" },
];

export const filters = [
  "All",
  "Espresso",
  "Latte",
  "Cappuccino",
  "Americano",
  "Cold Brew",
  "Other",
];
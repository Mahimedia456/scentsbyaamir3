import { Link, NavLink } from "react-router-dom";
import { Menu, Search, ShoppingBag, User } from "lucide-react";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "Men", path: "/collections/men" },
  { label: "Women", path: "/collections/women" },
  { label: "Unisex", path: "/collections/unisex" },
  { label: "Scent Finder", path: "/scent-finder" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 sm:px-7">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between rounded-[28px] border border-white/10 bg-black/35 px-5 shadow-glass backdrop-blur-2xl lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Scents By Aamir"
            className="h-12 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                [
                  "relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition",
                  isActive
                    ? "bg-[rgba(var(--theme-accent-rgb),0.16)] text-white after:absolute after:bottom-0 after:left-5 after:right-5 after:h-[2px] after:rounded-full after:bg-[var(--theme-accent)]"
                    : "text-[var(--theme-ivory)]/72 hover:bg-white/[0.04] hover:text-white",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[rgba(var(--theme-gold-rgb),0.50)] hover:bg-[rgba(var(--theme-gold-rgb),0.10)] sm:flex">
            <Search size={18} />
          </button>

          <Link
            to="/account"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[rgba(var(--theme-gold-rgb),0.50)] hover:bg-[rgba(var(--theme-gold-rgb),0.10)] sm:flex"
          >
            <User size={18} />
          </Link>

          <Link
            to="/cart"
            className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[var(--theme-ivory)] text-black transition hover:bg-white"
          >
            <ShoppingBag size={18} />

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--theme-accent)] text-[10px] font-bold text-white">
              0
            </span>
          </Link>

          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-[var(--theme-accent)] hover:bg-[rgba(var(--theme-accent-rgb),0.15)] xl:hidden">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
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
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 sm:px-7">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between rounded-[28px] border border-white/10 bg-black/45 px-5 shadow-glass backdrop-blur-2xl lg:px-8">
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
          <button
            type="button"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[rgba(var(--theme-gold-rgb),0.50)] hover:bg-[rgba(var(--theme-gold-rgb),0.10)] sm:flex"
          >
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

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--theme-accent)] text-[10px] font-bold text-black">
              0
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-[var(--theme-accent)] hover:bg-[rgba(var(--theme-accent-rgb),0.15)] xl:hidden"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-0 z-[-1] xl:hidden">
          <button
            type="button"
            aria-label="Close mobile menu overlay"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <div className="absolute left-4 right-4 top-[104px] overflow-hidden rounded-[30px] border border-white/10 bg-black/85 shadow-glass backdrop-blur-2xl sm:left-7 sm:right-7">
            <div className="absolute inset-0 cinematic-card-bg opacity-80" />
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[rgba(var(--theme-accent-rgb),0.20)] blur-[70px]" />

            <div className="relative z-10 p-4">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 px-2 pb-4">
                <div>
                  <p className="font-luxury text-[10px] uppercase tracking-[0.28em] text-[var(--theme-gold)]">
                    Menu
                  </p>
                  <p className="mt-1 text-sm text-[var(--theme-muted)]">
                    Scents By Aamir
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="grid gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      [
                        "flex items-center justify-between rounded-2xl border px-4 py-4 text-sm font-semibold uppercase tracking-[0.16em] transition",
                        isActive
                          ? "border-[rgba(var(--theme-accent-rgb),0.45)] bg-[rgba(var(--theme-accent-rgb),0.18)] text-white"
                          : "border-white/10 bg-white/[0.035] text-[var(--theme-ivory)]/78 hover:border-[rgba(var(--theme-gold-rgb),0.35)] hover:text-white",
                      ].join(" ")
                    }
                  >
                    <span>{item.label}</span>
                    <span className="text-[var(--theme-muted)]">→</span>
                  </NavLink>
                ))}
              </nav>

              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                <Link
                  to="/account"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-semibold text-white"
                >
                  <User size={17} />
                  Account
                </Link>

                <Link
                  to="/cart"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-4 text-sm font-semibold text-black"
                >
                  <ShoppingBag size={17} />
                  Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
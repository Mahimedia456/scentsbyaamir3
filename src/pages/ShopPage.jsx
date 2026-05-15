import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Filter,
  Search,
  Sparkles,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { collectionMeta, products } from "../data/products";

const filterItems = [
  { label: "All", value: "all" },
  { label: "Men", value: "men" },
  { label: "Women", value: "women" },
  { label: "Unisex", value: "unisex" },
  { label: "Tester Box", value: "tester-box" },
];

const scentFilters = [
  "Fresh",
  "Oud",
  "Sweet",
  "Amber",
  "Floral",
  "Smoky",
  "Office",
  "Evening",
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory =
        activeCategory === "all" || product.category === activeCategory;

      const searchText = `${product.name} ${product.inspiredBy} ${product.family} ${product.categoryLabel}`.toLowerCase();

      const matchSearch = searchText.includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="red-noir-page">
      <Header />

      <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-7">
        <div className="pointer-events-none absolute inset-0 cinematic-banner-bg" />

        <div className="section-shell relative">
          <div className="relative overflow-hidden rounded-[42px] border border-[rgba(var(--theme-accent-rgb),0.25)] bg-[#090303]/80 px-6 py-16 shadow-glass backdrop-blur-xl lg:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(var(--theme-accent-rgb),0.38),transparent_42%)]" />

            <div className="relative z-10 grid items-end gap-10 lg:grid-cols-[1.1fr_.9fr]">
              <div>
                <p className="font-luxury text-xs uppercase tracking-[0.35em] text-[var(--theme-gold)]">
                  The Collection
                </p>

                <h1 className="mt-4 max-w-3xl font-display text-6xl font-semibold leading-[0.92] text-white sm:text-7xl">
                  Discover your <span className="gold-text">signature</span>{" "}
                  fragrance.
                </h1>

                <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--theme-muted)]">
                  Explore premium inspired perfumes crafted for every mood,
                  identity and occasion. Dark, fresh, sweet, smoky, floral and
                  royal oud fragrances in one luxury collection.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {Object.entries(collectionMeta).map(([key, meta]) => (
                    <Link
                      key={key}
                      to={`/collections/${key}`}
                      className="rounded-full border border-[rgba(var(--theme-gold-rgb),0.30)] bg-white/[0.04] px-5 py-3 text-sm font-semibold text-[var(--theme-ivory)] transition hover:border-[var(--theme-gold)] hover:bg-[rgba(var(--theme-gold-rgb),0.10)]"
                    >
                      {meta.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-black/30 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3 text-[var(--theme-gold)]">
                  <Sparkles size={18} />
                  <p className="font-luxury text-xs uppercase tracking-[0.25em]">
                    Luxury Gallery
                  </p>
                </div>

                <p className="mt-5 text-3xl font-semibold text-white">
                  3D-style product cards, dark glass, cinematic glow and gold
                  detail.
                </p>

                <Link to="/collections/unisex" className="btn-white mt-7">
                  Explore Unisex
                  <ArrowRight className="ml-2" size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-24">
        <div className="mb-8 rounded-[32px] border border-white/10 bg-black/35 p-4 shadow-glass backdrop-blur-xl">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto_auto] lg:items-center">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--theme-muted)]"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search perfume, notes, family..."
                className="h-14 w-full rounded-full border border-white/10 bg-white/[0.04] pl-12 pr-5 text-sm text-white outline-none transition placeholder:text-[var(--theme-muted)] focus:border-[rgba(var(--theme-gold-rgb),0.50)]"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {filterItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setActiveCategory(item.value)}
                  className={[
                    "rounded-full border px-5 py-3 text-sm font-semibold transition",
                    activeCategory === item.value
                      ? "border-[var(--theme-accent)] bg-[var(--theme-accent)] text-white"
                      : "border-white/10 bg-white/[0.04] text-[var(--theme-muted)] hover:border-[rgba(var(--theme-gold-rgb),0.40)] hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button className="flex h-14 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 text-sm font-semibold text-[var(--theme-ivory)] transition hover:border-[rgba(var(--theme-gold-rgb),0.40)]">
              Sort By
              <ChevronDown size={16} />
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
            <span className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[var(--theme-gold)]">
              <Filter size={15} />
              Mood Filters
            </span>

            {scentFilters.map((item) => (
              <button
                key={item}
                className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-[var(--theme-muted)] transition hover:border-[rgba(var(--theme-accent-rgb),0.60)] hover:text-white"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm text-[var(--theme-muted)]">
            Showing{" "}
            <span className="font-semibold text-white">
              {filteredProducts.length}
            </span>{" "}
            luxury fragrances
          </p>

          <Link
            to="/collections/men"
            className="hidden text-sm font-semibold text-[var(--theme-gold)] transition hover:text-[var(--theme-gold-soft)] sm:inline-flex"
          >
            Browse Collections →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="rounded-[32px] border border-white/10 bg-black/30 p-10 text-center">
            <p className="font-display text-3xl text-white">
              No perfume found.
            </p>

            <p className="mt-2 text-sm text-[var(--theme-muted)]">
              Try a different category or search keyword.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
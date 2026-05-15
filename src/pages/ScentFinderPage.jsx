import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const moods = [
  "Fresh",
  "Oud",
  "Sweet",
  "Amber",
  "Floral",
  "Smoky",
  "Office",
  "Evening",
];

export default function ScentFinderPage() {
  const [selectedMood, setSelectedMood] = useState("Fresh");

  const recommended = products.filter((product) => {
    const text =
      `${product.family} ${product.tags?.join(" ")} ${product.occasions?.join(" ")}`.toLowerCase();

    return text.includes(selectedMood.toLowerCase());
  });

  const finalProducts = recommended.length ? recommended : products.slice(0, 4);

  return (
    <main className="red-noir-page">
      <Header />

      <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-7">
        <div className="pointer-events-none absolute inset-0 cinematic-banner-bg" />

        <div className="section-shell relative">
          <div className="relative overflow-hidden rounded-[42px] border border-[rgba(var(--theme-accent-rgb),0.25)] bg-[#080202]/80 px-6 py-20 text-center shadow-glass backdrop-blur-xl lg:px-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(var(--theme-accent-rgb),0.35),transparent_42%)]" />

            <div className="relative z-10 mx-auto max-w-4xl">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(var(--theme-gold-rgb),0.30)] bg-[rgba(var(--theme-gold-rgb),0.10)] text-[var(--theme-gold)]">
                <Sparkles size={26} />
              </div>

              <p className="font-luxury text-xs uppercase tracking-[0.35em] text-[var(--theme-gold)]">
                Scent Finder
              </p>

              <h1 className="mt-5 font-display text-6xl font-semibold leading-[0.95] text-white sm:text-7xl">
                Find your <span className="gold-text">signature aura</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[var(--theme-muted)]">
                Select the fragrance mood you want. We will recommend perfumes
                that match your personality, occasion, and style.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-20">
        <div className="rounded-[34px] border border-white/10 bg-black/35 p-6 shadow-glass backdrop-blur-xl">
          <p className="mb-5 font-luxury text-xs uppercase tracking-[0.35em] text-[var(--theme-gold)]">
            Choose Your Mood
          </p>

          <div className="flex flex-wrap gap-3">
            {moods.map((mood) => (
              <button
                key={mood}
                onClick={() => setSelectedMood(mood)}
                className={[
                  "rounded-full border px-6 py-3 text-sm font-semibold transition",
                  selectedMood === mood
                    ? "border-[var(--theme-accent)] bg-[var(--theme-accent)] text-white"
                    : "border-white/10 bg-white/[0.04] text-[var(--theme-muted)] hover:border-[rgba(var(--theme-gold-rgb),0.40)] hover:text-white",
                ].join(" ")}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-24">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-luxury text-xs uppercase tracking-[0.35em] text-[var(--theme-gold)]">
              Your Result
            </p>

            <h2 className="mt-3 font-display text-5xl font-semibold text-white">
              Recommended for <span className="gold-text">{selectedMood}</span>
            </h2>
          </div>

          <a href="/shop" className="btn-outline">
            Shop All
            <ArrowRight className="ml-2" size={17} />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {finalProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
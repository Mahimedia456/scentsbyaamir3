import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { collectionMeta, products } from "../data/products";

export default function CollectionPage() {
  const { category } = useParams();

  const meta = collectionMeta[category];

  if (!meta) {
    return <Navigate to="/shop" replace />;
  }

  const collectionProducts = products.filter(
    (product) => product.category === category
  );

  const otherCollections = Object.entries(collectionMeta).filter(
    ([key]) => key !== category
  );

  return (
    <main className="red-noir-page">
      <Header />

      <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-7">
        <div className="pointer-events-none absolute inset-0 cinematic-banner-bg" />

        <div className="section-shell relative">
          <div className="relative min-h-[520px] overflow-hidden rounded-[42px] border border-[rgba(var(--theme-accent-rgb),0.25)] bg-[#080202]/80 px-6 py-16 shadow-glass backdrop-blur-xl lg:px-14">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.88),rgba(var(--theme-accent-rgb),0.28),rgba(var(--theme-accent-rgb),0.12))]" />
            <div className="accent-glow absolute -right-24 top-10 h-[420px] w-[420px] rounded-full" />

            <div className="relative z-10 grid min-h-[390px] items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
              <div>
                <p className="font-luxury text-xs uppercase tracking-[0.35em] text-[var(--theme-gold)]">
                  {meta.kicker}
                </p>

                <h1 className="mt-4 font-display text-6xl font-semibold leading-[0.9] text-white sm:text-7xl">
                  {meta.title}
                </h1>

                <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--theme-muted)]">
                  {meta.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/shop" className="btn-white">
                    Shop All
                    <ArrowRight className="ml-2" size={17} />
                  </Link>

                  <Link to="/scent-finder" className="btn-outline">
                    Find My Scent
                  </Link>
                </div>
              </div>

              <div className="rounded-[34px] border border-white/10 bg-black/35 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3 text-[var(--theme-gold)]">
                  <Sparkles size={18} />
                  <p className="font-luxury text-xs uppercase tracking-[0.25em]">
                    Collection Mood
                  </p>
                </div>

                <div className="mt-6 grid gap-3">
                  {getMoodTags(category).map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[rgba(var(--theme-accent-rgb),0.25)] bg-white/[0.04] px-5 py-4 text-sm font-semibold text-white"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-6">
              {otherCollections.map(([key, item]) => (
                <Link
                  key={key}
                  to={`/collections/${key}`}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-[var(--theme-muted)] transition hover:border-[rgba(var(--theme-gold-rgb),0.40)] hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-24">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-luxury text-xs uppercase tracking-[0.35em] text-[var(--theme-gold)]">
              {collectionProducts.length} Products
            </p>

            <h2 className="mt-3 font-display text-5xl font-semibold text-white">
              Explore <span className="gold-text">{meta.label}</span> Perfumes
            </h2>
          </div>

          <Link to="/shop" className="btn-outline">
            Back to Shop
          </Link>
        </div>

        {collectionProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {collectionProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-[32px] border border-white/10 bg-black/30 p-10 text-center">
            <p className="font-display text-3xl text-white">
              No products in this collection yet.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}

function getMoodTags(category) {
  const map = {
    men: ["Fresh Luxury", "Office Confidence", "Evening Power", "Woody Depth"],
    women: ["Elegant Floral", "Sweet Seduction", "Soft Luxury", "Gift Ready"],
    unisex: ["Royal Oud", "Amber Smoke", "Deep Musk", "Signature Trail"],
    "tester-box": [
      "Discovery Set",
      "Try Before Full Bottle",
      "Gift Choice",
      "Multiple Moods",
    ],
  };

  return map[category] || [];
}
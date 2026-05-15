import { Heart, ShoppingBag, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { formatPrice } from "../data/products";

export default function ProductCard({ product }) {
  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-[rgba(var(--theme-accent-rgb),0.25)] bg-[#100707]/80 p-4 shadow-glass transition duration-500 hover:-translate-y-2 hover:border-[rgba(var(--theme-gold-rgb),0.42)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(var(--theme-accent-rgb),0.28),transparent_42%)] opacity-70 transition group-hover:opacity-100" />

      <button className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/35 text-white backdrop-blur-xl transition hover:border-[rgba(var(--theme-gold-rgb),0.60)] hover:bg-[rgba(var(--theme-gold-rgb),0.10)]">
        <Heart size={16} />
      </button>

      <Link to={`/product/${product.slug}`} className="relative block">
        <div className="relative mb-4 flex h-64 items-center justify-center overflow-hidden rounded-[24px] bg-black/30">
          <div className="absolute bottom-8 h-12 w-36 rounded-full bg-[rgba(var(--theme-accent-rgb),0.25)] blur-2xl" />

          <img
            src={product.image}
            alt={product.name}
            className="relative z-10 max-h-56 object-contain transition duration-500 group-hover:scale-110 group-hover:-rotate-3"
          />
        </div>

        <p className="mb-1 text-xs uppercase tracking-[0.25em] text-[var(--theme-gold)]">
          {product.categoryLabel || product.category}
        </p>

        <h3 className="font-display text-2xl font-semibold text-white">
          {product.name}
        </h3>

        <p className="mt-1 line-clamp-1 text-sm text-[var(--theme-muted)]">
          {product.inspiredBy}
        </p>

        <div className="mt-3 flex items-center gap-1 text-[var(--theme-gold)]">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} size={13} fill="currentColor" />
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-white">
              {formatPrice ? formatPrice(product.price) : `Rs ${product.price}`}
            </p>
            <p className="text-xs text-[var(--theme-muted)]">{product.size}</p>
          </div>

          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--theme-accent)] text-white transition hover:bg-[var(--theme-accent-soft)]">
            <ShoppingBag size={17} />
          </button>
        </div>
      </Link>
    </article>
  );
}
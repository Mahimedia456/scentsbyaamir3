import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  Heart,
  Minus,
  Plus,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  Wand2,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { formatPrice, products } from "../data/products";
import bottle from "../assets/bottle.png";

export default function ProductDetailPage() {
  const { slug } = useParams();

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const relatedProducts = products
    .filter((item) => item.id !== product.id && item.category === product.category)
    .slice(0, 4);

  const fallbackRelated = products
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  const related = relatedProducts.length ? relatedProducts : fallbackRelated;

  return (
    <main className="red-noir-page overflow-hidden">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-7">
        <div className="pointer-events-none absolute inset-0 cinematic-banner-bg" />

        <div className="relative mx-auto grid min-h-[calc(100vh-130px)] w-full max-w-[1540px] items-center overflow-hidden rounded-[42px] border border-[rgba(var(--theme-accent-rgb),0.25)] bg-[#080202]/80 px-6 py-12 shadow-glass backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr_0.7fr] lg:px-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_63%_42%,rgba(var(--theme-accent-rgb),0.42),transparent_35%),linear-gradient(90deg,rgba(0,0,0,.9),rgba(var(--theme-accent-rgb),0.20),rgba(var(--theme-accent-rgb),0.15))]" />
          <div className="luxury-noise absolute inset-0 opacity-25" />
          <div className="accent-glow absolute -right-32 top-0 h-[520px] w-[520px] rounded-full" />

          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="relative z-10"
          >
            <Link
              to={`/collections/${product.category}`}
              className="mb-6 inline-flex rounded-full border border-[rgba(var(--theme-gold-rgb),0.30)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--theme-gold)] transition hover:bg-[rgba(var(--theme-gold-rgb),0.10)]"
            >
              {product.categoryLabel}
            </Link>

            <p className="font-luxury text-xs uppercase tracking-[0.35em] text-[var(--theme-gold)]">
              {product.family}
            </p>

            <h1 className="mt-4 font-display text-6xl font-semibold leading-[0.9] text-white sm:text-7xl">
              {product.name}
            </h1>

            <p className="mt-4 text-sm font-medium text-[var(--theme-ivory)]/80">
              {product.inspiredBy}
            </p>

            <div className="mt-6 flex max-w-md items-start gap-4">
              <span className="mt-3 h-px w-16 shrink-0 bg-[var(--theme-gold)]/70" />
              <p className="text-sm leading-7 text-[var(--theme-muted)]">
                {product.short}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-[var(--theme-ivory)]/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* BOTTLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 38 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="cinematic-perspective relative z-10 flex min-h-[540px] items-center justify-center overflow-visible"
          >
            <div className="accent-glow absolute h-[440px] w-[440px] rounded-full" />

            <div className="absolute h-[360px] w-[360px] rounded-full border border-[rgba(var(--theme-gold-rgb),0.18)] animate-orbit-slow">
              <span className="absolute left-1/2 top-[-7px] h-4 w-4 rounded-full bg-[var(--theme-gold)]" />
              <span className="absolute bottom-4 right-10 h-3 w-3 rounded-full bg-[var(--theme-accent)]" />
            </div>

            <div className="absolute bottom-16 h-20 w-[390px] rounded-full bg-black/70 blur-2xl" />

            <img
              src={product.image || bottle}
              alt={product.name}
              className="hero-bottle-glow relative z-20 max-h-[560px] w-auto object-contain animate-cinematic-bottle lg:max-h-[660px]"
            />

            <div className="absolute bottom-8 z-10 h-16 w-[420px] rounded-[50%] bg-gradient-to-r from-transparent via-[rgba(var(--theme-accent-rgb),0.25)] to-transparent blur-xl" />
            <div className="absolute bottom-3 z-0 h-[2px] w-[440px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <button className="absolute bottom-20 right-4 z-30 hidden items-center gap-2 rounded-full border border-[rgba(var(--theme-gold-rgb),0.40)] bg-black/40 px-5 py-3 text-sm font-semibold text-[var(--theme-ivory)] backdrop-blur-xl transition hover:bg-[rgba(var(--theme-gold-rgb),0.10)] lg:flex">
              <RotateCcw size={16} />
              360 View
            </button>
          </motion.div>

          {/* BUY PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="relative z-10"
          >
            <div className="rounded-[32px] border border-white/10 bg-black/40 p-6 shadow-glass backdrop-blur-xl">
              <div className="flex items-center gap-1 text-[var(--theme-gold)]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
                <span className="ml-2 text-xs text-[var(--theme-muted)]">
                  (5.0)
                </span>
              </div>

              <div className="mt-5 flex items-end gap-3">
                <p className="text-4xl font-bold text-white">
                  {formatPrice(product.price)}
                </p>

                {product.oldPrice && (
                  <p className="mb-1 text-sm text-[var(--theme-muted)] line-through">
                    {formatPrice(product.oldPrice)}
                  </p>
                )}
              </div>

              <p className="mt-2 text-sm text-[var(--theme-muted)]">
                {product.size}
              </p>

              <div className="mt-6">
                <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[var(--theme-gold)]">
                  Select Size
                </p>

                <div className="grid grid-cols-3 gap-2">
                  {["30ml", "50ml", "100ml"].map((size) => (
                    <button
                      key={size}
                      className={[
                        "rounded-full border px-4 py-3 text-sm font-semibold transition",
                        size === product.size
                          ? "border-[var(--theme-accent)] bg-[var(--theme-accent)] text-white"
                          : "border-white/10 bg-white/[0.04] text-[var(--theme-muted)] hover:border-[rgba(var(--theme-gold-rgb),0.40)] hover:text-white",
                      ].join(" ")}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[var(--theme-gold)]">
                  Quantity
                </p>

                <div className="flex h-13 w-fit items-center rounded-full border border-white/10 bg-white/[0.04] p-1">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10">
                    <Minus size={15} />
                  </button>

                  <span className="w-12 text-center text-sm font-semibold text-white">
                    1
                  </span>

                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--theme-accent)] text-white transition hover:bg-[var(--theme-accent-soft)]">
                    <Plus size={15} />
                  </button>
                </div>
              </div>

              <div className="mt-7 grid gap-3">
                <button className="btn-primary w-full">
                  <ShoppingBag className="mr-2" size={17} />
                  Add to Cart
                </button>

                <button className="btn-outline w-full">
                  <Heart className="mr-2" size={17} />
                  Add to Wishlist
                </button>
              </div>

              <div className="mt-7 grid gap-3 border-t border-white/10 pt-6">
                <Info icon={<Truck size={17} />} text="Fast delivery available" />
                <Info
                  icon={<ShieldCheck size={17} />}
                  text="Premium quality checked"
                />
                <Info icon={<RotateCcw size={17} />} text="Tester box available" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT STORY */}
      <section className="section-shell py-20">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[34px] border border-white/10 bg-black/35 p-8 shadow-glass backdrop-blur-xl"
          >
            <p className="font-luxury text-xs uppercase tracking-[0.35em] text-[var(--theme-gold)]">
              Fragrance Story
            </p>

            <h2 className="mt-4 font-display text-5xl font-semibold text-white">
              A scent built for presence.
            </h2>

            <p className="mt-6 text-sm leading-8 text-[var(--theme-muted)]">
              {product.story}
            </p>

            <p className="mt-5 text-sm leading-8 text-[var(--theme-muted)]">
              This fragrance is created for people who want their scent to feel
              memorable without feeling loud. It opens with character, develops
              smoothly on skin, and leaves a refined trail that works beautifully
              for personal style, gifting, and daily luxury.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[34px] border border-[rgba(var(--theme-accent-rgb),0.25)] bg-[#100707]/80 p-8 shadow-glass"
          >
            <p className="font-luxury text-xs uppercase tracking-[0.35em] text-[var(--theme-gold)]">
              Notes Pyramid
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <NotesColumn title="Top Notes" notes={product.notes.top} />
              <NotesColumn title="Heart Notes" notes={product.notes.heart} />
              <NotesColumn title="Base Notes" notes={product.notes.base} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PERFORMANCE / FEEL */}
      <section className="section-shell pb-20">
        <div className="grid gap-6 lg:grid-cols-4">
          <DetailStat
            icon={<Clock size={22} />}
            title="Longevity"
            value="6–8 Hours"
            text="Designed for strong everyday performance."
          />

          <DetailStat
            icon={<Sparkles size={22} />}
            title="Projection"
            value="Moderate+"
            text="Noticeable trail without overpowering the room."
          />

          <DetailStat
            icon={<Wand2 size={22} />}
            title="Scent Mood"
            value={product.family}
            text="A balanced profile crafted around your fragrance style."
          />

          <DetailStat
            icon={<BadgeCheck size={22} />}
            title="Best Size"
            value={product.size}
            text="Ideal for daily use, collection, or gifting."
          />
        </div>
      </section>

      {/* DETAILED DESCRIPTION */}
      <section className="section-shell pb-20">
        <div className="relative overflow-hidden rounded-[46px] border border-[rgba(var(--theme-gold-rgb),0.18)] bg-black/40 p-8 shadow-glass lg:p-12">
          <div className="absolute inset-0 cinematic-banner-bg" />
          <div className="luxury-noise absolute inset-0 opacity-20" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="font-luxury text-xs uppercase tracking-[0.35em] text-[var(--theme-gold)]">
                How It Feels
              </p>

              <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.95] text-white lg:text-6xl">
                A fragrance that changes with your moment.
              </h2>

              <p className="mt-6 text-sm leading-8 text-[var(--theme-muted)]">
                The first impression gives freshness and identity. As it settles,
                the heart notes become smoother, warmer and more personal. The
                dry-down leaves the final signature — soft, elegant, and
                memorable.
              </p>
            </div>

            <div className="grid gap-4">
              <DescriptionRow
                title="Opening"
                text="Bright and noticeable from the first spray."
              />
              <DescriptionRow
                title="Heart"
                text="Smooth, balanced and refined as the perfume develops."
              />
              <DescriptionRow
                title="Dry Down"
                text="Warm, lasting and signature-like on skin and clothes."
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROFILE / OCCASIONS */}
      <section className="section-shell pb-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <TagPanel title="Scent Profile" items={product.tags} />
          <TagPanel title="Best For" items={product.occasions} />
        </div>
      </section>

      {/* WHY LOVE IT */}
      <section className="section-shell pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <ReasonCard
            title="Premium Inspired Character"
            text="A luxury-style fragrance profile made wearable for daily life, occasions, and gifting."
          />
          <ReasonCard
            title="Signature-Friendly"
            text="Balanced enough to become your everyday identity while still feeling special."
          />
          <ReasonCard
            title="Gift Ready"
            text="Perfect for birthdays, weddings, anniversaries, and premium personal gifting."
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-shell pb-24">
        <div className="rounded-[42px] border border-white/10 bg-black/35 p-8 shadow-glass backdrop-blur-xl lg:p-10">
          <p className="font-luxury text-xs uppercase tracking-[0.35em] text-[var(--theme-gold)]">
            Product Questions
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <FaqItem
              q="Is this perfume long lasting?"
              a="Yes, it is designed for strong everyday wear. Performance may vary based on skin type, weather and number of sprays."
            />
            <FaqItem
              q="Can I use it daily?"
              a="Yes. This perfume is suitable for daily use, but it also works well for events and special occasions."
            />
            <FaqItem
              q="Is tester box available?"
              a="Yes, you can try discovery/tester options before buying a full bottle."
            />
            <FaqItem
              q="How many sprays are recommended?"
              a="For daily wear, 3–5 sprays are usually enough. For evening or outdoor use, you can apply more."
            />
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="section-shell pb-24">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-luxury text-xs uppercase tracking-[0.35em] text-[var(--theme-gold)]">
              You May Also Like
            </p>

            <h2 className="mt-3 font-display text-5xl font-semibold text-white">
              Related <span className="gold-text">Fragrances</span>
            </h2>
          </div>

          <Link to="/shop" className="btn-outline">
            View All
            <ArrowRight className="ml-2" size={17} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* =========================
   COMPONENTS
========================= */

function Info({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-sm text-[var(--theme-muted)]">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(var(--theme-accent-rgb),0.15)] text-[var(--theme-gold)]">
        {icon}
      </span>
      {text}
    </div>
  );
}

function NotesColumn({ title, notes }) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-black/30 p-5">
      <h3 className="font-display text-2xl font-semibold text-white">{title}</h3>

      <div className="mt-5 flex flex-wrap gap-2">
        {notes.map((note) => (
          <span
            key={note}
            className="rounded-full border border-[rgba(var(--theme-gold-rgb),0.20)] bg-[rgba(var(--theme-gold-rgb),0.10)] px-4 py-2 text-xs font-medium text-[var(--theme-ivory)]"
          >
            {note}
          </span>
        ))}
      </div>
    </div>
  );
}

function DetailStat({ icon, title, value, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-[30px] border border-white/10 bg-black/35 p-7 shadow-glass backdrop-blur-xl"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(var(--theme-gold-rgb),0.30)] bg-[rgba(var(--theme-gold-rgb),0.10)] text-[var(--theme-gold)]">
        {icon}
      </div>

      <p className="font-luxury text-xs uppercase tracking-[0.25em] text-[var(--theme-gold)]">
        {title}
      </p>

      <h3 className="mt-3 font-display text-3xl font-semibold text-white">
        {value}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[var(--theme-muted)]">{text}</p>
    </motion.div>
  );
}

function DescriptionRow({ title, text }) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-black/35 p-6 backdrop-blur-xl">
      <h3 className="font-display text-3xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--theme-muted)]">{text}</p>
    </div>
  );
}

function TagPanel({ title, items }) {
  return (
    <div className="rounded-[34px] border border-white/10 bg-black/35 p-8 shadow-glass backdrop-blur-xl">
      <p className="font-luxury text-xs uppercase tracking-[0.35em] text-[var(--theme-gold)]">
        {title}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[rgba(var(--theme-accent-rgb),0.30)] bg-[rgba(var(--theme-accent-rgb),0.10)] px-5 py-3 text-sm font-semibold text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ReasonCard({ title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-[34px] border border-white/10 bg-black/35 p-8 shadow-glass backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(var(--theme-accent-rgb),0.26),transparent_42%)]" />

      <div className="relative z-10">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(var(--theme-gold-rgb),0.30)] bg-[rgba(var(--theme-gold-rgb),0.10)] text-[var(--theme-gold)]">
          <Sparkles size={22} />
        </div>

        <h3 className="font-display text-3xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-[var(--theme-muted)]">
          {text}
        </p>
      </div>
    </motion.div>
  );
}

function FaqItem({ q, a }) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-6">
      <h3 className="font-display text-2xl font-semibold text-white">{q}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--theme-muted)]">{a}</p>
    </div>
  );
}
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Gem,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Wand2,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import bottle from "../assets/bottle.png";

export default function HomePage() {
  const { scrollYProgress } = useScroll();

  const heroBottleY = useTransform(scrollYProgress, [0, 0.26], [0, -70]);
  const heroBottleScale = useTransform(scrollYProgress, [0, 0.26], [1, 1.08]);
  const heroBottleRotate = useTransform(scrollYProgress, [0, 0.26], [0, -4]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.22], [0, 55]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.24], [1, 0.35]);

  return (
    <main className="red-noir-page overflow-hidden">
      <Header />

      <section className="relative flex min-h-screen items-center overflow-hidden px-4 pt-28 sm:px-7">
        <Particles />
        <RedCurtain />

        <div className="relative mx-auto grid min-h-[calc(100vh-120px)] w-full max-w-[1540px] items-center overflow-hidden rounded-[42px] border border-[rgba(var(--theme-accent-rgb),0.25)] bg-[#070202]/80 px-6 py-10 shadow-glass backdrop-blur-xl lg:grid-cols-[0.9fr_1.38fr_0.58fr] lg:px-16">
          <div className="absolute inset-0 cinematic-banner-bg" />
          <div className="luxury-noise absolute inset-0 opacity-30" />

          <div className="accent-glow absolute -right-36 top-0 h-[620px] w-[620px] rounded-full animate-red-pulse" />

          <div className="absolute left-[48%] top-[50%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(var(--theme-gold-rgb),0.10)]" />
          <div className="absolute left-[48%] top-[50%] h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(var(--theme-accent-rgb),0.12)]" />
          <div className="absolute -bottom-28 left-1/2 h-[260px] w-[760px] -translate-x-1/2 rounded-full bg-black/90 blur-[42px]" />

          <motion.div
            style={{ y: heroTextY, opacity: heroOpacity }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="relative z-20"
          >
            <p className="mb-5 font-luxury text-xs uppercase tracking-[0.35em] text-[var(--theme-gold)]">
              Luxury Perfume House
            </p>

            <h1 className="font-display text-6xl font-semibold leading-[0.86] text-white sm:text-7xl lg:text-[112px]">
              THE <br />
              NIGHT <br />
              TREASURE
            </h1>

            <div className="mt-8 flex max-w-md items-start gap-4">
              <span className="mt-3 h-px w-16 shrink-0 bg-[var(--theme-gold)]/70" />
              <p className="text-sm leading-7 text-[var(--theme-ivory)]/80">
                A cinematic fragrance experience crafted for elegance,
                confidence, and unforgettable signature presence.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="/shop" className="btn-white">
                Explore Collection
                <ArrowRight className="ml-2" size={17} />
              </a>

              <a href="/scent-finder" className="btn-outline">
                Find Your Scent
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-3">
              <Feature icon={<ShieldCheck size={16} />} label="Premium Quality" />
              <Feature icon={<Truck size={16} />} label="Fast Delivery" />
              <Feature icon={<Sparkles size={16} />} label="Luxury Inspired" />
            </div>
          </motion.div>

          <motion.div
            style={{
              y: heroBottleY,
              scale: heroBottleScale,
              rotateZ: heroBottleRotate,
            }}
            initial={{ opacity: 0, scale: 0.86, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.12 }}
            className="cinematic-perspective relative z-30 flex min-h-[560px] items-center justify-center overflow-visible lg:min-h-[680px]"
          >
            <div className="accent-glow absolute h-[520px] w-[520px] rounded-full" />

            <div className="absolute h-[360px] w-[360px] rounded-full border border-[rgba(var(--theme-gold-rgb),0.22)] animate-orbit-slow">
              <span className="absolute left-1/2 top-[-8px] h-4 w-4 rounded-full bg-[var(--theme-gold-soft)] shadow-goldGlow" />
              <span className="absolute bottom-4 right-10 h-3 w-3 rounded-full bg-[var(--theme-accent)]" />
            </div>

            <div className="absolute bottom-20 h-28 w-[500px] rounded-full bg-black/80 blur-2xl" />

            <img
              src={bottle}
              alt="Scents By Aamir Perfume"
              className="hero-bottle-glow relative z-30 max-h-[620px] w-auto object-contain animate-cinematic-bottle sm:max-h-[680px] lg:max-h-[760px] xl:max-h-[800px]"
            />

            <div className="absolute bottom-12 z-20 h-24 w-[500px] rounded-[50%] bg-gradient-to-r from-transparent via-[rgba(var(--theme-accent-rgb),0.30)] to-transparent blur-xl" />
            <div className="absolute bottom-6 z-10 h-[2px] w-[540px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />

            <FloatingNote className="left-10 top-16" text="Oud" />
            <FloatingNote className="right-10 top-24" text="Amber" />
            <FloatingNote className="bottom-32 left-16" text="Musk" />
            <FloatingNote className="bottom-44 right-12" text="Rose" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.28 }}
            className="relative z-20 hidden lg:block"
          >
            <div className="rounded-[28px] border border-white/10 bg-black/35 p-6 backdrop-blur-xl">
              <p className="text-sm text-[var(--theme-muted)]">Details</p>

              <p className="mt-2 text-4xl font-bold text-white">Rs 7,600</p>

              <div className="mt-4 flex items-center gap-1 text-[var(--theme-gold)]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>

              <p className="mt-2 text-[var(--theme-muted)]">50 ml</p>

              <button className="btn-primary mt-7 w-full">Add to Cart +</button>
            </div>

            <div className="mt-7 rounded-[28px] border border-[rgba(var(--theme-gold-rgb),0.20)] bg-black/25 p-5">
              <p className="font-luxury text-xs uppercase tracking-[0.3em] text-[var(--theme-gold)]">
                Signature Notes
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Oud", "Amber", "Musk", "Rose"].map((note) => (
                  <span
                    key={note}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--theme-ivory)]/80"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="relative z-30 col-span-full mx-auto mt-0 hidden w-full max-w-5xl rounded-full border border-[rgba(var(--theme-accent-rgb),0.45)] bg-black/25 px-8 py-5 backdrop-blur-xl lg:block">
            <div className="grid grid-cols-3 gap-8">
              {["ELYNDOR", "VAUREN", "DARK SEDUCTION"].map((item) => (
                <button
                  key={item}
                  className="rounded-xl border border-[rgba(var(--theme-accent-rgb),0.60)] py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-[var(--theme-gold)] hover:bg-[rgba(var(--theme-gold-rgb),0.10)]"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CinematicBanner />

      <EditorialSplitBanner />

      <section className="section-shell py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-luxury text-xs uppercase tracking-[0.35em] text-[var(--theme-gold)]">
              Signature Edit
            </p>

            <h2 className="mt-3 font-display text-5xl font-semibold text-white lg:text-6xl">
              A scent that matches <span className="gold-text">your aura</span>
            </h2>
          </div>

          <a href="/shop" className="btn-outline">
            View All Products
            <ArrowRight className="ml-2" size={17} />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      <CollectionWorlds />

      <MoodBanner />

      <ScentOrbit />

      <section className="section-shell py-24">
        <div className="relative overflow-hidden rounded-[46px] border border-[rgba(var(--theme-accent-rgb),0.25)] bg-[var(--theme-bg-card)] px-6 py-24 text-center shadow-glass">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(var(--theme-accent-rgb),0.38),transparent_42%)]" />
          <div className="gold-glow absolute left-1/2 top-[-160px] h-[360px] w-[360px] -translate-x-1/2 rounded-full" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="font-luxury text-xs uppercase tracking-[0.35em] text-[var(--theme-gold)]">
              Scent Finder
            </p>

            <h2 className="mt-4 font-display text-5xl font-semibold text-white lg:text-6xl">
              Find the fragrance made for your personality
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[var(--theme-muted)]">
              Choose your mood, occasion, and scent family. We will recommend
              the perfect Scents By Aamir perfume for your aura.
            </p>

            <a href="/scent-finder" className="btn-white mt-8">
              Start Scent Finder
              <Play className="ml-2" size={16} fill="currentColor" />
            </a>
          </div>
        </div>
      </section>

      <ExperienceStrip />

      <Footer />
    </main>
  );
}

/* =========================
   SECTIONS
========================= */

function CinematicBanner() {
  return (
    <section className="section-shell py-20">
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65 }}
        className="relative overflow-hidden rounded-[46px] border border-[rgba(var(--theme-gold-rgb),0.20)] bg-black/45 p-8 shadow-glass lg:p-12"
      >
        <div className="absolute inset-0 cinematic-banner-bg" />
        <div className="accent-glow absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full" />

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-luxury text-xs uppercase tracking-[0.35em] text-[var(--theme-gold)]">
              Cinematic Fragrance Ritual
            </p>

            <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.95] text-white lg:text-7xl">
              Not just perfume. A whole atmosphere.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-8 text-[var(--theme-muted)]">
              Dark glow, gold reflections, warm smoke, and long-lasting scent
              character — designed to make every product feel like a premium
              launch.
            </p>

            <a href="/collections/unisex" className="btn-white mt-8">
              Explore Unisex
              <ArrowRight className="ml-2" size={17} />
            </a>
          </div>

          <div className="relative flex min-h-[420px] items-center justify-center">
            <div className="absolute h-[420px] w-[420px] rounded-full border border-[rgba(var(--theme-accent-rgb),0.20)]" />
            <div className="accent-glow absolute h-[300px] w-[300px] rounded-full animate-red-pulse" />
            <div className="absolute bottom-8 h-[220px] w-[480px] rounded-full bg-black/70 blur-3xl" />

            <img
              src={bottle}
              alt="Luxury Perfume"
              className="hero-bottle-glow relative z-10 max-h-[540px] w-auto object-contain animate-cinematic-bottle lg:max-h-[620px]"
            />

            <SmokeBlob className="left-10 top-8" />
            <SmokeBlob className="bottom-10 right-12" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function EditorialSplitBanner() {
  return (
    <section className="section-shell py-10">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -44 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="relative min-h-[480px] overflow-hidden rounded-[42px] border border-white/10 bg-black/45 p-8 shadow-glass"
        >
          <div className="absolute inset-0 cinematic-card-bg" />
          <div className="gold-glow absolute -left-28 bottom-10 h-[300px] w-[300px] rounded-full" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <p className="font-luxury text-xs uppercase tracking-[0.35em] text-[var(--theme-gold)]">
                Perfume Editorial
              </p>

              <h2 className="mt-4 max-w-xl font-display text-5xl font-semibold leading-[0.95] text-white lg:text-6xl">
                Designed like a campaign, built like a store.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-8 text-[var(--theme-muted)]">
              Each section uses cinematic spacing, layered backgrounds,
              fragrance notes, glow and 3D bottle presence to avoid a boring
              ecommerce look.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 44 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="relative min-h-[480px] overflow-hidden rounded-[42px] border border-[rgba(var(--theme-gold-rgb),0.18)] bg-black/45 p-8 shadow-glass"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(var(--theme-accent-rgb),0.38),transparent_44%)]" />
          <div className="absolute bottom-6 left-1/2 h-24 w-[420px] -translate-x-1/2 rounded-full bg-black/80 blur-2xl" />

          <img
            src={bottle}
            alt="Editorial Perfume Bottle"
            className="hero-bottle-glow absolute bottom-[-20px] left-1/2 z-10 max-h-[520px] -translate-x-1/2 object-contain animate-cinematic-bottle"
          />

          <FloatingNote className="left-10 top-12" text="Luxury" />
          <FloatingNote className="right-10 bottom-20" text="Identity" />
        </motion.div>
      </div>
    </section>
  );
}

function CollectionWorlds() {
  const items = [
    {
      title: "Men",
      path: "/collections/men",
      headline: "Bold leather, fresh citrus, office confidence.",
      icon: <Gem size={24} />,
    },
    {
      title: "Women",
      path: "/collections/women",
      headline: "Floral elegance, sweet warmth, soft luxury.",
      icon: <Wand2 size={24} />,
    },
    {
      title: "Unisex",
      path: "/collections/unisex",
      headline: "Oud, amber, rose and royal evening depth.",
      icon: <BadgeCheck size={24} />,
    },
  ];

  return (
    <section className="section-shell py-16">
      <div className="mb-10">
        <p className="font-luxury text-xs uppercase tracking-[0.35em] text-[var(--theme-gold)]">
          Collection Worlds
        </p>

        <h2 className="mt-3 font-display text-5xl font-semibold text-white lg:text-6xl">
          Enter your <span className="gold-text">scent world</span>
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.a
            href={item.path}
            key={item.title}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="group relative min-h-[390px] overflow-hidden rounded-[38px] border border-white/10 bg-black/40 p-8 shadow-glass transition duration-500 hover:-translate-y-2 hover:border-[rgba(var(--theme-gold-rgb),0.40)]"
          >
            <div className="absolute inset-0 cinematic-card-bg opacity-80 transition group-hover:opacity-100" />
            <div className="gold-glow absolute -bottom-20 -right-20 h-56 w-56 rounded-full" />
            <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--theme-accent)] to-transparent" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(var(--theme-gold-rgb),0.30)] bg-[rgba(var(--theme-gold-rgb),0.10)] text-[var(--theme-gold)]">
                  {item.icon}
                </div>

                <p className="font-luxury text-xs uppercase tracking-[0.35em] text-[var(--theme-gold)]">
                  Collection
                </p>

                <h3 className="mt-4 font-display text-6xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--theme-muted)]">
                  {item.headline}
                </p>
              </div>

              <div className="mt-10 inline-flex items-center text-sm font-semibold text-white">
                Explore Collection
                <ArrowRight
                  className="ml-2 transition group-hover:translate-x-1"
                  size={17}
                />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function MoodBanner() {
  return (
    <section className="section-shell py-20">
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          ["Fresh", "Clean citrus, aquatic sparkle, daily confidence."],
          ["Oud", "Deep woods, warm smoke, royal long-lasting presence."],
          ["Sweet", "Vanilla warmth, seductive glow, evening softness."],
        ].map(([title, text], index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="relative min-h-[300px] overflow-hidden rounded-[38px] border border-white/10 bg-black/40 p-8 shadow-glass"
          >
            <div className="absolute inset-0 cinematic-card-bg" />
            <div className="accent-glow absolute -right-24 top-0 h-[240px] w-[240px] rounded-full" />

            <div className="relative z-10">
              <p className="font-luxury text-xs uppercase tracking-[0.35em] text-[var(--theme-gold)]">
                Mood
              </p>

              <h3 className="mt-4 font-display text-6xl font-semibold text-white">
                {title}
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--theme-muted)]">
                {text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ScentOrbit() {
  return (
    <section className="section-shell py-24">
      <div className="relative overflow-hidden rounded-[46px] border border-[rgba(var(--theme-accent-rgb),0.25)] bg-[#080202]/80 p-8 shadow-glass lg:p-12">
        <div className="absolute inset-0 cinematic-banner-bg" />
        <div className="luxury-noise absolute inset-0 opacity-20" />

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="relative flex min-h-[520px] items-center justify-center">
            <div className="absolute h-[500px] w-[500px] rounded-full border border-[rgba(var(--theme-gold-rgb),0.10)] animate-orbit-slow" />
            <div className="absolute h-[370px] w-[370px] rounded-full border border-[rgba(var(--theme-accent-rgb),0.20)]" />
            <div className="accent-glow absolute h-[260px] w-[260px] rounded-full" />

            <img
              src={bottle}
              alt="Signature Orbit"
              className="hero-bottle-glow relative z-20 max-h-[560px] object-contain animate-cinematic-bottle lg:max-h-[650px]"
            />

            {["Citrus", "Oud", "Amber", "Musk", "Vanilla", "Rose"].map(
              (note, index) => (
                <OrbitNote key={note} note={note} index={index} />
              )
            )}
          </div>

          <div>
            <p className="font-luxury text-xs uppercase tracking-[0.35em] text-[var(--theme-gold)]">
              Signature Orbit
            </p>

            <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.95] text-white lg:text-7xl">
              Every perfume has its own gravity.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-8 text-[var(--theme-muted)]">
              Build product sections around scent notes, mood, occasion and aura.
              This makes the homepage feel like a fragrance universe instead of
              a normal product grid.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Fresh Luxury",
                "Dark Oud",
                "Sweet Seduction",
                "Rose Amber",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-semibold text-white"
                >
                  {item}
                </div>
              ))}
            </div>

            <a href="/shop" className="btn-outline mt-9">
              Discover All Scents
              <ArrowRight className="ml-2" size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceStrip() {
  return (
    <section className="section-shell pb-24">
      <div className="grid gap-6 lg:grid-cols-4">
        {[
          ["01", "Long Lasting", "Made for daily confidence and strong presence."],
          ["02", "Premium Inspired", "Luxury-style profiles with wearable balance."],
          ["03", "Gift Ready", "Perfect for birthdays, weddings and premium gifting."],
          ["04", "Tester Available", "Try discovery sets before choosing full bottle."],
        ].map(([number, title, text]) => (
          <motion.div
            key={number}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="rounded-[30px] border border-white/10 bg-black/35 p-7 shadow-glass backdrop-blur-xl"
          >
            <p className="font-luxury text-xs text-[var(--theme-gold)]">
              {number}
            </p>

            <h3 className="mt-5 font-display text-3xl font-semibold text-white">
              {title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-[var(--theme-muted)]">
              {text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* =========================
   SMALL COMPONENTS
========================= */

function Feature({ icon, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-center text-xs text-[var(--theme-muted)]">
      <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(var(--theme-accent-rgb),0.15)] text-[var(--theme-gold)]">
        {icon}
      </div>
      {label}
    </div>
  );
}

function FloatingNote({ text, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.7 }}
      className={`absolute z-40 hidden rounded-full border border-[rgba(var(--theme-gold-rgb),0.25)] bg-black/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--theme-gold-soft)] backdrop-blur-xl lg:block ${className}`}
    >
      {text}
    </motion.div>
  );
}

function OrbitNote({ note, index }) {
  const positions = [
    "left-[8%] top-[18%]",
    "right-[10%] top-[18%]",
    "left-[5%] bottom-[25%]",
    "right-[6%] bottom-[24%]",
    "left-[44%] top-[4%]",
    "left-[45%] bottom-[4%]",
  ];

  return (
    <div
      className={`absolute z-30 rounded-full border border-[rgba(var(--theme-gold-rgb),0.25)] bg-black/45 px-4 py-2 text-xs font-semibold text-[var(--theme-gold-soft)] backdrop-blur-xl ${positions[index]}`}
    >
      {note}
    </div>
  );
}

function SmokeBlob({ className = "" }) {
  return (
    <div
      className={`absolute h-32 w-32 rounded-full bg-white/10 blur-3xl animate-smoke-rise ${className}`}
    />
  );
}

function Particles() {
  const points = Array.from({ length: 34 }, (_, index) => ({
    id: index,
    left: `${(index * 37) % 100}%`,
    top: `${(index * 53) % 100}%`,
    delay: `${(index % 9) * 0.45}s`,
    duration: `${6 + (index % 5)}s`,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {points.map((point) => (
        <span
          key={point.id}
          className="absolute h-1 w-1 rounded-full bg-[rgba(var(--theme-gold-rgb),0.60)] animate-drift"
          style={{
            left: point.left,
            top: point.top,
            animationDelay: point.delay,
            animationDuration: point.duration,
          }}
        />
      ))}
    </div>
  );
}

function RedCurtain() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="accent-glow absolute -top-32 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full" />
      <div className="accent-glow absolute bottom-0 left-0 h-96 w-96 rounded-full opacity-60" />
    </div>
  );
}
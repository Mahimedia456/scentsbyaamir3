import { ArrowRight, Crown, Sparkles, Wand2 } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="red-noir-page">
      <Header />

      <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-7">
        <div className="pointer-events-none absolute inset-0 cinematic-banner-bg" />

        <div className="section-shell relative">
          <div className="relative overflow-hidden rounded-[42px] border border-[rgba(var(--theme-accent-rgb),0.25)] bg-[#080202]/80 px-6 py-20 shadow-glass backdrop-blur-xl lg:px-14">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.88),rgba(var(--theme-accent-rgb),0.28),rgba(var(--theme-accent-rgb),0.12))]" />

            <div className="relative z-10 max-w-4xl">
              <p className="font-luxury text-xs uppercase tracking-[0.35em] text-[var(--theme-gold)]">
                About Scents By Aamir
              </p>

              <h1 className="mt-5 font-display text-6xl font-semibold leading-[0.95] text-white sm:text-7xl">
                Luxury inspired fragrances made for your identity.
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-8 text-[var(--theme-muted)]">
                Scents By Aamir creates premium inspired perfumes for people who
                want confidence, elegance, and long-lasting presence in their
                everyday scent.
              </p>

              <a href="/shop" className="btn-white mt-8">
                Explore Collection
                <ArrowRight className="ml-2" size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <Feature
            icon={<Crown size={24} />}
            title="Premium Feel"
            text="Every fragrance is designed to feel polished, elegant, and suitable for modern luxury wear."
          />

          <Feature
            icon={<Wand2 size={24} />}
            title="Inspired Blends"
            text="Our collection includes fresh, oud, floral, sweet, smoky, and amber profiles for different moods."
          />

          <Feature
            icon={<Sparkles size={24} />}
            title="Signature Aura"
            text="We help you choose a perfume that feels personal, memorable, and expressive."
          />
        </div>
      </section>

      <section className="section-shell pb-24">
        <div className="rounded-[42px] border border-[rgba(var(--theme-accent-rgb),0.25)] bg-[#100707]/80 p-8 shadow-glass lg:p-12">
          <p className="font-luxury text-xs uppercase tracking-[0.35em] text-[var(--theme-gold)]">
            Our Story
          </p>

          <h2 className="mt-4 font-display text-5xl font-semibold text-white">
            Perfume is not just a product. It is presence.
          </h2>

          <p className="mt-6 max-w-4xl text-sm leading-8 text-[var(--theme-muted)]">
            Our goal is to make luxury fragrance accessible, wearable, and
            memorable. Whether you prefer fresh daily perfumes, deep oud,
            seductive evening scents, or elegant floral fragrances, Scents By
            Aamir is built around helping you find your signature.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="rounded-[34px] border border-white/10 bg-black/35 p-8 shadow-glass backdrop-blur-xl">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(var(--theme-gold-rgb),0.30)] bg-[rgba(var(--theme-gold-rgb),0.10)] text-[var(--theme-gold)]">
        {icon}
      </div>

      <h3 className="font-display text-3xl font-semibold text-white">{title}</h3>

      <p className="mt-4 text-sm leading-7 text-[var(--theme-muted)]">
        {text}
      </p>
    </div>
  );
}
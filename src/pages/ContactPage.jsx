import { Mail, MapPin, Phone, Send } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
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
                Contact Us
              </p>

              <h1 className="mt-5 font-display text-6xl font-semibold leading-[0.95] text-white sm:text-7xl">
                Need help choosing your fragrance?
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-8 text-[var(--theme-muted)]">
                Message us for perfume suggestions, order support, delivery
                questions, or fragrance recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <ContactCard
              icon={<Phone size={22} />}
              title="Phone"
              text="+92 300 0000000"
            />

            <ContactCard
              icon={<Mail size={22} />}
              title="Email"
              text="info@scentsbyaamir.com"
            />

            <ContactCard
              icon={<MapPin size={22} />}
              title="Location"
              text="Pakistan"
            />
          </div>

          <form className="rounded-[34px] border border-white/10 bg-black/35 p-6 shadow-glass backdrop-blur-xl lg:p-8">
            <p className="mb-6 font-luxury text-xs uppercase tracking-[0.35em] text-[var(--theme-gold)]">
              Send Message
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
            </div>

            <div className="mt-4">
              <Input placeholder="Subject" />
            </div>

            <textarea
              placeholder="Write your message..."
              rows="7"
              className="mt-4 w-full rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white outline-none transition placeholder:text-[var(--theme-muted)] focus:border-[rgba(var(--theme-gold-rgb),0.50)]"
            />

            <button type="button" className="btn-primary mt-5">
              <Send className="mr-2" size={17} />
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Input({ placeholder }) {
  return (
    <input
      placeholder={placeholder}
      className="h-14 w-full rounded-full border border-white/10 bg-white/[0.04] px-5 text-sm text-white outline-none transition placeholder:text-[var(--theme-muted)] focus:border-[rgba(var(--theme-gold-rgb),0.50)]"
    />
  );
}

function ContactCard({ icon, title, text }) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-black/35 p-6 shadow-glass backdrop-blur-xl">
      <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-full border border-[rgba(var(--theme-gold-rgb),0.30)] bg-[rgba(var(--theme-gold-rgb),0.10)] text-[var(--theme-gold)]">
        {icon}
      </div>

      <h3 className="font-display text-3xl font-semibold text-white">{title}</h3>

      <p className="mt-2 text-sm text-[var(--theme-muted)]">{text}</p>
    </div>
  );
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        noir: {
          950: "#030303",
          900: "#070707",
          850: "#0b0505",
          800: "#120707",
          700: "#1c0808",
        },
        ruby: {
          950: "#250000",
          900: "#3b0000",
          800: "#4c0000",
          700: "#6d050d",
          600: "#8c0d1a",
          500: "#c1121f",
        },
        gold: {
          500: "#D4AF37",
          400: "#E2C766",
          300: "#F2D98B",
        },
        ivory: "#F5EEE6",
        muted: "#D4C2B0",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Playfair Display", "serif"],
        body: ["Inter", "Plus Jakarta Sans", "sans-serif"],
        luxury: ["Cinzel", "serif"],
      },
      boxShadow: {
        redGlow: "0 0 80px rgba(193, 18, 31, 0.35)",
        goldGlow: "0 0 50px rgba(212, 175, 55, 0.25)",
        glass: "0 24px 100px rgba(0,0,0,0.55)",
      },
      backgroundImage: {
        "red-noir":
          "radial-gradient(circle at 75% 35%, rgba(193,18,31,.45), transparent 34%), radial-gradient(circle at 15% 15%, rgba(76,0,0,.45), transparent 30%), linear-gradient(135deg, #030303 0%, #120707 45%, #3b0000 100%)",
        "gold-line":
          "linear-gradient(90deg, transparent, rgba(212,175,55,.8), transparent)",
      },
      keyframes: {
        floatBottle: {
          "0%, 100%": { transform: "translateY(0px) rotate(-1deg)" },
          "50%": { transform: "translateY(-18px) rotate(1deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: ".45" },
          "50%": { opacity: ".85" },
        },
        drift: {
          "0%": { transform: "translateY(0) translateX(0)", opacity: ".15" },
          "50%": { transform: "translateY(-28px) translateX(18px)", opacity: ".55" },
          "100%": { transform: "translateY(0) translateX(0)", opacity: ".15" },
        },
      },
      animation: {
        floatBottle: "floatBottle 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        drift: "drift 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
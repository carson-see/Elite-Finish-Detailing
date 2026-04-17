/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./privacy.html",
    "./track.html",
  ],
  // Keep the class list that the forms and container-queries plugins emit.
  // We don't actually load the plugins here (the standalone binary doesn't bundle them)
  // but we DO keep .prose classes since privacy.html uses them.
  safelist: [
    // Classes generated from `style="..."` attributes that Tailwind can't see
    // (inline styles don't use Tailwind, so nothing to safelist from those).
    // Arbitrary values that show up in rare templates:
    "drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]",
    "shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]",
    "hover:shadow-[0_0_40px_rgba(242,202,80,0.55)]",
    "hover:shadow-[0_0_30px_rgba(242,202,80,0.5)]",
    "text-[11px]",
    "text-[10px]",
    "text-[12px]",
    "text-[13px]",
    "text-[8px]",
    "text-[6.5rem]",
    "text-[7.5rem]",
    "tracking-[0.35em]",
    "tracking-[0.22em]",
    "tracking-[0.25em]",
    "tracking-[0.2em]",
    "tracking-[0.3em]",
    "tracking-[0.15em]",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#f2ca50",
        "primary-dim": "#d4af37",
        "on-primary": "#1a1200",
        "surface": "#050914",
        "surface-low": "#0a1222",
        "surface-mid": "#0f1828",
        "surface-high": "#152138",
        "surface-glow": "#1b2a47",
        "royal": "#2b3f7a",
        "royal-light": "#4862b8",
        "royal-glow": "#6a82d6",
        "ink": "#ecefff",
        "ink-dim": "#b0b8d4",
        "outline": "#3a456b",
        "outline-dim": "#1a2542",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        "2xl": "1rem",
      },
      fontFamily: {
        headline: ["Noto Serif", "serif"],
        body: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};

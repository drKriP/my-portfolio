/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cyan: "var(--cyan)",
        "cyan-dim": "var(--cyan-dim)",
        "cyan-glow": "var(--cyan-glow)",
      },
    },
  },
  plugins: [],
};

export default config;
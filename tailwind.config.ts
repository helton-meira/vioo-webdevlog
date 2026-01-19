import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1337ec",
        "background-light": "#f6f6f8",
        "background-dark": "#101322",
        "tag-backend": "#7c3aed",
        "tag-design": "#db2777",
        "tag-ia": "#0284c7",
        "tag-infra": "#64748b", 
      },
      fontFamily: {
        "display": ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;

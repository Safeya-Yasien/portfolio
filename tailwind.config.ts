import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      container: {
        center: true,
        padding: "1.5rem",
      },
      boxShadow: {
        custom: "0 0 10px",
        "blue-glow": "0 0 10px rgba(59, 130, 246, 1)",
      },
    },
  },
  plugins: [],
};
export default config;

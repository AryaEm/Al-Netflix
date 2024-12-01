import type { Config } from "tailwindcss";

export default {
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
      },
      scrollbar: {
        DEFAULT: {
          width: 'thin',
          thumb: '#4b5563',
          track: '#d1d5db',
        }
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
} satisfies Config;

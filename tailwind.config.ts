import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "hero-background-image": "url('/img/fondo.jpg')",
      },
      colors: {
        'neutral-dark-grayish-blue': 'var(--neutral-dark-grayish-blue)',
        'neutral-white': 'var(--neutral-white)',
        'neutral-light-grayish-blue': 'var(--neutral-light-grayish-blue)',
        'primary-start': '#start-color', // Reemplaza con el color inicial de tu gradiente
        'primary-end': '#end-color', // Reemplaza con el color final de tu gradiente
      },
    },
  },
  plugins: [],
};
export default config;

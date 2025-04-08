import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF9ECD',
          light: '#FFC2E2',
          dark: '#FF7AB8',
        },
        secondary: {
          DEFAULT: '#95D5E5',
          light: '#B8E2ED',
          dark: '#72C8DD',
        },
        accent: {
          DEFAULT: '#FFE156',
          light: '#FFE873',
          dark: '#FFD939',
        },
        success: {
          DEFAULT: '#98E2C6',
          light: '#B1E8D3',
          dark: '#7FDCB9',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-fredoka)'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
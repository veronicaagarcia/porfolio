/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#f4f4f8',
          dark: '#1a1a2e',
        },
        primary: {
          light: '#6246ea',
          dark: '#4cc9f0',
        },
        secondary: {
          light: '#d1d1e9',
          dark: '#2c2c44',
        },
        accent: {
          light: '#e45858',
          dark: '#f72585',
        },
        text: {
          light: '#2b2c34',
          dark: '#e2e2e2',
        },
      },
    },
  },
  plugins: [],
};

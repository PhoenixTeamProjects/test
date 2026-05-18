/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a5f',
          light: '#2c5282',
          dark: '#152a45',
        },
        accent: {
          DEFAULT: '#f97316',
          light: '#fb923c',
        },
        muted: {
          DEFAULT: '#f1f5f9',
          light: '#f8fafc',
        },
        secondary: '#64748b',
        success: '#16a34a',
        warning: '#ca8a04',
      },
    },
  },
  plugins: [],
}

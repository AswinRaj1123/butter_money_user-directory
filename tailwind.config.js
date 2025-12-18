/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
        },
        ink: {
          DEFAULT: '#18181b',
          muted: '#71717a',
          subtle: '#a1a1aa',
        },
        accent: {
          DEFAULT: '#2563eb',
          hover: '#1d4ed8',
        },
        success: {
          DEFAULT: '#16a34a',
          hover: '#15803d',
        },
        danger: {
          DEFAULT: '#dc2626',
          light: '#fef2f2',
        },
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        'lifted': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'modal': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },
      borderRadius: {
        'xl': '0.875rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};
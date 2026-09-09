import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f7',
          100: '#dce5e8',
          200: '#b8cad4',
          300: '#94afbf',
          400: '#6f96a8',
          500: '#527c91',
          600: '#3d5f72',
          700: '#2e4756',
          800: '#1f2f3a',
          900: '#16364a',
          950: '#102b3f'
        },
        ocean: {
          50: '#f0f6f9',
          100: '#dcedf3',
          200: '#b8dbe8',
          300: '#94c9dc',
          400: '#6fb7d1',
          500: '#527c91',
          600: '#3f6478',
          700: '#2f4c5f',
          800: '#203446',
          900: '#102b3f'
        },
        cream: '#f7f5f0',
        'off-white': '#faf9f6',
        'light-blue-gray': '#dce5e8',
        gold: '#b69a6a'
      },
      fontFamily: {
        serif: ['DM Serif Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif']
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.08)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.08)'
      },
      borderRadius: {
        none: '0',
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem'
      }
    }
  },
  plugins: []
};

export default config;

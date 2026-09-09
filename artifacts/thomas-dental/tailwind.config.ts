import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f6',
          100: '#d5e0ec',
          200: '#adbed5',
          300: '#7c99bd',
          400: '#5277a3',
          500: '#385d8a',
          600: '#2a4a73',
          700: '#223c5e',
          800: '#1c324f',
          900: '#192b43',
          950: '#0b192c' // Deep ink-navy
        },
        aqua: {
          50: '#f0f9fb',
          100: '#dbf0f6',
          200: '#bce1ec',
          300: '#8ecada',
          400: '#5ab0c6',
          500: '#3e95ac',
          600: '#34788f',
          700: '#2f6276',
          800: '#2d5162',
          900: '#284452',
          950: '#172b36'
        },
        sunrise: {
          50: '#fef8ee',
          100: '#fcefd3',
          200: '#f8dba3',
          300: '#f4c36c',
          400: '#f0a43b', // Warm sunrise gold
          500: '#e88a1b',
          600: '#d96c11',
          700: '#b45211',
          800: '#8e4115',
          900: '#723614',
          950: '#401a07'
        },
        cream: '#fcfbf8',
        'off-white': '#f5f5f5',
        'light-blue-gray': '#d5e0ec',
        gold: '#f0a43b' // mapped to sunrise 400
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        serif: ['Montserrat', 'system-ui', 'sans-serif'] // replacing old serif with Montserrat to keep everything crisp and geometric
      },
      letterSpacing: {
        widest: '.25em',
        wider: '.1em',
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(11, 25, 44, 0.05)',
        sm: '0 1px 2px 0 rgba(11, 25, 44, 0.08)',
        md: '0 4px 6px -1px rgba(11, 25, 44, 0.1)',
        lg: '0 10px 15px -3px rgba(11, 25, 44, 0.1)',
        xl: '0 20px 25px -5px rgba(11, 25, 44, 0.08)'
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        md: '0.25rem',
        lg: '0.5rem',
        xl: '1rem',
        full: '9999px'
      }
    }
  },
  plugins: []
};

export default config;
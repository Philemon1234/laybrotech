import type { Config } from 'tailwindcss';

const config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#f25a05',
          'orange-hover': '#d94f04',
          dark: '#171717',
          'dark-secondary': '#242424',
          white: '#ffffff',
          page: '#fbfaf7',
          muted: '#f2f2ef',
          border: '#e5e1dc',
          success: '#16803c',
          text: {
            primary: '#18181b',
            secondary: '#5f5a56',
            inverse: '#fffaf5',
            'inverse-muted': '#e8dfd6',
          },
        },
      },
      fontFamily: {
        sans: [
          'DM Sans',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        display: ['4rem', { lineHeight: '1.04', letterSpacing: '0' }],
        h1: ['3.5rem', { lineHeight: '1.08', letterSpacing: '0' }],
        h2: ['2.75rem', { lineHeight: '1.12', letterSpacing: '0' }],
        h3: ['2.125rem', { lineHeight: '1.18', letterSpacing: '0' }],
        h4: ['1.5rem', { lineHeight: '1.25', letterSpacing: '0' }],
        'body-lg': ['1.125rem', { lineHeight: '1.72', letterSpacing: '0' }],
        body: ['1rem', { lineHeight: '1.7', letterSpacing: '0' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0' }],
        eyebrow: ['0.75rem', { lineHeight: '1.35', letterSpacing: '0' }],
        button: ['0.9375rem', { lineHeight: '1.2', letterSpacing: '0' }],
      },
      maxWidth: {
        container: '77.5rem',
        readable: '45rem',
        narrow: '37.5rem',
      },
      borderRadius: {
        control: '0.5rem',
        button: '0.75rem',
        card: '1rem',
        media: '1.125rem',
        visual: '1.5rem',
      },
      boxShadow: {
        subtle: '0 18px 45px rgb(23 23 23 / 0.08)',
        card: '0 14px 34px rgb(23 23 23 / 0.07)',
      },
      transitionDuration: {
        smooth: '200ms',
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;


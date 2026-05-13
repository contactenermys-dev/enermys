import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#111827',
          'navy-dark': '#0D1117',
          'navy-light': '#1F2937',
          orange: '#EA580C',
          'orange-bright': '#F97316',
          cream: '#FAF9F7',
          stone: '#F1EDE8',
        },
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'count-up': 'countUp 1.5s ease forwards',
        'slide-in-left': 'slideInLeft 0.6s ease forwards',
        'slide-in-right': 'slideInRight 0.6s ease forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.14)',
        navy: '0 4px 24px rgba(17, 24, 39, 0.30)',
        orange: '0 4px 20px rgba(234, 88, 12, 0.40)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0D1117 0%, #1c1917 65%, #111827 100%)',
        'cta-gradient': 'linear-gradient(135deg, #111827 0%, #0D1117 100%)',
        'orange-gradient': 'linear-gradient(135deg, #EA580C 0%, #F97316 100%)',
      },
    },
  },
  plugins: [],
}

export default config

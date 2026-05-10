import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Light mode — sage + cream + lime accent (Round 7 design v2)
        'bg-base': '#E5EDDD',
        'bg-elevated': '#D6E3CC',
        'bg-surface': '#C8D6BE',
        'bg-tinted': '#DCEDDF',
        background: '#E5EDDD',
        surface: '#D6E3CC',

        // Borders
        'border-subtle': '#B8C9AE',
        'border-default': '#A0B496',
        'border-strong': '#6F8567',
        outline: '#6F8567',

        // Text
        'text-primary': '#0F1F18',
        'text-secondary': '#41524A',
        'text-tertiary': '#7C8A82',
        'text-on-lime': '#0A1F12',

        // Brand — lime giữ DNA
        'lime-soft': '#C7F2D6',
        lime: '#52E08D',
        'lime-deep': '#2BB36A',
        forest: '#0F3D26',

        // Brand legacy aliases (backward compat with existing components)
        primary: '#52E08D',
        'on-primary': '#0A1F12',
        'primary-container': '#C7F2D6',
        'on-primary-container': '#0F3D26',

        // 4-Tier waste — softened cho light
        'tier-s': '#2BB36A',
        'tier-b': '#E8B340',
        'tier-c': '#E68A3F',
        'tier-h': '#D14B3B',

        // Status
        success: '#2BB36A',
        warning: '#E8B340',
        error: '#D14B3B',
        info: '#3B8DD1',

        // Clay pastel layer — 3D backdrop + status chip BG
        'clay-mint': '#BFE8CE',
        'clay-butter': '#F2D58F',
        'clay-peach': '#F2C2A6',
        'clay-blush': '#E8B0AB',
        'clay-sky': '#B5D2E5',
        'clay-lavender': '#C7BCE8',

        // Amber dark text — for chips on butter BG (better contrast than tier-b)
        'amber-deep': '#7A5410',
      },
      fontFamily: {
        'display-xl': ['"Plus Jakarta Sans"', 'sans-serif'],
        'display-l': ['"Plus Jakarta Sans"', 'sans-serif'],
        'display-m': ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        h1: ['"Plus Jakarta Sans"', 'sans-serif'],
        h2: ['"Plus Jakarta Sans"', 'sans-serif'],
        h3: ['"Plus Jakarta Sans"', 'sans-serif'],
        h4: ['"Plus Jakarta Sans"', 'sans-serif'],
        'body-lg': ['Inter', 'sans-serif'],
        'body-md': ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        eyebrow: ['Inter', 'sans-serif'],
        'mono-md': ['"JetBrains Mono"', 'monospace'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['96px', { lineHeight: '100px', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-l': ['72px', { lineHeight: '76px', letterSpacing: '-0.025em', fontWeight: '800' }],
        'display-m': ['56px', { lineHeight: '60px', letterSpacing: '-0.02em', fontWeight: '700' }],
        h1: ['40px', { lineHeight: '48px', letterSpacing: '-0.015em', fontWeight: '700' }],
        h2: ['32px', { lineHeight: '40px', letterSpacing: '-0.01em', fontWeight: '700' }],
        h3: ['24px', { lineHeight: '32px', fontWeight: '600' }],
        h4: ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'mono-md': ['16px', { lineHeight: '1.5', fontWeight: '500' }],
        eyebrow: ['12px', { lineHeight: '1', letterSpacing: '0.12em', fontWeight: '600' }],
      },
      spacing: {
        'space-4': '4px',
        'space-8': '8px',
        'space-12': '12px',
        'space-16': '16px',
        'space-20': '20px',
        'space-24': '24px',
        'space-28': '28px',
        'space-32': '32px',
        'space-40': '40px',
        'space-48': '48px',
        'space-64': '64px',
        'space-96': '96px',
        'space-128': '128px',
        'space-160': '160px',
        'space-240': '240px',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        full: '9999px',
      },
      boxShadow: {
        'clay-sm': '0 4px 10px -2px rgba(15,31,24,.06), 0 2px 4px -2px rgba(15,31,24,.04)',
        clay: '0 12px 28px -8px rgba(15,31,24,.10), 0 4px 8px -4px rgba(15,31,24,.06)',
        'clay-lg': '0 24px 48px -12px rgba(15,31,24,.14), 0 8px 16px -8px rgba(15,31,24,.08)',
        'clay-lime': '0 12px 28px -8px rgba(82,224,141,.35), 0 4px 8px -4px rgba(82,224,141,.20)',
        'inset-soft': 'inset 0 2px 4px rgba(255,255,255,.6), inset 0 -2px 4px rgba(15,31,24,.06)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-smooth': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;

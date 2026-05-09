import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        // Round 5 — slight brighten (~+15% lightness) while keeping forest green identity
        'bg-base': '#14201B',
        'bg-elevated': '#1B2D24',
        'bg-surface': '#22372D',
        background: '#14201B',
        surface: '#14201B',
        'surface-dim': '#14201B',
        'surface-bright': '#3E4D44',
        'surface-container-lowest': '#101A15',
        'surface-container-low': '#1F2D26',
        'surface-container': '#25342B',
        'surface-container-high': '#2F3F35',
        'surface-container-highest': '#38483E',
        'surface-variant': '#38483E',
        'inverse-surface': '#dde5db',
        'inverse-on-surface': '#2b322c',
        'surface-tint': '#51df8d',

        // Text
        'text-primary': '#F0F4F1',
        'text-secondary': '#A8B5AC',
        'text-tertiary': '#6B7C72',
        'on-surface': '#dde5db',
        'on-surface-variant': '#bccabc',
        'on-background': '#dde5db',

        // Borders — bump để giữ contrast với bg sáng hơn
        'border-subtle': '#253D31',
        'border-default': '#365142',
        outline: '#869487',
        'outline-variant': '#3d4a3f',

        // Brand & primary
        primary: '#72fda7',
        'on-primary': '#00391c',
        'primary-container': '#52e08d',
        'on-primary-container': '#006034',
        'inverse-primary': '#006d3b',
        'primary-fixed': '#71fda6',
        'primary-fixed-dim': '#51df8d',
        'on-primary-fixed': '#00210e',
        'on-primary-fixed-variant': '#00522b',

        // Secondary
        secondary: '#a3d0bb',
        'on-secondary': '#093729',
        'secondary-container': '#265140',
        'on-secondary-container': '#95c2ad',
        'secondary-fixed': '#beedd7',
        'secondary-fixed-dim': '#a3d0bb',
        'on-secondary-fixed': '#002116',
        'on-secondary-fixed-variant': '#244e3e',

        // Tertiary
        tertiary: '#ffddc2',
        'on-tertiary': '#4c2700',
        'tertiary-container': '#ffb879',
        'on-tertiary-container': '#794711',
        'tertiary-fixed': '#ffdcc1',
        'tertiary-fixed-dim': '#ffb879',
        'on-tertiary-fixed': '#2e1500',
        'on-tertiary-fixed-variant': '#6b3b05',

        // 4-Tier waste
        'tier-s': '#52E0A8',
        'tier-b': '#F4D060',
        'tier-c': '#F4A261',
        'tier-h': '#E76F51',

        // Semantic
        success: '#52E08D',
        warning: '#F4B860',
        error: '#E76F51',
        info: '#5BC0EB',
        'on-error': '#690005',
        'error-container': '#93000a',
        'on-error-container': '#ffdad6',
      },
      fontFamily: {
        'display-xl': ['"Plus Jakarta Sans"', 'sans-serif'],
        'display-l': ['"Plus Jakarta Sans"', 'sans-serif'],
        'display-m': ['"Plus Jakarta Sans"', 'sans-serif'],
        h1: ['"Plus Jakarta Sans"', 'sans-serif'],
        h2: ['"Plus Jakarta Sans"', 'sans-serif'],
        h3: ['"Plus Jakarta Sans"', 'sans-serif'],
        h4: ['"Plus Jakarta Sans"', 'sans-serif'],
        'body-lg': ['Inter', 'sans-serif'],
        'body-md': ['Inter', 'sans-serif'],
        eyebrow: ['Inter', 'sans-serif'],
        'mono-md': ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
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
        'space-24': '24px',
        'space-32': '32px',
        'space-48': '48px',
        'space-64': '64px',
        'space-96': '96px',
        'space-128': '128px',
        'space-160': '160px',
        'space-240': '240px',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-smooth': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;

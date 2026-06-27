/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ["'Poppins'", 'system-ui', 'sans-serif'],
        raleway: ["'Raleway'", 'system-ui', 'sans-serif'],
        grotesk: ["'Space Grotesk'", 'system-ui', 'sans-serif'],
      },
      colors: {
        primary:   '#4361ee',
        'primary-dark': '#2f49c7',
        secondary: '#3a0ca3',
        accent:    '#f72585',
        purple:    '#7209b7',
        bg:        '#060610',
        'bg-deep': '#050510',
        'bg-card': 'rgba(10, 10, 30, 0.75)',
        foreground:'#f8f9fa',
        'text-muted': 'rgba(248, 249, 250, 0.58)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4361ee, #3a0ca3, #7209b7)',
        'gradient-accent':  'linear-gradient(135deg, #f72585, #7209b7, #4361ee)',
        'gradient-h':       'linear-gradient(90deg, #4361ee, #7209b7, #f72585)',
        'gradient-radial':  'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-blue':   '0 0 40px rgba(67, 97, 238, 0.45)',
        'glow-pink':   '0 0 40px rgba(247, 37, 133, 0.45)',
        'glow-purple': '0 0 40px rgba(114, 9, 183, 0.45)',
        'glass':       '0 8px 32px rgba(0,0,0,0.28)',
      },
      animation: {
        'spin-slow':    'spin 12s linear infinite',
        'spin-reverse': 'spin 16s linear infinite reverse',
        'float':        'float-idle 4s ease-in-out infinite',
        'float-slow':   'float-idle 6s ease-in-out infinite',
        'drift-up':     'drift-up 8s linear infinite',
        'orb-pulse':    'orb-pulse 6s ease-in-out infinite',
        'shimmer':      'shimmer 1.5s infinite',
        'blink':        'blink 0.8s step-end infinite',
        'ring-rotate':  'rotate-ring 3s linear infinite',
      },
      keyframes: {
        'float-idle': {
          '0%, 100%': { transform: 'translateY(-8px)' },
          '50%':       { transform: 'translateY(8px)'  },
        },
        'drift-up': {
          from: { transform: 'translateY(0) scale(1)', opacity: '0.6' },
          to:   { transform: 'translateY(-120vh) scale(0.3)', opacity: '0' },
        },
        'orb-pulse': {
          '0%, 100%': { transform: 'scale(1) translateY(0)' },
          '50%':       { transform: 'scale(1.12) translateY(-20px)' },
        },
        'rotate-ring': {
          to: { transform: 'rotate(360deg)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0' },
        },
        'shimmer': {
          from: { backgroundPosition: '200% 0' },
          to:   { backgroundPosition: '-200% 0' },
        },
      },
      transitionTimingFunction: {
        'expo-out':  'cubic-bezier(0.19, 1, 0.22, 1)',
        'back-out':  'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'spring':    'cubic-bezier(0.25, 1, 0.5, 1)',
        'snap':      'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl':'1536px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      borderRadius: {
        'xl': '20px',
        '2xl': '28px',
        '3xl': '40px',
      },
      backdropBlur: {
        'xl': '24px',
        '2xl': '40px',
      },
    },
  },
  plugins: [],
};

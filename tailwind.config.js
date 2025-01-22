/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',
        secondary: '#EC4899',
        dark: {
          DEFAULT: '#0D0D0D',
          lighter: '#1A1A1A',
          darker: '#080808',
          deep: '#050505',
          deeper: '#030303',
          abyss: '#010101'
        },
        accent: {
          purple: {
            light: '#A78BFA',
            DEFAULT: '#8B5CF6',
            dark: '#7C3AED'
          },
          pink: {
            light: '#F472B6',
            DEFAULT: '#EC4899',
            dark: '#DB2777'
          },
          blue: {
            light: '#60A5FA',
            DEFAULT: '#3B82F6',
            dark: '#2563EB'
          },
          gold: {
            light: '#FBBF24',
            DEFAULT: '#F59E0B',
            dark: '#D97706'
          },
          pepe: {
            light: '#43FF64',
            DEFAULT: '#00FF00',
            dark: '#00B300'
          }
        },
        meme: {
          red: '#FF4444',
          green: '#44FF44',
          blue: '#4444FF',
          yellow: '#FFFF44',
          purple: '#9944FF',
          cyan: '#44FFFF',
          orange: '#FF8844',
          pink: '#FF44FF'
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 1s linear infinite',
        'shake': 'shake 0.5s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-5px, 2px)' },
          '66%': { transform: 'translate(5px, -2px)' },
        },
        shake: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-shine': 'linear-gradient(45deg, transparent 25%, rgba(139, 92, 246, 0.1) 50%, transparent 75%)',
        'gradient-glow': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gradient-vignette': 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
        'grid-pattern': `
          linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
        `,
        'noise-pattern': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        'degen-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      fontFamily: {
        'pixel': ['Press Start 2P', 'cursive'],
        'meme': ['Impact', 'Arial Black', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f4ff',
          100: '#e0e9fe',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          900: '#1e1b4b',
        },
        glow: {
          cyan: '#06b6d4',
          violet: '#8b5cf6',
          pink: '#ec4899',
          amber: '#f59e0b',
          emerald: '#10b981'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      animation: {
        'pulse-fast': 'pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%': { boxShadow: '0 0 15px rgba(99, 102, 241, 0.2), 0 0 30px rgba(139, 92, 246, 0.1)' },
          '100%': { boxShadow: '0 0 25px rgba(99, 102, 241, 0.5), 0 0 50px rgba(139, 92, 246, 0.3)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      }
    },
  },
  plugins: [],
}

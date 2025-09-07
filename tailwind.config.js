module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E6FFFE", // teal-50
          100: "#CCFFFD", // teal-100
          200: "#99FFFB", // teal-200
          300: "#66FFF9", // teal-300
          400: "#00CED1", // teal-400
          500: "#00B8BB", // teal-500
          600: "#00A3A6", // teal-600
          700: "#008E91", // teal-700
          800: "#007A7C", // teal-800
          900: "#006567", // teal-900
          DEFAULT: "#00CED1", // teal-400
        },
        secondary: {
          50: "#F0F9F9", // teal-50
          100: "#E1F3F3", // teal-100
          200: "#C3E7E7", // teal-200
          300: "#A5DBDB", // teal-300
          400: "#87CFCF", // teal-400
          500: "#69C3C3", // teal-500
          600: "#4A9B9B", // teal-600
          700: "#3A7A7A", // teal-700
          800: "#2A5959", // teal-800
          900: "#1A3838", // teal-900
          DEFAULT: "#4A9B9B", // teal-600
        },
        accent: {
          50: "#E6FFFE", // cyan-50
          100: "#CCFFFD", // cyan-100
          200: "#99FFFB", // cyan-200
          300: "#66FFF9", // cyan-300
          400: "#00E5E8", // cyan-400
          500: "#00CCCE", // cyan-500
          600: "#00B3B5", // cyan-600
          700: "#009A9C", // cyan-700
          800: "#008183", // cyan-800
          900: "#00686A", // cyan-900
          DEFAULT: "#00E5E8", // cyan-400
        },
        background: {
          50: "#F9F9F9", // gray-50
          100: "#F3F3F3", // gray-100
          200: "#E7E7E7", // gray-200
          300: "#DBDBDB", // gray-300
          400: "#CFCFCF", // gray-400
          500: "#C3C3C3", // gray-500
          600: "#999999", // gray-600
          700: "#666666", // gray-700
          800: "#333333", // gray-800
          900: "#1A1A1A", // gray-900
          DEFAULT: "#1A1A1A", // gray-900
        },
        surface: {
          50: "#FAFAFA", // gray-50
          100: "#F5F5F5", // gray-100
          200: "#EEEEEE", // gray-200
          300: "#E0E0E0", // gray-300
          400: "#BDBDBD", // gray-400
          500: "#9E9E9E", // gray-500
          600: "#757575", // gray-600
          700: "#616161", // gray-700
          800: "#2D2D2D", // gray-800
          900: "#212121", // gray-900
          DEFAULT: "#2D2D2D", // gray-800
        },
        text: {
          primary: "#FFFFFF", // white
          secondary: "#E0E0E0", // gray-300
          tertiary: "#BDBDBD", // gray-400
          disabled: "#757575", // gray-600
        },
        success: {
          50: "#E8F5F0", // green-50
          100: "#D1EBE1", // green-100
          200: "#A3D7C3", // green-200
          300: "#75C3A5", // green-300
          400: "#47AF87", // green-400
          500: "#00C896", // green-500
          600: "#00B085", // green-600
          700: "#009874", // green-700
          800: "#008063", // green-800
          900: "#006852", // green-900
          DEFAULT: "#00C896", // green-500
        },
        warning: {
          50: "#FFF8E1", // amber-50
          100: "#FFECB3", // amber-100
          200: "#FFE082", // amber-200
          300: "#FFD54F", // amber-300
          400: "#FFB020", // amber-400
          500: "#FF9800", // amber-500
          600: "#F57C00", // amber-600
          700: "#E65100", // amber-700
          800: "#BF360C", // amber-800
          900: "#E65100", // amber-900
          DEFAULT: "#FFB020", // amber-400
        },
        error: {
          50: "#FFEBEE", // red-50
          100: "#FFCDD2", // red-100
          200: "#EF9A9A", // red-200
          300: "#E57373", // red-300
          400: "#FF6B6B", // red-400
          500: "#F44336", // red-500
          600: "#E53935", // red-600
          700: "#D32F2F", // red-700
          800: "#C62828", // red-800
          900: "#B71C1C", // red-900
          DEFAULT: "#FF6B6B", // red-400
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'elevation': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'none': 'none',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '9999px',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      animation: {
        'pulse-teal': 'pulse-teal 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-teal': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.5',
          },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderColor: {
        'subtle': 'rgba(224, 224, 224, 0.1)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.transition-smooth': {
          transition: 'all 200ms ease-out',
        },
        '.transition-fast': {
          transition: 'all 150ms ease-out',
        },
        '.card-elevation': {
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        },
        '.hover-lift:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        },
        '.focus-ring:focus': {
          outline: '2px solid #00CED1',
          outlineOffset: '2px',
        },
        '.border-subtle': {
          borderColor: 'rgba(224, 224, 224, 0.1)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
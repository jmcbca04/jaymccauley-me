/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay-1': 'float 6s ease-in-out infinite 2s',
        'float-delay-2': 'float 6s ease-in-out infinite 4s',
        'float-delay-3': 'float 6s ease-in-out infinite 6s',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [{
      light: {
        'primary': '#641ae6',
        'primary-content': '#ffffff',
        'secondary': '#d926a9',
        'accent': '#1fb2a6',
        'neutral': '#2a323c',
        'base-100': '#ffffff',
        'base-200': '#f8f9fa',
        'base-300': '#f0f0f0',
        'base-content': '#1f2937',
      },
      dark: {
        'primary': '#641ae6',
        'primary-content': '#ffffff',
        'secondary': '#d926a9',
        'accent': '#1fb2a6',
        'neutral': '#2a323c',
        'base-100': '#1d232a',
        'base-200': '#191e24',
        'base-300': '#15191e',
        'base-content': '#ffffff',
      }
    }],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
  },
} 

// tailwind.config.js
import daisyui from 'daisyui'

export default {
  content: [
    "./front/src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      translate: {
        '101': '101%',
      },
      keyframes: {
        marquee: {
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite'
      },
      colors: {
        brand: {
          DEFAULT: "#ffffff",
          secundary: "#dec4b1", // tu color secundario
          especial: "#f0e1c5",
        },
        background: {
          DEFAULT: "#ff3333" // corregido
        }
      }
    },
  },
  plugins: [daisyui],
}


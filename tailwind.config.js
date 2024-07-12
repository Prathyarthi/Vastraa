/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B1B1E", 
        gradient: "#AB2985"
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fontFamily: {
          madeTommy: ['MADE TOMMY', 'sans-serif']
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
      container: {
        center: true
      }
    },
    plugins: [],
  }
}

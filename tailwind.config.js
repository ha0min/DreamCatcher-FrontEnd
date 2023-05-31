/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {keyframes: {
        'move-light': {
          '0%': {
            rotate: '0deg',
            transform: 'translate(0)',
            background: 'radial-gradient(white, transparent)',
          },
          '30%': {
            transform: 'translate(-70%, -40%)',

            background: 'conic-gradient(#87ceeb, #0000ff)',
          },
          '50%': {
            rotate: '200deg',
            transform: 'translate(-50%, 24%)',

            background: 'conic-gradient(#87ceeb, #0000ff)',
          },
          '75%':{
            transform: 'translate(10%, 10%)',

            background: 'radial-gradient(white, transparent)',
          },
          '100%': {
            rotate: '0deg',
            transform: 'translate(0)',
            background: 'radial-gradient(white, transparent)',
          },
        },
        'move-dark': {
          '0%': {
            rotate: '0deg',
            transform: 'translate(0)',
            background: 'linear-gradient(to bottom right, transparent, rgba(0, 0, 139, 0.1))',
          },
          '30%': {
            rotate: '160deg',
            transform: 'translate(30vw, 5vh)',
            background: 'linear-gradient(to bottom right, #013c64, #0141ff)',
          },
          '50%': {
            rotate: '320deg',
            transform: 'translate(-40vw, -10vh)',
            background: 'linear-gradient(to bottom right, transparent, rgba(0, 0, 139, 0.1))',
          },
          '75%':{
            rotate: '120deg',
            transform: 'translate(-50vw, 4vh)',
            background: 'linear-gradient(to bottom right, #013c64, #0141ff)',
          },
          '100%': {
            rotate: '0deg',
            transform: 'translate(0)',
            background: 'linear-gradient(to bottom right, transparent, rgba(0, 0, 139, 0.1))',
          },
        },
      },
      animation: {
        'move-light': 'move-light 60s infinite',
        'move-dark': 'move-dark 60s infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

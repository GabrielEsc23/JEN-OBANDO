/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        espresso: '#1A2B3C', // Deep marine slate for maximum legibility and elegance
        arena: '#F0F5F9',    // Soft breeze tint
        crema: '#FFFFFF',    // Pure crisp white
        nube: '#F8FAFC',     // Cloud white
        hielo: '#EFF6FB',    // Ice blue tint
        borde: '#E2EAF1',    // Clean modern border
        sombra: '#D1DFEB',   // Soft cool border and shadow
        eucalipto: {
          DEFAULT: '#3B82A6',
          light: '#6BA7C7',
          dark: '#1F5E80',
        },
        celeste: {
          DEFAULT: '#3B82A6',
          light: '#E3EFF6',
          dark: '#1F5E80',
          soft: '#F0F6FA',
          subtle: '#D3E7F3',
        },
        salvia: {
          DEFAULT: '#3D8B7A',
          light: '#E6F4F0',
          dark: '#235E51',
        },
        lavanda: {
          DEFAULT: '#6B66A6',
          light: '#EFEBFA',
          dark: '#443F7A',
        },
        blush: {
          DEFAULT: '#D46B55',
          light: '#FCEEEA',
          dark: '#943825',
        },
        coral: {
          DEFAULT: '#D46B55',
          light: '#FCEEEA',
          dark: '#943825',
        },
        beige: {
          DEFAULT: '#3888A6',
          light: '#E8F3F8',
          dark: '#1E5E75',
        },
        oliva: {
          DEFAULT: '#4E9177',
          light: '#EBF5F0',
          dark: '#2B634E',
        },
        arcilla: {
          DEFAULT: '#B88636',
          light: '#FAF4E8',
          dark: '#755018',
        },
        ambar: {
          DEFAULT: '#B88636',
          light: '#FAF4E8',
          dark: '#755018',
        },
        lino: {
          DEFAULT: '#527A99',
          light: '#E4EEF5',
          dark: '#2E4C63',
        },
        musgo: {
          DEFAULT: '#264E5E',
          light: '#3C6F82',
          dark: '#16333E',
        },
      },
      fontFamily: {
        sans: ['"Public Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

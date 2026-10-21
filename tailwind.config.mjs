/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E7',
        ivory: '#FBF8F2',
        forest: {
          DEFAULT: '#172A21',
          light: '#22382D',
          dark: '#0F1C16',
        },
        moss: {
          DEFAULT: '#263B2D',
          light: '#344E3C',
          dark: '#1B2A20',
        },
        gold: {
          DEFAULT: '#B89A6A',
          light: '#CEB489',
          dark: '#967848',
        },
        earth: {
          DEFAULT: '#956B4E',
          light: '#AC8264',
          dark: '#7A5237',
        },
        charcoal: '#292923',
        muted: '#77746C',
        white: '#FFFFFF',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'organic': '38% 62% 55% 45% / 42% 38% 62% 58%',
        'organic-arch': '120px 120px 20px 20px',
      },
      boxShadow: {
        card: '0 12px 32px rgba(31, 38, 30, 0.06)',
        floating: '0 18px 50px rgba(20, 30, 23, 0.12)',
      },
    },
  },
  plugins: [],
};

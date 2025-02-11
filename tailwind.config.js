/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        red: {
          50: '#fef6f5',
          100: '#fee8e7',
          200: '#fcccca',
          300: '#faaba8',
          400: '#f77c78',
          500: '#f2241d',
          600: '#de140d',
          700: '#c1110b',
          800: '#a40f09',
          900: '#740a07',
        },
        green: {
          50: '#eff8ec',
          100: '#dff2d9',
          200: '#bce3af',
          300: '#90d17a',
          400: '#5db63f',
          500: '#499032',
          600: '#42812d',
          700: '#3a7227',
          800: '#305f21',
          900: '#214016',
        },
        yellow: {
          50: '#fffcf0',
          100: '#fff7d6',
          200: '#fff1b8',
          300: '#fee78a',
          400: '#fedc52',
          500: '#fed11a',
          600: '#eabb01',
          700: '#d0a701',
          800: '#ad8a01',
          900: '#7a6201',
        },
        gray: {
          0: '#ffffff',
          50: '#fcfcfc',
          100: '#f5f5f5',
          200: '#f0f0f0',
          300: '#e5e5e5',
          400: '#d1d1d1',
          500: '#c1c1c1',
          600: '#aeaeae',
          700: '#9d9d9d',
          800: '#8d8d8d',
          900: '#7f7f7f',
        },
        black: {
          0: '#000000',
          50: '#0a0a0a',
          100: '#141414',
          200: '#1f1f1f',
          300: '#292929',
          400: '#333333',
          500: '#3d3d3d',
          600: '#474747',
          700: '#525252',
          800: '#5c5c5c',
          900: '#757575',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['2.6875rem', '3.5rem'],
        'display-lg': ['2rem', '2.5rem'],
        'display-md': ['1.5rem', '2rem'],
        'display-sm': ['1.375rem', '1.75rem'],
        'body-lg': ['1rem', '1.25rem'],
        'body-md': ['0.8125rem', '1.125rem'],
        'body-sm': ['0.6875rem', '1rem'],
      },
      spacing: {
        0: '0rem',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        13: '3.5rem',
        14: '4rem',
        15: '5rem',
        16: '6rem',
        17: '7rem',
        18: '8rem',
        19: '9rem',
        20: '10rem',
      },
      borderRadius: {
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '624.9375rem',
        none: '0rem',
      },
      borderWidth: {
        DEFAULT: '0.0625rem',
        2: '0.125rem',
        4: '0.25rem',
        8: '0.5rem',
        0: '0rem',
      },
    },
  },
  plugins: [],
}
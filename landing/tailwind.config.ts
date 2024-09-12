import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      screens: {
        xs: '325px',
        xsm: '390px',
        sm: '480px',
        csm: '599px',
        md: '768px',
        cmd: '914px',
        lg: '976px',
        clg: '1182px',
        xl: '1280px',
        '2xl': '2000px',
        '3xl': '2900px',
      },
      colors: {
        gold: "#D4AF37",
        black: "#0E0B01",
        night: "#161513",
        sienna: "#D57A66",
        white: "#EFE3BD",
        khaki: "#ACA386",
        green: {
          1: '#50C878',
        },
      },
    },
  },
  plugins: [],
};
export default config;

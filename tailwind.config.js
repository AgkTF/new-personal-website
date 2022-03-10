const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        spaceG: "'SpaceGrotesk'",
        racing: "'Racing'",
      },
      colors: {
        highlight: '#3da9fc',
        reddish: '#ef4565',
        background: {
          light: '#f5f5f7',
          dark: '#232946',
        },
        paragraph: {
          light: '#5f6c7b',
          dark: '#b8c1ec',
        },
        tertiary: {
          light: '#ef4565',
          dark: '#eebbc3',
        },
        code: {
          light: '#00939b',
          dark: '#f9f871',
        },
        headline: {
          light: '#094067',
          dark: '#fffffe',
        },
        cardBg: {
          light: '#fffffe',
          dark: '#2d3560',
        },
        link: {
          light: '#3da9fc',
          dark: '#eebbc3',
        },
        navBg: {
          light: '#f5f5f796',
          dark: '#23294696',
        },
      },
      backgroundImage: {
        bgMain:
          "url('https://images.unsplash.com/photo-1614853316778-2e9d96a644e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
      },
    },
  },
  plugins: [],
};

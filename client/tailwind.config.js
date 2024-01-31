/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        "noto-serif": ["Noto Serif", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        headline1: "88px",
        headline2: "68px",
        headline3: "44px",
        headline4: "28px",
        headline5: "20px",
        body1: "16px",
        body2: "14px",
        body3: "12px",
      },
      fontWeight: {
        fontWeight4: "400",
        fontWeight5: "500",
        fontWeight6: "600",
      },
      colors: {
        utilWhite: "#FFF",
        utilBlack: "#000",
        utilRed: "#B61515",
        utilBG: "#F7F7FB",
        green100: "#F1F5F3",
        green200: "#E6EBE9",
        green300: "#D5DFDA",
        green400: "#ABC0B4",
        green500: "#81A08F",
        green600: "#5D7B6A",
        green700: "#465C50",
        green800: "#2F3E35",
        green900: "#171F1B",
        orange100: "#FAEDE8",
        orange200: "#F9DACE",
        orange300: "#F3B59C",
        orange400: "#ED906B",
        orange500: "#E76B39",
        orange600: "#C14817",
        orange700: "#803010",
        orange800: "#631F04",
        orange900: "#401808",
        gray100: "#F6F7FC",
        gray200: "#F1F2F6",
        gray300: "#E4E6ED",
        gray400: "#D6D9E4",
        gray500: "#C8CCDB",
        gray600: "#9AA1B9",
        gray700: "#646D89",
        gray800: "#424C6B",
        gray900: "#2A2E3F",
      },
      padding: {
        12: "120px",
        15: "150px",
        30: "309px",
      },
      margin: {
        60: "60px",
      },
    },
  },
  plugins: [require("daisyui")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-700": "#465c50",
        "utility-bg": "#f7f7fb",
        "orange-500": "#e76b39",
        "gray-700": "#646d89",
        "orange-600": "#c14817",
        chocolate: "#db6130",
        "utility-white": "#fff",
        "gray-400": "#d6d9e4",
        lightslategray: "#9aa1b9",
        "gray-900": "#2a2e3f",
        "green-800": "#2f3e35",
        "gray-300": "#e4e6ed",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        body1: "Inter",
        headline2: "'Noto Serif'",
      },
    },
    fontSize: {
      base: "16px",
      "49xl": "68px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

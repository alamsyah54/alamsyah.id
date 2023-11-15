/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  css: {
    minimize: false,
  },
    theme: {
        extend: {
            colors: {
                dark: {
                    100: "#606060",
                    200: "#535353",
                    300: "#434343",
                    400: "#383838",
                    500: "#2c2c2c",
                    600: "#1f1f1f",
                    700: "#181818",
                    800: "#0d0d0d",
                },
            },
            fontFamily: {
                conthrax: "'Conthrax', serif",
                opensans: "Open Sans', sans-seri",
            },
        },
    },
    plugins: [],
};

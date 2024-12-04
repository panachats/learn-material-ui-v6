/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [
    require("./src/mui-treasury/tailwind-preset/material-ui-tailwind-preset"),
  ],
}


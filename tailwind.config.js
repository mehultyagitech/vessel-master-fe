import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      borderRadius: {
        'lg': '1.5rem',  // Custom rounded-lg value of 1.5rem
      },
    },
  },
  plugins: [
    daisyui,
    require('flowbite/plugin')
  ],
  daisyui: {
    themes: ["winter", "dracula"],
  },
};

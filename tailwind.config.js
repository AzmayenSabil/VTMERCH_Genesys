/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rejection: ['"Act of Rejection"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

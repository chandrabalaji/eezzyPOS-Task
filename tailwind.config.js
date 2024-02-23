/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{.jsx,.js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "lite-black": "#374151",
        "dark-black": "#1F2937",
        "lite-green": "#10B981",
        "dark-orange": "#F59E0B",
      },
      flexGrow: {
        2: "2",
        3: "3",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

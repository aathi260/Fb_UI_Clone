module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        18: "4.5rem",
        25: "41.5rem",
        26: "40rem",
        23: "36rem",
        49: "47.7rem",
        51: "52rem",
        82: "21rem",
        83: "21.5rem",
        100: "30rem",
        78: "78%",
        76: "75.5%",
        30: "7.5rem",
        45: "11.5rem",
        64: "64%",
        79: "79.5%",
        97: "97.5%",
        102: "102%",
        120: "123.5%",
      },
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      cgray: "#f0f2f5",
    }),
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
};

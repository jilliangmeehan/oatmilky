module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
    fontFamily: {
      serif: ['Times New Roman', 'serif'],
      mono: ['Merriweather', 'serif']
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};

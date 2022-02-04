module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    fontFamily: {
      sans: ["Helvetica Neue", "sans-serif"]
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

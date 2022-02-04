export default {
  ssr: false,
  target: "static",
  layout: "default",
  head: {
    title: "Portfolio",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/image0.jpeg" }]
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },
  components: true,
  css: ["~/assets/css/main.css"],
  buildModules: ["@nuxt/typescript-build", "@nuxt/postcss8"]
}

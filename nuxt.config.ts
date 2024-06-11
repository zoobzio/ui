import unocss from "./uno.config";
import untheme from "./untheme.config";

export default defineNuxtConfig({
  srcDir: "src/",
  css: ["@unocss/reset/tailwind.css"],
  modules: [
    "@pinia/nuxt",
    "@unocss/nuxt",
    "@untheme/nuxt",
    "@vueuse/nuxt",
    "@nuxt/eslint",
  ],
  unocss,
  untheme,
});

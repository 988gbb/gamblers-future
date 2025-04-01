import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";
import Dotenv from "dotenv-webpack";

export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "."),
  },

  css: ["~/assets/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: ["~/plugins/fontawesome.js"],

  compatibilityDate: "2025-04-01",
});

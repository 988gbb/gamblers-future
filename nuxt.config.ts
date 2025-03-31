import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";
import Dotenv from "dotenv-webpack";

export default defineNuxtConfig({
  build: {
    extend(config) {
      config.plugins = config.plugins || [];
      config.plugins.push(
        new Dotenv({
          systemvars: true, // Enable system environment variables
        })
      );
    },
  },

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
  compatibilityDate: "2025-03-31",

  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
  },
});

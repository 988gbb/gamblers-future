import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: process.env.NODE_ENV !== "production" },
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
  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI, // MongoDB connection string
    JWT_SECRET: process.env.JWT_SECRET, // JWT secret
  },
});

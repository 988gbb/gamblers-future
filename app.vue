<template>
  <Navigation />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Footer />
</template>

<script setup>
useHead({
  title: "Gambler's Future - Your Trusted Platform for Gambling",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      name: "description",
      content: "Your trusted platform for gambling",
    },
    {
      name: "theme-color",
      content: "#f33535", // Your brand red color
    },

    // Open Graph meta tags
    {
      property: "og:title",
      content: "Gambler's Future - Your Trusted Platform for Gambling",
    },
    {
      property: "og:description",
      content: "Your trusted platform for gambling",
    },
    {
      property: "og:image",
      content: "https://yourdomain.com/images/gfuture-icon.png",
    },
    { property: "og:url", content: "https://yourdomain.com" },
    { property: "og:type", content: "website" },

    // Twitter Card meta tags
    { name: "twitter:card", content: "summary" },
    {
      name: "twitter:title",
      content: "Gambler's Future - Your Trusted Platform for Gambling",
    },
    {
      name: "twitter:description",
      content: "Your trusted platform for gambling",
    },
    {
      name: "twitter:image",
      content: "https://yourdomain.com/images/gfuture-icon.png",
    },
  ],
  link: [
    // Default favicon
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

    // PNG favicon for modern browsers
    { rel: "icon", type: "image/png", href: "/images/gfuture-icon.png" },

    // Apple touch icon
    { rel: "apple-touch-icon", href: "/images/gfuture-icon.png" },

    // Mask icon for Safari pinned tabs
    { rel: "mask-icon", href: "/images/gfuture-icon.png", color: "#f33535" },
  ],
  manifest: {
    name: "Gambler's Future",
    short_name: "Gambler's Future",
    icons: [
      {
        src: "/images/gfuture-icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/gfuture-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#f33535",
    background_color: "#130f1d",
    display: "standalone",
  },
});
</script>
<style>
body {
  background-color: #3c3c3c;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  padding: 0;
}
</style>

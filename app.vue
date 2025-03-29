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

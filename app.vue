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
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/images/gfuture-icon.png",
    },
    {
      rel: "mask-icon",
      href: "/images/gfuture-icon.png",
      color: "#f33535", // This will color the pinned tab in Safari
    },
  ],
});
</script>

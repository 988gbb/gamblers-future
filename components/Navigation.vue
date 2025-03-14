<template>
  <nav class="bg-blue-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-lg font-bold"
        >Gamblers Future</router-link
      >

      <button @click="toggleMenu" class="md:hidden block">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <ul
        :class="['md:flex space-x-6', { hidden: !isOpen, block: isOpen }]"
        class="md:block md:space-x-6 md:ml-auto"
      >
        <li v-for="link in navLinks" :key="link.path">
          <router-link :to="link.path" class="hover:underline">{{
            link.name
          }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const navLinks = ref([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
]);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
nav {
  transition: all 0.3s ease-in-out;
}
</style>

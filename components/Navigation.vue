<template>
  <nav class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo/Home link -->
      <NuxtLink to="/" class="text-xl font-bold"> Gambler's Future </NuxtLink>

      <!-- Mobile menu button -->
      <button @click="toggleMobileMenu" class="md:hidden p-2">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            v-if="!isMobileMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Navigation Links -->
      <div
        :class="[
          'md:flex md:items-center md:space-x-4',
          isMobileMenuOpen
            ? 'absolute top-16 left-0 right-0 flex flex-col bg-gray-800 p-4 space-y-4'
            : 'hidden',
        ]"
      >
        <!-- Always visible links -->
        <NuxtLink to="/" class="hover:text-gray-300"> Home </NuxtLink>

        <!-- Links for authenticated users -->
        <template v-if="isAuthenticated">
          <NuxtLink to="/dashboard" class="hover:text-gray-300">
            Dashboard
          </NuxtLink>
          <NuxtLink to="/profile" class="hover:text-gray-300">
            Profile
          </NuxtLink>
          <button @click="handleLogout" class="hover:text-gray-300 text-left">
            Logout
          </button>
        </template>

        <!-- Links for non-authenticated users -->
        <template v-else>
          <NuxtLink to="/login" class="hover:text-gray-300"> Login </NuxtLink>
          <NuxtLink
            to="/signup"
            class="py-2 px-4 bg-blue-500 rounded hover:bg-blue-600 inline-block"
          >
            Sign Up
          </NuxtLink>
        </template>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

watch(
  () => useRoute().fullPath,
  () => {
    isMobileMenuOpen.value = false;
  }
);
</script>

<style scoped>
nav {
  background-color: #1a202c;
  color: white;
  position: relative;
}
</style>

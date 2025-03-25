<template>
  <nav class="navigation">
    <div class="nav-container">
      <NuxtLink to="/" class="nav-logo">
        <img
          src="/images/gfuture-red.png"
          alt="Gambler's Future"
          class="logo-image"
        />
      </NuxtLink>

      <!-- Hamburger Button -->
      <button
        class="hamburger"
        @click="isMenuOpen = !isMenuOpen"
        :class="{ 'is-active': isMenuOpen }"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Navigation Links -->
      <div class="nav-links" :class="{ 'is-open': isMenuOpen }">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="nav-item"
          @click="isMenuOpen = false"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Predictions", path: "/predictions" },
  { name: "Statistics", path: "/statistics" },
  { name: "About", path: "/about" },
];
</script>

<style scoped>
.navigation {
  width: 100%;
  /* Darker background with slight gradient for depth */
  background: linear-gradient(180deg, #1a1721 0%, #29252c 100%);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2),
    0 2px 4px -1px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 50;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 70px;
}

.nav-logo {
  display: flex;
  align-items: center;
}

.logo-image {
  height: 45px;
  width: auto;
  object-fit: contain;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-item {
  text-decoration: none;
  /* Brighter text for better readability */
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
  transition: all 0.3s ease;
}

.nav-item:hover {
  color: #dd4544;
}

.nav-item::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #dd4544;
  transition: width 0.3s ease;
}

.nav-item:hover::after {
  width: 100%;
}

/* Active link styling */
.router-link-active {
  /* Same bright red as hover */
  color: #dd4544;
  /* Add glow effect for active items */
  text-shadow: 0 0 10px rgba(255, 69, 69, 0.3);
}

.router-link-active::after {
  width: 100%;
  /* Add subtle glow to the underline */
  box-shadow: 0 0 8px rgba(255, 69, 69, 0.4);
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-links {
    gap: 1rem;
  }

  .nav-item {
    font-size: 0.9rem;
  }

  .logo-image {
    height: 35px;
  }
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
}

.hamburger span {
  width: 2rem;
  height: 0.25rem;
  background: #dd4544;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 70px;
    right: 0;
    width: 100%;
    height: calc(100vh - 70px);
    background: linear-gradient(180deg, #1a1721 0%, #29252c 100%);
    flex-direction: column;
    padding: 2rem;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    gap: 2rem;
  }

  .nav-links.is-open {
    transform: translateX(0);
  }

  .nav-item {
    font-size: 1.2rem;
    text-align: center;
  }

  .hamburger.is-active span:first-child {
    transform: rotate(45deg);
    top: 6px;
  }

  .hamburger.is-active span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.is-active span:nth-child(3) {
    transform: rotate(-45deg);
    bottom: 6px;
  }
}
</style>

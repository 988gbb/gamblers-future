<template>
  <nav class="navigation" :class="{ scrolled: isScrolled, hidden: isHidden }">
    <div class="nav-container">
      <!-- Logo -->
      <NuxtLink to="/" class="nav-logo">
        <img
          src="/images/gfuture-red.png"
          alt="Gambler's Future"
          class="logo-image"
        />
      </NuxtLink>

      <!-- Main Navigation Links (Desktop) -->
      <div class="nav-links" :class="{ 'is-open': isMenuOpen }">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="nav-item"
          @click="isMenuOpen = false"
          v-slot="{ isActive }"
        >
          <span class="nav-text">{{ link.name }}</span>
          <span class="nav-indicator" :class="{ active: isActive }"></span>
        </NuxtLink>
      </div>

      <!-- Right side actions -->
      <div class="nav-actions">
        <!-- Sign In Button -->
        <NuxtLink to="/login" class="login-btn">
          <i class="fas fa-user"></i>
          <span>Sign In</span>
        </NuxtLink>

        <!-- Mobile Menu Button -->
        <button
          class="hamburger"
          @click="isMenuOpen = !isMenuOpen"
          :class="{ 'is-active': isMenuOpen }"
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div
      class="menu-overlay"
      :class="{ 'is-visible': isMenuOpen }"
      @click="isMenuOpen = false"
    ></div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Navigation state
const isMenuOpen = ref(false);
const isScrolled = ref(false);
const isHidden = ref(false);
let lastScrollY = 0;

// Navigation links
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Casinos", path: "/casinos" },
  { name: "Bonuses", path: "/bonuses" },
  { name: "Predictions", path: "/predictions" },
  { name: "Statistics", path: "/statistics" },
  { name: "About", path: "/about" },
];

// Handle scroll to hide/show navigation
const handleScroll = () => {
  const currentScrollY = window.scrollY;

  // Update scrolled state (for appearance)
  isScrolled.value = currentScrollY > 50;

  // Hide navigation when scrolling down, show when scrolling up
  if (currentScrollY > lastScrollY && currentScrollY > 200) {
    isHidden.value = true;
  } else {
    isHidden.value = false;
  }

  lastScrollY = currentScrollY;
};

// Set up event listeners
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.navigation {
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(26, 23, 33, 0.95) 0%,
    rgba(41, 37, 44, 0.95) 100%
  );
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  transition: transform 0.3s ease, background 0.3s ease;
}

/* Scroll state styles */
.navigation.scrolled {
  background: rgba(26, 23, 33, 0.98);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

/* Hide navigation when scrolling down */
.navigation.hidden {
  transform: translateY(-100%);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  height: 80px;
}

.nav-logo {
  display: flex;
  align-items: center;
}

.logo-image {
  height: 40px;
  width: auto;
}

/* Main Navigation Links */
.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-right: auto;
  margin-left: 2rem;
}

.nav-item {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-weight: 500;
  padding: 0.75rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-indicator {
  position: absolute;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: #dd4544;
  transition: width 0.3s ease;
  border-radius: 2px;
}

.nav-indicator.active {
  width: 100%;
  box-shadow: 0 0 8px rgba(221, 69, 68, 0.5);
}

.nav-item:hover {
  color: #dd4544;
}

.nav-item:hover .nav-indicator {
  width: 100%;
}

/* Right side actions */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Login button */
.login-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(221, 69, 68, 0.1);
  border: 1px solid rgba(221, 69, 68, 0.3);
  border-radius: 30px;
  color: #dd4544;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.login-btn:hover {
  background: rgba(221, 69, 68, 0.2);
  transform: translateY(-2px);
}

/* Mobile menu button */
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

/* Mobile menu overlay */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 40;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.menu-overlay.is-visible {
  opacity: 1;
  pointer-events: auto;
}

/* Media queries for responsive design */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 80px;
    right: 0;
    width: 80%;
    max-width: 350px;
    height: calc(100vh - 80px);
    background: rgba(26, 23, 33, 0.98);
    flex-direction: column;
    padding: 2rem;
    transform: translateX(100%);
    transition: transform 0.3s cubic-bezier(0.77, 0.2, 0.05, 1);
    gap: 2rem;
    align-items: flex-start;
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
    margin-left: 0;
  }

  .nav-links.is-open {
    transform: translateX(0);
  }

  .nav-item {
    font-size: 1.2rem;
    width: 100%;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    align-items: flex-start;
  }

  .nav-indicator {
    left: 0;
  }

  .nav-indicator.active {
    width: 30px !important;
  }

  .hamburger.is-active span:first-child {
    transform: rotate(45deg) translate(4px, 4px);
  }

  .hamburger.is-active span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.is-active span:nth-child(3) {
    transform: rotate(-45deg) translate(4px, -4px);
  }

  .login-btn {
    display: none;
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 0 1rem;
    height: 70px;
  }

  .logo-image {
    height: 35px;
  }

  .nav-links {
    top: 70px;
    width: 100%;
    max-width: none;
  }
}
</style>

<template>
  <nav class="navigation" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <NuxtLink to="/" class="nav-logo">
        <img
          :src="
            isScrolled ? '/images/gfuture-red.png' : '/images/gfuture-red.png'
          "
          alt="Gambler's Future"
          class="logo-image"
        />
      </NuxtLink>

      <!-- Main Navigation Links -->
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
        <button class="search-toggle" @click="toggleSearch">
          <i class="fas fa-search"></i>
        </button>
        <NuxtLink to="/login" class="login-btn">
          <i class="fas fa-user"></i>
          <span>Sign In</span>
        </NuxtLink>

        <!-- Hamburger Button -->
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

    <!-- Expandable Search Bar -->
    <div class="search-bar" :class="{ 'is-open': isSearchOpen }">
      <div class="search-container">
        <input
          type="text"
          placeholder="Search for casinos, bonuses, games..."
          v-model="searchQuery"
          @keyup.enter="performSearch"
          ref="searchInput"
        />
        <button class="search-button" @click="performSearch">
          <i class="fas fa-search"></i>
        </button>
        <button class="close-search" @click="toggleSearch">
          <i class="fas fa-times"></i>
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

const isMenuOpen = ref(false);
const isSearchOpen = ref(false);
const isScrolled = ref(false);
const searchQuery = ref("");
const searchInput = ref(null);

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Casinos", path: "/casinos" },
  { name: "Bonuses", path: "/bonuses" },
  { name: "Predictions", path: "/predictions" },
  { name: "Statistics", path: "/statistics" },
  { name: "About", path: "/about" },
];

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
  // Focus the search input when opened
  if (isSearchOpen.value) {
    setTimeout(() => {
      searchInput.value?.focus();
    }, 100);
  }
};

const performSearch = () => {
  if (!searchQuery.value.trim()) return;
  console.log(`Searching for: ${searchQuery.value}`);
  // Here you would implement actual search functionality
  // For example, navigate to search results page:
  // navigateTo(`/search?q=${encodeURIComponent(searchQuery.value)}`);

  // Close search after submitting
  isSearchOpen.value = false;
  searchQuery.value = "";
};

// Handle scroll events to change nav appearance
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

// Add/remove scroll event listener
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
  position: sticky;
  top: 0;
  z-index: 50;
  transition: all 0.3s ease;
}

.navigation.scrolled {
  background: linear-gradient(
    180deg,
    rgba(26, 23, 33, 0.98) 0%,
    rgba(26, 23, 33, 0.98) 100%
  );
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  height: 80px;
  transition: height 0.3s ease;
}

.scrolled .nav-container {
  height: 70px;
}

.nav-logo {
  display: flex;
  align-items: center;
  margin-right: 2rem;
  transition: all 0.3s ease;
}

.logo-image {
  height: 45px;
  width: auto;
  object-fit: contain;
  transition: all 0.3s ease;
}

.scrolled .logo-image {
  height: 40px;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-right: auto;
}

.nav-item {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-weight: 500;
  padding: 0.75rem 0;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-text {
  position: relative;
  z-index: 1;
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

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.search-toggle {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.search-toggle:hover {
  color: #dd4544;
  transform: scale(1.1);
}

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
  box-shadow: 0 4px 12px rgba(221, 69, 68, 0.2);
}

.search-bar {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: rgba(26, 23, 33, 0.98);
  padding: 0;
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.search-bar.is-open {
  height: 70px;
  padding: 1rem 0;
}

.search-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.search-container input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1rem;
}

.search-container input:focus {
  outline: none;
  border-color: rgba(221, 69, 68, 0.4);
  box-shadow: 0 0 0 2px rgba(221, 69, 68, 0.1);
}

.search-container input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.search-button {
  background: #dd4544;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.search-button:hover {
  background: #c93d3d;
}

.close-search {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.2s ease;
}

.close-search:hover {
  color: white;
}

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

@media (max-width: 968px) {
  .nav-links {
    gap: 1.5rem;
  }

  .login-btn span {
    display: none;
  }

  .login-btn {
    padding: 0.5rem;
    border-radius: 50%;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

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
    width: 0 !important;
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
    transform: translateX(-20px);
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

  .search-toggle {
    font-size: 1rem;
  }

  .nav-links {
    top: 70px;
    width: 100%;
    max-width: none;
  }

  .search-bar.is-open {
    height: 60px;
  }

  .search-container input {
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
  }

  .search-button {
    padding: 0.6rem 1rem;
  }
}
</style>

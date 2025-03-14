<template>
  <nav class="navigation">
    <div class="nav-container">
      <router-link to="/" class="nav-logo"> Gambler's Future </router-link>

      <div class="nav-links">
        <router-link to="/" class="nav-item">Home</router-link>
        <router-link to="/predictions" class="nav-item"
          >Predictions</router-link
        >
        <router-link to="/statistics" class="nav-item">Statistics</router-link>
        <router-link to="/about" class="nav-item">About</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
// Component logic can be added here
</script>

<style scoped>
.navigation {
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-item {
  text-decoration: none;
  color: #666;
  transition: color 0.3s ease;
}

.nav-item:hover {
  color: #333;
}
</style>

<template>
  <div class="hero-banner">
    <div class="banner-content">
      <h1 class="banner-title">Welcome to Gambler's Future</h1>
      <p class="banner-subtitle">Your Journey to Smart Betting Starts Here</p>
      <button class="banner-cta">Get Started</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePageBanner",
};
</script>

<style scoped>
.hero-banner {
  width: 100%;
  height: 500px;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 2rem;
}

.banner-content {
  text-align: center;
  max-width: 800px;
}

.banner-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.banner-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.banner-cta {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #00ff88;
  color: #1e3c72;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.2s;
}

.banner-cta:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .banner-title {
    font-size: 2rem;
  }

  .banner-subtitle {
    font-size: 1.2rem;
  }
}
</style>

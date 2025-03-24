<template>
  <div class="hero-banner">
    <div class="banner-content">
      <h1 class="banner-title">Welcome to Gambler's Future</h1>
      <p class="banner-subtitle">Your Journey to Smart Betting Starts Here</p>
      <button class="banner-cta">Get Started</button>
    </div>
  </div>
</template>

<script setup>
// Component logic here if needed
</script>

<style scoped>
.hero-banner {
  width: 100%;
  height: 500px;
  background-image: linear-gradient(
      180deg,
      hsla(0, 0%, 100%, 0) 0%,
      hsla(0, 0%, 100%, 0.3) 40%,
      hsla(0, 0%, 100%, 0.9) 100%
    ),
    url(/images/glamorous.svg);
  background-size: 9rem;
  background-position: center top;
  background-repeat: repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow: hidden;
}

.hero-banner::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at center,
    rgba(243, 53, 53, 0.1) 0%,
    rgba(41, 37, 44, 0) 70%
  );
  pointer-events: none;
}

.banner-content {
  text-align: center;
  max-width: 800px;
  position: relative;
  z-index: 1;
}

.banner-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #f33535; /* Your specified red color */
}

.banner-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #ffffff;
  opacity: 0.9;
}

.banner-cta {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background: linear-gradient(to right, #f33535, #ff4747);
  color: #ffffff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(243, 53, 53, 0.3);
}

.banner-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(243, 53, 53, 0.4);
}

@media (max-width: 768px) {
  .banner-title {
    font-size: 2rem;
  }

  .banner-subtitle {
    font-size: 1.2rem;
  }

  .hero-banner {
    height: 400px;
  }
}
</style>

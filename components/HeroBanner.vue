<template>
  <div class="hero-banner">
    <div class="hero-overlay"></div>
    <div class="hero-container">
      <!-- Left side - Content -->
      <div class="banner-content">
        <div class="headline-container">
          <h1 class="banner-title">Welcome to your New <span>GF!</span></h1>
          <div class="badge">TRUSTED BY PLAYERS</div>
        </div>
        <p class="banner-subtitle">
          Better Than Your Ex, More Reliable Than Your Next
        </p>
        <div class="features">
          <div class="feature">
            <i class="fas fa-check-circle"></i>
            <span>100% Unbiased Reviews</span>
          </div>
          <div class="feature">
            <i class="fas fa-check-circle"></i>
            <span>Exclusive Bonus Offers</span>
          </div>
          <div class="feature">
            <i class="fas fa-check-circle"></i>
            <span>Expert Gambling Advice</span>
          </div>
        </div>
        <div class="search-container">
          <div class="search-wrapper">
            <i class="fas fa-search search-icon"></i>
            <input
              type="text"
              placeholder="Search for your best future..."
              class="search-input"
              v-model="searchQuery"
              @keyup.enter="handleSearch"
            />
            <button
              v-if="searchQuery"
              class="clear-button"
              @click="clearSearch"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
          <button class="search-button" @click="handleSearch">
            <span>Search</span>
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <!-- Right side - Image -->
      <div class="banner-image">
        <div class="image-wrapper">
          <div class="glow-effect"></div>
          <img
            src="/images/gfuture-icon.png"
            alt="Gambler's Future Hero"
            class="hero-img"
          />
          <div class="ribbon">FEATURED</div>
        </div>
      </div>
    </div>

    <div class="trusted-brands">
      <p>TRUSTED BY TOP BRANDS</p>
      <div class="brand-logos">
        <img src="/images/gfuture-icon.png" alt="Brand" />
        <img src="/images/gfuture-icon.png" alt="Brand" />
        <img src="/images/gfuture-icon.png" alt="Brand" />
        <img src="/images/gfuture-icon.png" alt="Brand" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const searchQuery = ref("");

const handleSearch = () => {
  if (!searchQuery.value.trim()) return;
  // Implement search functionality
  console.log(`Searching for: ${searchQuery.value}`);
  // Redirect to search results page or filter content
  // window.location.href = `/search?q=${encodeURIComponent(searchQuery.value)}`;
};

const clearSearch = () => {
  searchQuery.value = "";
};
</script>

<style scoped>
.hero-banner {
  width: 100%;
  min-height: 600px;
  background: linear-gradient(135deg, #201b26 0%, #1a1721 100%);
  position: relative;
  padding: 4rem 2rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
      circle at 20% 30%,
      rgba(221, 69, 68, 0.1) 0%,
      transparent 40%
    ),
    linear-gradient(
      180deg,
      rgba(26, 23, 33, 0.8) 0%,
      rgba(26, 23, 33, 0.95) 100%
    ),
    url(/images/glamorous.svg);
  background-size: auto, auto, 12rem;
  background-position: center, center, center;
  background-repeat: no-repeat, no-repeat, repeat;
  opacity: 0.9;
  z-index: 0;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  gap: 2rem;
}

.banner-content {
  flex: 3;
  text-align: left;
  padding-right: 2rem;
}

.headline-container {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
  flex-wrap: wrap;
}

.banner-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  color: #ffffff;
  margin: 0;
  position: relative;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.banner-title span {
  color: #dd4544;
  position: relative;
  display: inline-block;
}

.banner-title span::after {
  content: "";
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  height: 8px;
  background: rgba(221, 69, 68, 0.3);
  z-index: -1;
  border-radius: 4px;
}

.badge {
  background: rgba(221, 69, 68, 0.9);
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 0.4rem 0.8rem;
  border-radius: 30px;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(221, 69, 68, 0.3);
}

.banner-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
  max-width: 600px;
}

.features {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.5rem 1rem;
  border-radius: 30px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.feature:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

.feature i {
  color: #dd4544;
}

.search-container {
  display: flex;
  max-width: 600px;
  margin-top: 2rem;
  position: relative;
}

.search-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  background: rgba(255, 255, 255, 0.07);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px 0 0 30px;
  overflow: hidden;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.search-wrapper:focus-within {
  border-color: rgba(221, 69, 68, 0.5);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 0 2px rgba(221, 69, 68, 0.1);
}

.search-icon {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1rem;
  margin-left: 1.5rem;
}

.search-input {
  flex: 1;
  padding: 1rem 1rem 1rem 0.75rem;
  font-size: 1rem;
  border: none;
  background: transparent;
  color: #ffffff;
  transition: all 0.3s ease;
  width: 100%;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.search-input:focus {
  outline: none;
}

.clear-button {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  padding: 0 1rem;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.clear-button:hover {
  color: rgba(255, 255, 255, 0.8);
}

.search-button {
  padding: 1rem 2rem;
  font-size: 1rem;
  background: linear-gradient(to right, #dd4544, #ff4747);
  color: #ffffff;
  border: none;
  border-radius: 0 30px 30px 0;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(221, 69, 68, 0.3);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.search-button i {
  transition: transform 0.2s ease;
}

.search-button:hover {
  background: linear-gradient(to right, #c93d3d, #ff3535);
  box-shadow: 0 6px 20px rgba(221, 69, 68, 0.4);
}

.search-button:hover i {
  transform: translateX(3px);
}

.banner-image {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.image-wrapper {
  position: relative;
  max-width: 450px;
  perspective: 1000px;
}

.glow-effect {
  position: absolute;
  top: -10%;
  left: -10%;
  right: -10%;
  bottom: -10%;
  background: radial-gradient(
    circle,
    rgba(221, 69, 68, 0.2) 0%,
    transparent 70%
  );
  filter: blur(20px);
  z-index: -1;
  opacity: 0.8;
  animation: pulse 5s ease-in-out infinite;
}

.hero-img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  border: 3px solid rgba(221, 69, 68, 0.5);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  transition: all 0.5s ease;
  transform: perspective(1000px) rotateY(-5deg);
  filter: brightness(0.95) contrast(1.1);
}

.image-wrapper:hover .hero-img {
  transform: perspective(1000px) rotateY(0deg);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1);
}

.ribbon {
  position: absolute;
  top: 0px;
  right: -5px;
  background: #dd4544;
  color: white;
  padding: 0.5rem 1.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.trusted-brands {
  margin-top: 3rem;
  text-align: center;
  max-width: 1200px;
  width: 100%;
  align-self: center;
  position: relative;
  z-index: 1;
}

.trusted-brands p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.75rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.brand-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.brand-logos img {
  height: 25px;
  opacity: 0.5;
  filter: grayscale(100%);
  transition: all 0.3s ease;
}

.brand-logos img:hover {
  opacity: 0.8;
  filter: grayscale(0%);
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

@media (max-width: 1024px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
  }

  .banner-content {
    padding-right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .banner-title {
    font-size: 3rem;
  }

  .banner-subtitle {
    margin-left: auto;
    margin-right: auto;
  }

  .features {
    justify-content: center;
  }

  .search-container {
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 768px) {
  .hero-banner {
    padding: 3rem 1.5rem;
    min-height: auto;
  }

  .banner-title {
    font-size: 2.5rem;
  }

  .banner-subtitle {
    font-size: 1.25rem;
  }

  .features {
    flex-direction: column;
    align-items: center;
  }

  .banner-image {
    display: none;
  }

  .image-wrapper {
    max-width: 350px;
  }

  .search-container {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .search-wrapper {
    border-radius: 30px;
  }

  .search-button {
    border-radius: 30px;
    width: 100%;
    justify-content: center;
  }

  .trusted-brands {
    margin-top: 2rem;
  }

  .brand-logos {
    gap: 1.5rem;
  }

  .brand-logos img {
    height: 20px;
  }
}

@media (max-width: 480px) {
  .banner-title {
    font-size: 2rem;
  }

  .banner-subtitle {
    font-size: 1.1rem;
  }

  .feature {
    width: 100%;
    justify-content: center;
  }

  .image-wrapper {
    max-width: 280px;
  }
}
</style>

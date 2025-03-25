<template>
  <div class="hero-banner">
    <div class="hero-container">
      <!-- Left side - Content -->
      <div class="banner-content">
        <h1 class="banner-title">Welcome to your New GF!</h1>
        <p class="banner-subtitle">
          Better Than Your Ex, More Reliable Than Your Next
        </p>
        <div class="search-container">
          <input
            type="text"
            placeholder="Search for your best future..."
            class="search-input"
          />
          <button class="search-button">Search</button>
        </div>
      </div>

      <!-- Right side - Image -->
      <div class="banner-image">
        <img
          src="/images/gfuture-herro.jpg"
          alt="Gambler's Future Hero"
          class="hero-img"
        />
      </div>
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
  padding: 2rem;
  overflow: hidden;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.banner-content {
  flex: 2;
  text-align: left;
  padding-right: 4rem;
  z-index: 1;
}

.banner-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px; /* Added max-width constraint */
}

.hero-img {
  max-width: 100%; /* Reduced from 100% to 80% */
  max-height: 450px; /* Added max-height constraint */
  height: auto;
  object-fit: contain;
  border: 2px solid #dd4544;
  border-radius: 8px;
  opacity: 0.5;
  box-shadow: 0 4px 15px rgba(221, 69, 68, 0.3);
}

.banner-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #dd4544; /* Your specified red color */
}

.banner-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #ffffff;
  opacity: 0.9;
}

.search-container {
  display: flex;
  max-width: 500px;
  margin-top: 2rem;
}

.search-input {
  flex: 1;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  border: 2px solid rgba(221, 69, 68, 0.3);
  border-right: none;
  border-radius: 30px 0 0 30px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.search-input:focus {
  outline: none;
  border-color: #dd4544;
  background: rgba(255, 255, 255, 0.15);
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
}

.search-button:hover {
  background: linear-gradient(to right, #c93d3d, #ff3535);
  box-shadow: 0 6px 20px rgba(221, 69, 68, 0.4);
}

@media (max-width: 768px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
  }

  .banner-content {
    padding-right: 0;
    margin-bottom: 2rem;
  }

  .banner-image {
    display: none;
  }

  .hero-img {
    max-width: 70%; /* Further reduced for mobile */
    max-height: 250px; /* Reduced height for mobile */
  }

  .banner-title {
    font-size: 2rem;
  }

  .banner-subtitle {
    font-size: 1.2rem;
  }

  .hero-banner {
    height: 300px;
  }

  .search-container {
    max-width: 100%;
    padding: 0 1rem;
  }

  .search-input {
    font-size: 0.9rem;
    padding: 0.8rem 1.2rem;
  }

  .search-button {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
}
</style>

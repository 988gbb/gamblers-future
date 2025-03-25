<template>
  <section class="best-perform-section">
    <div class="container">
      <h2 class="section-title">Spin & Win: The Hottest Online Casinos 🔥</h2>

      <!-- Desktop Grid -->
      <div class="casino-grid desktop-only">
        <div v-for="casino in casinos" :key="casino.id" class="casino-card">
          <div class="casino-header">
            <span class="casino-name">{{ casino.name }}</span>
            <div class="rating">
              <span class="star">★</span>
              <span class="rating-value">{{ casino.rating }}</span>
            </div>
          </div>
          <div class="casino-content">
            <p class="benefit">{{ casino.mainBenefit }}</p>
            <div class="bonus">{{ casino.bonus }}</div>
            <a :href="casino.link" class="play-button">Play Now</a>
          </div>
        </div>
      </div>

      <!-- Mobile Carousel -->
      <div class="carousel-container mobile-only">
        <div
          class="carousel"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <!-- Group casinos into sets of 3 -->
          <div
            v-for="pageIndex in totalPages"
            :key="pageIndex"
            class="carousel-page"
          >
            <div class="carousel-group">
              <div v-for="index in 3" :key="index" class="carousel-slide">
                <div
                  v-if="casinos[(pageIndex - 1) * 3 + index - 1]"
                  class="casino-card"
                >
                  <div class="casino-header">
                    <span class="casino-name">
                      {{ casinos[(pageIndex - 1) * 3 + index - 1].name }}
                    </span>
                    <div class="rating">
                      <span class="star">★</span>
                      <span class="rating-value">
                        {{ casinos[(pageIndex - 1) * 3 + index - 1].rating }}
                      </span>
                    </div>
                  </div>
                  <div class="casino-content">
                    <p class="benefit">
                      {{ casinos[(pageIndex - 1) * 3 + index - 1].mainBenefit }}
                    </p>
                    <div class="bonus">
                      {{ casinos[(pageIndex - 1) * 3 + index - 1].bonus }}
                    </div>
                    <a
                      :href="casinos[(pageIndex - 1) * 3 + index - 1].link"
                      class="play-button"
                    >
                      Play Now
                    </a>
                  </div>
                </div>
                <div v-else class="casino-card casino-card-empty"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Updated navigation dots -->
        <div class="carousel-nav">
          <button
            class="nav-button prev"
            @click="prevSlide"
            :disabled="currentSlide === 0"
          >
            ←
          </button>
          <div class="carousel-dots">
            <button
              v-for="index in totalPages"
              :key="index"
              class="dot"
              :class="{ active: currentSlide === index - 1 }"
              @click="goToSlide(index - 1)"
            ></button>
          </div>
          <button
            class="nav-button next"
            @click="nextSlide"
            :disabled="currentSlide === totalPages - 1"
          >
            →
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Casino {
  id: number;
  name: string;
  rating: number;
  mainBenefit: string;
  bonus: string;
  link: string;
}

const casinos: Casino[] = [
  {
    id: 1,
    name: "Bet365",
    rating: 4.9,
    mainBenefit: "Best Overall Experience",
    bonus: "Up to €100",
    link: "#",
  },
  {
    id: 2,
    name: "888Casino",
    rating: 4.8,
    mainBenefit: "Exclusive Games",
    bonus: "200% up to €300",
    link: "#",
  },
  {
    id: 3,
    name: "Unibet",
    rating: 4.8,
    mainBenefit: "Fast Payouts",
    bonus: "100% up to €200",
    link: "#",
  },
  {
    id: 4,
    name: "LeoVegas",
    rating: 4.7,
    mainBenefit: "Best Mobile Casino",
    bonus: "Up to €1000",
    link: "#",
  },
  {
    id: 5,
    name: "Betway",
    rating: 4.7,
    mainBenefit: "24/7 Support",
    bonus: "€1000 Welcome Package",
    link: "#",
  },
];

const currentSlide = ref(0);

// Calculate total number of pages (groups of 3)
const totalPages = Math.ceil(casinos.length / 3);

// Update navigation logic
const nextSlide = () => {
  if (currentSlide.value < totalPages - 1) {
    currentSlide.value++;
  }
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  }
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
};
</script>

<style scoped>
.best-perform-section {
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  font-size: 1.875rem;
  font-weight: bold;
  color: #dd4544;
  margin-bottom: 2rem;
  text-align: left;
}

.casino-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: 1.5rem;
}

.casino-card {
  background: #26222a;
  border-radius: 0.5rem;
  padding: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  height: 100%;
  font-size: 0.9rem; /* Slightly smaller text for better fit */
}

.casino-card:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.casino-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.casino-name {
  font-size: 1.125rem;
  font-weight: bold;
}

.rating {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.star {
  color: #fbbf24;
}

.rating-value {
  font-size: 0.875rem;
  font-weight: 500;
  color: #4b5563;
}

.casino-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.benefit {
  font-size: 0.875rem;
  color: #6b7280;
}

.bonus {
  font-size: 0.875rem;
  font-weight: 500;
  color: #059669;
  background-color: #ecfdf5;
  padding: 0.5rem;
  border-radius: 0.375rem;
  text-align: center;
}

.play-button {
  display: block;
  text-align: center;
  background-color: #dd4544;
  color: white;
  padding: 0.75rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.play-button:hover {
  background-color: #c93d3d;
}

.desktop-only {
  display: grid;
}

.mobile-only {
  display: none;
}

.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 0 1rem;
}

.carousel {
  display: flex;
  transition: transform 0.3s ease-in-out;
  gap: 1rem;
}

.carousel-page {
  min-width: 100%;
  flex: 0 0 100%;
}

.carousel-group {
  display: flex;
  gap: 1rem;
}

.carousel-slide {
  flex: 0 0 calc((100% - 2rem) / 3);
  min-width: calc((100% - 2rem) / 3);
}

.casino-card-empty {
  visibility: hidden;
}

.carousel-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.nav-button {
  background: #dd4544;
  color: white;
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.nav-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.carousel-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: #4b5563;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dot.active {
  background: #dd4544;
}

@media (max-width: 768px) {
  .casino-grid {
    grid-template-columns: repeat(2, 1fr); /* Changed to 2 columns */
    gap: 1rem; /* Reduced gap for better fit */
  }

  .section-title {
    font-size: 1.5rem;
  }

  .casino-card {
    padding: 1rem; /* Reduced padding */
  }

  .casino-name {
    font-size: 1rem; /* Smaller font */
  }

  .benefit,
  .bonus {
    font-size: 0.8rem; /* Smaller text */
  }

  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: block;
  }

  .carousel-group {
    gap: 0.5rem;
  }

  .carousel-slide {
    flex: 0 0 calc((100% - 1rem) / 3);
    min-width: calc((100% - 1rem) / 3);
    padding: 0 0.5rem;
  }
}

@media (max-width: 480px) {
  .carousel-slide {
    min-width: 50%; /* Full width on very small screens */
  }

  .carousel {
    gap: 0.5rem;
  }
}
</style>

<template>
  <section class="best-perform-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Spin & Win: The Hottest Online Casinos 🔥</h2>
        <NuxtLink to="/casinos" class="view-all-link">
          View All Casinos <i class="fas fa-arrow-right"></i>
        </NuxtLink>
      </div>

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

      <!-- Simplified Mobile Carousel -->
      <div class="carousel-container mobile-only">
        <div
          class="carousel"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          <!-- Each page contains 2 casinos -->
          <div
            v-for="i in Math.ceil(casinos.length / 2)"
            :key="i"
            class="carousel-page"
          >
            <div class="cards-row">
              <!-- Left card -->
              <div v-if="casinos[(i - 1) * 2]" class="casino-card">
                <div class="casino-header">
                  <span class="casino-name">{{
                    casinos[(i - 1) * 2].name
                  }}</span>
                  <div class="rating">
                    <span class="star">★</span>
                    <span class="rating-value">{{
                      casinos[(i - 1) * 2].rating
                    }}</span>
                  </div>
                </div>
                <div class="casino-content">
                  <p class="benefit">{{ casinos[(i - 1) * 2].mainBenefit }}</p>
                  <div class="bonus">{{ casinos[(i - 1) * 2].bonus }}</div>
                  <a :href="casinos[(i - 1) * 2].link" class="play-button"
                    >Play Now</a
                  >
                </div>
              </div>

              <!-- Right card -->
              <div v-if="casinos[(i - 1) * 2 + 1]" class="casino-card">
                <div class="casino-header">
                  <span class="casino-name">{{
                    casinos[(i - 1) * 2 + 1].name
                  }}</span>
                  <div class="rating">
                    <span class="star">★</span>
                    <span class="rating-value">{{
                      casinos[(i - 1) * 2 + 1].rating
                    }}</span>
                  </div>
                </div>
                <div class="casino-content">
                  <p class="benefit">
                    {{ casinos[(i - 1) * 2 + 1].mainBenefit }}
                  </p>
                  <div class="bonus">{{ casinos[(i - 1) * 2 + 1].bonus }}</div>
                  <a :href="casinos[(i - 1) * 2 + 1].link" class="play-button"
                    >Play Now</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Simple Navigation Controls -->
        <div class="carousel-nav">
          <button
            class="nav-button prev"
            @click="prevSlide"
            :disabled="currentSlide === 0"
          >
            ←
          </button>
          <div class="carousel-indicator">
            {{ currentSlide + 1 }} / {{ pageCount }}
          </div>
          <button
            class="nav-button next"
            @click="nextSlide"
            :disabled="currentSlide === pageCount - 1"
          >
            →
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";

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
];

const currentSlide = ref(0);
const pageCount = computed(() => Math.ceil(casinos.length / 2));

const nextSlide = () => {
  if (currentSlide.value < pageCount.value - 1) {
    currentSlide.value++;
  }
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  }
};

// Add these for the progress bar
const progressElement = ref(null);

watch(currentSlide, (newValue) => {
  document.documentElement.style.setProperty(
    "--current-page",
    newValue.toString()
  );
});

onMounted(() => {
  document.documentElement.style.setProperty(
    "--total-pages",
    pageCount.value.toString()
  );
  document.documentElement.style.setProperty(
    "--current-page",
    currentSlide.value.toString()
  );
});

// Add touch swipe support for the carousel
const touchStartX = ref(0);
const touchEndX = ref(0);

const handleTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX;
};

const handleTouchMove = (e) => {
  touchEndX.value = e.touches[0].clientX;
};

const handleTouchEnd = () => {
  const threshold = 75; // minimum distance to be considered a swipe

  if (touchStartX.value - touchEndX.value > threshold) {
    // Swipe left - go to next slide
    nextSlide();
  }

  if (touchEndX.value - touchStartX.value > threshold) {
    // Swipe right - go to previous slide
    prevSlide();
  }
};
</script>

<style scoped>
/* Base styles for all screens */
.best-perform-section {
  padding: 2rem 0;
  background: linear-gradient(180deg, #1a1721 0%, #29252c 100%);
  color: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Add section-header styles */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.875rem;
  font-weight: bold;
  color: #dd4544;
  margin-bottom: 0; /* Changed from 2rem to 0 */
}

/* Add view-all-link styles */
.view-all-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #dd4544;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.view-all-link:hover {
  color: #e74c3c;
  transform: translateX(3px);
}

.view-all-link i {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.view-all-link:hover i {
  transform: translateX(3px);
}

/* Card styles */
.casino-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.75rem;
  padding: 1.25rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.casino-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  border-color: rgba(221, 69, 68, 0.3);
}

.casino-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}

.casino-name {
  font-size: 1.2rem;
  font-weight: 600;
}

.rating {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: rgba(0, 0, 0, 0.2);
  padding: 0.25rem 0.5rem;
  border-radius: 30px;
}

.star {
  color: #dd4544;
}

.rating-value {
  color: white;
  font-weight: 500;
}

.casino-content {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  flex: 1;
}

.benefit {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
}

.bonus {
  font-weight: 600;
  color: #66bb6a;
  background-color: rgba(102, 187, 106, 0.1);
  padding: 0.75rem;
  border-radius: 0.5rem;
  text-align: center;
  border: 1px dashed rgba(102, 187, 106, 0.3);
}

.play-button {
  display: block;
  text-align: center;
  background-color: #dd4544;
  color: white;
  padding: 0.875rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: auto;
}

.play-button:hover {
  background-color: #c93d3d;
}

/* Desktop grid */
.casino-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

/* Mobile carousel */
.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 2rem;
}

.carousel {
  display: flex;
  transition: transform 0.3s ease-in-out;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
}

.carousel-page {
  min-width: 100%;
  width: 100%;
  flex: 0 0 100%;
}

.cards-row {
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  height: 100%;
}

.cards-row .casino-card {
  flex: 1;
  min-width: 0; /* Prevents text overflow issues */
  /* Min height ensures similar card sizes */
  min-height: 300px;
}

/* Improved navigation controls */
.carousel-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
  position: relative;
}

/* Add a progress bar to better visualize location */
.carousel-nav::before {
  content: "";
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.carousel-nav::after {
  content: "";
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: #dd4544;
  border-radius: 2px;
  transition: transform 0.3s ease;
  transform-origin: left;
  /* This calculates the width based on current position */
  transform: translateX(-50%)
    scaleX(calc(1 / var(--total-pages) * (var(--current-page) + 1)));
}

.carousel-indicator {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.nav-button {
  background: linear-gradient(145deg, #e74c3c, #dd4544);
  color: white;
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(221, 69, 68, 0.3);
}

.nav-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  box-shadow: none;
}

.nav-button:not(:disabled):hover {
  background: linear-gradient(145deg, #dd4544, #c93d3d);
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(221, 69, 68, 0.4);
}

/* Media Queries */
.desktop-only {
  display: grid;
}

.mobile-only {
  display: none;
}

@media (max-width: 768px) {
  .section-header {
    flex-direction: row;
    align-items: center;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .view-all-link {
    font-size: 0.9rem;
  }

  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: block;
  }

  .casino-card {
    min-height: 320px;
  }

  /* Ensure casino cards are side by side */
  .cards-row {
    flex-direction: row;
    gap: 0.75rem;
  }

  /* Adjust card content for smaller size */
  .casino-header {
    margin-bottom: 0.75rem;
  }

  .casino-content {
    gap: 0.75rem;
  }

  .play-button {
    padding: 0.75rem;
  }
}

/* Very small mobile devices */
@media (max-width: 480px) {
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .view-all-link {
    align-self: flex-end;
  }

  /* IMPORTANT: Keep side-by-side layout by overriding previous styles */
  .cards-row {
    flex-direction: row !important;
    gap: 0.5rem;
  }

  .casino-card {
    padding: 0.75rem;
    min-height: 280px;
  }

  .casino-name {
    font-size: 0.9rem;
  }

  .rating {
    padding: 0.15rem 0.35rem;
  }

  .rating-value {
    font-size: 0.75rem;
  }

  .benefit {
    font-size: 0.75rem;
    line-height: 1.4;
  }

  .bonus {
    font-size: 0.8rem;
    padding: 0.5rem;
  }

  .play-button {
    font-size: 0.85rem;
    padding: 0.6rem;
  }
}
</style>

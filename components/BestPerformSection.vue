<template>
  <section class="best-perform-section">
    <div class="container">
      <h2 class="section-title">Spin & Win: The Hottest Online Casinos 🔥</h2>
      <div class="casino-grid">
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
    </div>
  </section>
</template>

<script setup lang="ts">
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
}
</style>

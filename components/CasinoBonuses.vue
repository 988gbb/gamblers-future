<template>
  <section class="casino-bonuses">
    <div class="container">
      <h2 class="section-title">
        🎰 Spin to Win: Fresh Casino Bonuses Just Dropped
      </h2>
      <div class="bonuses-grid">
        <div v-for="bonus in bonuses" :key="bonus.id" class="bonus-card">
          <div class="bonus-header">
            <img
              :src="bonus.casinoLogo"
              :alt="bonus.casinoName"
              class="casino-logo"
            />
            <div class="rating">
              <span class="star">★</span>
              <span class="rating-value">{{ bonus.rating }}</span>
            </div>
          </div>
          <div class="bonus-content">
            <div class="bonus-amount">{{ bonus.amount }}</div>
            <p class="bonus-description">{{ bonus.description }}</p>
            <ul class="bonus-features">
              <li v-for="feature in bonus.features" :key="feature">
                {{ feature }}
              </li>
            </ul>
            <a :href="bonus.link" class="claim-button">Claim Bonus</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Bonus {
  id: number;
  casinoName: string;
  casinoLogo: string;
  rating: number;
  amount: string;
  description: string;
  features: string[];
  link: string;
}

const bonuses = [
  {
    id: 1,
    casinoName: "Lucky Strike Casino",
    casinoLogo: "/images/casinos/lucky-strike.png",
    rating: 4.8,
    amount: "200% up to $1,000",
    description:
      "Get a massive welcome bonus with easy wagering requirements and instant withdrawals.",
    features: [
      "No wagering on free spins",
      "24/7 Live support",
      "Instant withdrawals",
    ],
    link: "/casino/lucky-strike",
  },
  {
    id: 2,
    casinoName: "Royal Flush",
    casinoLogo: "/images/casinos/royal-flush.png",
    rating: 4.9,
    amount: "$1,500 + 150 Free Spins",
    description:
      "Exclusive welcome package with daily cashback and VIP rewards program.",
    features: [
      "Daily cashback up to 20%",
      "VIP loyalty program",
      "Cryptocurrency accepted",
    ],
    link: "/casino/royal-flush",
  },
  {
    id: 3,
    casinoName: "Golden Palace",
    casinoLogo: "/images/casinos/golden-palace.png",
    rating: 4.7,
    amount: "500% up to $5,000",
    description:
      "High-roller welcome bonus with weekly reload bonuses and exclusive tournaments.",
    features: [
      "Weekly reload bonuses",
      "Exclusive tournaments",
      "Fast payouts",
    ],
    link: "/casino/golden-palace",
  },
];
</script>

<style scoped>
.casino-bonuses {
  padding: 4rem 0;
  background-color: #131313;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 2.5rem;
  text-align: center;
}

.bonuses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.bonus-card {
  background: #1d1d1d;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border: 1px solid #2d2d2d;
  transition: all 0.3s ease;
}

.bonus-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(221, 69, 68, 0.2);
  border-color: #dd4544;
}

.bonus-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.casino-logo {
  height: 40px;
  width: auto;
  object-fit: contain;
}

.rating {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.star {
  color: #dd4544;
  font-size: 1.25rem;
}

.rating-value {
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
}

.bonus-content {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.bonus-amount {
  font-size: 1.5rem;
  font-weight: bold;
  color: #dd4544;
  text-align: center;
  padding: 0.75rem;
  background-color: rgba(221, 69, 68, 0.1);
  border-radius: 0.5rem;
}

.bonus-description {
  font-size: 0.875rem;
  color: #e6e6e6;
  line-height: 1.5;
}

.bonus-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.bonus-features li {
  color: #a0a0a0;
  font-size: 0.875rem;
  padding-left: 1.5rem;
  position: relative;
}

.bonus-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #dd4544;
}

.claim-button {
  display: block;
  text-align: center;
  background-color: #dd4544;
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.claim-button:hover {
  background-color: #c93d3d;
}

@media (max-width: 1024px) {
  .bonuses-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.75rem;
  }

  .bonuses-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .bonus-card {
    padding: 1.25rem;
  }
}

@media (max-width: 640px) {
  .bonuses-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .bonus-card {
    padding: 1.25rem;
  }
}
</style>

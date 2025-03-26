<template>
  <section class="casino-bonuses">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          🎰 Spin to Win: Fresh Casino Bonuses Just Dropped
        </h2>
        <p class="section-subtitle">
          Exclusive offers updated daily for GF members
        </p>
      </div>

      <div class="bonuses-grid">
        <div
          v-for="(bonus, index) in bonuses"
          :key="bonus.id"
          class="bonus-card"
          :class="{ featured: index === 0 }"
        >
          <div class="bonus-ribbon" v-if="index === 0">TOP OFFER</div>

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
            <div class="action-area">
              <a :href="bonus.link" class="claim-button">Claim Bonus</a>
              <div class="terms-link">
                <a href="#">T&Cs Apply</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="view-more-container">
        <a href="/bonuses" class="view-more-button">
          View All Bonuses
          <span class="arrow">→</span>
        </a>
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
  padding: 3rem 0;
  background: linear-gradient(180deg, #131313 0%, #1a1721 100%);
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.25rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 0.75rem;
}

.section-subtitle {
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.bonuses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.bonus-card {
  background: rgba(29, 29, 29, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1.75rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  border: 1px solid #2d2d2d;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
}

.bonus-card.featured {
  border-color: rgba(221, 69, 68, 0.5);
  box-shadow: 0 15px 30px rgba(221, 69, 68, 0.15);
  background: rgba(40, 35, 45, 0.7);
}

.bonus-ribbon {
  position: absolute;
  top: 15px;
  right: -35px;
  background: #dd4544;
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 6px 40px;
  transform: rotate(45deg);
  letter-spacing: 1px;
}

.bonus-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  border-color: #dd4544;
}

.bonus-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.75rem;
}

.casino-logo {
  height: 45px;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5));
  transition: transform 0.3s ease;
}

.bonus-card:hover .casino-logo {
  transform: scale(1.1);
}

.rating {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: rgba(0, 0, 0, 0.3);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
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
  gap: 1.5rem;
}

.bonus-amount {
  font-size: 1.5rem;
  font-weight: bold;
  color: #dd4544;
  text-align: center;
  padding: 1rem;
  background-color: rgba(221, 69, 68, 0.1);
  border-radius: 0.75rem;
  border: 1px dashed rgba(221, 69, 68, 0.3);
  transition: all 0.3s ease;
}

.bonus-card:hover .bonus-amount {
  background-color: rgba(221, 69, 68, 0.15);
  box-shadow: 0 0 20px rgba(221, 69, 68, 0.1);
}

.bonus-description {
  font-size: 0.95rem;
  color: #e6e6e6;
  line-height: 1.6;
}

.bonus-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.bonus-features li {
  color: #b0b0b0;
  font-size: 0.9rem;
  padding-left: 1.75rem;
  position: relative;
  transition: transform 0.2s ease;
}

.bonus-features li:hover {
  transform: translateX(3px);
  color: #e6e6e6;
}

.bonus-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #dd4544;
  font-weight: bold;
}

.action-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.claim-button {
  display: block;
  width: 100%;
  text-align: center;
  background: linear-gradient(135deg, #dd4544, #c93d3d);
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(221, 69, 68, 0.3);
}

.claim-button:hover {
  background: linear-gradient(135deg, #c93d3d, #b53535);
  box-shadow: 0 6px 20px rgba(221, 69, 68, 0.4);
  transform: translateY(-2px);
}

.terms-link {
  font-size: 0.75rem;
  margin-top: 0.5rem;
}

.terms-link a {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.2s;
}

.terms-link a:hover {
  color: #dd4544;
}

.view-more-container {
  text-align: center;
  margin-top: 1rem;
}

.view-more-button {
  display: inline-flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.75rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
}

.view-more-button:hover {
  color: #dd4544;
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
}

.arrow {
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.view-more-button:hover .arrow {
  transform: translateX(3px);
}

@media (max-width: 1024px) {
  .section-title {
    font-size: 2rem;
  }

  .bonuses-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .casino-bonuses {
    padding: 3rem 0;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.75rem;
  }

  .bonuses-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  .bonus-card {
    padding: 1.5rem;
  }

  .bonus-amount {
    font-size: 1.3rem;
    padding: 0.75rem;
  }
}

@media (max-width: 640px) {
  .bonuses-grid {
    grid-template-columns: 1fr;
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
  }

  .section-title {
    font-size: 1.6rem;
  }

  .section-subtitle {
    font-size: 0.9rem;
  }

  .bonus-card {
    padding: 1.5rem;
  }

  .casino-bonuses {
    padding: 3rem 0;
  }
}
</style>

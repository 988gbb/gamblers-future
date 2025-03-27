<template>
  <section class="casinos-hero">
    <div class="hero-background">
      <div class="animated-gradient"></div>
      <div class="overlay-pattern"></div>
    </div>

    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">
          Top Online Casinos of 2025
          <span class="title-accent"></span>
        </h1>

        <p class="hero-subtitle">
          Discover hand-picked online casinos with exclusive bonuses, verified
          payment methods, and top-rated games
        </p>

        <div class="casinos-stats">
          <div class="stat">
            <div class="stat-value">{{ stats.casinos }}</div>
            <div class="stat-label">Casinos Reviewed</div>
          </div>
          <div class="stat">
            <div class="stat-value">${{ stats.bonusValue }}+</div>
            <div class="stat-label">In Bonuses</div>
          </div>
          <div class="stat">
            <div class="stat-value">{{ stats.games }}+</div>
            <div class="stat-label">Games Available</div>
          </div>
        </div>

        <div class="search-container">
          <input
            type="text"
            placeholder="Search for casino name or game provider..."
            class="search-input"
            v-model="searchQuery"
            @keyup.enter="handleSearch"
          />
          <button class="search-button" @click="handleSearch">
            <i class="fas fa-search"></i>
            <span>Find Casino</span>
          </button>
        </div>

        <!-- New Quick Filters Section -->
        <div class="quick-filters">
          <div class="filters-scroll">
            <!-- Game Types -->
            <div
              v-for="filter in quickFilters.gameTypes"
              :key="`game-${filter.value}`"
              :class="[
                'filter-chip',
                { active: isFilterActive('game', filter.value) },
              ]"
              @click="toggleQuickFilter('game', filter.value)"
            >
              <i :class="filter.icon"></i>
              <span>{{ filter.label }}</span>
            </div>

            <!-- Bonus Types -->
            <div
              v-for="filter in quickFilters.bonusTypes"
              :key="`bonus-${filter.value}`"
              :class="[
                'filter-chip',
                { active: isFilterActive('bonus', filter.value) },
              ]"
              @click="toggleQuickFilter('bonus', filter.value)"
            >
              <i :class="filter.icon"></i>
              <span>{{ filter.label }}</span>
            </div>

            <!-- Payment Methods -->
            <div
              v-for="filter in quickFilters.paymentMethods"
              :key="`payment-${filter.value}`"
              :class="[
                'filter-chip',
                { active: isFilterActive('payment', filter.value) },
              ]"
              @click="toggleQuickFilter('payment', filter.value)"
            >
              <i :class="filter.icon"></i>
              <span>{{ filter.label }}</span>
            </div>

            <!-- Other Filters -->
            <div
              v-for="filter in quickFilters.otherFilters"
              :key="`other-${filter.value}`"
              :class="[
                'filter-chip',
                { active: isFilterActive('other', filter.value) },
              ]"
              @click="toggleQuickFilter('other', filter.value)"
            >
              <i :class="filter.icon"></i>
              <span>{{ filter.label }}</span>
            </div>
          </div>

          <div class="filters-fade-right"></div>
        </div>

        <div class="trust-badges">
          <div class="badge">
            <div class="badge-icon">
              <i class="fas fa-shield-alt"></i>
            </div>
            <div class="badge-text">
              <span>Licensed & Secure</span>
              <small>All casinos verified</small>
            </div>
          </div>

          <div class="badge">
            <div class="badge-icon">
              <i class="fas fa-hand-holding-usd"></i>
            </div>
            <div class="badge-text">
              <span>Exclusive Bonuses</span>
              <small>Better than direct</small>
            </div>
          </div>

          <div class="badge">
            <div class="badge-icon">
              <i class="fas fa-bolt"></i>
            </div>
            <div class="badge-text">
              <span>Fast Payouts</span>
              <small>Get your winnings quickly</small>
            </div>
          </div>

          <div class="badge">
            <div class="badge-icon">
              <i class="fas fa-headset"></i>
            </div>
            <div class="badge-text">
              <span>24/7 Support</span>
              <small>Help when you need it</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="featured-ribbon">
      <div class="container">
        <div class="ribbon-content">
          <div class="ribbon-title">
            <i class="fas fa-certificate"></i>
            <span>Editor's Choice: Best Casino of the Month</span>
          </div>
          <div class="top-casino">
            <div class="casino-logo">
              <img :src="topCasino.logo" :alt="topCasino.name" />
            </div>
            <div class="casino-info">
              <h3>{{ topCasino.name }}</h3>
              <div class="casino-rating">
                <div class="stars">
                  <i
                    v-for="n in 5"
                    :key="n"
                    :class="[
                      'fas',
                      n <= topCasino.rating ? 'fa-star' : 'fa-star-o',
                    ]"
                  ></i>
                </div>
                <span>{{ topCasino.rating }}/5</span>
              </div>
            </div>
            <div class="casino-bonus">
              <div class="bonus-amount">{{ topCasino.bonus }}</div>
              <div class="bonus-desc">{{ topCasino.bonusDesc }}</div>
            </div>
            <a :href="topCasino.url" class="play-button">
              Play Now
              <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Live statistics (you can replace with actual data)
const stats = ref({
  casinos: 128,
  bonusValue: "50,000",
  games: 10500,
});

// Search functionality
const searchQuery = ref("");
const handleSearch = () => {
  console.log("Searching for:", searchQuery.value);
  // Implement actual search functionality
  // You might want to emit an event to the parent component
  // or use a router to navigate to search results
};

// Quick filters data
const quickFilters = {
  gameTypes: [
    { label: "Slots", value: "slots", icon: "fas fa-dice" },
    { label: "Live Dealer", value: "live", icon: "fas fa-video" },
    { label: "Table Games", value: "table", icon: "fas fa-table" },
    { label: "Jackpots", value: "jackpots", icon: "fas fa-trophy" },
  ],
  bonusTypes: [
    { label: "Welcome Bonus", value: "welcome", icon: "fas fa-gift" },
    {
      label: "No Deposit",
      value: "nodeposit",
      icon: "fas fa-hand-holding-usd",
    },
    { label: "Free Spins", value: "freespins", icon: "fas fa-sync" },
  ],
  paymentMethods: [
    { label: "Credit Card", value: "creditcard", icon: "fas fa-credit-card" },
    { label: "PayPal", value: "paypal", icon: "fab fa-paypal" },
    { label: "Crypto", value: "crypto", icon: "fab fa-bitcoin" },
  ],
  otherFilters: [
    { label: "Mobile Compatible", value: "mobile", icon: "fas fa-mobile-alt" },
    { label: "4★+ Rating", value: "toprated", icon: "fas fa-star" },
  ],
};

// Active filters
const activeFilters = ref({
  game: [],
  bonus: [],
  payment: [],
  other: [],
});

// Filter functions
const isFilterActive = (type, value) => {
  return activeFilters.value[type].includes(value);
};

const toggleQuickFilter = (type, value) => {
  if (isFilterActive(type, value)) {
    activeFilters.value[type] = activeFilters.value[type].filter(
      (item) => item !== value
    );
  } else {
    activeFilters.value[type].push(value);
  }
  // You would typically emit an event here to notify parent component
  console.log("Active filters:", activeFilters.value);
};

// Top featured casino
const topCasino = ref({
  name: "Lucky Spins Casino",
  logo: "/images/casinos/lucky-spins-logo.png",
  rating: 4.9,
  bonus: "200% up to $1,000",
  bonusDesc: "+ 50 Free Spins",
  url: "/casino/lucky-spins",
});

// You could fetch these values from an API
</script>

<style scoped>
.casinos-hero {
  position: relative;
  padding: 6rem 0 0;
  background-color: #1a1721;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.animated-gradient {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    ellipse at center,
    rgba(221, 69, 68, 0.1) 0%,
    rgba(30, 25, 35, 0) 70%
  );
  animation: rotate 45s linear infinite;
  z-index: 1;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.overlay-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  z-index: 2;
}

.container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  z-index: 3;
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #fff;
  position: relative;
  display: inline-block;
}

.title-accent {
  position: absolute;
  bottom: -5px;
  left: 0;
  height: 8px;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(221, 69, 68, 0) 0%,
    rgba(221, 69, 68, 0.8) 50%,
    rgba(221, 69, 68, 0) 100%
  );
  border-radius: 4px;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}

.casinos-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 3rem;
}

.stat {
  text-align: center;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: #dd4544;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
}

.search-container {
  position: relative;
  max-width: 650px;
  margin: 0 auto 3.5rem;
  display: flex;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  overflow: hidden;
}

.search-input {
  flex: 1;
  height: 60px;
  padding: 0 30px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px 0 0 50px;
  color: #fff;
  font-size: 1.05rem;
  outline: none;
  transition: all 0.3s ease;
  min-width: 0; /* Important to prevent overflow */
}

.search-input:focus {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(221, 69, 68, 0.3);
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.search-button {
  height: 60px;
  padding: 0 30px;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  border: none;
  border-radius: 0 50px 50px 0;
  color: white;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
}

.search-button:hover {
  background: linear-gradient(135deg, #c43a39, #e37e66);
  transform: translateY(-2px);
}

/* Add new styles for quick filters */
.quick-filters {
  position: relative;
  max-width: 800px;
  margin: 0 auto 3rem;
  overflow: hidden;
}

.filters-scroll {
  display: flex;
  gap: 0.75rem;
  padding: 0.5rem;
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scroll-behavior: smooth;
  padding-bottom: 0.5rem;
  mask-image: linear-gradient(to right, black 85%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, black 85%, transparent 100%);
}

.filters-scroll::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

.filter-chip {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  white-space: nowrap;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.filter-chip:hover {
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.9);
}

.filter-chip.active {
  background: rgba(221, 69, 68, 0.15);
  border-color: rgba(221, 69, 68, 0.4);
  color: #fff;
}

.filter-chip.active i {
  color: #dd4544;
}

.filter-chip i {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
}

.filters-fade-right {
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(26, 23, 33, 0),
    rgba(26, 23, 33, 1)
  );
  pointer-events: none;
  z-index: 5;
}

.trust-badges {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}

.badge {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.badge:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.badge-icon {
  width: 40px;
  height: 40px;
  background: rgba(221, 69, 68, 0.1);
  color: #dd4544;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.25rem;
}

.badge-text span {
  display: block;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.badge-text small {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
}

.featured-ribbon {
  background: rgba(0, 0, 0, 0.2);
  margin-top: 4rem;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.ribbon-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.ribbon-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #dd4544;
  font-weight: 600;
}

.ribbon-title i {
  color: #dd4544;
}

.top-casino {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.casino-logo {
  width: 100px;
  height: 50px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
}

.casino-logo img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.casino-info {
  flex: 1;
}

.casino-info h3 {
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
}

.casino-rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stars {
  color: #ffc107;
  display: flex;
  gap: 2px;
}

.casino-bonus {
  padding: 0.75rem 1.25rem;
  background: rgba(221, 69, 68, 0.08);
  border: 1px dashed rgba(221, 69, 68, 0.3);
  border-radius: 8px;
  text-align: center;
}

.bonus-amount {
  font-weight: 700;
  color: white;
  font-size: 1.1rem;
}

.bonus-desc {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.play-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  color: white;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.play-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(221, 69, 68, 0.3);
}

/* Responsive design */
@media (max-width: 1200px) {
  .hero-title {
    font-size: 3rem;
  }
}

@media (max-width: 992px) {
  .casinos-hero {
    padding: 6rem 0 0;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .casinos-stats {
    gap: 2rem;
  }

  .stat-value {
    font-size: 2rem;
  }

  .top-casino {
    flex-wrap: wrap;
  }

  .casino-logo {
    width: 80px;
    height: 40px;
  }

  .casino-info {
    flex-basis: calc(100% - 120px);
  }

  .casino-bonus,
  .play-button {
    margin-top: 1rem;
    flex-basis: 100%;
  }
}

@media (max-width: 768px) {
  .casinos-hero {
    padding: 6rem 0 0;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .casinos-stats {
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  /* Improved mobile search styling */
  .search-container {
    flex-direction: column;
    border-radius: 12px;
    overflow: visible;
    margin-bottom: 2.5rem;
    box-shadow: none;
    width: 100%; /* Ensure full width */
  }

  .search-input {
    flex: none; /* Remove flex property on mobile */
    width: 100%; /* Force full width */
    height: 54px;
    border-radius: 12px;
    margin-bottom: 0.75rem;
    padding: 0 20px;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.07);
    border-width: 1px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.15),
      0 1px 0 rgba(255, 255, 255, 0.03);
    transition: all 0.2s ease;
  }

  .search-input:focus {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
      0 0 0 2px rgba(221, 69, 68, 0.2);
    transform: translateY(-1px);
  }

  .search-button {
    height: 54px;
    border-radius: 12px;
    font-size: 1rem;
    background: linear-gradient(135deg, #dd4544, #e8937c);
    box-shadow: 0 4px 12px rgba(221, 69, 68, 0.3);
    transition: all 0.25s ease;
  }

  .search-button:active {
    transform: translateY(1px);
    box-shadow: 0 2px 8px rgba(221, 69, 68, 0.25);
  }

  .trust-badges {
    flex-direction: column;
    gap: 0.875rem;
    padding: 0 0.5rem;
  }

  .badge {
    width: 100%;
    padding: 0.875rem 1.25rem;
    justify-content: flex-start;
    border-width: 1px;
    background: rgba(255, 255, 255, 0.04);
    transition: all 0.25s ease;
  }

  .badge:hover,
  .badge:active {
    transform: none;
    background: rgba(255, 255, 255, 0.07);
  }

  .badge-icon {
    width: 36px;
    height: 36px;
    font-size: 1.125rem;
    flex-shrink: 0;
  }

  .top-casino {
    padding: 1rem;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .quick-filters {
    margin-bottom: 2rem;
    width: 100%;
  }

  .filter-chip {
    padding: 0.45rem 0.9rem;
    font-size: 0.85rem;
  }

  .filters-scroll {
    gap: 0.5rem;
    padding: 0.25rem;
    mask-image: linear-gradient(to right, black 80%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, black 80%, transparent 100%);
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 1.75rem;
  }

  .search-container {
    margin-bottom: 2rem;
    width: 100%;
    max-width: 100%; /* Ensure it fills the container */
    box-shadow: none; /* Remove shadow on container */
  }

  .search-input {
    flex: none; /* Remove flex property completely */
    width: 100%; /* Force full width */
    height: 60px; /* Taller input for better touch area */
    min-height: 60px; /* Ensure minimum height is respected */
    font-size: 16px; /* iOS ideal size to prevent zoom */
    padding: 0 20px;
    border-radius: 14px;
    margin-bottom: 1rem;
    border: 2px solid rgba(255, 255, 255, 0.15); /* More visible border */
    background: rgba(255, 255, 255, 0.08); /* Slightly brighter background */
  }

  .search-button {
    height: 60px; /* Taller button to match input */
    font-size: 1.1rem;
    width: 100%;
    padding: 0 20px;
    border-radius: 14px;
    font-weight: 700;
    letter-spacing: 0.3px;
    box-shadow: 0 6px 20px rgba(221, 69, 68, 0.4); /* More pronounced shadow */
  }

  /* Make focus state more prominent on very small screens */
  .search-input:focus {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
      0 0 0 3px rgba(221, 69, 68, 0.3); /* More visible focus ring */
    transform: translateY(-1px);
    border-color: rgba(221, 69, 68, 0.4); /* Highlight border on focus */
    background: rgba(
      255,
      255,
      255,
      0.12
    ); /* Brighter background when focused */
  }

  /* Improve placeholder visibility */
  .search-input::placeholder {
    color: rgba(255, 255, 255, 0.6); /* Much brighter placeholder text */
    font-size: 15px; /* Larger placeholder text */
  }

  .quick-filters {
    margin-bottom: 1.75rem;
    margin-top: 0.5rem;
  }

  .filter-chip {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
    gap: 0.4rem;
  }

  .filter-chip i {
    font-size: 0.8rem;
  }

  .filters-fade-right {
    width: 40px;
  }
}

/* Extra styles for very small screens */
@media (max-width: 360px) {
  .search-input,
  .search-button {
    height: 64px !important; /* Force height with !important */
    min-height: 64px; /* Double ensure minimum height */
    flex: none; /* Ensure flex is disabled */
    width: 100%; /* Force full width */
    font-size: 16px; /* Keep at 16px to prevent zoom */
    padding: 0 16px;
    border-width: 2px; /* Maintain thicker border */
  }

  .search-button {
    padding: 0 16px;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .search-button i {
    font-size: 1.2rem; /* Larger icon */
  }

  /* Reduce other element sizes to focus attention on search */
  .trust-badges {
    gap: 10px;
  }

  .badge {
    padding: 10px 15px;
  }

  .badge-icon {
    width: 32px;
    height: 32px;
  }
}

/* Add an additional breakpoint for the smallest phones */
@media (max-width: 320px) {
  .search-input,
  .search-button {
    height: 66px; /* Maximum height for tiny screens */
  }

  .search-input::placeholder {
    font-size: 14px; /* Slightly smaller text to fit */
  }

  .search-button span {
    font-size: 16px; /* Ensure button text is readable */
  }

  .hero-title {
    font-size: 1.5rem; /* Smaller title */
  }

  .hero-subtitle {
    font-size: 0.95rem; /* Smaller subtitle */
  }
}
</style>

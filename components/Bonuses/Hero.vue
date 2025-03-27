<template>
  <section class="bonuses-hero">
    <!-- Background elements -->
    <div class="hero-background">
      <div class="bg-pattern"></div>
      <div class="bg-gradient-overlay"></div>
      <div class="floating-elements">
        <div class="floating-element coins-1">
          <i class="fas fa-coins"></i>
        </div>
        <div class="floating-element coins-2">
          <i class="fas fa-dollar-sign"></i>
        </div>
        <div class="floating-element gift">
          <i class="fas fa-gift"></i>
        </div>
        <div class="floating-element stars">
          <i class="fas fa-star"></i>
        </div>
        <div class="floating-element percentage">
          <i class="fas fa-percentage"></i>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <!-- Main heading with gradient effect -->
          <h1 class="hero-title">
            <span class="gradient-text">Exclusive Casino Bonuses</span>
            <span class="title-caption">Unlock Maximum Value</span>
          </h1>

          <p class="hero-description">
            We've negotiated the best casino bonus offers so you can play more
            and win more. From welcome packages to free spins and no deposit
            bonuses, find the perfect offer to boost your bankroll.
          </p>

          <div class="bonus-highlights">
            <div class="highlight-item">
              <div class="highlight-icon">
                <i class="fas fa-gift"></i>
              </div>
              <div class="highlight-text">
                <strong>{{ totalBonuses }}+</strong> Active Bonuses
              </div>
            </div>
            <div class="highlight-item">
              <div class="highlight-icon">
                <i class="fas fa-certificate"></i>
              </div>
              <div class="highlight-text">
                <strong>{{ exclusiveBonuses }}</strong> Exclusive Offers
              </div>
            </div>
            <div class="highlight-item">
              <div class="highlight-icon">
                <i class="fas fa-sync-alt"></i>
              </div>
              <div class="highlight-text">Updated <strong>Daily</strong></div>
            </div>
          </div>

          <div class="cta-buttons">
            <a href="#top-bonuses" class="cta-button primary">
              <i class="fas fa-chevron-down"></i> See Top Bonuses
            </a>
            <a href="#bonus-types" class="cta-button secondary">
              <i class="fas fa-filter"></i> Browse by Type
            </a>
          </div>
        </div>

        <!-- Featured bonus card -->
        <div class="featured-bonus">
          <div class="ribbon">
            <span>Featured</span>
          </div>
          <div class="casino-logo">
            <img :src="featuredBonus.logo" :alt="featuredBonus.casinoName" />
          </div>
          <h3 class="casino-name">{{ featuredBonus.casinoName }}</h3>
          <div class="bonus-value">
            <span class="bonus-amount">{{ featuredBonus.amount }}</span>
            <span class="bonus-percentage" v-if="featuredBonus.percentage">
              + {{ featuredBonus.percentage }}% Match
            </span>
          </div>
          <div class="bonus-details">
            <div class="free-spins" v-if="featuredBonus.freeSpins">
              <i class="fas fa-sync-alt"></i>
              <span>{{ featuredBonus.freeSpins }} Free Spins</span>
            </div>
            <div class="wagering">
              <i class="fas fa-redo-alt"></i>
              <span>{{ featuredBonus.wagering }}x Wagering</span>
            </div>
          </div>
          <div class="bonus-code" v-if="featuredBonus.code">
            <span class="code-label">Bonus Code:</span>
            <span class="code-value">{{ featuredBonus.code }}</span>
            <button class="copy-code" @click="copyCode(featuredBonus.code)">
              <i class="fas fa-copy"></i>
            </button>
          </div>
          <a :href="featuredBonus.claimUrl" class="claim-bonus">
            Claim Bonus <i class="fas fa-arrow-right"></i>
          </a>
          <p class="terms"></p>
        </div>
      </div>

      <!-- Search and filter section -->
      <div class="search-filters">
        <h2 class="filters-title">Find Your Perfect Bonus</h2>

        <!-- Add the Learn About Bonus Types button here -->
        <button @click="showBonusTypesModal = true" class="learn-more-button">
          <i class="fas fa-info-circle"></i> Learn About Bonus Types
        </button>

        <div class="search-container">
          <div class="search-input">
            <i class="fas fa-search"></i>
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Search bonuses by casino name or type..."
            />
            <button
              class="clear-search"
              v-if="searchQuery"
              @click="searchQuery = ''"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>

        <div class="filter-options">
          <div class="filter-group">
            <label>Bonus Type</label>
            <div class="filter-buttons">
              <button
                v-for="type in bonusTypes"
                :key="type.id"
                :class="[
                  'filter-button',
                  { active: selectedTypes.includes(type.id) },
                ]"
                @click="toggleType(type.id)"
              >
                <i :class="type.icon"></i>
                {{ type.name }}
              </button>
            </div>
          </div>

          <div class="filter-group">
            <label>Min. Deposit</label>
            <div class="range-slider">
              <input
                type="range"
                v-model="minDeposit"
                min="0"
                max="100"
                step="5"
              />
              <div class="range-value">
                {{ minDeposit > 0 ? `$${minDeposit}` : "No Deposit" }}
              </div>
            </div>
          </div>

          <div class="filter-group">
            <label>Max. Wagering</label>
            <div class="range-slider">
              <input
                type="range"
                v-model="maxWagering"
                min="0"
                max="100"
                step="5"
              />
              <div class="range-value">{{ maxWagering }}x</div>
            </div>
          </div>
        </div>

        <div class="filter-actions">
          <button class="filter-button apply" @click="applyFilters">
            <i class="fas fa-check"></i> Apply Filters
          </button>
          <button class="filter-button reset" @click="resetFilters">
            <i class="fas fa-undo"></i> Reset
          </button>
        </div>
      </div>
    </div>

    <!-- Add the teleport at the end of the template -->
    <teleport to="body">
      <div
        v-if="showBonusTypesModal"
        class="modal-backdrop"
        @click="showBonusTypesModal = false"
      >
        <div @click.stop class="modal-container">
          <BonusTypesModal @close="closeModal" />
        </div>
      </div>
    </teleport>

    <!-- Copy notification -->
    <div class="copy-notification" v-if="showCopyNotification">
      <i class="fas fa-check-circle"></i>
      <span>Bonus code copied to clipboard!</span>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import {
  getFeaturedBonus,
  getExclusiveBonuses,
  getBonusesByType,
} from "../../data/bonuses";
import BonusTypesModal from "./BonusTypes/BonusTypesModal.vue";

// Bonus counts for display
const totalBonuses = ref(0);
const exclusiveBonuses = ref(0);

// Featured bonus data
const featuredBonus = ref({});

// Bonus types for filter
const bonusTypes = [
  { id: "welcome", name: "Welcome", icon: "fas fa-gift" },
  { id: "nodeposit", name: "No Deposit", icon: "fas fa-dollar-sign" },
  { id: "freespins", name: "Free Spins", icon: "fas fa-sync-alt" },
  { id: "cashback", name: "Cashback", icon: "fas fa-undo" },
  { id: "reload", name: "Reload", icon: "fas fa-redo-alt" },
  { id: "loyalty", name: "Loyalty", icon: "fas fa-award" },
];

// Load bonus data
onMounted(() => {
  // Get featured bonus
  featuredBonus.value = getFeaturedBonus();

  // Set bonus counts
  totalBonuses.value = 15; // Total from our data file
  exclusiveBonuses.value = getExclusiveBonuses().length;
});

// Filters
const searchQuery = ref("");
const selectedTypes = ref(["welcome"]);
const minDeposit = ref(10);
const maxWagering = ref(40);

// Copy functionality
const showCopyNotification = ref(false);

const copyCode = (code) => {
  navigator.clipboard.writeText(code);
  showCopyNotification.value = true;
  setTimeout(() => {
    showCopyNotification.value = false;
  }, 3000);
};

// Filter methods
const toggleType = (typeId) => {
  if (selectedTypes.value.includes(typeId)) {
    selectedTypes.value = selectedTypes.value.filter((id) => id !== typeId);
  } else {
    selectedTypes.value.push(typeId);
  }
};

const applyFilters = () => {
  // Emit event for parent component to handle filtering
  const filters = {
    search: searchQuery.value,
    types: selectedTypes.value,
    minDeposit: minDeposit.value,
    maxWagering: maxWagering.value,
  };

  console.log("Applying filters:", filters);

  // You would typically emit an event here
  // emit('filter-bonuses', filters);
};

const resetFilters = () => {
  searchQuery.value = "";
  selectedTypes.value = ["welcome"];
  minDeposit.value = 10;
  maxWagering.value = 40;
};

// Add this to your existing script setup
const showBonusTypesModal = ref(false);

const closeModal = () => {
  showBonusTypesModal.value = false;
};
</script>

<style scoped>
.bonuses-hero {
  position: relative;
  padding: 6rem 0 4rem;
  color: white;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1a1721;
  background-image: url("/images/background/hideout.svg");
  background-repeat: repeat;
  background-size: 300px 300px;
  opacity: 0.12;
  z-index: -2;
  animation: patternShift 180s linear infinite;
}

@keyframes patternShift {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 300px 300px;
  }
}

.bg-gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      circle at 15% 15%,
      rgba(221, 69, 68, 0.15) 0%,
      transparent 45%
    ),
    radial-gradient(
      circle at 85% 85%,
      rgba(64, 81, 181, 0.1) 0%,
      transparent 45%
    );
  z-index: -1;
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.floating-element {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.floating-element i {
  color: rgba(255, 255, 255, 0.7);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.coins-1 {
  top: 15%;
  right: 10%;
  width: 70px;
  height: 70px;
  animation: float 8s ease-in-out infinite;
}

.coins-1 i {
  font-size: 28px;
  color: #ffc107;
}

.coins-2 {
  bottom: 15%;
  left: 8%;
  width: 60px;
  height: 60px;
  animation: float 7s ease-in-out infinite 1s;
}

.coins-2 i {
  font-size: 24px;
  color: #4caf50;
}

.gift {
  top: 60%;
  right: 15%;
  width: 80px;
  height: 80px;
  animation: float 10s ease-in-out infinite 0.5s;
}

.gift i {
  font-size: 32px;
  color: #dd4544;
}

.stars {
  top: 25%;
  left: 12%;
  width: 50px;
  height: 50px;
  animation: float 9s ease-in-out infinite 2s;
}

.stars i {
  font-size: 22px;
  color: #ffc107;
}

.percentage {
  bottom: 30%;
  right: 28%;
  width: 55px;
  height: 55px;
  animation: float 8.5s ease-in-out infinite 1.5s;
}

.percentage i {
  font-size: 24px;
  color: #2196f3;
}

/* Enhance the float animation with slight rotation */
@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
  100% {
    transform: translateY(0) rotate(0deg);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
}

.hero-content {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 4rem;
}

.hero-text {
  padding-right: 2rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  display: flex;
  flex-direction: column;
}

.gradient-text {
  background: linear-gradient(135deg, #dd4544, #e8937c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-caption {
  font-size: 1.8rem;
  color: white;
  margin-top: 0.5rem;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  max-width: 600px;
}

.bonus-highlights {
  display: flex;
  gap: 2rem;
  margin-bottom: 2.5rem;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.highlight-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(221, 69, 68, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dd4544;
  font-size: 1.2rem;
}

.highlight-text {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
}

.highlight-text strong {
  color: white;
  font-weight: 700;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.9rem 1.4rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.cta-button.primary {
  background: linear-gradient(135deg, #dd4544, #e8937c);
  color: white;
  box-shadow: 0 8px 20px rgba(221, 69, 68, 0.3);
}

.cta-button.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(221, 69, 68, 0.4);
}

.cta-button.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.cta-button.secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-3px);
}

.featured-bonus {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
}

.featured-bonus::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(221, 69, 68, 0.05) 0%,
    transparent 70%
  );
  z-index: 0;
  pointer-events: none;
}

.ribbon {
  position: absolute;
  top: 20px;
  right: -30px;
  width: 150px;
  height: 30px;
  background: #dd4544;
  transform: rotate(45deg);
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  z-index: 2;
}

.casino-logo {
  width: 120px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  margin-bottom: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.casino-logo img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.casino-name {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.bonus-value {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;
}

.bonus-amount {
  font-size: 2.2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.bonus-percentage {
  font-size: 1.2rem;
  color: white;
  font-weight: 600;
}

.bonus-details {
  display: flex;
  gap: 1.2rem;
  margin-bottom: 1.2rem;
}

.free-spins,
.wagering {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(255, 255, 255, 0.08);
  padding: 0.6rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
}

.free-spins i,
.wagering i {
  color: #dd4544;
}

.bonus-code {
  background: rgba(255, 255, 255, 0.08);
  padding: 0.8rem 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
}

.code-label {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
}

.code-value {
  font-weight: 700;
  letter-spacing: 0.5px;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
}

.copy-code {
  margin-left: auto;
  background: rgba(221, 69, 68, 0.2);
  border: none;
  color: #dd4544;
  width: 30px;
  height: 30px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.copy-code:hover {
  background: rgba(221, 69, 68, 0.9);
  color: white;
}

.claim-bonus {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  color: white;
  padding: 1rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
  transition: all 0.3s ease;
}

.claim-bonus:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(221, 69, 68, 0.3);
}

.terms {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.terms i {
  margin-top: 0.2rem;
  font-size: 0.7rem;
}

/* Search and Filters */
.search-filters {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  margin-bottom: 3rem;
}

.filters-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
}

.search-container {
  margin-bottom: 2rem;
}

.search-input {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.search-input i {
  position: absolute;
  left: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.6);
}

.search-input input {
  width: 100%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 3rem;
  border-radius: 10px;
  color: white;
  font-size: 1rem;
}

.search-input input:focus {
  outline: none;
  border-color: rgba(221, 69, 68, 0.5);
  background: rgba(255, 255, 255, 0.12);
}

.clear-search {
  position: absolute;
  right: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: all 0.3s ease;
}

.clear-search:hover {
  color: white;
}

.filter-options {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.filter-group label {
  display: block;
  margin-bottom: 0.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-button:hover {
  background: rgba(255, 255, 255, 0.12);
}

.filter-button.active {
  background: rgba(221, 69, 68, 0.2);
  border-color: rgba(221, 69, 68, 0.4);
  color: #dd4544;
}

.range-slider {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.range-slider input {
  width: 100%;
  -webkit-appearance: none;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  outline: none;
}

.range-slider input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  background: #dd4544;
  border-radius: 50%;
  cursor: pointer;
}

.range-value {
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
}

.filter-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.filter-button.apply,
.filter-button.reset {
  padding: 0.8rem 1.5rem;
  font-weight: 600;
}

.filter-button.apply {
  background: #dd4544;
  border-color: #dd4544;
  color: white;
}

.filter-button.apply:hover {
  background: #c83c3b;
}

.filter-button.reset {
  background: rgba(255, 255, 255, 0.1);
}

/* Copy notification */
.copy-notification {
  position: fixed;
  bottom: 25px;
  right: 25px;
  background: rgba(26, 23, 33, 0.9);
  color: white;
  padding: 0.9rem 1.3rem;
  border-radius: 10px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.9rem;
  z-index: 1000;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.3s ease;
  border: 1px solid rgba(76, 175, 80, 0.3);
  backdrop-filter: blur(10px);
}

.copy-notification i {
  color: #4caf50;
  background: rgba(76, 175, 80, 0.15);
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Add these new styles */
.learn-more-button {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.learn-more-button:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.learn-more-button i {
  color: #ffc107;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease;
}

.modal-container {
  width: 90%;
  max-width: 1000px;
  max-height: 90vh;
  overflow: hidden; /* Add this to prevent content from spilling out */
  animation: scaleIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* Your existing styles */

/* Responsive styles */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-top: 2rem;
  }

  .hero-text {
    padding-right: 0;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .title-caption {
    font-size: 1.6rem;
  }

  .bonus-highlights {
    justify-content: center;
  }

  .cta-buttons {
    justify-content: center;
  }

  .featured-bonus {
    max-width: 500px;
    margin: 0 auto;
  }

  .filter-options {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .bonuses-hero {
    padding: 4rem 0 3rem;
  }

  .hero-title {
    font-size: 2.2rem;
  }

  .title-caption {
    font-size: 1.4rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .bonus-highlights {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 0.8rem;
  }

  .cta-button {
    width: 100%;
    justify-content: center;
  }

  .search-filters {
    padding: 1.5rem;
  }

  .filters-title {
    font-size: 1.4rem;
  }

  .filter-actions {
    flex-direction: column;
    gap: 0.8rem;
  }

  .filter-button.apply,
  .filter-button.reset {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 2rem;
  }

  .title-caption {
    font-size: 1.2rem;
  }

  .featured-bonus {
    padding: 1.5rem;
  }

  .bonus-amount {
    font-size: 1.8rem;
  }

  .bonus-details {
    flex-direction: column;
    gap: 0.8rem;
  }

  .ribbon {
    top: 15px;
    right: -35px;
    width: 140px;
    height: 25px;
    font-size: 0.8rem;
  }
}
</style>

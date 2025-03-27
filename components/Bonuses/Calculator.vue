<template>
  <section class="calculator-section">
    <!-- Updated background structure -->
    <div class="bg-image"></div>
    <div class="bg-overlay"></div>
    <div class="bg-pattern"></div>

    <!-- Add floating casino icons -->
    <div class="floating-icons">
      <i
        class="fas fa-dice floating-icon"
        style="top: 15%; left: 10%; animation-delay: 0s"
      ></i>
      <i
        class="fas fa-coins floating-icon"
        style="top: 25%; left: 85%; animation-delay: 0.7s"
      ></i>
      <i
        class="fas fa-spade floating-icon"
        style="top: 65%; left: 8%; animation-delay: 1.5s"
      ></i>
      <i
        class="fas fa-crown floating-icon"
        style="top: 12%; left: 60%; animation-delay: 2.3s"
      ></i>
      <i
        class="fas fa-diamond floating-icon"
        style="top: 70%; left: 75%; animation-delay: 3.1s"
      ></i>
      <i
        class="fas fa-club floating-icon"
        style="top: 45%; left: 92%; animation-delay: 3.8s"
      ></i>
      <i
        class="fas fa-heart floating-icon"
        style="top: 85%; left: 40%; animation-delay: 4.5s"
      ></i>
      <i
        class="fas fa-gem floating-icon"
        style="top: 35%; left: 25%; animation-delay: 5.2s"
      ></i>
    </div>

    <div class="container">
      <div class="section-header">
        <h2>Bonus Value Calculator</h2>
        <p>See the real value after wagering requirements</p>
      </div>

      <div class="calculator-card">
        <div class="calculator-inputs">
          <!-- Bonus Type Selector -->
          <div class="input-row">
            <div class="input-group full-width">
              <label>Bonus Type</label>
              <div class="toggle-buttons">
                <button
                  v-for="type in bonusTypes"
                  :key="type.id"
                  :class="[
                    'toggle-button',
                    { active: bonusData.type === type.id },
                  ]"
                  @click="bonusData.type = type.id"
                >
                  <i :class="type.icon"></i> {{ type.label }}
                </button>
              </div>
            </div>
          </div>

          <div class="input-row compact">
            <!-- Basic Bonus Parameters -->
            <div
              class="input-group"
              :class="{ 'half-width': bonusData.type === 'match' }"
            >
              <label for="bonus-amount">Bonus Amount ($)</label>
              <input
                id="bonus-amount"
                type="number"
                v-model.number="bonusData.amount"
                placeholder="100"
                min="0"
              />
            </div>

            <div
              class="input-group half-width"
              v-if="bonusData.type === 'match'"
            >
              <label for="match-percentage">Match %</label>
              <input
                id="match-percentage"
                type="number"
                v-model.number="bonusData.matchPercentage"
                placeholder="100"
                min="0"
                max="1000"
              />
            </div>
          </div>

          <!-- Wagering Requirements -->
          <div class="input-row compact">
            <div class="input-group half-width">
              <label for="wagering-multiplier">Wagering (x)</label>
              <input
                id="wagering-multiplier"
                type="number"
                v-model.number="bonusData.wageringMultiplier"
                placeholder="35"
                min="0"
              />
            </div>

            <div class="input-group half-width">
              <label for="house-edge">House Edge</label>
              <div class="select-wrapper">
                <select id="house-edge" v-model.number="bonusData.houseEdge">
                  <option value="0.5">Blackjack (0.5%)</option>
                  <option value="1.5">Baccarat (1.5%)</option>
                  <option value="2.7">Roulette (2.7%)</option>
                  <option value="4">Slots - Low (4%)</option>
                  <option value="6">Slots - Med (6%)</option>
                  <option value="8">Slots - High (8%)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="calculator-results">
          <div class="results-grid">
            <div class="value-meter">
              <div class="meter-container">
                <div
                  class="meter-bar"
                  :style="{
                    width: `${Math.min(Math.max(valueRatio, 0), 100)}%`,
                    backgroundColor: qualityColor,
                  }"
                ></div>
              </div>
              <div class="meter-value">
                {{ valueRatio.toFixed(0) }}%
                <span class="value-label">Real Value</span>
              </div>
            </div>

            <div class="results-summary">
              <div class="result-item">
                <div class="result-value primary">
                  ${{ realValue.toFixed(0) }}
                </div>
                <div class="result-label">After Wagering</div>
              </div>

              <div class="vs-badge">vs</div>

              <div class="result-item">
                <div class="result-value">${{ nominalValue.toFixed(0) }}</div>
                <div class="result-label">Advertised</div>
              </div>
            </div>
          </div>

          <div class="primary-insight">
            <i :class="primaryInsight.icon"></i>
            <span>{{ primaryInsight.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, reactive } from "vue";

// Bonus types configuration
const bonusTypes = [
  { id: "match", label: "Deposit Match", icon: "fas fa-percentage" },
  { id: "free", label: "Free Bonus", icon: "fas fa-gift" },
];

// Default calculator values
const bonusData = reactive({
  type: "match",
  amount: 100,
  matchPercentage: 100,
  wageringMultiplier: 35,
  houseEdge: 4,
});

// Calculate bonus values
const nominalValue = computed(() => {
  try {
    if (bonusData.type === "match") {
      const matchAmount =
        ((parseFloat(bonusData.amount) || 0) *
          (parseFloat(bonusData.matchPercentage) || 0)) /
        100;
      return Math.min(matchAmount, parseFloat(bonusData.amount) || 0);
    } else {
      return parseFloat(bonusData.amount) || 0;
    }
  } catch (error) {
    return 0;
  }
});

const totalWagering = computed(() => {
  return nominalValue.value * (parseFloat(bonusData.wageringMultiplier) || 0);
});

const expectedLoss = computed(() => {
  return totalWagering.value * ((parseFloat(bonusData.houseEdge) || 0) / 100);
});

const realValue = computed(() => {
  const calculatedValue = nominalValue.value - expectedLoss.value;
  return Math.max(calculatedValue, 0);
});

const valueRatio = computed(() => {
  if (!nominalValue.value || nominalValue.value === 0) return 0;
  const ratio = (realValue.value / nominalValue.value) * 100;
  return Math.min(ratio, 100);
});

const qualityColor = computed(() => {
  const ratio = valueRatio.value;
  if (ratio >= 80) return "#4caf50"; // Excellent - Green
  if (ratio >= 60) return "#8bc34a"; // Good - Light Green
  if (ratio >= 40) return "#ffc107"; // Fair - Yellow
  if (ratio >= 20) return "#ff9800"; // Below average - Orange
  return "#f44336"; // Poor - Red
});

const primaryInsight = computed(() => {
  const ratio = valueRatio.value;

  if (parseFloat(bonusData.wageringMultiplier) === 0) {
    return {
      icon: "fas fa-check-circle text-success",
      text: "This bonus has no wagering requirements! 100% real value.",
    };
  }

  if (ratio >= 80) {
    return {
      icon: "fas fa-thumbs-up text-success",
      text: "Excellent bonus value! This is a great offer to claim.",
    };
  }

  if (ratio >= 60) {
    return {
      icon: "fas fa-check text-success",
      text: "Good bonus value. This offer is worth taking.",
    };
  }

  if (ratio >= 40) {
    return {
      icon: "fas fa-balance-scale text-warning",
      text: "Fair bonus value. Consider if it matches your playing style.",
    };
  }

  if (ratio >= 20) {
    return {
      icon: "fas fa-exclamation-circle text-warning",
      text: "Below average value. High wagering makes this difficult to clear.",
    };
  }

  return {
    icon: "fas fa-thumbs-down text-danger",
    text: "Poor value. High wagering requirements significantly reduce the real value.",
  };
});
</script>

<style scoped>
.calculator-section {
  padding: 3rem 0;
  position: relative;
  overflow: hidden;
}

/* Dark base background */
.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a1333 0%, #0d0c1f 100%);
  z-index: -3;
}

/* Overlay with color adjustment */
.bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      circle at 25% 25%,
      rgba(255, 215, 0, 0.05) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 75% 75%,
      rgba(138, 43, 226, 0.03) 0%,
      transparent 50%
    );
  z-index: -2;
}

/* The glamorous.svg pattern */
.bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/images/glamorous.svg");
  background-repeat: repeat;
  background-size: 400px 400px;
  opacity: 0.2;
  z-index: -1;
}

/* Remove or comment out your old .bg-pattern::before and ::after styles */

/* Add floating casino icons styling */
.floating-icons {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.2;
  }
  50% {
    transform: translateY(-15px) rotate(5deg);
    opacity: 0.5;
  }
  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.2;
  }
}

.floating-icon {
  position: absolute;
  font-size: 1.8rem;
  opacity: 0.2;
  color: #ffd700;
  animation: float 8s ease-in-out infinite;
  filter: drop-shadow(0 0 6px rgba(255, 215, 0, 0.3));
}

.fa-dice {
  color: #ff9800;
}

.fa-coins {
  color: #ffc107;
}

.fa-spade {
  color: #ffffff;
}

.fa-crown {
  color: #ffd700;
}

.fa-diamond {
  color: #ff5252;
}

.fa-club {
  color: #ffffff;
}

.fa-heart {
  color: #ff5252;
}

.fa-gem {
  color: #9c27b0;
}

/* Update to make calculator card more luxurious */
.calculator-card {
  background: rgba(30, 25, 45, 0.7);
  border-radius: 12px;
  border: 1px solid rgba(255, 215, 0, 1);
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3), 0 0 15px rgba(255, 215, 0, 0.1);
  backdrop-filter: blur(10px);
}

.calculator-inputs {
  padding: 1.2rem;
  border-bottom: 1px solid rgba(255, 215, 0, 0.08);
  background: linear-gradient(
    180deg,
    rgba(33, 20, 50, 0.5) 0%,
    rgba(21, 23, 30, 0.5) 100%
  );
}

.container {
  max-width: 650px; /* Reduced from 800px */
  margin: 0 auto;
  padding: 0 1rem; /* Reduced padding */
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 1.5rem; /* Reduced from 2rem */
}

.section-header h2 {
  font-size: 1.8rem; /* Reduced from 2rem */
  font-weight: 700;
  background: linear-gradient(135deg, #ffc107, #ff9800);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.3rem; /* Reduced from 0.5rem */
}

.section-header p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem; /* Reduced from 1rem */
}

.calculator-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
}

.calculator-inputs {
  padding: 1.2rem; /* Reduced from 1.5rem */
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(
    180deg,
    rgba(26, 23, 33, 0.3) 0%,
    rgba(26, 23, 33, 0.5) 100%
  );
}

.input-row {
  display: flex;
  gap: 0.8rem; /* Reduced from 1rem */
  margin-bottom: 1.2rem; /* Reduced from 1.5rem */
}

.input-row.compact {
  margin-bottom: 0.8rem; /* Even more compact */
}

.input-row:last-child {
  margin-bottom: 0;
}

.input-group {
  flex: 1;
}

.input-group.half-width {
  flex: 1;
}

.input-group.full-width {
  flex: 2;
  width: 100%;
}

.input-group label {
  display: block;
  margin-bottom: 0.3rem; /* Reduced from 0.5rem */
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  font-size: 0.8rem; /* Reduced from 0.9rem */
}

.input-group input,
.select-wrapper select {
  width: 100%;
  padding: 0.6rem 0.8rem; /* Reduced from 0.8rem */
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 0.9rem; /* Reduced from 1rem */
  transition: all 0.3s ease;
}

.input-group input:focus,
.select-wrapper select:focus {
  outline: none;
  border-color: rgba(255, 193, 7, 0.5);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 2px rgba(255, 193, 7, 0.1);
}

.select-wrapper {
  position: relative;
}

.select-wrapper select {
  appearance: none;
  padding-right: 2rem;
}

.select-wrapper::after {
  content: "▼";
  position: absolute;
  right: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.7rem;
  pointer-events: none;
}

.toggle-buttons {
  display: flex;
  gap: 0.5rem;
}

.toggle-button {
  flex: 1;
  padding: 0.6rem 0.8rem; /* Reduced from 0.8rem */
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 0.8rem; /* Reduced from 0.9rem */
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.toggle-button i {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
}

.toggle-button:hover {
  background: rgba(255, 255, 255, 0.08);
}

.toggle-button.active {
  background: rgba(255, 215, 0, 0.15);
  border-color: rgba(255, 215, 0, 0.3);
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.1);
}

.toggle-button.active i {
  color: #ffd700;
}

/* Results styling */
.calculator-results {
  padding: 1.2rem; /* Reduced from 1.5rem */
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.results-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.value-meter {
  position: relative;
  margin-bottom: 0.8rem; /* Reduced from 1.5rem */
}

.meter-container {
  height: 10px; /* Reduced from 12px */
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.meter-bar {
  height: 100%;
  border-radius: 5px;
  transition: all 0.5s ease;
  background-image: linear-gradient(
    90deg,
    rgba(255, 215, 0, 0.7),
    rgba(255, 152, 0, 0.9)
  );
  box-shadow: 0 0 8px rgba(255, 215, 0, 0.3);
}

.meter-value {
  font-size: 1.5rem; /* Reduced from 1.8rem */
  font-weight: 700;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.value-label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
}

.results-summary {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem; /* Reduced from 1.5rem */
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 0.8rem;
  position: relative;
}

.result-item {
  text-align: center;
  flex: 1;
}

.result-value {
  font-size: 1.3rem; /* Reduced from 1.5rem */
  font-weight: 700;
  color: white;
}

.result-value.primary {
  font-size: 1.5rem; /* Reduced from 1.8rem */
  background: linear-gradient(135deg, #ffd700, #ff9800);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
}

.result-label {
  font-size: 0.75rem; /* Reduced from 0.8rem */
  color: rgba(255, 255, 255, 0.7);
}

.vs-badge {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 26px;
  height: 26px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.primary-insight {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 0.8rem; /* Reduced from 1rem */
  border-left: 3px solid rgba(255, 193, 7, 0.5);
}

.primary-insight i {
  font-size: 0.9rem; /* Reduced from 1rem */
  margin-top: 0.1rem;
}

.primary-insight span {
  flex: 1;
  font-size: 0.85rem; /* Reduced from 0.95rem */
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
}

.text-success {
  color: #ffc107; /* Changed to match new gold theme */
}

.text-warning {
  color: #ff9800;
}

.text-danger {
  color: #f44336;
}

/* Responsive styles */
@media (max-width: 600px) {
  .container {
    padding: 0 0.8rem;
  }

  .input-row {
    flex-direction: column;
    gap: 0.7rem;
  }

  .section-header h2 {
    font-size: 1.5rem;
  }

  .meter-value {
    font-size: 1.3rem;
  }

  .result-value {
    font-size: 1.1rem;
  }

  .result-value.primary {
    font-size: 1.3rem;
  }
}
</style>

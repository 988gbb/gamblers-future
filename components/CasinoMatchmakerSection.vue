<template>
  <section class="matchmaker-section">
    <!-- Fancy Divider with Find Match Button -->
    <div class="fancy-divider">
      <!-- Top wave shape -->
      <div class="wave-top">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0 C480,80 960,80 1440,0 V120 H0 Z" fill="#1a1721" />
        </svg>
      </div>

      <!-- Central content with matchmaker button -->
      <div class="divider-content">
        <div class="content-wrapper">
          <div class="divider-line left"></div>
          <button class="find-match-button" @click="openModal">
            <div class="button-glow"></div>
            <div class="icon-container">
              <i class="fas fa-dice"></i>
            </div>
            <div class="button-text">Find Your Perfect Casino</div>
            <div class="pulse-effect"></div>
          </button>
          <div class="divider-line right"></div>
        </div>
      </div>

      <!-- Bottom wave shape -->
      <div class="wave-bottom">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,120 C480,40 960,40 1440,120 V0 H0 Z" fill="#1a1721" />
        </svg>
      </div>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal-container">
          <button class="modal-close" @click="closeModal">
            <i class="fas fa-times"></i>
          </button>
          <div class="modal-content">
            <h2 class="modal-title">Find Your Perfect Casino Match</h2>

            <!-- Matchmaker Content -->
            <div class="matchmaker-container">
              <!-- Progress steps -->
              <div class="progress-bar">
                <div
                  class="progress"
                  :style="{ width: `${(currentStep / 3) * 100}%` }"
                ></div>
              </div>

              <!-- Step indicators -->
              <div class="steps-indicator">
                <div
                  v-for="step in 3"
                  :key="step"
                  class="step"
                  :class="{
                    active: currentStep >= step,
                    current: currentStep === step,
                  }"
                >
                  {{ step }}
                </div>
              </div>

              <!-- Step Content -->
              <!-- Step 1: Game Selection -->
              <div v-if="currentStep === 1" class="step-content">
                <h3>What games do you prefer?</h3>

                <div class="options-grid">
                  <div
                    v-for="option in gameOptions"
                    :key="option.id"
                    class="option-card"
                    :class="{ selected: selectedGame === option.id }"
                    @click="selectedGame = option.id"
                  >
                    <i :class="option.icon"></i>
                    <span>{{ option.name }}</span>
                  </div>
                </div>

                <button
                  class="next-btn"
                  @click="nextStep"
                  :disabled="!selectedGame"
                >
                  Continue
                </button>
              </div>

              <!-- Step 2: Experience Level -->
              <div v-if="currentStep === 2" class="step-content">
                <h3>Your experience level?</h3>

                <div class="experience-selector">
                  <div
                    v-for="level in 5"
                    :key="level"
                    class="exp-level"
                    :class="{ active: experienceLevel >= level }"
                    @click="experienceLevel = level"
                  >
                    <span>{{ getExpLevelName(level) }}</span>
                  </div>
                </div>

                <div class="actions">
                  <button class="back-btn" @click="prevStep">Back</button>
                  <button class="next-btn" @click="nextStep">Continue</button>
                </div>
              </div>

              <!-- Step 3: Preferences -->
              <div v-if="currentStep === 3" class="step-content">
                <h3>
                  What matters most?
                  <span class="subtitle">(Pick up to 2)</span>
                </h3>

                <div class="preferences-grid">
                  <div
                    v-for="pref in preferences"
                    :key="pref.id"
                    class="preference-item"
                    :class="{ selected: selectedPreferences.includes(pref.id) }"
                    @click="togglePreference(pref.id)"
                  >
                    <i :class="pref.icon"></i>
                    <span>{{ pref.name }}</span>
                  </div>
                </div>

                <div class="actions">
                  <button class="back-btn" @click="prevStep">Back</button>
                  <button
                    class="next-btn"
                    @click="showResults"
                    :disabled="selectedPreferences.length === 0"
                  >
                    Show Matches
                  </button>
                </div>
              </div>

              <!-- Results -->
              <div v-if="currentStep === 4" class="results">
                <div class="top-match">
                  <div class="match-score">97%</div>
                  <div class="casino-details">
                    <h4>Lucky Spins Casino</h4>
                    <p class="bonus">200% up to $500 + 100 Free Spins</p>
                    <a href="#" class="play-btn">Play Now</a>
                  </div>
                </div>

                <div class="other-matches">
                  <div
                    class="match-item"
                    v-for="(match, index) in otherMatches"
                    :key="index"
                  >
                    <div class="match-percent">{{ match.percent }}%</div>
                    <div class="match-name">{{ match.name }}</div>
                    <a :href="match.link" class="view-link">Visit</a>
                  </div>
                </div>

                <button class="restart-btn" @click="restart">Try Again</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Modal state
const isModalOpen = ref(false);

// Matchmaker state
const currentStep = ref(1);
const selectedGame = ref(null);
const experienceLevel = ref(3);
const selectedPreferences = ref([]);

// Game options data
const gameOptions = [
  { id: "slots", name: "Slots", icon: "fas fa-dice-d20" },
  { id: "poker", name: "Poker", icon: "fas fa-crown" },
  { id: "roulette", name: "Roulette", icon: "fas fa-circle-notch" },
  { id: "blackjack", name: "Blackjack", icon: "fas fa-user-tie" },
  { id: "live", name: "Live Casino", icon: "fas fa-video" },
  { id: "sports", name: "Sports", icon: "fas fa-football-ball" },
];

// Preference options
const preferences = [
  { id: "bonuses", name: "Best Bonuses", icon: "fas fa-gift" },
  { id: "payouts", name: "Fast Payouts", icon: "fas fa-bolt" },
  { id: "mobile", name: "Mobile Games", icon: "fas fa-mobile-alt" },
  { id: "variety", name: "Game Variety", icon: "fas fa-th-large" },
];

// Sample match results
const otherMatches = [
  { name: "Royal Ace Casino", percent: 94, link: "#" },
  { name: "Spin Palace", percent: 91, link: "#" },
];

// Modal functions
const openModal = () => {
  isModalOpen.value = true;
  document.body.style.overflow = "hidden"; // Prevent scrolling
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = ""; // Restore scrolling
};

// Helper function to get experience level name
function getExpLevelName(level) {
  const names = ["Beginner", "Casual", "Regular", "Advanced", "Expert"];
  return names[level - 1];
}

// Toggle preference selection
function togglePreference(prefId) {
  if (selectedPreferences.value.includes(prefId)) {
    selectedPreferences.value = selectedPreferences.value.filter(
      (id) => id !== prefId
    );
  } else {
    if (selectedPreferences.value.length < 2) {
      selectedPreferences.value.push(prefId);
    }
  }
}

// Navigation functions
function nextStep() {
  if (currentStep.value < 4) {
    currentStep.value++;
  }
}

function prevStep() {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
}

function showResults() {
  currentStep.value = 4;
}

function restart() {
  currentStep.value = 1;
  selectedGame.value = null;
  experienceLevel.value = 3;
  selectedPreferences.value = [];
}
</script>

<style scoped>
/* Fancy divider styling */
.matchmaker-section {
  width: 100%;
}

.fancy-divider {
  position: relative;
  width: 100%;
  height: 250px;
  margin: 2rem 0;
  overflow: hidden;
}

.wave-top,
.wave-bottom {
  position: absolute;
  width: 100%;
  height: 120px;
  left: 0;
}

.wave-top {
  top: 0;
}

.wave-bottom {
  bottom: 0;
}

.wave-top svg,
.wave-bottom svg {
  width: 100%;
  height: 100%;
  display: block;
}

.divider-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(26, 23, 33, 0) 0%,
    rgba(26, 23, 33, 1) 50%,
    rgba(26, 23, 33, 0) 100%
  );
}

.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 1000px;
  gap: 2rem;
}

.divider-line {
  height: 2px;
  flex: 1;
  background: linear-gradient(90deg, transparent, rgba(221, 69, 68, 0.7));
  position: relative;
  overflow: hidden;
}

.divider-line.right {
  background: linear-gradient(90deg, rgba(221, 69, 68, 0.7), transparent);
}

.divider-line::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  animation: shine 3s infinite;
}

.divider-line.right::after {
  animation-delay: 1.5s;
}

@keyframes shine {
  0% {
    left: -100%;
  }
  100% {
    left: 200%;
  }
}

.find-match-button {
  position: relative;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #c93d3d, #dd4544);
  color: white;
  border-radius: 50px;
  border: none;
  box-shadow: 0 5px 20px rgba(221, 69, 68, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  z-index: 2;
}

.find-match-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 10px 25px rgba(221, 69, 68, 0.5);
}

.button-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: radial-gradient(
    ellipse at center,
    rgba(221, 69, 68, 0.4) 0%,
    transparent 70%
  );
  border-radius: 50%;
  z-index: -1;
  opacity: 0;
  animation: glow 3s ease-in-out infinite;
}

@keyframes glow {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
}

.icon-container {
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

.button-text {
  font-weight: 600;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
}

.pulse-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50px;
  z-index: -1;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(221, 69, 68, 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(221, 69, 68, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(221, 69, 68, 0);
  }
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease;
}

.modal-container {
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  background: #1a1721;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  animation: slideUp 0.4s ease-out;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  z-index: 10;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: #dd4544;
  transform: rotate(90deg);
}

.modal-content {
  padding: 2rem;
  overflow-y: auto;
  max-height: 80vh;
}

.modal-title {
  font-size: 1.75rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
  color: #fff;
}

/* Animation keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Matchmaker Content */
.matchmaker-container {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  color: #fff;
}

/* Progress indicator */
.progress-bar {
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin-bottom: 1rem;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: #dd4544;
  border-radius: 2px;
  transition: width 0.3s ease;
}

/* Step indicators */
.steps-indicator {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  position: relative;
}

.step {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;
  z-index: 1;
}

.step.active {
  background: #dd4544;
  color: white;
}

.step.current {
  transform: scale(1.2);
  box-shadow: 0 0 15px rgba(221, 69, 68, 0.6);
}

/* Step content styling */
.step-content h3 {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.subtitle {
  font-size: 0.8rem;
  opacity: 0.7;
  font-weight: normal;
}

/* Option grid for game selection */
.options-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.option-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.option-card i {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
}

.option-card span {
  font-size: 0.9rem;
}

.option-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-3px);
}

.option-card.selected {
  background: rgba(221, 69, 68, 0.15);
  border-color: rgba(221, 69, 68, 0.3);
}

.option-card.selected i {
  color: #dd4544;
}

/* Experience level selector */
.experience-selector {
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 0.5rem;
}

.exp-level {
  text-align: center;
  flex: 1;
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.2s ease;
}

.exp-level:hover {
  background: rgba(255, 255, 255, 0.05);
}

.exp-level.active {
  background: rgba(221, 69, 68, 0.2);
  color: #dd4544;
  font-weight: 500;
}

/* Preferences grid */
.preferences-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin: 1.5rem 0;
}

.preference-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.preference-item i {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.7);
}

.preference-item.selected {
  background: rgba(221, 69, 68, 0.15);
  border-color: rgba(221, 69, 68, 0.3);
}

.preference-item.selected i {
  color: #dd4544;
}

/* Actions container */
.actions {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

/* Button styles */
.next-btn,
.back-btn,
.play-btn,
.restart-btn {
  padding: 0.75rem 1.25rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.next-btn {
  background: #dd4544;
  color: white;
  border: none;
  flex: 1;
}

.next-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.back-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.7);
}

/* Results section */
.results {
  animation: fadeIn 0.3s ease;
}

.top-match {
  display: flex;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.match-score {
  background: #dd4544;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.casino-details {
  flex: 1;
  padding: 1.25rem;
}

.casino-details h4 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.bonus {
  font-size: 0.85rem;
  color: #66bb6a;
  background: rgba(102, 187, 106, 0.1);
  padding: 0.5rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.play-btn {
  display: inline-block;
  background: #dd4544;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  text-align: center;
}

.other-matches {
  margin-bottom: 1.5rem;
}

.match-item {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  margin-bottom: 0.75rem;
}

.match-percent {
  background: rgba(221, 69, 68, 0.7);
  color: white;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
}

.match-name {
  flex: 1;
  margin-left: 0.75rem;
  font-size: 0.9rem;
}

.view-link {
  color: #dd4544;
  font-size: 0.8rem;
  text-decoration: none;
  padding: 0.25rem 0.75rem;
  border-radius: 30px;
  background: rgba(221, 69, 68, 0.1);
}

.restart-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.8);
  display: block;
  width: 100%;
  text-align: center;
}

/* Responsive styles */
@media (max-width: 768px) {
  .fancy-divider {
    height: 200px;
  }

  .content-wrapper {
    gap: 1rem;
  }

  .find-match-button {
    padding: 0.6rem 1.2rem;
  }

  .button-text {
    font-size: 0.9rem;
  }

  .icon-container {
    width: 28px;
    height: 28px;
    font-size: 0.9rem;
  }

  .options-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .fancy-divider {
    height: 160px;
  }

  .wave-top,
  .wave-bottom {
    height: 80px;
  }

  .divider-line {
    display: none;
  }

  .find-match-button {
    width: 80%;
    justify-content: center;
  }

  .step-content h3 {
    font-size: 1.1rem;
  }

  .experience-selector {
    flex-wrap: wrap;
  }

  .exp-level {
    width: 48%;
    margin-bottom: 0.5rem;
  }
}
</style>

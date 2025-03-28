<template>
  <section class="new-bonuses-section">
    <div class="red-divider"></div>
    <div class="bg-pattern"></div>
    <div class="bg-spotlight"></div>
    <div class="floating-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>

    <div class="container">
      <div class="section-header">
        <h2 class="section-title">New Bonus Alerts</h2>
        <p class="section-subtitle">Limited-time offers you shouldn't miss</p>
      </div>

      <div class="bonus-alerts-slider">
        <div
          v-for="(bonus, index) in newBonuses"
          :key="bonus.id"
          class="bonus-alert"
        >
          <div class="alert-badge" :class="bonus.isNew ? 'new' : 'limited'">
            {{ bonus.isNew ? "NEW" : "LIMITED" }}
          </div>

          <div class="bonus-content">
            <div class="casino-info">
              <img
                :src="bonus.logoUrl"
                :alt="bonus.casinoName"
                class="casino-logo"
              />
              <div>
                <h3 class="casino-name">{{ bonus.casinoName }}</h3>
                <div class="bonus-value">{{ bonus.value }}</div>
              </div>
            </div>

            <div v-if="bonus.expiryDate" class="bonus-timer">
              <div class="timer-label">Expires in:</div>
              <div class="countdown">
                {{ formatTimeRemaining(bonus.expiryDate) }}
              </div>
            </div>

            <a :href="bonus.claimUrl" class="claim-btn">
              Claim Now <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Keep your existing script
import { ref, onMounted, onBeforeUnmount } from "vue";

// Sample bonus data (much simpler)
const newBonuses = ref([
  {
    id: 1,
    casinoName: "Lucky Spins",
    logoUrl: "/images/casinos/logo1.png",
    value: "$500 + 100 FS",
    isNew: true,
    claimUrl: "#",
    expiryDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
  },
  {
    id: 2,
    casinoName: "Royal Flush",
    logoUrl: "/images/casinos/logo2.png",
    value: "200% up to $1000",
    isNew: false,
    claimUrl: "#",
    expiryDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
  },
  {
    id: 3,
    casinoName: "Gold Nugget",
    logoUrl: "/images/casinos/logo3.png",
    value: "50 Free Spins",
    isNew: true,
    claimUrl: "#",
    expiryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  },
]);

// Timer update interval
let timerInterval = null;

// Format time remaining in a compact way
const formatTimeRemaining = (expiryDate) => {
  const total = Date.parse(expiryDate) - Date.now();

  if (total <= 0) return "Expired";

  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);

  if (days > 0) {
    return `${days}d ${hours}h remaining`;
  } else {
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return `${hours}h ${minutes}m remaining`;
  }
};

onMounted(() => {
  timerInterval = setInterval(() => {
    newBonuses.value = [...newBonuses.value]; // Force update
  }, 60000);
});

onBeforeUnmount(() => {
  if (timerInterval) clearInterval(timerInterval);
});
</script>

<style scoped>
.new-bonuses-section {
  position: relative;
  padding: 3rem 0;
  background-color: #1a1721;
  overflow: hidden;
}

/* Enhanced background styling */
.bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/images/backgrounds/hideout.svg");
  background-repeat: repeat;
  background-size: 200px 200px;
  opacity: 0.1;
  z-index: 0;
}

.bg-spotlight {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 193, 7, 0.05) 0%,
    transparent 60%
  );
  animation: rotate 60s linear infinite;
  z-index: 0;
}

.red-divider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(244, 67, 54, 0.3) 20%,
    rgba(244, 67, 54, 0.8) 50%,
    rgba(244, 67, 54, 0.3) 80%,
    transparent 100%
  );
  z-index: 2;
  box-shadow: 0 0 10px rgba(244, 67, 54, 0.4);
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Floating shapes */
.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  background: linear-gradient(135deg, #ff9800, #f44336);
  filter: blur(40px);
}

.shape-1 {
  top: 15%;
  left: 10%;
  width: 300px;
  height: 300px;
  animation: float1 15s ease-in-out infinite alternate;
}

.shape-2 {
  bottom: 10%;
  right: 10%;
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, #4caf50, #2196f3);
  animation: float2 20s ease-in-out infinite alternate;
}

.shape-3 {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255, 193, 7, 0.1), transparent 70%);
  animation: float3 25s ease-in-out infinite;
}

@keyframes float1 {
  0% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(-30px) translateX(20px);
  }
}

@keyframes float2 {
  0% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(30px) translateX(-20px);
  }
}

@keyframes float3 {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.1;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.15;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.1;
  }
}

/* Keep your existing container styles */
.container {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
  z-index: 1;
}

/* Enhanced section header with subtle shine effect */
.section-header {
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  background: linear-gradient(135deg, #ff9800, #f44336);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ff9800, transparent);
}

.section-subtitle {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
}

/* Improved bonus cards with subtle glow on hover */
.bonus-alerts-slider {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.bonus-alert {
  position: relative;
  background: rgba(30, 25, 45, 0.5);
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(5px);
}

.bonus-alert:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2), 0 0 15px rgba(255, 152, 0, 0.1);
  border-color: rgba(255, 152, 0, 0.2);
}

.alert-badge {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.3rem 0.8rem;
  font-size: 0.7rem;
  font-weight: 700;
  color: white;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 10px 100%);
  z-index: 1;
}

.alert-badge.new {
  background: linear-gradient(135deg, #4caf50, #2e7d32);
}

.alert-badge.limited {
  background: linear-gradient(135deg, #ff9800, #e65100);
}

.bonus-content {
  padding: 1.2rem;
}

.casino-info {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.casino-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.2);
  padding: 5px;
  margin-right: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.casino-name {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.2rem;
}

.bonus-value {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffc107;
  text-shadow: 0 0 10px rgba(255, 193, 7, 0.3);
}

.bonus-timer {
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  padding: 0.6rem 0.8rem;
  margin: 0.8rem 0;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.timer-label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  margin-right: 0.5rem;
}

.countdown {
  font-size: 0.8rem;
  font-weight: 600;
  color: #ff9800;
}

.claim-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  background: linear-gradient(135deg, #ff9800, #f44336);
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.claim-btn:hover {
  box-shadow: 0 6px 12px rgba(244, 67, 54, 0.3);
  transform: translateY(-2px);
}

.claim-btn i {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.claim-btn:hover i {
  transform: translateX(3px);
}

@media (max-width: 768px) {
  .bonus-alerts-slider {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 1.5rem;
  }
}
</style>

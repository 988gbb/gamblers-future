<template>
  <section id="top-bonuses" class="top-bonuses-section">
    <!-- Enhanced Background -->
    <div class="section-background">
      <div class="bg-pattern"></div>
      <div class="bg-gradient"></div>
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
    </div>

    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Top Casino Bonuses</h2>
        <p class="section-subtitle">
          The highest rated bonus offers selected by our experts
        </p>
      </div>

      <div class="bonuses-grid">
        <div
          v-for="(bonus, index) in topBonuses"
          :key="bonus.id"
          class="bonus-card"
          :class="{ 'featured-card': index === 0 }"
        >
          <!-- Ranking Badge -->
          <div class="rank-badge" :class="{ 'top-rank': index === 0 }">
            <span>{{ index + 1 }}</span>
          </div>

          <!-- Casino Info -->
          <div class="card-header">
            <div class="casino-logo">
              <i class="fas fa-building"></i>
            </div>
            <div class="casino-info">
              <h3>{{ bonus.casinoName }}</h3>
              <div class="rating">
                <div class="stars">
                  <i
                    v-for="n in 5"
                    :key="n"
                    class="fas fa-star"
                    :class="{
                      filled: n <= Math.floor(bonus.rating),
                      half:
                        n === Math.ceil(bonus.rating) &&
                        !Number.isInteger(bonus.rating),
                    }"
                  >
                  </i>
                </div>
                <span>{{ bonus.rating.toFixed(1) }}</span>
              </div>
            </div>
            <div class="badges">
              <span v-if="bonus.isExclusive" class="exclusive-badge">
                <i class="fas fa-gem"></i> Exclusive
              </span>
              <span v-if="bonus.isNew" class="new-badge">
                <i class="fas fa-bolt"></i> New
              </span>
            </div>
          </div>

          <!-- Bonus Details -->
          <div class="card-body">
            <!-- Bonus Value -->
            <div class="bonus-value">
              <div v-if="bonus.amount" class="bonus-amount">
                {{ bonus.amount }}
              </div>
              <div v-if="bonus.percentage" class="bonus-percentage">
                {{ bonus.percentage }}% Match
              </div>
              <div v-if="bonus.freeSpins" class="free-spins">
                <i class="fas fa-sync-alt"></i> {{ bonus.freeSpins }} Free Spins
              </div>
            </div>

            <!-- Key Details -->
            <div class="key-details">
              <div class="detail">
                <i class="fas fa-wallet"></i>
                <span
                  >Min:
                  {{
                    bonus.minDeposit > 0 ? "$" + bonus.minDeposit : "No Deposit"
                  }}</span
                >
              </div>
              <div class="detail">
                <i class="fas fa-redo-alt"></i>
                <span
                  >Wager:
                  {{ bonus.wagering > 0 ? bonus.wagering + "x" : "None" }}</span
                >
              </div>
              <div class="detail" v-if="bonus.code">
                <i class="fas fa-ticket-alt"></i>
                <span>Code: {{ bonus.code }}</span>
              </div>
            </div>
          </div>

          <!-- Action Button -->
          <div class="card-footer">
            <a :href="bonus.claimUrl" class="claim-button">
              Claim Bonus <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getTopBonuses } from "../../data/bonuses";

const topBonuses = ref([]);

onMounted(() => {
  // Load only top 3 bonuses for a more compact display
  topBonuses.value = getTopBonuses(3);
});
</script>

<style scoped>
.top-bonuses-section {
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
}

/* Enhanced Background Styling */
.section-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.bg-pattern {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #1a1721;
  background-image: url("/images/dominos.svg");
  background-repeat: repeat;
  background-size: 200px 200px;
  opacity: 0.8;
  animation: patternShift 120s linear infinite;
}

@keyframes patternShift {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 200px 200px;
  }
}

.bg-pattern::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
      circle at 10% 20%,
      rgba(221, 69, 68, 0.03) 0%,
      transparent 20%
    ),
    radial-gradient(
      circle at 80% 60%,
      rgba(76, 175, 80, 0.03) 0%,
      transparent 20%
    ),
    radial-gradient(
      circle at 40% 80%,
      rgba(33, 150, 243, 0.03) 0%,
      transparent 20%
    );
}

.bg-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(26, 23, 33, 0) 0%,
    rgba(26, 23, 33, 0.9) 100%
  );
}

.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
}

.shape-1 {
  top: -10%;
  right: -5%;
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle at center,
    rgba(221, 69, 68, 0.4) 0%,
    transparent 70%
  );
  animation: float 20s ease-in-out infinite;
}

.shape-2 {
  bottom: -15%;
  left: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle at center,
    rgba(76, 175, 80, 0.4) 0%,
    transparent 70%
  );
  animation: float 25s ease-in-out infinite 2s;
}

.shape-3 {
  top: 30%;
  left: 60%;
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle at center,
    rgba(33, 150, 243, 0.4) 0%,
    transparent 70%
  );
  animation: float 18s ease-in-out infinite 1s;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(-2%, -2%);
  }
  50% {
    transform: translate(2%, 1%);
  }
  75% {
    transform: translate(-1%, 2%);
  }
}

/* Container Styling */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
}

/* Header Styling */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.8rem;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;
}

/* Bonuses Grid */
.bonuses-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

/* Card Styling */
.bonus-card {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
}

.bonus-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  border-color: rgba(221, 69, 68, 0.2);
  background: rgba(255, 255, 255, 0.06);
}

.featured-card {
  border-color: rgba(221, 69, 68, 0.3);
  background: rgba(221, 69, 68, 0.05);
}

.featured-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #dd4544, #e8937c);
}

/* Rank Badge */
.rank-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  z-index: 2;
}

.top-rank {
  background: linear-gradient(135deg, #ffd700, #ffb347);
  color: #333;
}

/* Card Header */
.card-header {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  position: relative;
}

.casino-logo {
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
}

.casino-info {
  flex: 1;
  min-width: 0;
}

.casino-info h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stars {
  display: flex;
  gap: 2px;
}

.stars i {
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.8rem;
}

.stars i.filled {
  color: #ffc107;
}

.stars i.half {
  position: relative;
  color: rgba(255, 255, 255, 0.2);
}

.stars i.half::before {
  content: "\f089"; /* fa-star-half */
  position: absolute;
  color: #ffc107;
}

.rating span {
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
}

.badges {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-end;
}

.exclusive-badge,
.new-badge {
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.exclusive-badge {
  background: rgba(255, 193, 7, 0.15);
  color: #ffc107;
}

.new-badge {
  background: rgba(76, 175, 80, 0.15);
  color: #4caf50;
}

/* Card Body */
.card-body {
  padding: 0 1.5rem;
  flex: 1;
}

.bonus-value {
  text-align: center;
  padding-bottom: 1.2rem;
  margin-bottom: 1.2rem;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
}

.bonus-amount {
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.3rem;
}

.bonus-percentage {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.3rem;
}

.free-spins {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
}

.free-spins i {
  color: #ffc107;
}

.key-details {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.detail {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 0.9rem;
}

.detail i {
  width: 28px;
  height: 28px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
}

/* Card Footer */
.card-footer {
  padding: 1.5rem;
  margin-top: auto;
}

.claim-button {
  width: 100%;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  transition: all 0.3s ease;
}

.claim-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(221, 69, 68, 0.25);
}

.claim-button i {
  transition: all 0.3s ease;
}

.claim-button:hover i {
  transform: translateX(3px);
}

/* View All Link */
.view-all {
  text-align: center;
}

.view-all-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-weight: 600;
  transition: all 0.3s ease;
}

.view-all-link:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.view-all-link i {
  transition: all 0.3s ease;
}

.view-all-link:hover i {
  transform: translateX(3px);
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .bonuses-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .top-bonuses-section {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .bonuses-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  .card-header {
    padding: 1.2rem;
  }

  .card-body,
  .card-footer {
    padding: 0 1.2rem 1.2rem;
  }
}

@media (max-width: 576px) {
  .section-title {
    font-size: 1.7rem;
  }

  .section-subtitle {
    font-size: 0.95rem;
  }

  .bonus-amount {
    font-size: 1.5rem;
  }
}
</style>

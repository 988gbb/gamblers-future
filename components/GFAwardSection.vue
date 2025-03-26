<template>
  <section class="awards-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          Monthly <span class="highlight">Champions</span>
        </h2>
        <p class="section-subtitle">Real cash rewards for our top players</p>
      </div>

      <!-- Innovative Podium Layout -->
      <div class="podium-container">
        <!-- Second Place -->
        <div class="podium-award second-place">
          <div class="podium-platform">
            <div class="platform-height">
              <span>2</span>
            </div>
            <div class="winner-badge">
              <span>$1,000</span>
            </div>
            <!-- Replaced avatar with icon -->
            <div class="winner-icon">
              <div class="icon-glow"></div>
              <i class="fas fa-ticket-alt"></i>
            </div>
            <div class="winner-username">@SarahT</div>
            <div class="winner-title">Lucky Winner</div>
            <div class="winner-casino">Lucky Spins Casino</div>
          </div>
          <div class="award-info">
            <div class="award-icon">
              <i class="fas fa-ticket-alt"></i>
            </div>
            <p class="award-description">
              Randomly selected from Lucky Spins Casino players
            </p>
            <div class="award-stat">
              <div class="stat-icon"><i class="fas fa-random"></i></div>
              <div class="stat-value">1 in 1,250</div>
              <div class="stat-label">Monthly Chance</div>
            </div>
          </div>
        </div>

        <!-- First Place - Centered and Taller -->
        <div class="podium-award first-place">
          <div class="podium-platform">
            <div class="platform-height">
              <span>1</span>
            </div>
            <div class="winner-badge">
              <span>$10,000</span>
            </div>
            <div class="winner-crown">
              <i class="fas fa-crown"></i>
            </div>
            <!-- Replaced avatar with icon -->
            <div class="winner-icon">
              <div class="icon-glow"></div>
              <i class="fas fa-gem"></i>
            </div>
            <div class="winner-username">@LuckyMike88</div>
            <div class="winner-title">High Roller</div>
            <div class="winner-casino">$875K Total Wager</div>
          </div>
          <div class="award-info">
            <div class="award-icon">
              <i class="fas fa-crown"></i>
            </div>
            <p class="award-description">
              Highest monthly wager across all partner casinos
            </p>
            <div class="award-stat">
              <div class="stat-icon"><i class="fas fa-dice"></i></div>
              <div class="stat-value">9,450</div>
              <div class="stat-label">Total Spins</div>
            </div>
          </div>
        </div>

        <!-- Third Place -->
        <div class="podium-award third-place">
          <div class="podium-platform">
            <div class="platform-height">
              <span>3</span>
            </div>
            <div class="winner-badge special">
              <span>+10%</span>
            </div>
            <!-- Replaced avatar with icon -->
            <div class="winner-icon">
              <div class="icon-glow"></div>
              <i class="fas fa-coins"></i>
            </div>
            <div class="winner-username">@PokerDave</div>
            <div class="winner-title">Big Winner</div>
            <div class="winner-casino">$38,500 + $3,850 bonus</div>
          </div>
          <div class="award-info">
            <div class="award-icon">
              <i class="fas fa-trophy"></i>
            </div>
            <p class="award-description">
              Biggest single win with 10% bonus on top
            </p>
            <div class="award-stat">
              <div class="stat-icon"><i class="fas fa-percentage"></i></div>
              <div class="stat-value">10%</div>
              <div class="stat-label">Bonus</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Next Award Countdown -->
      <div class="next-award-countdown">
        <div class="countdown-heading">
          <i class="fas fa-calendar-day"></i>
          <span>Next Awards Ceremony</span>
        </div>
        <div class="countdown-timer">
          <div class="countdown-unit">
            <div class="countdown-value">{{ countdown.days }}</div>
            <div class="countdown-label">Days</div>
          </div>
          <div class="countdown-unit">
            <div class="countdown-value">{{ countdown.hours }}</div>
            <div class="countdown-label">Hours</div>
          </div>
          <div class="countdown-unit">
            <div class="countdown-value">{{ countdown.minutes }}</div>
            <div class="countdown-label">Minutes</div>
          </div>
        </div>
      </div>

      <!-- Participation Steps -->
      <div class="participation-container">
        <h3 class="participation-title">How to Win Big</h3>

        <div class="steps-container">
          <div class="step-card">
            <div class="step-icon">
              <i class="fas fa-user-plus"></i>
              <div class="step-number">1</div>
            </div>
            <h4 class="step-title">Join GF Community</h4>
            <p class="step-description">
              Create a free account to become eligible for all awards
            </p>
          </div>

          <div class="step-connector">
            <svg
              width="40"
              height="24"
              viewBox="0 0 40 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 12H38M38 12L28 2M38 12L28 22"
                stroke="#dd4544"
                stroke-width="3"
              />
            </svg>
          </div>

          <div class="step-card">
            <div class="step-icon">
              <i class="fas fa-gamepad"></i>
              <div class="step-number">2</div>
            </div>
            <h4 class="step-title">Play Through Our Links</h4>
            <p class="step-description">
              Use our exclusive links to play at partner casinos
            </p>
          </div>

          <div class="step-connector">
            <svg
              width="40"
              height="24"
              viewBox="0 0 40 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 12H38M38 12L28 2M38 12L28 22"
                stroke="#dd4544"
                stroke-width="3"
              />
            </svg>
          </div>

          <div class="step-card">
            <div class="step-icon">
              <i class="fas fa-chart-line"></i>
              <div class="step-number">3</div>
            </div>
            <h4 class="step-title">Track Your Results</h4>
            <p class="step-description">
              Connect your accounts or submit big wins manually
            </p>
          </div>
        </div>

        <div class="cta-container">
          <NuxtLink to="/register" class="join-button">
            <span>Become a Champion</span>
            <i class="fas fa-trophy"></i>
          </NuxtLink>
          <p class="cta-text">Next month's winner could be YOU!</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// Calculate time until the first day of next month
const countdown = ref({
  days: "00",
  hours: "00",
  minutes: "00",
});

let countdownInterval;

const calculateTimeRemaining = () => {
  const now = new Date();

  // Get the first day of next month
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);

  // Calculate time difference in milliseconds
  const difference = nextMonth - now;

  // Calculate time units
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  // Format with leading zeros
  countdown.value = {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
  };
};

onMounted(() => {
  // Calculate initial countdown
  calculateTimeRemaining();

  // Update countdown every minute
  countdownInterval = setInterval(calculateTimeRemaining, 60000);
});

onBeforeUnmount(() => {
  // Clean up interval when component is destroyed
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
});
</script>

<style scoped>
.awards-section {
  padding: 2rem 0;
  background-color: #1a1721;
  color: #fff;
  background-image: radial-gradient(
      circle at 10% 20%,
      rgba(221, 69, 68, 0.05) 0%,
      transparent 20%
    ),
    radial-gradient(
      circle at 90% 80%,
      rgba(76, 175, 80, 0.05) 0%,
      transparent 25%
    );
  position: relative;
  overflow: hidden;
}

.awards-section::before {
  content: "";
  position: absolute;
  top: -150px;
  left: -150px;
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(221, 69, 68, 0.1) 0%,
    transparent 70%
  );
  border-radius: 50%;
  z-index: 0;
}

.awards-section::after {
  content: "";
  position: absolute;
  bottom: -150px;
  right: -150px;
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(139, 195, 74, 0.1) 0%,
    transparent 70%
  );
  border-radius: 50%;
  z-index: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.75rem;
  margin-bottom: 0.75rem;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.highlight {
  background: linear-gradient(135deg, #dd4544, #e8937c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
}

.highlight::after {
  content: "";
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  opacity: 0.3;
  border-radius: 5px;
}

.section-subtitle {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;
}

/* Innovative Podium Layout */
.podium-container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 1.5rem;
  margin-bottom: 4rem;
  padding-bottom: 1rem;
  position: relative;
}

.podium-container::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.05) 20%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 80%,
    transparent 100%
  );
  border-radius: 3px;
}

.podium-award {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.podium-platform {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 1.5rem;
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.podium-award:hover .podium-platform {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.2);
}

.first-place .podium-platform {
  height: 360px;
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(221, 69, 68, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  padding-top: 2.5rem;
}

.second-place .podium-platform {
  height: 320px;
}

.third-place .podium-platform {
  height: 300px;
}

.platform-height {
  position: absolute;
  bottom: -1.25rem;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
  z-index: 2;
  box-shadow: 0 5px 15px rgba(221, 69, 68, 0.3);
}

.winner-badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background: rgba(221, 69, 68, 0.9);
  backdrop-filter: blur(5px);
  border-radius: 30px;
  padding: 0.35rem 0.75rem;
  font-weight: 700;
  font-size: 1rem;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 3;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.winner-badge.special {
  background: rgba(0, 0, 0, 0.15);
}

.winner-crown {
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  color: #ffc107;
  animation: float 2s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-5px);
  }
}

.winner-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  border: 3px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.first-place .winner-avatar {
  width: 120px;
  height: 120px;
  border-color: rgba(221, 69, 68, 0.3);
  margin-bottom: 1.5rem;
}

.avatar-glow {
  position: absolute;
  top: -30%;
  left: -30%;
  width: 160%;
  height: 160%;
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.2),
    transparent 70%
  );
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.podium-award:hover .avatar-glow {
  opacity: 1;
}

.winner-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 2;
}

.winner-username {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
}

.first-place .winner-username {
  font-size: 1.5rem;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.winner-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: rgba(255, 255, 255, 0.9);
}

.winner-casino {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
}

.first-place .winner-casino {
  font-weight: 500;
  margin-top: 0.5rem;
  color: #dd4544;
}

.award-info {
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.award-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #dd4544;
  margin-bottom: 0.75rem;
}

.award-description {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.award-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  color: #dd4544;
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
}

/* Countdown Timer */
.next-award-countdown {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 4rem;
  text-align: center;
}

.countdown-heading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.125rem;
  font-weight: 600;
}

.countdown-heading i {
  color: #dd4544;
}

.countdown-timer {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.countdown-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.countdown-value {
  width: 70px;
  height: 70px;
  background: linear-gradient(
    145deg,
    rgba(221, 69, 68, 0.15),
    rgba(221, 69, 68, 0.05)
  );
  border: 1px solid rgba(221, 69, 68, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.75rem;
  position: relative;
  overflow: hidden;
}

.countdown-value::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
}

.countdown-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Participation Steps */
.participation-container {
  background: linear-gradient(
    135deg,
    rgba(221, 69, 68, 0.07),
    rgba(232, 147, 124, 0.07)
  );
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
}

.participation-title {
  font-size: 1.75rem;
  margin-bottom: 2.5rem;
  position: relative;
  display: inline-block;
}

.participation-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #dd4544, #e8937c);
  border-radius: 3px;
}

.steps-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
}

.step-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
}

.step-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(221, 69, 68, 0.2);
}

.step-icon {
  width: 60px;
  height: 60px;
  background: rgba(221, 69, 68, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #dd4544;
  margin-bottom: 1rem;
  position: relative;
}

.step-number {
  position: absolute;
  top: -5px;
  right: -5px;
  width: 24px;
  height: 24px;
  background: #dd4544;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 700;
  color: white;
}

.step-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
}

.step-description {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
}

.step-connector {
  display: flex;
  align-items: center;
}

.cta-container {
  text-align: center;
}

.join-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  color: white;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(221, 69, 68, 0.3);
  margin-bottom: 1rem;
}

.join-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(221, 69, 68, 0.4);
}

.join-button i {
  font-size: 1.125rem;
}

.cta-text {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
}

/* Replace avatar styles with icon styles */
.winner-icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 3px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.05),
    rgba(0, 0, 0, 0.2)
  );
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.winner-icon i {
  font-size: 2.5rem;
  position: relative;
  z-index: 2;
  background: linear-gradient(135deg, #ffffff, #cccccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.first-place .winner-icon {
  width: 120px;
  height: 120px;
  border-color: rgba(221, 69, 68, 0.3);
  margin-bottom: 1.5rem;
  background: linear-gradient(
    145deg,
    rgba(221, 69, 68, 0.1),
    rgba(0, 0, 0, 0.2)
  );
}

.first-place .winner-icon i {
  font-size: 3.5rem;
  background: linear-gradient(135deg, #ffd700, #ffcc00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 2px 4px rgba(255, 215, 0, 0.4));
}

.second-place .winner-icon i {
  background: linear-gradient(135deg, #e5e5e5, #b4b4b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.third-place .winner-icon i {
  background: linear-gradient(135deg, #cd7f32, #a05a2c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.icon-glow {
  position: absolute;
  top: -30%;
  left: -30%;
  width: 160%;
  height: 160%;
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.2),
    transparent 70%
  );
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.podium-award:hover .icon-glow {
  opacity: 1;
}

/* Add these pulsing animations for the icons */
.first-place .winner-icon {
  animation: pulse-gold 3s infinite ease-in-out;
}

.second-place .winner-icon {
  animation: pulse-silver 3s infinite ease-in-out;
}

.third-place .winner-icon {
  animation: pulse-bronze 3s infinite ease-in-out;
}

@keyframes pulse-gold {
  0%,
  100% {
    box-shadow: 0 0 0 rgba(255, 215, 0, 0);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.4);
  }
}

@keyframes pulse-silver {
  0%,
  100% {
    box-shadow: 0 0 0 rgba(192, 192, 192, 0);
  }
  50% {
    box-shadow: 0 0 20px rgba(192, 192, 192, 0.4);
  }
}

@keyframes pulse-bronze {
  0%,
  100% {
    box-shadow: 0 0 0 rgba(205, 127, 50, 0);
  }
  50% {
    box-shadow: 0 0 20px rgba(205, 127, 50, 0.4);
  }
}

/* Make space for badge on top of icon */
.winner-badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background: rgba(221, 69, 68, 0.9);
  backdrop-filter: blur(5px);
  border-radius: 30px;
  padding: 0.35rem 0.75rem;
  font-weight: 700;
  font-size: 1rem;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 3;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

/* Responsive styles */
@media (max-width: 900px) {
  .podium-container {
    flex-direction: column-reverse;
    align-items: center;
    gap: 3rem;
  }

  .podium-platform {
    width: 280px;
  }

  .first-place .podium-platform,
  .second-place .podium-platform,
  .third-place .podium-platform {
    height: auto;
    min-height: 320px;
  }

  .platform-height {
    bottom: -3rem;
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }

  .steps-container {
    flex-direction: column;
    gap: 2rem;
  }

  .step-connector {
    transform: rotate(90deg);
    margin: 1rem 0;
  }

  .step-card {
    width: 90%;
    max-width: 280px;
  }
}

@media (max-width: 768px) {
  .awards-section {
    padding: 3rem 0;
  }

  .section-title {
    font-size: 2.25rem;
  }

  .participation-container {
    padding: 2rem 1.5rem;
  }

  .countdown-timer {
    gap: 1rem;
  }

  .countdown-value {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.875rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .award-info {
    padding: 1rem;
  }

  .countdown-timer {
    flex-wrap: wrap;
    justify-content: center;
  }

  .join-button {
    width: 100%;
    padding: 0.875rem 1.5rem;
  }
}
</style>

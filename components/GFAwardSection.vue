<template>
  <section class="awards-section" id="awards-section">
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

      <div class="terms-container">
        <div class="terms-divider"></div>
        <p class="terms-text">
          By participating in our awards program, you agree to our
          <span class="terms-link" @click="openTermsModal('terms')"
            >Terms & Conditions</span
          >
          and acknowledge our
          <span class="terms-link" @click="openTermsModal('privacy')"
            >Privacy Policy</span
          >.
        </p>
      </div>
    </div>
  </section>

  <!-- Terms and Privacy Policy Modal -->
  <teleport to="body">
    <div
      v-if="showTermsModal"
      class="terms-modal-backdrop"
      @click="closeTermsModal"
    >
      <div class="terms-modal-content" @click.stop>
        <div class="terms-modal-header">
          <h3>{{ modalTitle }}</h3>
          <button class="close-button" @click="closeTermsModal">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="terms-modal-body">
          <!-- Terms & Conditions Content -->
          <div v-if="modalType === 'terms'">
            <h4>Award Eligibility</h4>
            <p>To be eligible for our monthly awards, you must:</p>
            <ul>
              <li>Have a registered account with Gambler's Future</li>
              <li>Use our tracking links when playing at partner casinos</li>
              <li>
                Meet minimum activity requirements (at least 100 spins or
                equivalent)
              </li>
              <li>Follow our responsible gambling guidelines</li>
            </ul>

            <h4>Prize Distribution</h4>
            <p>
              Cash prizes are distributed within 7 business days of the
              announcement. Winners must provide valid payment information for
              receiving funds.
            </p>

            <h4>Verification Process</h4>
            <p>
              All wins are subject to verification. We reserve the right to
              request documentation to confirm the legitimacy of play and
              winnings.
            </p>

            <h4>Participant Selection</h4>
            <p>Monthly winners are selected based on:</p>
            <ul>
              <li>
                <strong>High Roller Award:</strong> Highest total wager across
                all tracked casinos
              </li>
              <li>
                <strong>Lucky Winner:</strong> Random selection from all active
                players
              </li>
              <li>
                <strong>Big Winner:</strong> Largest single win (proportional to
                bet size)
              </li>
            </ul>

            <h4>Disqualification</h4>
            <p>We reserve the right to disqualify participants who:</p>
            <ul>
              <li>Violate casino terms and conditions</li>
              <li>Engage in fraudulent activity or collusion</li>
              <li>Utilize bonus abuse tactics</li>
              <li>Fail to provide required verification documents</li>
            </ul>

            <h4>Acceptance of Terms</h4>
            <p>
              By participating in our awards program, you acknowledge that you
              have read and agreed to these terms and conditions.
            </p>
          </div>

          <!-- Privacy Policy Content -->
          <div v-if="modalType === 'privacy'">
            <h4>Information We Collect</h4>
            <p>When you participate in our awards program, we collect:</p>
            <ul>
              <li>Your username and account details</li>
              <li>
                Gaming activity data from partner casinos (with your consent)
              </li>
              <li>Game preferences and betting patterns</li>
              <li>Transaction history related to awards</li>
            </ul>

            <h4>How We Use Your Information</h4>
            <p>We use the collected information to:</p>
            <ul>
              <li>Track and verify your eligibility for awards</li>
              <li>Process award payments</li>
              <li>Announce and promote winners (with consent)</li>
              <li>Improve our awards program</li>
            </ul>

            <h4>Public Recognition</h4>
            <p>
              By participating in our awards program, you consent to having your
              username and win amounts published on our website and social media
              channels. We will never share your full name or personal details
              without explicit consent.
            </p>

            <h4>Data Security</h4>
            <p>
              We implement appropriate security measures to protect your
              personal information from unauthorized access, alteration, or
              disclosure.
            </p>

            <h4>Your Rights</h4>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of having your wins publicly displayed</li>
            </ul>

            <h4>Contact Us</h4>
            <p>
              For any privacy-related concerns or to exercise your rights,
              please contact our privacy team at privacy@gamblersfuture.com.
            </p>
          </div>
        </div>

        <div class="terms-modal-footer">
          <button class="accept-button" @click="closeTermsModal">
            I Understand
          </button>
        </div>
      </div>
    </div>
  </teleport>
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

// Terms and Privacy Modal Logic
const showTermsModal = ref(false);
const modalType = ref("");
const modalTitle = ref("");

const openTermsModal = (type) => {
  modalType.value = type;
  modalTitle.value = type === "terms" ? "Terms & Conditions" : "Privacy Policy";
  showTermsModal.value = true;
};

const closeTermsModal = () => {
  showTermsModal.value = false;
};
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

/* Terms Container Styling */
.terms-container {
  margin-top: 3rem;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.terms-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at center,
    rgba(221, 69, 68, 0.05) 0%,
    transparent 70%
  );
  z-index: 0;
}

.terms-divider {
  width: 80px;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(221, 69, 68, 0.5),
    transparent
  );
  margin: 0 auto 1rem;
  border-radius: 3px;
}

.terms-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  position: relative;
  z-index: 1;
}

.terms-link {
  color: #dd4544;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  font-weight: 500;
  padding: 0 2px;
}

.terms-link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #dd4544, #e8937c);
  transition: width 0.3s ease;
  border-radius: 2px;
}

.terms-link:hover {
  color: #e8937c;
}

.terms-link:hover::after {
  width: 100%;
}

/* Add a subtle icon before the text */
.terms-text::before {
  content: "\f023"; /* Lock icon from Font Awesome */
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  margin-right: 0.5rem;
  color: rgba(221, 69, 68, 0.7);
  opacity: 0.8;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .awards-section {
    padding: 3rem 0 2rem;
  }

  .section-header {
    margin-bottom: 2.5rem;
  }

  .participation-container {
    padding: 1.5rem 1rem;
  }

  .participation-title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .next-award-countdown {
    padding: 1.25rem 1rem;
    margin-bottom: 2.5rem;
  }

  .terms-container {
    padding: 1.25rem;
    margin-top: 2rem;
  }

  .terms-text {
    font-size: 0.85rem;
  }
}

/* Terms modal styles */
.terms-modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.terms-modal-content {
  background: #1a1721;
  border-radius: 16px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(221, 69, 68, 0.2);
  display: flex;
  flex-direction: column;
  animation: scaleIn 0.3s ease;
}

.terms-modal-header {
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.terms-modal-header h3 {
  margin: 0;
  font-size: 1.5rem;
  color: white;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.close-button {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.25rem;
  cursor: pointer;
  transition: color 0.2s ease;
}

.close-button:hover {
  color: white;
}

.terms-modal-body {
  padding: 1.5rem;
  overflow-y: auto; /* Keep this */
  max-height: 60vh; /* Set a fixed maximum height */
  color: rgba(255, 255, 255, 0.8);
}

.terms-modal-body > div {
  padding-bottom: 1rem;
}

.terms-modal-body h4 {
  margin: 1.5rem 0 0.75rem;
  color: white;
  font-size: 1.125rem;
}

.terms-modal-body h4:first-child {
  margin-top: 0;
}

.terms-modal-body p,
.terms-modal-body ul {
  margin-bottom: 1rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
}

.terms-modal-body ul {
  padding-left: 1.5rem;
}

.terms-modal-body li {
  margin-bottom: 0.5rem;
}

.terms-modal-body strong {
  color: rgba(255, 255, 255, 0.9);
}

.terms-modal-footer {
  padding: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: flex-end;
}

.accept-button {
  background: linear-gradient(135deg, #dd4544, #e8937c);
  border: none;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.accept-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(221, 69, 68, 0.3);
}

/* Update the terms-link style for better clickability */
.terms-link {
  color: rgba(221, 69, 68, 0.8);
  text-decoration: none;
  transition: all 0.2s ease;
  position: relative;
  cursor: pointer; /* Add this to show it's clickable */
}

.terms-link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: #dd4544;
  transition: width 0.3s ease;
}

.terms-link:hover {
  color: #dd4544;
}

.terms-link:hover::after {
  width: 100%;
}

.terms-modal-body::-webkit-scrollbar {
  width: 8px;
}

.terms-modal-body::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.terms-modal-body::-webkit-scrollbar-thumb {
  background: rgba(221, 69, 68, 0.3);
  border-radius: 4px;
}

.terms-modal-body::-webkit-scrollbar-thumb:hover {
  background: rgba(221, 69, 68, 0.5);
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

/* Modal responsiveness */
@media (max-width: 768px) {
  .terms-modal-content {
    width: 95%;
    max-height: 80vh;
  }

  .terms-modal-header {
    padding: 1.25rem;
  }

  .terms-modal-body {
    padding: 1.25rem;
    font-size: 0.9rem;
  }

  .terms-modal-footer {
    padding: 1.25rem;
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

  /* Steps improvements */
  .steps-container {
    flex-direction: column;
    gap: 2rem;
  }

  .step-card {
    width: 100%;
    max-width: 280px;
  }

  /* Hide connectors on mobile */
  .step-connector {
    display: none;
  }

  /* Add a numbered indicator to show sequence */
  .step-card::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 50%;
    width: 2px;
    height: 20px;
    background: rgba(221, 69, 68, 0.3);
    display: block;
  }

  .step-card:last-child::after {
    display: none;
  }
}

@media (max-width: 600px) {
  .countdown-timer {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem 2rem;
  }

  .countdown-unit {
    width: calc(50% - 1rem);
    max-width: 120px;
  }

  .countdown-value {
    width: 100%;
    height: 60px;
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.75rem;
  }

  .highlight::after {
    bottom: 2px;
    height: 4px;
  }

  .section-subtitle {
    font-size: 0.95rem;
  }

  .winner-username {
    font-size: 1.125rem;
  }

  .first-place .winner-username {
    font-size: 1.25rem;
  }

  .winner-icon {
    width: 80px;
    height: 80px;
  }

  .winner-icon i {
    font-size: 2rem;
  }

  .first-place .winner-icon {
    width: 100px;
    height: 100px;
  }

  .first-place .winner-icon i {
    font-size: 2.75rem;
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
    padding: 0.875rem;
    font-size: 0.95rem;
    justify-content: center;
  }

  .cta-text {
    font-size: 0.9rem;
  }

  .terms-container {
    padding: 1rem;
  }

  .terms-text {
    font-size: 0.8rem;
  }

  .terms-text::before {
    display: block;
    margin: 0 auto 0.75rem;
  }
}

@media (max-width: 900px) {
  .podium-container {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  /* Correct ordering for mobile display */
  .first-place {
    order: 1;
  }

  .second-place {
    order: 2;
  }

  .third-place {
    order: 3;
  }

  /* Make platform widths consistent on mobile */
  .podium-platform {
    width: 280px;
  }

  /* Adjust heights for better proportions */
  .first-place .podium-platform,
  .second-place .podium-platform,
  .third-place .podium-platform {
    height: auto;
    min-height: 320px;
  }

  /* Enhance first place visual distinction */
  .first-place .podium-platform {
    box-shadow: 0 15px 30px rgba(221, 69, 68, 0.2);
    border-color: rgba(221, 69, 68, 0.4);
    transform: scale(1.05);
  }
}
</style>

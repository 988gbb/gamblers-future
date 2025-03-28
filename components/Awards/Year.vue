<template>
  <section class="yearly-awards-section" id="yearly-awards">
    <div class="particles-container">
      <div class="particle p1"></div>
      <div class="particle p2"></div>
      <div class="particle p3"></div>
      <div class="particle p4"></div>
      <div class="particle p5"></div>
      <div class="particle p6"></div>
    </div>
    <div class="yearly-awards-header">
      <h2 class="yearly-title">
        Annual <span class="highlight">Grand Awards</span>
      </h2>
      <p class="yearly-subtitle">
        Celebrating excellence with our most prestigious prizes worth over
        $200,000
      </p>
    </div>

    <div class="grand-prizes-container">
      <!-- Whale Award - $100,000 -->
      <div class="grand-prize-card whale-award">
        <div class="prize-amount"><span class="currency">$</span>100,000</div>
        <div class="prize-trophy">
          <i class="fas fa-gem"></i>
        </div>
        <h3 class="prize-title">Diamond Whale Award</h3>
        <p class="prize-description">
          For the highest annual wager across all partner casinos
        </p>
        <div class="prize-details">
          <div class="detail-item">
            <i class="fas fa-dice"></i>
            <span>Total Wager Amount</span>
          </div>
          <div class="detail-item">
            <i class="fas fa-calendar-alt"></i>
            <span>Full Calendar Year</span>
          </div>
          <div class="detail-item">
            <i class="fas fa-university"></i>
            <span>All Partner Casinos</span>
          </div>
        </div>
        <div class="prize-cta">
          <button class="view-leaderboard-btn">
            <span>Current Leaderboard</span>
            <i class="fas fa-chart-line"></i>
          </button>
        </div>
      </div>

      <!-- Community Builder Award - $50,000 -->
      <div class="grand-prize-card community-award">
        <div class="prize-amount"><span class="currency">$</span>50,000</div>
        <div class="prize-trophy">
          <i class="fas fa-users"></i>
        </div>
        <h3 class="prize-title">Community Architect Award</h3>
        <p class="prize-description">
          For the member who brings the most active players via referrals
        </p>
        <div class="prize-details">
          <div class="detail-item">
            <i class="fas fa-user-plus"></i>
            <span>Referral Quantity & Quality</span>
          </div>
          <div class="detail-item">
            <i class="fas fa-link"></i>
            <span>Via Personal Affiliate Links</span>
          </div>
          <div class="detail-item milestone">
            <i class="fas fa-flag-checkered"></i>
            <span>Platform Milestone: 10M Views</span>
          </div>
        </div>
        <div class="prize-cta">
          <button class="view-leaderboard-btn">
            <span>Current Leaderboard</span>
            <i class="fas fa-chart-line"></i>
          </button>
        </div>
      </div>

      <!-- Innovation Award - Tesla Cybertruck -->
      <div class="grand-prize-card innovation-award">
        <div class="prize-amount">
          <span class="cybertruck-text">CYBERTRUCK</span>
        </div>
        <div class="prize-trophy">
          <i class="fas fa-truck-monster"></i>
        </div>
        <h3 class="prize-title">Future Innovator Award</h3>
        <p class="prize-description">
          For the most innovative contribution to our gambling community
        </p>
        <div class="prize-details">
          <div class="detail-item">
            <i class="fas fa-lightbulb"></i>
            <span>Platform Enhancement Ideas</span>
          </div>
          <div class="detail-item">
            <i class="fas fa-comments"></i>
            <span>Community Engagement</span>
          </div>
          <div class="detail-item">
            <i class="fas fa-rocket"></i>
            <span>Pioneering Gambling Strategies</span>
          </div>
          <!-- Add these new restrictions -->
          <div class="detail-item restriction">
            <i class="fas fa-exclamation-circle"></i>
            <span>Only ONE submission per account</span>
          </div>
        </div>
        <div class="prize-cta">
          <button class="view-leaderboard-btn">
            <span>Submission Guidelines</span>
            <i class="fas fa-file-alt"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="yearly-awards-footer">
      <div class="eligibility-container">
        <h3 class="eligibility-title">
          <i class="fas fa-clipboard-check"></i>
          Eligibility Requirements
        </h3>
        <div class="eligibility-points">
          <div class="eligibility-point">
            <div class="point-marker"></div>
            <p>Active Gambler's Future account with verified identity</p>
          </div>
          <div class="eligibility-point">
            <div class="point-marker"></div>
            <p>All casino play must be through our tracking links</p>
          </div>
          <div class="eligibility-point">
            <div class="point-marker"></div>
            <p>Winners must agree to participate in award ceremonies</p>
          </div>
          <div class="eligibility-point">
            <div class="point-marker"></div>
            <p>Adherence to responsible gambling guidelines</p>
          </div>
          <!-- Add the new point here -->
          <div class="eligibility-point">
            <div class="point-marker"></div>
            <p>Must be an active player at our partner casinos</p>
          </div>
          <div class="eligibility-point">
            <div class="point-marker highlight-point">
              <i class="fas fa-exclamation"></i>
            </div>
            <p>
              <strong>Community Milestone:</strong> Platform must reach 10
              million views by December 31, 2025 (Only for community award)
            </p>
          </div>
        </div>
      </div>

      <div class="countdown-to-ceremony">
        <div class="countdown-headline">Annual Awards Ceremony</div>
        <div class="countdown-date">January 15, 2026</div>
        <div class="countdown-location">
          <i class="fas fa-map-marker-alt"></i>
          <span>Live Streamed Worldwide</span>
        </div>
      </div>

      <div class="awards-cta">
        <button class="register-btn">
          <span>Register to Compete</span>
          <i class="fas fa-trophy"></i>
        </button>
        <a href="#" class="terms-link">View Complete Terms & Conditions</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.yearly-awards-section {
  padding: 5rem 0;
  background-color: #1a1721;
  position: relative;
  overflow: hidden;
  animation: gradientShift 20s ease infinite alternate;
}

.yearly-awards-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/images/backgrounds/hideout.svg");
  background-repeat: repeat;
  background-size: 200px 200px;
  opacity: 0.05;
  z-index: 0;
}

.yearly-awards-section::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      circle at 10% 10%,
      rgba(221, 69, 68, 0.08) 0%,
      transparent 40%
    ),
    radial-gradient(
      circle at 90% 90%,
      rgba(0, 153, 255, 0.08) 0%,
      transparent 40%
    ),
    radial-gradient(
      circle at 90% 10%,
      rgba(192, 192, 192, 0.08) 0%,
      transparent 40%
    );
  z-index: 0;
  animation: backgroundPulse 15s ease-in-out infinite alternate;
}

.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.particle {
  position: absolute;
  width: 15px;
  height: 15px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  pointer-events: none;
}

.particle::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  filter: blur(5px);
}

.p1 {
  top: 20%;
  left: 10%;
  animation: particleFloat 30s linear infinite;
}

.p2 {
  top: 60%;
  left: 20%;
  width: 25px;
  height: 25px;
  animation: particleFloat 25s linear infinite reverse;
}

.p3 {
  top: 30%;
  right: 15%;
  width: 20px;
  height: 20px;
  animation: particleFloat 35s linear infinite;
}

.p4 {
  bottom: 20%;
  right: 10%;
  animation: particleFloat 20s linear infinite alternate;
}

.p5 {
  top: 80%;
  left: 50%;
  width: 30px;
  height: 30px;
  animation: particleFloat 40s linear infinite reverse;
}

.p6 {
  top: 15%;
  left: 65%;
  animation: particleFloat 28s linear infinite;
}

@keyframes particleFloat {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(100px, 50px);
  }
  50% {
    transform: translate(50px, 100px);
  }
  75% {
    transform: translate(-50px, 50px);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes gradientShift {
  0% {
    background-color: #1a1721;
  }
  100% {
    background-color: #121019;
  }
}

@keyframes backgroundPulse {
  0% {
    opacity: 0.5;
    transform: scale(1);
  }
  100% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

/* Header styles */
.yearly-awards-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
}

.year-badge {
  display: inline-block;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  color: white;
  font-weight: 700;
  padding: 0.6rem 2rem;
  border-radius: 30px;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  box-shadow: 0 8px 20px rgba(221, 69, 68, 0.3),
    inset 0 1px 3px rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  transform: perspective(500px) rotateX(10deg);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.year-badge::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
  transform: rotate(45deg);
  animation: shimmer 3s infinite;
}

.year-badge::after {
  content: "AWARDS";
  position: absolute;
  bottom: -0.5rem;
  right: -0.5rem;
  font-size: 0.6rem;
  opacity: 0.7;
  letter-spacing: 0.1em;
}

.yearly-title {
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.yearly-title .highlight {
  background: linear-gradient(135deg, #dd4544, #e8937c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
}

.yearly-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 700px;
  margin: 0 auto;
}

/* Grand prizes container */
.grand-prizes-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 4rem;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
}

/* Prize card styles */
.grand-prize-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2),
    inset 0 1px 1px rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  transform-style: preserve-3d;
  perspective: 1000px;
}

.grand-prize-card:hover {
  transform: translateY(-10px) rotateX(5deg);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3),
    inset 0 1px 1px rgba(255, 255, 255, 0.15);
}

/* Add animated shine effect */
.grand-prize-card::after {
  content: "";
  position: absolute;
  top: -100%;
  left: -100%;
  width: 300%;
  height: 300%;
  background: linear-gradient(
    45deg,
    transparent 20%,
    rgba(255, 255, 255, 0.03) 30%,
    rgba(255, 255, 255, 0.07) 40%,
    transparent 50%
  );
  transform: rotate(30deg);
  transition: transform 3s ease;
  pointer-events: none;
}

.grand-prize-card:hover::after {
  transform: rotate(30deg) translate(50%, 50%);
}

/* Specific card backgrounds */
.whale-award {
  background: linear-gradient(
    135deg,
    rgba(0, 153, 255, 0.05),
    rgba(0, 102, 204, 0.05)
  );
  border-color: rgba(0, 153, 255, 0.1);
}

.community-award {
  background: linear-gradient(
    135deg,
    rgba(221, 69, 68, 0.05),
    rgba(232, 147, 124, 0.05)
  );
  border-color: rgba(221, 69, 68, 0.1);
}

.innovation-award {
  background: linear-gradient(
    135deg,
    rgba(192, 192, 192, 0.05),
    rgba(128, 128, 128, 0.05)
  );
  border-color: rgba(192, 192, 192, 0.1);
}

/* Prize amount */
.prize-amount {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1;
  position: relative;
  z-index: 1;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.02em;
}

.whale-award .prize-amount {
  color: transparent;
  background: linear-gradient(135deg, #0099ff, #66ccff);
  -webkit-background-clip: text;
  background-clip: text;
}

.community-award .prize-amount {
  color: transparent;
  background: linear-gradient(135deg, #dd4544, #ff7b6b);
  -webkit-background-clip: text;
  background-clip: text;
}

.innovation-award .prize-amount {
  display: flex;
  align-items: center;
  justify-content: center;
}

.currency {
  font-size: 1.75rem;
  vertical-align: super;
  margin-right: 0.25rem;
}

.cybertruck-text {
  font-size: 2rem;
  background: linear-gradient(135deg, #c0c0c0, #e0e0e0, #a0a0a0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 900;
  position: relative;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.cybertruck-text::after {
  content: "TESLA";
  position: absolute;
  top: -1.2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.75rem;
  opacity: 0.7;
  letter-spacing: 0.2em;
}

/* Trophy icon */
.prize-trophy {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 2.5rem;
  opacity: 0.7;
  z-index: 1;
  transition: all 0.3s ease;
  filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.3));
}

.grand-prize-card:hover .prize-trophy {
  transform: scale(1.2) rotate(15deg);
  opacity: 1;
}

.whale-award .prize-trophy {
  color: rgba(0, 153, 255, 0.8);
}

.community-award .prize-trophy {
  color: rgba(221, 69, 68, 0.8);
}

.innovation-award .prize-trophy {
  color: rgba(220, 220, 220, 0.8);
}

/* Prize title & description */
.prize-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.prize-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

/* Prize details */
.prize-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
  flex-grow: 1;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

.detail-item i {
  font-size: 1rem;
}

.whale-award .detail-item i {
  color: rgba(0, 153, 255, 0.7);
}

.community-award .detail-item i {
  color: rgba(221, 69, 68, 0.7);
}

.innovation-award .detail-item i {
  color: rgba(192, 192, 192, 0.7);
}

.detail-item.milestone {
  margin-top: 0.75rem;
  padding: 0.75rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px dashed rgba(255, 255, 255, 0.1);
}

.detail-item.milestone i {
  color: #dd4544;
}

.detail-item.restriction {
  margin-top: 0.75rem;
  padding: 0.75rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px dashed rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.detail-item.restriction i {
  color: rgba(255, 215, 0, 0.8);
}

/* CTA button */
.prize-cta {
  margin-top: auto;
  position: relative;
  z-index: 1;
}

.view-leaderboard-btn {
  width: 100%;
  padding: 0.875rem;
  border-radius: 8px;
  border: none;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.whale-award .view-leaderboard-btn:hover {
  background: rgba(0, 153, 255, 0.15);
}

.community-award .view-leaderboard-btn:hover {
  background: rgba(221, 69, 68, 0.15);
}

.innovation-award .view-leaderboard-btn:hover {
  background: rgba(192, 192, 192, 0.15);
}

/* Footer section */
.yearly-awards-footer {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
}

/* Eligibility section */
.eligibility-container {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.eligibility-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: white;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
}

.eligibility-title i {
  color: #dd4544;
}

.eligibility-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.25rem;
}

.eligibility-point {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.point-marker {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  margin-top: 0.375rem;
  flex-shrink: 0;
}

.highlight-point {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.15rem;
}

.highlight-point i {
  font-size: 0.75rem;
  color: white;
}

.eligibility-point p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  line-height: 1.5;
}

.eligibility-point strong {
  color: white;
}

/* Countdown section */
.countdown-to-ceremony {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2.5rem;
  background: linear-gradient(
    135deg,
    rgba(221, 69, 68, 0.05),
    rgba(232, 147, 124, 0.05)
  );
  border-radius: 16px;
  border: 1px solid rgba(221, 69, 68, 0.1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.countdown-to-ceremony::before {
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

.countdown-headline {
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.75rem;
  position: relative;
}

.countdown-date {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.2rem;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.countdown-location {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
}

.countdown-location i {
  color: #dd4544;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}

/* CTA section */
.awards-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.register-btn {
  padding: 1.2rem 3rem;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  border: none;
  border-radius: 30px;
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 10px 25px rgba(221, 69, 68, 0.4),
    inset 0 1px 1px rgba(255, 255, 255, 0.3);
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.register-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.7s ease;
  z-index: -1;
}

.register-btn:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 15px 30px rgba(221, 69, 68, 0.5),
    inset 0 1px 1px rgba(255, 255, 255, 0.4);
}

.register-btn:hover::before {
  left: 100%;
}

.register-btn i {
  font-size: 1.25rem;
  transition: transform 0.3s ease;
}

.register-btn:hover i {
  transform: rotate(20deg) scale(1.2);
}

.terms-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: underline;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.terms-link:hover {
  color: white;
}

/* Responsive styles */
@media (max-width: 1024px) {
  .grand-prizes-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .innovation-award {
    grid-column: span 2;
    max-width: 600px;
    justify-self: center;
  }
}

@media (max-width: 768px) {
  .yearly-title {
    font-size: 2.5rem;
  }

  .grand-prizes-container {
    grid-template-columns: 1fr;
  }

  .innovation-award {
    grid-column: span 1;
  }

  .eligibility-points {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .yearly-title {
    font-size: 2rem;
  }

  .yearly-subtitle {
    font-size: 1rem;
  }

  .prize-amount {
    font-size: 2.5rem;
  }

  .cybertruck-text {
    font-size: 1.5rem;
  }

  .grand-prize-card {
    padding: 2rem 1.5rem;
  }
}
</style>

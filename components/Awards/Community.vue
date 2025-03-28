<template>
  <section class="community-awards-section" id="community-awards">
    <div class="community-bg"></div>

    <div class="community-content">
      <div class="community-header">
        <div class="community-badge">
          <i class="fas fa-users"></i>
          <span>Monthly Award</span>
        </div>
        <h2 class="community-title">
          Community <span class="highlight">Guru</span>
        </h2>
        <p class="community-subtitle">Rewarding those who grow our community</p>
      </div>

      <div class="community-card">
        <div class="card-content">
          <div class="prize-info">
            <div class="prize-amount"><span class="currency">$</span>1,000</div>
            <div class="prize-label">Monthly Prize</div>
          </div>

          <div class="award-info">
            <div class="award-icon"><i class="fas fa-user-friends"></i></div>
            <div class="award-details">
              <h3>Bring New Players, Win Monthly</h3>
              <p>
                Awarded to the member who refers the most active players each
                month
              </p>
              <div class="bonus-tag">
                <i class="fas fa-plus-circle"></i>
                <span>10% commission on your referrals' winnings</span>
              </div>
            </div>
          </div>

          <div class="steps-row">
            <div class="step">
              <div class="step-number">1</div>
              <p>Get Your Link</p>
            </div>
            <div class="step-arrow"><i class="fas fa-chevron-right"></i></div>
            <div class="step">
              <div class="step-number">2</div>
              <p>Share Widely</p>
            </div>
            <div class="step-arrow"><i class="fas fa-chevron-right"></i></div>
            <div class="step">
              <div class="step-number">3</div>
              <p>Track Progress</p>
            </div>
            <div class="step-arrow"><i class="fas fa-chevron-right"></i></div>
            <div class="step">
              <div class="step-number">4</div>
              <p>Earn Rewards</p>
            </div>
          </div>

          <div class="cta-container">
            <NuxtLink to="/register" class="cta-button">
              Get Your Referral Link
              <i class="fas fa-arrow-right"></i>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="note-container">
        <div class="note-icon">
          <i class="fas fa-info-circle"></i>
        </div>
        <div class="note-text">
          10% commission applies to all cash prizes except Community Guru Award.
          Referred players must remain active for you to qualify.
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.community-awards-section {
  padding: 4rem 0;
  position: relative;
  background-color: #1a1721;
  overflow: hidden;
}

.community-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at 10% 20%,
    rgba(0, 153, 255, 0.05) 0%,
    transparent 50%
  );
  z-index: 0;
}

.community-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
}

/* Header styles */
.community-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.community-badge {
  display: inline-flex;
  align-items: center;
  background: linear-gradient(
    135deg,
    rgba(0, 153, 255, 0.1),
    rgba(0, 153, 255, 0.2)
  );
  color: #0099ff;
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: 30px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  gap: 0.5rem;
  box-shadow: 0 5px 15px rgba(0, 153, 255, 0.15);
}

.community-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.5rem;
}

.community-title .highlight {
  background: linear-gradient(135deg, #0099ff, #66ccff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
}

.community-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
}

/* Card styles */
.community-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.card-content {
  padding: 2rem;
  position: relative;
}

/* Prize info */
.prize-info {
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-bottom: 1.5rem;
  gap: 0.5rem;
}

.prize-amount {
  font-size: 3rem;
  font-weight: 800;
  color: #0099ff;
  line-height: 1;
  text-shadow: 0 5px 15px rgba(0, 153, 255, 0.3);
}

.currency {
  font-size: 1.5rem;
  vertical-align: super;
  margin-right: 0.1rem;
}

.prize-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  font-weight: 600;
}

/* Award info */
.award-info {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  background: rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  border-radius: 12px;
}

.award-icon {
  font-size: 2rem;
  color: rgba(0, 153, 255, 0.7);
  flex-shrink: 0;
}

.award-details {
  flex: 1;
}

.award-details h3 {
  font-size: 1.2rem;
  color: white;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.award-details p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.75rem;
  line-height: 1.5;
}

.bonus-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 153, 255, 0.1);
  padding: 0.5rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  color: #0099ff;
  font-weight: 600;
  border: 1px solid rgba(0, 153, 255, 0.2);
}

/* Steps row */
.steps-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.step-number {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0099ff, #66ccff);
  color: white;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.step p {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.step-arrow {
  color: rgba(0, 153, 255, 0.5);
  font-size: 0.8rem;
}

/* CTA button */
.cta-container {
  text-align: center;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #0099ff, #66ccff);
  color: white;
  font-weight: 600;
  padding: 0.875rem 1.75rem;
  border-radius: 30px;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 153, 255, 0.3);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(0, 153, 255, 0.4);
}

.cta-button i {
  transition: transform 0.3s ease;
}

.cta-button:hover i {
  transform: translateX(5px);
}

/* Note section - Fixed alignment */
.note-container {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  text-align: left; /* Add this to ensure left alignment */
}

.note-icon {
  font-size: 1.25rem;
  color: rgba(0, 153, 255, 0.8);
  flex-shrink: 0;
  margin-top: 0.1rem; /* Add a small top margin to align with first line of text */
}

.note-text {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
  flex: 1; /* Add this to make the text take remaining width */
}

/* Fix mobile alignment by overriding the center alignment */
@media (max-width: 768px) {
  .community-title {
    font-size: 2rem;
  }

  .award-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .steps-row {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  .step {
    width: 40%;
  }

  .step-arrow {
    display: none;
  }

  .note-container {
    flex-direction: row; /* Change from column back to row */
    align-items: flex-start;
    text-align: left; /* Ensure text alignment stays left */
    justify-content: flex-start; /* Add this to ensure proper alignment */
  }

  .note-icon {
    margin-top: 0.1rem; /* Keep the margin consistent */
  }
}

@media (max-width: 480px) {
  .community-title {
    font-size: 1.75rem;
  }

  .prize-amount {
    font-size: 2.5rem;
  }

  .card-content {
    padding: 1.5rem;
  }

  .step {
    width: 45%;
  }

  .cta-button {
    width: 100%;
    justify-content: center;
  }
}
</style>

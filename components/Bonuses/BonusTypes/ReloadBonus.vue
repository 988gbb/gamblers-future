<template>
  <div class="bonus-type-content">
    <div class="bonus-type-description">
      <p>
        Welcome bonuses are offered to new players when they first sign up at an
        online casino. They typically match a percentage of your initial
        deposit, effectively giving you extra funds to play with.
      </p>

      <div class="bonus-example">
        <h4>Example: 100% up to $500</h4>
        <p>
          If you deposit $500, you'll receive an additional $500 in bonus funds,
          giving you $1,000 to play with.
        </p>
      </div>

      <div class="key-points">
        <div class="point">
          <div class="point-icon">
            <i class="fas fa-plus-circle"></i>
          </div>
          <div class="point-text">
            <h5>Pros</h5>
            <ul>
              <li>Significantly boosts your initial bankroll</li>
              <li>Lets you explore more games with less risk</li>
              <li>Often includes free spins as part of the package</li>
            </ul>
          </div>
        </div>

        <div class="point">
          <div class="point-icon">
            <i class="fas fa-minus-circle"></i>
          </div>
          <div class="point-text">
            <h5>Cons</h5>
            <ul>
              <li>Subject to wagering requirements (typically 30-50x)</li>
              <li>May have maximum bet limits while active</li>
              <li>Often has an expiration date (usually 7-30 days)</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="tip-section">
        <div class="tip-icon">
          <i class="fas fa-lightbulb"></i>
        </div>
        <div class="tip-content">
          <h5>Pro Tip</h5>
          <p>
            Always check if the welcome bonus requires a bonus code during
            registration or deposit, and verify which games contribute most
            toward wagering requirements.
          </p>
        </div>
      </div>
    </div>

    <div class="featured-bonus">
      <h4>Top Welcome Bonus</h4>
      <div class="featured-card">
        <div class="casino-name">Royal Vegas</div>
        <div class="bonus-value">$1,200</div>
        <div class="bonus-details">100% Match + 120 Free Spins</div>
        <a href="/go/royal-vegas" class="claim-link">
          Claim Bonus <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bonus-type-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  align-items: start;
}

.bonus-type-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.6;
}

.bonus-example {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  border-left: 3px solid #dd4544;
}

.bonus-example h4 {
  color: white;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.key-points {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
}

.point {
  display: flex;
  gap: 1rem;
}

.point-icon {
  font-size: 1.2rem;
  padding-top: 0.2rem;
}

.point-icon i {
  opacity: 0.9;
}

.point-icon .fa-plus-circle {
  color: #4caf50;
}

.point-icon .fa-minus-circle {
  color: #f44336;
}

.point-text {
  flex: 1;
}

.point-text h5 {
  margin-bottom: 0.5rem;
  color: white;
  font-size: 1rem;
}

.point-text ul {
  padding-left: 1.2rem;
}

.point-text li {
  margin-bottom: 0.5rem;
}

.tip-section {
  background: rgba(255, 193, 7, 0.1);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.tip-icon {
  font-size: 1.3rem;
  color: #ffc107;
  padding-top: 0.2rem;
}

.tip-content h5 {
  color: #ffc107;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.featured-bonus {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.featured-bonus h4 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  text-align: center;
}

.featured-card {
  background: rgba(221, 69, 68, 0.1);
  border-radius: 8px;
  padding: 1.2rem;
  text-align: center;
  border: 1px dashed rgba(221, 69, 68, 0.3);
}

.casino-name {
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
}

.bonus-value {
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.bonus-details {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.claim-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  color: white;
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.claim-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(221, 69, 68, 0.3);
}

.claim-link i {
  transition: all 0.3s ease;
}

.claim-link:hover i {
  transform: translateX(3px);
}

@media (max-width: 768px) {
  .bonus-type-content {
    grid-template-columns: 1fr;
  }

  .featured-bonus {
    margin-top: 1rem;
  }
}
</style>

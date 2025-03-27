<template>
  <div class="bonus-type-content">
    <div class="bonus-type-description">
      <p>
        Cashback bonuses return a percentage of your losses back to you over a
        specific period. They act as a safety net, reducing your overall losses
        and giving you another chance to play even after an unlucky streak.
      </p>

      <div class="bonus-example">
        <h4>Example: 10% Weekly Cashback up to $100</h4>
        <p>
          If you lose $500 playing during the week, you'll receive $50 back as a
          cashback bonus the following Monday.
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
              <li>Offers a cushion against losing streaks</li>
              <li>Often comes with low or no wagering requirements</li>
              <li>Guaranteed benefit if you lose (unlike most bonuses)</li>
              <li>Can be particularly valuable for high-stakes players</li>
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
              <li>Usually only applies to net losses over a period</li>
              <li>Typically capped at a maximum amount</li>
              <li>Percentage returned is usually modest (5-20%)</li>
              <li>May only apply to specific games or sections</li>
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
            Some cashback offers are paid automatically, while others require
            you to claim them within a certain timeframe. Check the terms to
            avoid missing out on your cashback.
          </p>
        </div>
      </div>
    </div>

    <div class="featured-bonus">
      <h4>Top Cashback Offer</h4>
      <div class="featured-card">
        <div class="casino-name">Platinum Play</div>
        <div class="bonus-value">10% Cashback</div>
        <div class="bonus-details">Weekly Cashback on All Games</div>
        <a href="/go/platinum-play" class="claim-link">
          Claim Offer <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Similar styles with teal color theme */
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
  border-left: 3px solid #009688; /* Changed color */
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
  background: rgba(0, 150, 136, 0.1); /* Changed color */
  border-radius: 8px;
  padding: 1.2rem;
  text-align: center;
  border: 1px dashed rgba(0, 150, 136, 0.3); /* Changed color */
}

.casino-name {
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
}

.bonus-value {
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #004d40, #4db6ac); /* Changed gradient */
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
  background: linear-gradient(135deg, #004d40, #4db6ac); /* Changed gradient */
  color: white;
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.claim-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0, 150, 136, 0.3); /* Changed color */
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

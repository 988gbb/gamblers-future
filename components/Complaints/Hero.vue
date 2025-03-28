<template>
  <section class="complaints-hero">
    <div class="hero-backdrop"></div>

    <div class="container">
      <div class="hero-content">
        <div class="hero-badge">
          <i class="fas fa-shield-alt"></i>
          <span>Player Protection</span>
        </div>

        <h1 class="hero-title">
          Dispute <span class="highlight">Resolution</span> Center
        </h1>
        <p class="hero-subtitle">
          We advocate for fair treatment and help resolve issues between players
          and casinos
        </p>

        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-number">92<span class="percent">%</span></div>
            <div class="stat-label">Resolution Rate</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <div class="stat-number">48<span class="unit">hrs</span></div>
            <div class="stat-label">Avg. Response Time</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <div class="stat-number">8.9<span class="unit">M</span></div>
            <div class="stat-label">Recovered for Players</div>
          </div>
        </div>

        <div class="process-overview">
          <h2 class="process-title">
            <i class="fas fa-tasks"></i>
            Simple 4-Step Process
          </h2>

          <div class="process-steps">
            <div class="process-step">
              <div class="step-icon">
                <i class="fas fa-file-alt"></i>
              </div>
              <div class="step-content">
                <h3>Submit Complaint</h3>
                <p>
                  File your complaint with all relevant details and supporting
                  evidence
                </p>
              </div>
            </div>

            <div class="process-step">
              <div class="step-icon">
                <i class="fas fa-search"></i>
              </div>
              <div class="step-content">
                <h3>Initial Review</h3>
                <p>
                  Our team reviews your case within 48 hours and may request
                  additional information
                </p>
              </div>
            </div>

            <div class="process-step">
              <div class="step-icon">
                <i class="fas fa-comments"></i>
              </div>
              <div class="step-content">
                <h3>Mediation</h3>
                <p>
                  We contact the casino on your behalf and work toward a fair
                  resolution
                </p>
              </div>
            </div>

            <div class="process-step">
              <div class="step-icon">
                <i class="fas fa-check-circle"></i>
              </div>
              <div class="step-content">
                <h3>Resolution</h3>
                <p>
                  Case is closed when a resolution is reached or all options are
                  exhausted
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="commitment-box">
          <div class="commitment-header">
            <i class="fas fa-handshake"></i>
            <h3>Our Commitment to You</h3>
          </div>
          <div class="commitment-content">
            <p>
              We believe every player deserves fair treatment and transparent
              service from gambling operators. Our dedicated team works
              tirelessly to advocate for your rights and ensure you're treated
              fairly.
            </p>
            <ul class="commitment-list">
              <li>
                <i class="fas fa-check"></i> We review every complaint
                thoroughly and fairly
              </li>
              <li>
                <i class="fas fa-check"></i> We maintain your privacy and
                confidentiality
              </li>
              <li>
                <i class="fas fa-check"></i> We never charge players for our
                mediation services
              </li>
              <li>
                <i class="fas fa-check"></i> We use our industry relationships
                to push for resolutions
              </li>
            </ul>
          </div>
        </div>

        <div class="cta-container">
          <button class="primary-cta" @click="scrollToForm">
            Submit a Complaint
            <i class="fas fa-arrow-right"></i>
          </button>
          <button class="secondary-cta" @click="scrollToFAQ">
            Read FAQs
            <i class="fas fa-question-circle"></i>
          </button>
        </div>

        <div class="disclaimer-note">
          <i class="fas fa-info-circle"></i>
          <p>
            For urgent issues requiring immediate assistance, please use our
            <a href="#emergency-contact">emergency contact options</a>.
          </p>
        </div>
      </div>

      <div class="resolution-timeline">
        <h3 class="timeline-title">Expected Resolution Timeline</h3>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker initial"></div>
            <div class="timeline-content">
              <div class="timeline-heading">Initial Review</div>
              <div class="timeline-period">1-2 Days</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker investigation"></div>
            <div class="timeline-content">
              <div class="timeline-heading">Casino Contact & Investigation</div>
              <div class="timeline-period">3-7 Days</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker negotiation"></div>
            <div class="timeline-content">
              <div class="timeline-heading">Negotiation & Mediation</div>
              <div class="timeline-period">7-14 Days</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker resolution"></div>
            <div class="timeline-content">
              <div class="timeline-heading">Resolution & Follow-up</div>
              <div class="timeline-period">14-21 Days</div>
            </div>
          </div>
        </div>
        <p class="timeline-note">
          *Complex cases may require additional time. You'll receive regular
          updates throughout the process.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollToForm = () => {
  const formElement = document.getElementById("complaint-form");
  if (formElement) {
    formElement.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToFAQ = () => {
  const faqElement = document.getElementById("complaints-faq");
  if (faqElement) {
    faqElement.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
.complaints-hero {
  background-color: #1a1721;
  position: relative;
  padding: 5rem 0 4rem;
  overflow: hidden;
}

.hero-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      circle at 10% 10%,
      rgba(255, 103, 103, 0.05) 0%,
      transparent 60%
    ),
    radial-gradient(
      circle at 90% 90%,
      rgba(75, 192, 192, 0.05) 0%,
      transparent 60%
    );
  z-index: 0;
}

.hero-backdrop::before {
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
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 103, 103, 0.1);
  color: #ff6767;
  border-radius: 30px;
  padding: 0.5rem 1rem;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  gap: 0.5rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-title .highlight {
  background: linear-gradient(135deg, #ff6767, #ff9d67);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
}

.hero-title .highlight::after {
  content: "";
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  height: 6px;
  background: linear-gradient(
    90deg,
    rgba(255, 103, 103, 0.2),
    rgba(255, 157, 103, 0)
  );
  z-index: -1;
  border-radius: 3px;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
}

/* Stats section */
.hero-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3.5rem;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.stat-item {
  text-align: center;
  padding: 0 2rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #ff6767;
  line-height: 1;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: baseline;
}

.percent,
.unit {
  font-size: 1.4rem;
  margin-left: 2px;
}

.stat-label {
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
}

/* Process overview */
.process-overview {
  margin-bottom: 3rem;
}

.process-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.process-title i {
  color: #ff6767;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.process-step {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.process-step:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 103, 103, 0.2);
}

.step-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 103, 103, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff6767;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-content h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  margin: 0 0 0.75rem;
}

.step-content p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
  margin: 0;
}

/* Commitment box */
.commitment-box {
  background: rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: 3rem;
  text-align: left;
  overflow: hidden;
}

.commitment-header {
  background: linear-gradient(
    135deg,
    rgba(255, 103, 103, 0.2),
    rgba(255, 157, 103, 0.2)
  );
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid rgba(255, 103, 103, 0.2);
}

.commitment-header i {
  font-size: 1.5rem;
  color: #ff6767;
}

.commitment-header h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  margin: 0;
}

.commitment-content {
  padding: 1.5rem;
}

.commitment-content p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin: 0 0 1.25rem;
}

.commitment-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0.75rem 1.5rem;
}

.commitment-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
}

.commitment-list li i {
  color: #4bc0c0;
  font-size: 0.9rem;
}

/* CTA container */
.cta-container {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.primary-cta,
.secondary-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.75rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary-cta {
  background: linear-gradient(135deg, #ff6767, #ff9d67);
  color: white;
  border: none;
  box-shadow: 0 8px 15px rgba(255, 103, 103, 0.25);
}

.primary-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 20px rgba(255, 103, 103, 0.35);
}

.secondary-cta {
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.secondary-cta:hover {
  background: rgba(255, 255, 255, 0.05);
  color: white;
  transform: translateY(-3px);
}

/* Disclaimer note */
.disclaimer-note {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  background: rgba(255, 103, 103, 0.05);
  border-radius: 8px;
  padding: 1rem 1.25rem;
  border-left: 3px solid rgba(255, 103, 103, 0.5);
  max-width: 600px;
  margin: 0 auto 3rem;
}

.disclaimer-note i {
  color: #ff6767;
  font-size: 1.1rem;
  margin-top: 0.15rem;
}

.disclaimer-note p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.5;
}

.disclaimer-note a {
  color: #ff6767;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.disclaimer-note a:hover {
  color: #ff9d67;
  text-decoration: underline;
}

/* Resolution timeline */
.resolution-timeline {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  max-width: 800px;
  margin: 0 auto;
}

.timeline-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  margin: 0 0 1.5rem;
  text-align: center;
}

.timeline {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
}

.timeline::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-50%);
}

.timeline-item {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.timeline-marker {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
}

.timeline-marker::after {
  content: "";
  position: absolute;
  top: -6px;
  left: -6px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  opacity: 0.3;
  z-index: -1;
}

.timeline-marker.initial {
  background: #ff6767;
}

.timeline-marker.initial::after {
  background: #ff6767;
}

.timeline-marker.investigation {
  background: #ffc107;
}

.timeline-marker.investigation::after {
  background: #ffc107;
}

.timeline-marker.negotiation {
  background: #4bc0c0;
}

.timeline-marker.negotiation::after {
  background: #4bc0c0;
}

.timeline-marker.resolution {
  background: #4caf50;
}

.timeline-marker.resolution::after {
  background: #4caf50;
}

.timeline-content {
  text-align: center;
  width: 100%;
}

.timeline-heading {
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
}

.timeline-period {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
}

.timeline-note {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin: 1.5rem 0 0;
  font-style: italic;
}

/* Responsive styles */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .complaints-hero {
    padding: 4rem 0 3rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
  }

  .stat-divider {
    width: 80px;
    height: 1px;
  }

  .process-steps {
    grid-template-columns: 1fr;
  }

  .cta-container {
    flex-direction: column;
  }

  .primary-cta,
  .secondary-cta {
    width: 100%;
    justify-content: center;
  }

  .timeline {
    flex-direction: column;
    gap: 2rem;
    padding: 0;
  }

  .timeline::before {
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    transform: translateX(-50%);
  }

  .timeline-item {
    flex-direction: row;
    gap: 1rem;
  }

  .timeline-marker {
    margin-bottom: 0;
  }

  .timeline-content {
    text-align: left;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .percent,
  .unit {
    font-size: 1.2rem;
  }

  .commitment-header {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
    padding: 1rem;
  }

  .commitment-list {
    grid-template-columns: 1fr;
  }

  .resolution-timeline {
    padding: 1.5rem;
  }
}
</style>

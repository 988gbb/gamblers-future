<template>
  <section class="awards-hero">
    <!-- Background elements -->
    <div class="hero-bg-elements">
      <div class="bg-pattern"></div>
      <div class="bg-gradient"></div>
      <div class="floating-elements">
        <div class="floating-element trophy">
          <i class="fas fa-trophy"></i>
        </div>
        <div class="floating-element medal">
          <i class="fas fa-medal"></i>
        </div>
        <div class="floating-element star">
          <i class="fas fa-star"></i>
        </div>
        <div class="floating-element crown">
          <i class="fas fa-crown"></i>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="hero-content">
        <div class="award-year-badge">
          <span>2025</span>
        </div>

        <h1 class="hero-title">
          Gambler's Future <span class="highlight">Awards</span>
        </h1>

        <p class="hero-subtitle">
          Recognizing excellence and rewarding our players with real cash prizes
        </p>

        <div class="awards-features">
          <div class="feature">
            <div class="feature-icon">
              <i class="fas fa-gem"></i>
            </div>
            <div class="feature-text">
              <span>Premium Casino Rewards</span>
            </div>
          </div>

          <div class="feature">
            <div class="feature-icon">
              <i class="fas fa-check-circle"></i>
            </div>
            <div class="feature-text">
              <span>Monthly Winners</span>
            </div>
          </div>

          <div class="feature special-feature">
            <div class="feature-icon">
              <i class="fas fa-award"></i>
            </div>
            <div class="feature-text">
              <span>$200K+ Yearly Prizes</span>
            </div>
          </div>

          <div class="feature">
            <div class="feature-icon">
              <i class="fas fa-dollar-sign"></i>
            </div>
            <div class="feature-text">
              <span>Real Cash Prizes</span>
            </div>
          </div>
        </div>

        <div class="hero-cta">
          <a href="#awards-section" class="cta-button">
            <span>Monthly Winners</span>
            <i class="fas fa-chevron-down"></i>
          </a>
          <a href="#yearly-awards" class="yearly-button">
            <span>Yearly Grand Prizes</span>
            <i class="fas fa-trophy"></i>
          </a>
          <a href="/login" class="secondary-button">
            <span>Join & Compete</span>
            <i class="fas fa-user-plus"></i>
          </a>
        </div>
      </div>

      <div class="hero-trophy">
        <div class="trophy-icon">
          <div class="trophy-glow"></div>
          <i class="fas fa-trophy"></i>
          <div class="trophy-sparkles">
            <i class="fas fa-star top-right"></i>
            <i class="fas fa-star bottom-left"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="yearly-banner">
      <div class="yearly-banner-content">
        <div class="banner-icon">
          <i class="fas fa-crown"></i>
        </div>
        <div class="banner-text">
          <h3>$200,000+ in Yearly Grand Prizes</h3>
          <p>Including $100K cash & a Tesla Cybertruck</p>
        </div>
        <a href="#yearly-awards" class="banner-button">
          View Grand Prizes <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.awards-hero {
  position: relative;
  display: flex;
  align-items: center;
  padding: 6rem 0 7rem;
  background-color: #1a1721;
  overflow: hidden;
}

/* Background elements */
.hero-bg-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/images/backgrounds/hideout.svg");
  background-repeat: repeat;
  background-size: 200px 200px;
  opacity: 0.08;
  z-index: 0;
}

.bg-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      circle at 20% 30%,
      rgba(221, 69, 68, 0.08) 0%,
      transparent 60%
    ),
    radial-gradient(
      circle at 80% 70%,
      rgba(76, 175, 80, 0.05) 0%,
      transparent 60%
    );
  z-index: 1;
}

/* Floating elements */
.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.floating-element {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.3);
  font-size: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.floating-element.trophy {
  top: 15%;
  left: 10%;
  animation: float 8s ease-in-out infinite;
}

.floating-element.medal {
  top: 70%;
  left: 15%;
  animation: float 9s ease-in-out infinite reverse;
}

.floating-element.star {
  top: 25%;
  right: 10%;
  animation: float 7s ease-in-out infinite;
}

.floating-element.crown {
  top: 60%;
  right: 15%;
  animation: float 10s ease-in-out infinite alternate;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

/* Container and content */
.container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
}

.hero-content {
  max-width: 600px;
}

.award-year-badge {
  display: inline-block;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  color: white;
  font-weight: 700;
  padding: 0.4rem 1.2rem;
  border-radius: 30px;
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  box-shadow: 0 8px 20px rgba(221, 69, 68, 0.3);
  position: relative;
  overflow: hidden;
}

.award-year-badge::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
  transform: rotate(45deg);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) rotate(45deg);
  }
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.hero-title .highlight {
  background: linear-gradient(135deg, #dd4544, #e8937c);
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
  height: 5px;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  opacity: 0.3;
  border-radius: 5px;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

/* Features section */
.awards-features {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.feature {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.feature-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(221, 69, 68, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dd4544;
}

.feature-text {
  font-size: 0.95rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}

.special-feature .feature-icon {
  background: rgba(255, 215, 0, 0.15);
  color: #ffd700;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.special-feature .feature-text {
  font-weight: 600;
  color: #ffd700;
}

/* CTA section */
.hero-cta {
  display: flex;
  gap: 1rem;
}

.cta-button,
.secondary-button,
.yearly-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.5rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.cta-button {
  background: linear-gradient(135deg, #dd4544, #e8937c);
  color: white;
  box-shadow: 0 8px 20px rgba(221, 69, 68, 0.3);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(221, 69, 68, 0.4);
}

.yearly-button {
  background: linear-gradient(135deg, #ffd700, #ffb347);
  color: #1a1721;
  box-shadow: 0 8px 20px rgba(255, 215, 0, 0.3);
}

.yearly-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(255, 215, 0, 0.4);
}

.yearly-button i {
  font-size: 1.1rem;
}

.secondary-button {
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.secondary-button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

/* Trophy styling */
.hero-trophy {
  position: relative;
}

.trophy-icon {
  position: relative;
  width: 320px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: trophyFloat 8s ease-in-out infinite;
}

@keyframes trophyFloat {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

.trophy-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at center,
    rgba(221, 69, 68, 0.2) 0%,
    transparent 70%
  );
  filter: blur(40px);
  z-index: 1;
  opacity: 0.7;
}

.trophy-icon i {
  font-size: 180px;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 10px 30px rgba(221, 69, 68, 0.4));
}

.trophy-sparkles {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.trophy-sparkles i {
  position: absolute;
  font-size: 30px;
  color: #dd4544;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 10px rgba(221, 69, 68, 0.3));
  animation: sparkle 3s ease-in-out infinite;
}

.trophy-sparkles i.top-right {
  top: 15%;
  right: 15%;
  animation-delay: 0.5s;
}

.trophy-sparkles i.bottom-left {
  bottom: 15%;
  left: 15%;
  animation-delay: 1s;
}

@keyframes sparkle {
  0%,
  100% {
    opacity: 0.2;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

/* Yearly Banner */
.yearly-banner {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(
    to right,
    rgba(26, 23, 33, 0.9),
    rgba(26, 23, 33, 0.8)
  );
  padding: 1rem 0;
  backdrop-filter: blur(10px);
  z-index: 20;
  border-top: 1px solid rgba(255, 215, 0, 0.2);
}

.yearly-banner-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.banner-icon {
  font-size: 2rem;
  color: #ffd700;
  margin-right: 1rem;
}

.banner-text {
  flex: 1;
}

.banner-text h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin: 0;
}

.banner-text p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0.25rem 0 0;
}

.banner-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  border-radius: 30px;
  background: rgba(255, 215, 0, 0.2);
  color: #ffd700;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  text-decoration: none;
  border: 1px solid rgba(255, 215, 0, 0.3);
}

.banner-button:hover {
  background: rgba(255, 215, 0, 0.3);
}

@media (max-width: 768px) {
  .yearly-banner-content {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
  }

  .banner-icon {
    margin-right: 0;
  }

  .banner-button {
    width: 100%;
    justify-content: center;
  }
}

/* Responsive styles */
@media (max-width: 1080px) {
  .container {
    flex-direction: column;
    text-align: center;
  }

  .hero-content {
    max-width: 100%;
    margin-bottom: 3rem;
  }

  .awards-features {
    justify-content: center;
  }

  .hero-cta {
    justify-content: center;
  }

  .trophy-icon {
    width: 280px;
    height: 280px;
  }

  .trophy-icon i {
    font-size: 150px;
  }
}

@media (max-width: 768px) {
  .awards-hero {
    padding: 4rem 0 15rem;
    min-height: auto;
  }

  .hero-trophy {
    display: none;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .awards-features {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .hero-cta {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }

  .cta-button,
  .yearly-button,
  .secondary-button {
    width: 100%;
    justify-content: center;
  }

  .secondary-button {
    display: none;
  }

  .trophy-icon {
    width: 240px;
    height: 240px;
  }

  .trophy-icon i {
    font-size: 120px;
  }

  .floating-element {
    width: 45px;
    height: 45px;
    font-size: 1.25rem;
  }

  .floating-element.medal,
  .floating-element.star {
    display: none;
  }
}
</style>

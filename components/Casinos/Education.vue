<template>
  <SectionDivider
    promptLabel="Learning Center"
    promptIcon="fas fa-graduation-cap"
  />
  <section class="education-section">
    <div class="education-background">
      <div class="bg-pattern"></div>
      <div class="floating-elements">
        <div class="floating-element e1"></div>
        <div class="floating-element e2"></div>
      </div>
    </div>

    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Educational Resources</h2>
        <p class="section-subtitle">
          Knowledge is power. Learn to play smarter and safer with our
          comprehensive guides.
        </p>
      </div>

      <div class="resources-grid">
        <!-- Casino Guides Section -->
        <div class="resource-card casino-guides">
          <div class="resource-header">
            <div class="icon-wrapper">
              <i class="fas fa-dice"></i>
            </div>
            <h3>Casino Guides</h3>
          </div>

          <p class="resource-description">
            Everything you need to know about finding and playing at the best
            online casinos. From game selection to payment methods, our guides
            cover it all.
          </p>

          <div class="resource-links">
            <a
              v-for="(guide, index) in casinoGuides"
              :key="index"
              :href="guide.url"
              class="resource-link"
            >
              <i class="fas fa-chevron-right"></i>
              <span>{{ guide.title }}</span>
              <div v-if="guide.isNew" class="new-badge">NEW</div>
            </a>
          </div>

          <div class="card-footer">
            <a href="/guides/casinos" class="view-all">
              View All Casino Guides
              <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <!-- Bonus Guides Section -->
        <div class="resource-card bonus-guides">
          <div class="resource-header">
            <div class="icon-wrapper">
              <i class="fas fa-gift"></i>
            </div>
            <h3>Bonus Guides</h3>
          </div>

          <p class="resource-description">
            Navigate the complex world of casino bonuses with confidence. Learn
            to identify valuable offers and understand the fine print behind
            bonuses.
          </p>

          <div class="resource-links">
            <a
              v-for="(guide, index) in bonusGuides"
              :key="index"
              :href="guide.url"
              class="resource-link"
            >
              <i class="fas fa-chevron-right"></i>
              <span>{{ guide.title }}</span>
              <div v-if="guide.isNew" class="new-badge">NEW</div>
            </a>
          </div>

          <div class="bonus-calculator">
            <div class="calculator-header">
              <i class="fas fa-calculator"></i>
              <h4>Bonus Value Calculator</h4>
            </div>
            <div class="calculator-inputs">
              <div class="calculator-input">
                <label>Bonus Amount with Deposit ($)</label>
                <input
                  v-model="bonusAmount"
                  type="number"
                  min="0"
                  placeholder="e.g. 100"
                />
              </div>
              <div class="calculator-input">
                <label>Wagering Requirement (x)</label>
                <input
                  v-model="wageringRequirement"
                  type="number"
                  min="0"
                  placeholder="e.g. 35"
                />
              </div>
              <div class="calculator-input">
                <label>Game Contribution (%)</label>
                <input
                  v-model="gameContribution"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="e.g. 100"
                />
              </div>
            </div>
            <div class="calculator-result">
              <div class="result-label">Required Wagering:</div>
              <div class="result-value">${{ calculatedWagering }}</div>
            </div>
            <div class="calculator-tip">
              <i class="fas fa-lightbulb"></i>
              <p>
                Lower wagering requirements mean better value and higher chance
                of cashing out.
              </p>
            </div>
          </div>

          <div class="card-footer">
            <a href="/guides/bonuses" class="view-all">
              View All Bonus Guides
              <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <!-- Responsible Gambling Section -->
        <div class="resource-card responsible-gambling">
          <div class="resource-header">
            <div class="icon-wrapper">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h3>Responsible Gambling</h3>
          </div>

          <p class="resource-description">
            Gambling should be fun, not a problem. Learn about self-assessment,
            setting limits, and finding help if gambling becomes more than
            entertainment.
          </p>

          <div class="safety-checklist">
            <div class="checklist-item">
              <div class="check-icon">
                <i class="fas fa-check"></i>
              </div>
              <div class="check-content">
                <h4>Set Time & Money Limits</h4>
                <p>
                  Decide how much time and money you can afford to spend before
                  you start playing.
                </p>
              </div>
            </div>

            <div class="checklist-item">
              <div class="check-icon">
                <i class="fas fa-check"></i>
              </div>
              <div class="check-content">
                <h4>Never Chase Losses</h4>
                <p>
                  Trying to win back lost money often leads to larger losses.
                  Know when to step away.
                </p>
              </div>
            </div>

            <div class="checklist-item">
              <div class="check-icon">
                <i class="fas fa-check"></i>
              </div>
              <div class="check-content">
                <h4>Gambling Is Not Income</h4>
                <p>
                  Don't rely on gambling for income or to solve financial
                  problems.
                </p>
              </div>
            </div>

            <div class="checklist-item">
              <div class="check-icon">
                <i class="fas fa-check"></i>
              </div>
              <div class="check-content">
                <h4>Take Regular Breaks</h4>
                <p>
                  Step away periodically to clear your mind and reassess your
                  gambling session.
                </p>
              </div>
            </div>
          </div>

          <div class="help-resources">
            <h4>Need Help?</h4>
            <div class="help-links">
              <a
                href="https://www.begambleaware.org/"
                target="_blank"
                class="help-link"
              >
                <i class="fas fa-external-link-alt"></i>
                BeGambleAware.org
              </a>
              <a
                href="https://www.gamblersanonymous.org/"
                target="_blank"
                class="help-link"
              >
                <i class="fas fa-external-link-alt"></i>
                Gamblers Anonymous
              </a>
              <a
                href="https://www.ncpgambling.org/"
                target="_blank"
                class="help-link"
              >
                <i class="fas fa-external-link-alt"></i>
                National Council on Problem Gambling
              </a>
            </div>
          </div>

          <div class="card-footer">
            <a href="/responsible-gambling" class="view-all">
              Learn More About Safe Play
              <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Featured Guide -->
      <div class="featured-guide">
        <div class="guide-image">
          <img
            src=""
            alt="Casino Games Explained: RTP, Volatility & House Edge"
          />
        </div>
        <div class="guide-content">
          <span class="guide-category">Featured Guide</span>
          <h3 class="guide-title">
            Casino Games Explained: RTP, Volatility & House Edge
          </h3>
          <p class="guide-excerpt">
            Understanding the mathematical principles behind casino games is
            essential for making informed decisions. This comprehensive guide
            breaks down the concepts of Return-to-Player (RTP), volatility, and
            house edge in simple terms, helping you choose games that offer the
            best chances of winning.
          </p>
          <div class="guide-meta">
            <div class="meta-item">
              <i class="fas fa-book"></i>
              <span>15 min read</span>
            </div>
            <div class="meta-item">
              <i class="fas fa-calendar"></i>
              <span>Updated: March 15, 2025</span>
            </div>
          </div>
          <a href="/guides/casino-games-explained" class="read-guide-btn">
            Read Full Guide
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="faq-section">
        <h3 class="faq-title">Frequently Asked Questions</h3>
        <div class="faq-grid">
          <div
            v-for="(item, index) in faqItems"
            :key="index"
            class="faq-item"
            @click="toggleFaq(index)"
          >
            <div class="faq-question" :class="{ active: activeFaq === index }">
              <span>{{ item.question }}</span>
              <i
                class="fas"
                :class="activeFaq === index ? 'fa-minus' : 'fa-plus'"
              ></i>
            </div>
            <div class="faq-answer" :class="{ show: activeFaq === index }">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import SectionDivider from "../SectionDivider.vue";

// Casino Guides Data
const casinoGuides = [
  {
    title: "How to Choose a Safe & Trustworthy Online Casino",
    url: "/guides/choose-safe-casino",
    isNew: true,
  },
  {
    title: "Casino Licensing Explained: What You Need to Know",
    url: "/guides/casino-licensing",
    isNew: false,
  },
  {
    title: "Understanding Casino Payment Methods & Withdrawal Times",
    url: "/guides/casino-payments",
    isNew: false,
  },
  {
    title: "Mobile Casino Gaming: Apps vs Browser Play",
    url: "/guides/mobile-casino-gaming",
    isNew: true,
  },
  {
    title: "VIP & Loyalty Programs: Are They Worth It?",
    url: "/guides/vip-loyalty-programs",
    isNew: false,
  },
];

// Bonus Guides Data
const bonusGuides = [
  {
    title: "Casino Bonus Terms & Conditions Decoded",
    url: "/guides/bonus-terms-explained",
    isNew: false,
  },
  {
    title: "Welcome Bonuses vs. Reload Bonuses: Which Offer Better Value?",
    url: "/guides/welcome-vs-reload-bonuses",
    isNew: true,
  },
  {
    title: "Free Spins Offers: What to Look For",
    url: "/guides/free-spins-guide",
    isNew: false,
  },
  {
    title: "No Deposit Bonuses: Finding Hidden Gems",
    url: "/guides/no-deposit-bonuses",
    isNew: false,
  },
  {
    title: "Wagering Requirements Explained: How to Clear Them",
    url: "/guides/wagering-requirements",
    isNew: false,
  },
];

// FAQ Data
const faqItems = [
  {
    question: "How do I know if an online casino is legitimate?",
    answer:
      "Look for proper licensing information (typically displayed in the footer), read reviews from trusted sources, check their responsible gambling tools, verify they use reputable game providers, and ensure they have secure (HTTPS) connections. Legitimate casinos are typically members of gambling associations and have their games tested by independent auditors.",
  },
  {
    question:
      "What's the difference between RTP and volatility in casino games?",
    answer:
      "Return to Player (RTP) is the percentage of all wagered money a game will pay back to players over time (e.g., 96%). Volatility (or variance) describes how often and how much you can expect to win. Low volatility games provide frequent small wins, while high volatility games offer fewer but larger payouts. Both are important factors in choosing games that match your playing style and bankroll.",
  },
  {
    question: "How do wagering requirements work?",
    answer:
      "Wagering requirements (also called playthrough) specify how many times you must bet the bonus amount (or bonus plus deposit) before you can withdraw winnings. For example, with a $100 bonus and 35x wagering requirement, you'd need to place $3,500 in bets before withdrawing. Different games usually contribute differently to these requirements, with slots typically counting 100% while table games might only contribute 10-20%.",
  },
  {
    question:
      "Is it safe to provide my personal information to online casinos?",
    answer:
      "Reputable licensed casinos use industry-standard encryption (SSL/TLS) to protect your data. They're also required by their licensing authorities to follow strict data protection regulations. Always verify the casino is properly licensed and has a privacy policy explaining how they handle your information. Avoid casinos with poor security reputations or those operating in unregulated markets.",
  },
  {
    question: "How can I spot signs of problem gambling?",
    answer:
      "Warning signs include gambling with money needed for essential expenses, borrowing money to gamble, increasing time and money spent gambling, feeling irritable when not gambling, lying about gambling habits, chasing losses, and gambling despite negative consequences. If you experience these signs, consider using self-exclusion tools or contacting a problem gambling helpline.",
  },
];

// Bonus Calculator
const bonusAmount = ref(100);
const wageringRequirement = ref(35);
const gameContribution = ref(100);

const calculatedWagering = computed(() => {
  if (
    !bonusAmount.value ||
    !wageringRequirement.value ||
    !gameContribution.value
  )
    return 0;
  const effectiveWagering =
    wageringRequirement.value * (100 / gameContribution.value);
  return (bonusAmount.value * effectiveWagering).toFixed(2);
});

// FAQ Toggle
const activeFaq = ref(null);

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};
</script>

<style scoped>
.education-section {
  position: relative;
  padding: 4rem 0;
  color: white;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
}

.education-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #1a1721;
  opacity: 0.9;
  background-image: radial-gradient(
      rgba(221, 69, 68, 0.03) 2px,
      transparent 2px
    ),
    radial-gradient(rgba(106, 17, 203, 0.02) 2px, transparent 2px);
  background-size: 40px 40px;
  background-position: 0 0, 20px 20px;
  z-index: -2;
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.floating-element {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.08;
}

.e1 {
  bottom: 15%;
  left: -5%;
  width: 30%;
  height: 30%;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  animation: floatSlow 25s ease-in-out infinite alternate;
}

.e2 {
  top: 10%;
  right: -10%;
  width: 25%;
  height: 25%;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  animation: floatSlow 20s ease-in-out infinite alternate-reverse;
}

@keyframes floatSlow {
  0% {
    transform: translateY(0) translateX(0) scale(1);
  }
  100% {
    transform: translateY(30px) translateX(20px) scale(1.05);
  }
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 1px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 700px;
  margin: 0 auto;
}

/* Resources Grid */
.resources-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.resource-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(10px);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.resource-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.03) 0%,
    transparent 70%
  );
  z-index: -1;
  pointer-events: none;
}

.resource-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  border-color: rgba(255, 255, 255, 0.15);
}

.resource-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.2rem;
}

.icon-wrapper {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 1.4rem;
  background: rgba(221, 69, 68, 0.1);
  color: #dd4544;
  transition: all 0.3s ease;
}

.resource-card:hover .icon-wrapper {
  transform: scale(1.1);
  background: rgba(221, 69, 68, 0.2);
}

.resource-header h3 {
  font-size: 1.3rem;
  font-weight: 700;
}

.resource-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.resource-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.resource-link {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
}

.resource-link i {
  color: #dd4544;
  font-size: 0.8rem;
  transition: all 0.3s ease;
}

.resource-link:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(5px);
}

.resource-link:hover i {
  transform: translateX(3px);
}

.new-badge {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: #dd4544;
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 700;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(221, 69, 68, 0.4);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(221, 69, 68, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(221, 69, 68, 0);
  }
}

.card-footer {
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.view-all {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 0.8rem 1.2rem;
  background: rgba(221, 69, 68, 0.1);
  color: #dd4544;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.view-all:hover {
  background: rgba(221, 69, 68, 0.9);
  color: white;
}

.view-all i {
  transition: all 0.3s ease;
}

.view-all:hover i {
  transform: translateX(3px);
}

/* Bonus Calculator */
.bonus-calculator {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px dashed rgba(221, 69, 68, 0.2);
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
}

.calculator-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
}

.calculator-header i {
  color: #dd4544;
  font-size: 1.2rem;
}

.calculator-header h4 {
  font-size: 1.1rem;
  font-weight: 700;
}

.calculator-inputs {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  gap: 1rem;
  margin-bottom: 1.2rem;
}

.calculator-input:nth-child(1),
.calculator-input:nth-child(2),
.calculator-input:nth-child(3) {
  grid-column: 1 / -1;
}

.calculator-input {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.calculator-input label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
}

.calculator-input input {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  padding: 0.6rem;
  color: white;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.calculator-input input:focus {
  outline: none;
  border-color: #dd4544;
  background: rgba(255, 255, 255, 0.15);
}

.calculator-result {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  background: rgba(221, 69, 68, 0.1);
  border-radius: 6px;
  margin-bottom: 1rem;
}

.result-label {
  font-weight: 600;
  font-size: 0.9rem;
}

.result-value {
  font-size: 1.1rem;
  font-weight: 700;
  color: #dd4544;
}

.calculator-tip {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
}

.calculator-tip i {
  color: #ffc107;
  margin-top: 0.15rem;
}

/* Responsible Gambling Styles */
.safety-checklist {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.checklist-item {
  display: flex;
  gap: 1rem;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.checklist-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateX(5px);
}

.check-icon {
  width: 25px;
  height: 25px;
  min-width: 25px;
  background: rgba(76, 175, 80, 0.2);
  color: #4caf50;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-top: 0.2rem;
}

.check-content h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.check-content p {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
}

.help-resources {
  margin-bottom: 1.5rem;
}

.help-resources h4 {
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
}

.help-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.help-link {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.7rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.help-link i {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
}

.help-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Featured Guide */
.featured-guide {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 3rem;
  transition: all 0.3s ease;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.featured-guide:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  border-color: rgba(221, 69, 68, 0.3);
}

.guide-image {
  height: 100%;
  overflow: hidden;
}

.guide-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
}

.featured-guide:hover .guide-image img {
  transform: scale(1.05);
}

.guide-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

.guide-category {
  display: inline-block;
  background: rgba(221, 69, 68, 0.1);
  color: #dd4544;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.guide-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.guide-excerpt {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.guide-meta {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
}

.read-guide-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin-top: auto;
  width: fit-content;
}

.read-guide-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(221, 69, 68, 0.3);
}

.read-guide-btn i {
  transition: all 0.3s ease;
}

.read-guide-btn:hover i {
  transform: translateX(5px);
}

/* FAQ Section */
.faq-section {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 16px;
  padding: 2rem;
  margin-top: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.faq-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
}

.faq-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item:hover {
  background: rgba(255, 255, 255, 0.06);
}

.faq-question {
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.05rem;
}

.faq-question.active {
  color: #dd4544;
}

.faq-question i {
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.faq-answer {
  height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-answer.show {
  height: auto;
  padding: 0 1.2rem 1.2rem;
}

.faq-answer p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .resources-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .featured-guide {
    grid-template-columns: 1fr 1.5fr;
  }
}

@media (max-width: 768px) {
  .education-section {
    padding: 3rem 0;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .resources-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .featured-guide {
    grid-template-columns: 1fr;
  }

  .guide-image {
    height: 200px;
  }

  .guide-title {
    font-size: 1.4rem;
  }

  .faq-section {
    padding: 1.5rem;
  }
}

@media (max-width: 576px) {
  .guide-image {
    height: 180px;
  }

  .guide-content {
    padding: 1.5rem;
  }

  .guide-title {
    font-size: 1.2rem;
  }

  .guide-meta {
    flex-direction: column;
    gap: 0.8rem;
  }

  .resource-header {
    flex-direction: column;
    text-align: center;
  }

  .icon-wrapper {
    margin: 0 auto;
  }

  .help-links {
    flex-direction: column;
  }
}

.casino-guides {
  border-top: 3px solid #dd4544;
}

.bonus-guides {
  border-top: 3px solid #ffc107;
}

.responsible-gambling {
  border-top: 3px solid #4caf50;
}
</style>

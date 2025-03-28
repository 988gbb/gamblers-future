<template>
  <section class="terms-section">
    <!-- Background elements -->
    <div class="bg-pattern"></div>
    <div class="bg-gradient"></div>

    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Understanding Casino Bonuses</h2>
        <p class="section-subtitle">Know the fine print before you play</p>
      </div>

      <div class="terms-grid">
        <!-- Wagering Requirements -->
        <div class="terms-card wagering-card">
          <div class="card-header">
            <div class="card-icon">
              <i class="fas fa-sync-alt"></i>
            </div>
            <h3 class="card-title">Wagering Requirements Guide</h3>
          </div>
          <div class="card-content">
            <p class="intro-text">
              Wagering requirements determine how many times you need to bet
              your bonus before withdrawing winnings.
            </p>

            <h4 class="content-subtitle">How to Clear Bonuses:</h4>
            <ul class="terms-list">
              <li>
                <span class="highlight">35x</span> is average - lower is better
                <span class="tip-badge">Good</span>
              </li>
              <li>
                <span class="highlight">50x+</span> is difficult to clear
                <span class="tip-badge warning">Difficult</span>
              </li>
              <li>Game contributions vary (slots usually count 100%)</li>
              <li>Check time limits - most bonuses expire in 30 days</li>
            </ul>

            <h4 class="content-subtitle">Maximizing Value:</h4>
            <ul class="tips-list">
              <li>Play high-RTP slots to preserve bankroll while wagering</li>
              <li>
                Always clear low-wagering bonuses first if you have multiple
              </li>
              <li>Check if table games contribute to wagering requirements</li>
            </ul>

            <a href="#" class="learn-more" @click.prevent="openWageringModal">
              Full Wagering Guide <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <!-- Bonus Terms Explained -->
        <div class="terms-card terms-explained-card">
          <div class="card-header">
            <div class="card-icon">
              <i class="fas fa-file-contract"></i>
            </div>
            <h3 class="card-title">Bonus Terms Explained</h3>
          </div>
          <div class="card-content">
            <p class="intro-text">
              Casino bonus terms can be confusing. Here's what key terms
              actually mean.
            </p>

            <div class="terms-table">
              <div class="term-row">
                <div class="term-name">Max Bet Rule</div>
                <div class="term-explanation">
                  Maximum stake allowed while using bonus funds
                  <span class="warning-text">Exceeding voids bonus</span>
                </div>
              </div>

              <div class="term-row">
                <div class="term-name">Sticky Bonus</div>
                <div class="term-explanation">
                  Bonus amount cannot be withdrawn, only the winnings
                </div>
              </div>

              <div class="term-row">
                <div class="term-name">Game Restrictions</div>
                <div class="term-explanation">
                  Specific games excluded or limited with bonus funds
                </div>
              </div>

              <div class="term-row">
                <div class="term-name">Max Cashout</div>
                <div class="term-explanation">
                  Maximum withdrawal limit from bonus winnings
                  <span class="warning-text">Check before playing</span>
                </div>
              </div>
            </div>

            <div class="warning-box">
              <h4>
                <i class="fas fa-exclamation-triangle"></i>
                Red Flags in Bonus Terms:
              </h4>
              <ul>
                <li>No max win limit clearly stated</li>
                <li>Withdrawal restrictions on your deposit</li>
                <li>Extremely high wagering (70x+)</li>
                <li>Vague cancellation terms</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Casino Bonus FAQ -->
        <div class="terms-card faq-card">
          <div class="card-header">
            <div class="card-icon">
              <i class="fas fa-question-circle"></i>
            </div>
            <h3 class="card-title">Casino Bonus FAQ</h3>
          </div>
          <div class="card-content">
            <div class="faq-container">
              <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
                <div class="faq-question" @click="toggleFaq(index)">
                  <span>{{ faq.question }}</span>
                  <i
                    class="fas"
                    :class="faq.open ? 'fa-chevron-up' : 'fa-chevron-down'"
                  ></i>
                </div>
                <div class="faq-answer" :class="{ active: faq.open }">
                  <p>{{ faq.answer }}</p>
                </div>
              </div>
            </div>

            <div class="troubleshooting-section">
              <h4>Common Issues & Solutions:</h4>
              <ul class="trouble-list">
                <li>
                  <strong>Bonus not credited?</strong> Contact support with your
                  bonus code and account details
                </li>
                <li>
                  <strong>Unable to withdraw?</strong> Check if wagering is
                  complete and verify your account
                </li>
                <li>
                  <strong>Bonus expired?</strong> Request a goodwill extension
                  if you're a regular player
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <teleport to="body">
      <div
        v-if="showWageringModal"
        class="modal-backdrop"
        @click="closeWageringModal"
      >
        <div class="modal-container" @click.stop>
          <div class="modal-header">
            <h2>Complete Wagering Requirements Guide</h2>
            <button class="close-button" @click="closeWageringModal">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="modal-content">
            <div class="modal-section">
              <h3>What Are Wagering Requirements?</h3>
              <p>
                Wagering requirements (also called playthrough requirements)
                specify how many times you need to bet the bonus amount before
                you can withdraw any winnings derived from it. For example, a
                $100 bonus with 35x wagering means you need to place bets
                totaling $3,500 before withdrawing.
              </p>
            </div>

            <div class="modal-section">
              <h3>Wagering Requirement Levels</h3>
              <div class="wagering-scale">
                <div class="scale-item good">
                  <div class="scale-marker">0-20x</div>
                  <div class="scale-label">Excellent</div>
                </div>
                <div class="scale-item average">
                  <div class="scale-marker">20-40x</div>
                  <div class="scale-label">Average</div>
                </div>
                <div class="scale-item challenging">
                  <div class="scale-marker">40-60x</div>
                  <div class="scale-label">Challenging</div>
                </div>
                <div class="scale-item avoid">
                  <div class="scale-marker">60x+</div>
                  <div class="scale-label">Avoid</div>
                </div>
              </div>
            </div>

            <div class="modal-section">
              <h3>Game Contribution Rates</h3>
              <p>Not all games contribute equally to wagering requirements:</p>
              <div class="contribution-table">
                <div class="contribution-row header">
                  <div>Game Type</div>
                  <div>Typical Contribution</div>
                </div>
                <div class="contribution-row">
                  <div>Slots</div>
                  <div>100%</div>
                </div>
                <div class="contribution-row">
                  <div>Table Poker, Casino War</div>
                  <div>20-50%</div>
                </div>
                <div class="contribution-row">
                  <div>Roulette, Blackjack</div>
                  <div>10-20%</div>
                </div>
                <div class="contribution-row">
                  <div>Video Poker</div>
                  <div>10-20%</div>
                </div>
                <div class="contribution-row">
                  <div>Craps, Baccarat</div>
                  <div>0-5%</div>
                </div>
                <div class="contribution-row alert">
                  <div>Progressive Jackpot Games</div>
                  <div>Often 0% <span>(excluded)</span></div>
                </div>
              </div>
            </div>

            <div class="modal-section">
              <h3>Strategic Tips for Clearing Wagering</h3>
              <div class="tips-columns">
                <ul class="advanced-tips">
                  <li>
                    <strong>Play high RTP slots</strong> (96%+) to maintain your
                    bankroll longer while wagering
                  </li>
                  <li>
                    <strong>Avoid volatile games</strong> that can quickly
                    deplete your balance before completing wagering
                  </li>
                  <li>
                    <strong>Start with small bets</strong> to extend playtime
                    and increase chances of hitting wins
                  </li>
                  <li>
                    <strong>Track your progress</strong> using the casino's
                    bonus status page or customer support
                  </li>
                </ul>
                <ul class="advanced-tips">
                  <li>
                    <strong>Prioritize low wagering bonuses</strong> if you have
                    multiple active bonuses
                  </li>
                  <li>
                    <strong>Check bet size limits</strong> - exceeding maximum
                    bet limits can void your bonus
                  </li>
                  <li>
                    <strong>Watch the expiry date</strong> - most bonuses expire
                    within 7-30 days
                  </li>
                  <li>
                    <strong>Avoid bonus abuse</strong> - using multiple accounts
                    or similar tactics can result in account closure
                  </li>
                </ul>
              </div>
            </div>

            <div class="modal-section">
              <h3>Calculating Your Wagering Requirements</h3>
              <div class="calculator-example">
                <div class="example">
                  <h4>Example:</h4>
                  <p>
                    $100 Bonus with 35x Wagering<br />
                    $100 × 35 = $3,500 in bets required
                  </p>
                </div>
                <div class="example">
                  <h4>Match Bonus Example:</h4>
                  <p>
                    100% Match on $100 Deposit with 30x (D+B)<br />
                    ($100 + $100) × 30 = $6,000 in bets required
                  </p>
                </div>
              </div>
              <p class="note">
                <strong>Note:</strong> Some casinos apply wagering to the bonus
                only (B), while others apply it to both deposit and bonus (D+B).
                Always check the terms to know what formula to use.
              </p>
            </div>

            <div class="modal-section">
              <h3>Red Flags to Watch For</h3>
              <ul class="warning-tips">
                <li>
                  Wagering applies to deposit + bonus + any winnings from free
                  spins
                </li>
                <li>
                  Different games are completely excluded (not even partial
                  contribution)
                </li>
                <li>
                  Very short time limits to complete wagering (less than 7 days)
                </li>
                <li>Maximum win caps that severely limit potential payouts</li>
                <li>
                  Bonus cancellation voids all winnings, not just bonus-related
                  ones
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </section>
</template>

<script setup>
import { ref } from "vue";

const faqs = ref([
  {
    question: "Can I withdraw a casino bonus immediately?",
    answer:
      "No, you typically need to complete the wagering requirements first. These specify how many times you must bet the bonus amount before it becomes withdrawable cash.",
    open: false,
  },
  {
    question: "What happens if I win big with bonus funds?",
    answer:
      "You can withdraw your winnings after completing wagering requirements, though some bonuses have a maximum win limit. Always check the terms for any win caps.",
    open: false,
  },
  {
    question: "Do all games count toward wagering requirements?",
    answer:
      "No, game contributions vary by casino. Slots usually count 100%, while table games like blackjack or roulette often contribute less (10-20%) or nothing at all.",
    open: false,
  },
  {
    question: "What's the difference between sticky and non-sticky bonuses?",
    answer:
      "With non-sticky (cashable) bonuses, you can withdraw both winnings and the bonus amount after wagering. Sticky bonuses allow you to withdraw only the winnings, not the initial bonus amount.",
    open: false,
  },
  {
    question: "Should I always claim a casino bonus?",
    answer:
      "Not necessarily. If you prefer playing without restrictions or find the wagering requirements too high, you might be better off playing with just your deposit.",
    open: false,
  },
]);

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};

const showWageringModal = ref(false);

const openWageringModal = () => {
  showWageringModal.value = true;
  document.body.style.overflow = "hidden"; // Prevent background scrolling
};

const closeWageringModal = () => {
  showWageringModal.value = false;
  document.body.style.overflow = ""; // Restore scrolling
};
</script>

<style scoped>
.terms-section {
  position: relative;
  padding: 4rem 0;
  background-color: #1a1721;
  overflow: hidden;
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
  opacity: 0.05;
  z-index: 0;
}

.bg-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      circle at 25% 25%,
      rgba(76, 175, 80, 0.03) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 75% 75%,
      rgba(33, 150, 243, 0.03) 0%,
      transparent 50%
    );
  z-index: 0;
}

.container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #2196f3, #4caf50);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #2196f3, #4caf50);
  border-radius: 3px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 1rem;
}

.terms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.terms-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.terms-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.wagering-card {
  border-top: 3px solid #4caf50;
}

.terms-explained-card {
  border-top: 3px solid #ff9800;
}

.faq-card {
  border-top: 3px solid #2196f3;
}

.card-header {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(0, 0, 0, 0.2);
}

.card-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.wagering-card .card-icon {
  color: #4caf50;
}

.terms-explained-card .card-icon {
  color: #ff9800;
}

.faq-card .card-icon {
  color: #2196f3;
}

.card-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  margin: 0;
}

.card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.intro-text {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.content-subtitle {
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  margin: 1.2rem 0 0.8rem;
}

.terms-list,
.tips-list,
.trouble-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
}

.terms-list li,
.tips-list li,
.trouble-list li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.7rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
}

.terms-list li::before,
.trouble-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #4caf50;
  font-weight: bold;
}

.tips-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #ff9800;
  font-weight: bold;
}

.highlight {
  font-weight: 700;
  color: white;
}

.tip-badge {
  display: inline-block;
  padding: 0.1rem 0.5rem;
  font-size: 0.7rem;
  font-weight: 600;
  border-radius: 4px;
  background: rgba(76, 175, 80, 0.2);
  color: #4caf50;
  margin-left: 0.5rem;
}

.tip-badge.warning {
  background: rgba(255, 152, 0, 0.2);
  color: #ff9800;
}

.learn-more {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #4caf50;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.learn-more:hover {
  color: white;
}

.learn-more i {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.learn-more:hover i {
  transform: translateX(3px);
}

/* Terms Table */
.terms-table {
  margin-bottom: 1.5rem;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.term-row {
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.term-row:last-child {
  border-bottom: none;
}

.term-name {
  width: 35%;
  padding: 0.8rem;
  background: rgba(0, 0, 0, 0.2);
  font-weight: 600;
  color: white;
}

.term-explanation {
  width: 65%;
  padding: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.5;
}

.warning-text {
  display: block;
  color: #ff5252;
  font-size: 0.8rem;
  margin-top: 0.3rem;
}

/* Warning Box */
.warning-box {
  background: rgba(244, 67, 54, 0.05);
  border: 1px solid rgba(244, 67, 54, 0.2);
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1.5rem;
}

.warning-box h4 {
  color: #ff5252;
  font-size: 1rem;
  margin: 0 0 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.warning-box ul {
  padding-left: 1.5rem;
  margin: 0;
}

.warning-box li {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

/* FAQ Styles */
.faq-container {
  margin-bottom: 1.5rem;
}

.faq-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-question {
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: white;
  font-weight: 600;
  transition: color 0.3s ease;
}

.faq-question:hover {
  color: #2196f3;
}

.faq-question i {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.3s ease;
}

.faq-question:hover i {
  color: #2196f3;
}

.faq-answer {
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease;
}

.faq-answer.active {
  height: auto;
  padding-bottom: 1rem;
}

.faq-answer p {
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Troubleshooting section */
.troubleshooting-section {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.troubleshooting-section h4 {
  font-size: 1.1rem;
  color: white;
  margin: 0 0 1rem;
}

.trouble-list strong {
  color: white;
}

/* Modal Styles */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease;
}

.modal-container {
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  background: #1a1721;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(76, 175, 80, 0.2);
  animation: scaleIn 0.3s ease;
  display: flex;
  flex-direction: column;
}

.modal-header {
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.modal-header h2 {
  font-size: 1.5rem;
  color: white;
  margin: 0;
  background: linear-gradient(135deg, #4caf50, #2196f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.close-button {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2rem;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.modal-content {
  padding: 1.5rem;
  overflow-y: auto;
  max-height: calc(90vh - 80px);
}

.modal-section {
  margin-bottom: 2rem;
}

.modal-section:last-child {
  margin-bottom: 0;
}

.modal-section h3 {
  font-size: 1.3rem;
  color: white;
  margin: 0 0 1rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.modal-section h3::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #4caf50, transparent);
}

.modal-section p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1rem;
}

/* Wagering Scale */
.wagering-scale {
  display: flex;
  margin: 1.5rem 0;
  border-radius: 8px;
  overflow: hidden;
}

.scale-item {
  flex: 1;
  text-align: center;
  padding: 1rem 0.5rem;
}

.scale-marker {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
}

.scale-label {
  font-size: 0.9rem;
  font-weight: 500;
}

.good {
  background: rgba(76, 175, 80, 0.15);
}

.good .scale-marker {
  color: #4caf50;
}

.average {
  background: rgba(255, 193, 7, 0.15);
}

.average .scale-marker {
  color: #ffc107;
}

.challenging {
  background: rgba(255, 152, 0, 0.15);
}

.challenging .scale-marker {
  color: #ff9800;
}

.avoid {
  background: rgba(244, 67, 54, 0.15);
}

.avoid .scale-marker {
  color: #f44336;
}

/* Contribution Table */
.contribution-table {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  margin: 1rem 0 1.5rem;
}

.contribution-row {
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.contribution-row:last-child {
  border-bottom: none;
}

.contribution-row.header {
  background: rgba(0, 0, 0, 0.2);
  font-weight: 600;
  color: white;
}

.contribution-row div {
  padding: 0.8rem;
  flex: 1;
}

.contribution-row div:first-child {
  border-right: 1px solid rgba(255, 255, 255, 0.05);
}

.contribution-row.alert {
  background: rgba(244, 67, 54, 0.05);
}

.contribution-row.alert div:last-child {
  color: #ff5252;
}

.contribution-row.alert span {
  font-size: 0.8rem;
  opacity: 0.8;
}

/* Tips Columns */
.tips-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin: 1rem 0;
}

.advanced-tips {
  padding-left: 1.5rem;
  margin: 0;
}

.advanced-tips li {
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
}

.advanced-tips strong {
  color: white;
}

/* Calculator Examples */
.calculator-example {
  display: flex;
  gap: 1.5rem;
  margin: 1rem 0;
}

.example {
  flex: 1;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.example h4 {
  color: white;
  margin: 0 0 0.5rem;
  font-size: 1rem;
}

.example p {
  margin: 0;
  line-height: 1.5;
}

.note {
  background: rgba(255, 193, 7, 0.05);
  border-left: 3px solid #ffc107;
  padding: 0.8rem 1rem;
  margin: 1rem 0;
  font-size: 0.9rem;
}

/* Warning Tips */
.warning-tips {
  padding-left: 1.5rem;
  margin: 0;
}

.warning-tips li {
  margin-bottom: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  position: relative;
}

.warning-tips li::before {
  content: "⚠️";
  position: absolute;
  left: -1.5rem;
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
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* Responsive adjustments for the modal */
@media (max-width: 768px) {
  .modal-container {
    width: 95%;
  }

  .modal-header h2 {
    font-size: 1.2rem;
  }

  .tips-columns {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .calculator-example {
    flex-direction: column;
    gap: 1rem;
  }

  .wagering-scale {
    flex-direction: column;
  }

  .scale-item {
    padding: 0.8rem 0.5rem;
  }
}
</style>

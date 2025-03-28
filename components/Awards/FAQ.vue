<template>
  <section class="awards-faq-section" id="awards-faq">
    <div class="faq-bg"></div>

    <div class="faq-container">
      <div class="faq-header">
        <h2 class="faq-title">
          Frequently <span class="highlight">Asked</span> Questions
        </h2>
        <p class="faq-subtitle">
          Everything you need to know about our awards program
        </p>
      </div>

      <div class="faq-content">
        <div class="faq-columns">
          <div class="faq-column">
            <div class="accordion">
              <div
                v-for="(item, index) in faqItems.slice(
                  0,
                  Math.ceil(faqItems.length / 2)
                )"
                :key="`faq-1-${index}`"
                class="accordion-item"
                :class="{ active: activeItems.includes(index) }"
              >
                <div class="accordion-header" @click="toggleItem(index)">
                  <h3 class="accordion-title">{{ item.question }}</h3>
                  <div class="accordion-icon">
                    <i class="fas fa-chevron-down"></i>
                  </div>
                </div>
                <div class="accordion-content">
                  <p v-html="item.answer"></p>
                </div>
              </div>
            </div>
          </div>

          <div class="faq-column">
            <div class="accordion">
              <div
                v-for="(item, index) in faqItems.slice(
                  Math.ceil(faqItems.length / 2)
                )"
                :key="`faq-2-${index}`"
                class="accordion-item"
                :class="{
                  active: activeItems.includes(
                    index + Math.ceil(faqItems.length / 2)
                  ),
                }"
              >
                <div
                  class="accordion-header"
                  @click="toggleItem(index + Math.ceil(faqItems.length / 2))"
                >
                  <h3 class="accordion-title">{{ item.question }}</h3>
                  <div class="accordion-icon">
                    <i class="fas fa-chevron-down"></i>
                  </div>
                </div>
                <div class="accordion-content">
                  <p v-html="item.answer"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="timeline-section">
        <h3 class="timeline-title">
          <i class="fas fa-calendar-alt"></i>
          Awards Calendar
        </h3>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">1st of each month</div>
            <div class="timeline-content">
              <h4>Nominations Open</h4>
              <p>Monthly awards cycle begins. Start tracking your play!</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-date">Last day of each month</div>
            <div class="timeline-content">
              <h4>Tracking Period Ends</h4>
              <p>All gameplay must be completed by 11:59 PM UTC</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-date">5th of each month</div>
            <div class="timeline-content">
              <h4>Winners Announced</h4>
              <p>Monthly champions revealed on our website and social media</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-date">7th of each month</div>
            <div class="timeline-content">
              <h4>Prizes Distributed</h4>
              <p>Cash prizes sent to winners' accounts</p>
            </div>
          </div>

          <div class="timeline-item special">
            <div class="timeline-date">January 15, 2026</div>
            <div class="timeline-content">
              <h4>Annual Awards Ceremony</h4>
              <p>Grand prizes awarded at our live event in Las Vegas</p>
            </div>
          </div>
        </div>
      </div>

      <div class="participation-guide">
        <h3 class="guide-title">
          <i class="fas fa-map-signs"></i>
          How to Participate
        </h3>

        <div class="guide-steps">
          <div class="guide-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Create an Account</h4>
              <p>
                Sign up for a free Gambler's Future account with verified
                identity
              </p>
              <NuxtLink to="/register" class="step-link">Register Now</NuxtLink>
            </div>
          </div>

          <div class="guide-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Access Tracking Links</h4>
              <p>
                Use our exclusive casino links from your dashboard to ensure
                your play is tracked
              </p>
              <NuxtLink to="/dashboard" class="step-link"
                >View Casino Links</NuxtLink
              >
            </div>
          </div>

          <div class="guide-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Play and Track</h4>
              <p>
                Enjoy your favorite games while our system automatically tracks
                your activity
              </p>
              <NuxtLink to="/stats" class="step-link"
                >Check Your Stats</NuxtLink
              >
            </div>
          </div>

          <div class="guide-step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Refer Friends</h4>
              <p>
                Share your referral link to earn the Community Guru award and
                commissions
              </p>
              <NuxtLink to="/refer" class="step-link"
                >Get Referral Link</NuxtLink
              >
            </div>
          </div>

          <div class="guide-step">
            <div class="step-number">5</div>
            <div class="step-content">
              <h4>Win & Celebrate</h4>
              <p>
                Check our announcement page on the 5th of each month to see if
                you've won
              </p>
              <NuxtLink to="/winners" class="step-link"
                >View Past Winners</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const activeItems = ref([0]); // First item open by default

const toggleItem = (index) => {
  if (activeItems.value.includes(index)) {
    activeItems.value = activeItems.value.filter((i) => i !== index);
  } else {
    activeItems.value.push(index);
  }
};

const faqItems = [
  {
    question: "Who is eligible to participate in the awards program?",
    answer:
      "Anyone with a verified Gambler's Future account who plays at our partner casinos through our tracking links is eligible. You must be of legal gambling age in your jurisdiction and follow our responsible gambling guidelines.",
  },
  {
    question: "How are the monthly winners selected?",
    answer:
      "Winners are selected based on specific criteria for each award:<br><br><strong>High Roller:</strong> Highest total wager across all tracked casinos<br><strong>Lucky Winner:</strong> Random selection from all active players<br><strong>Big Winner:</strong> Largest single win (proportional to bet size)",
  },
  {
    question: "How do I know if my gameplay is being tracked?",
    answer:
      "All gameplay is automatically tracked when you use the casino links provided in your Gambler's Future dashboard. You can verify your tracking status in real-time by checking your stats page.",
  },
  {
    question: "When and how are prizes distributed?",
    answer:
      "Cash prizes are distributed directly to your account within 7 business days of the winner announcement. You'll need to verify your payment details in your profile. For annual awards, prizes are presented at our live ceremony in January.",
  },
  {
    question: "Can I win multiple awards?",
    answer:
      "Yes! You can win different award categories in the same month, and you can win the same award multiple times throughout the year. Each award is judged separately based on its specific criteria.",
  },
  {
    question: "What is the 10% referral commission?",
    answer:
      "When someone you've referred wins a cash prize (except the Community Guru Award), you automatically receive 10% of their winnings as a commission. For example, if your referral wins the $3,000 High Roller award, you'll receive $300.",
  },
  {
    question: "How do yearly awards differ from monthly awards?",
    answer:
      "Yearly awards offer significantly larger prizes (including $100,000 cash and a Tesla Cybertruck) and cover the entire calendar year of activity rather than a single month. Yearly awards recognize exceptional achievement across longer timeframes.",
  },
  {
    question: "What verification is required to claim prizes?",
    answer:
      "All winners must have completed our standard KYC (Know Your Customer) verification process. For major prizes, additional verification may be required, including proof of identity and residency. This ensures compliance with regulations.",
  },
  {
    question: "Can I participate if I'm in a restricted country?",
    answer:
      "Our awards program is available to players in all countries where online gambling is legal and where our partner casinos operate. Check your local regulations or contact our support team if you're unsure about your eligibility.",
  },
  {
    question: "How are disputes or technical issues handled?",
    answer:
      "We have a dedicated awards committee that reviews any disputes. If you experience tracking issues or have concerns about results, please contact <a href='mailto:support@gamblersfuture.com'>support@gamblersfuture.com</a> within 48 hours of the announcement.",
  },
];
</script>

<style scoped>
.awards-faq-section {
  padding: 5rem 0;
  background-color: #1a1721;
  position: relative;
  overflow: hidden;
}

.faq-bg {
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

.faq-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
}

/* Header styles */
.faq-header {
  text-align: center;
  margin-bottom: 3rem;
}

.faq-title {
  font-size: 2.75rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
}

.faq-title .highlight {
  background: linear-gradient(135deg, #dd4544, #e8937c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
}

.faq-title .highlight::after {
  content: "";
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(
    90deg,
    rgba(221, 69, 68, 0.2),
    rgba(232, 147, 124, 0)
  );
  z-index: -1;
  border-radius: 3px;
}

.faq-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;
}

/* Content styles */
.faq-content {
  margin-bottom: 4rem;
}

.faq-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.accordion {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.accordion-item {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.accordion-item:hover {
  background: rgba(255, 255, 255, 0.05);
}

.accordion-item.active {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-color: rgba(221, 69, 68, 0.2);
}

.accordion-header {
  padding: 1.25rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.accordion-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  margin: 0;
  flex: 1;
}

.accordion-icon {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.accordion-item.active .accordion-icon {
  transform: rotate(180deg);
  color: #dd4544;
}

.accordion-content {
  padding: 0 1.5rem;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.accordion-item.active .accordion-content {
  padding: 0 1.5rem 1.5rem;
  max-height: 500px;
}

.accordion-content p {
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  font-size: 0.95rem;
}

.accordion-content a {
  color: #dd4544;
  text-decoration: none;
  transition: color 0.2s ease;
}

.accordion-content a:hover {
  color: #e8937c;
  text-decoration: underline;
}

/* Timeline section */
.timeline-section {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  padding: 2.5rem;
  margin-bottom: 4rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.timeline-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.timeline-title i {
  color: #dd4544;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.timeline-item {
  display: flex;
  gap: 1.5rem;
  position: relative;
}

.timeline-item::before {
  content: "";
  position: absolute;
  top: 2rem;
  left: 110px;
  height: calc(100% + 1.5rem);
  width: 2px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 0;
}

.timeline-item:last-child::before {
  display: none;
}

.timeline-date {
  min-width: 110px;
  font-weight: 600;
  color: #dd4544;
  text-align: right;
  padding-right: 1.5rem;
  position: relative;
  z-index: 1;
  font-size: 0.95rem;
}

.timeline-content {
  flex: 1;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 1.25rem;
  position: relative;
  z-index: 1;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.timeline-content::before {
  content: "";
  position: absolute;
  top: 1rem;
  left: -1.25rem;
  width: 1rem;
  height: 1rem;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  border-radius: 50%;
  z-index: 1;
}

.timeline-content h4 {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  color: white;
}

.timeline-content p {
  margin: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.timeline-item.special .timeline-date {
  color: gold;
  font-weight: 700;
}

.timeline-item.special .timeline-content {
  border-color: rgba(255, 215, 0, 0.2);
  background: rgba(255, 215, 0, 0.05);
}

.timeline-item.special .timeline-content::before {
  background: linear-gradient(135deg, gold, #ffd700);
}

/* Participation guide */
.participation-guide {
  background: rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.guide-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.guide-title i {
  color: #dd4544;
}

.guide-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.guide-step {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  color: white;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1.25rem;
  box-shadow: 0 5px 15px rgba(221, 69, 68, 0.3);
}

.step-content {
  flex: 1;
}

.step-content h4 {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  color: white;
}

.step-content p {
  margin: 0 0 0.75rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
}

.step-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #dd4544;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.step-link:hover {
  color: #e8937c;
}

.step-link::after {
  content: "→";
  transition: transform 0.2s ease;
}

.step-link:hover::after {
  transform: translateX(3px);
}

/* Responsive styles */
@media (max-width: 900px) {
  .faq-columns {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .timeline-section,
  .participation-guide {
    padding: 2rem 1.5rem;
  }

  .guide-steps {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .faq-title {
    font-size: 2.25rem;
  }

  .timeline-item {
    flex-direction: column;
    gap: 0.5rem;
  }

  .timeline-item::before {
    left: 7px;
    top: 2rem;
  }

  .timeline-date {
    text-align: left;
    padding-left: 2rem;
    min-width: auto;
    width: 100%;
    padding-right: 0;
  }

  .timeline-content::before {
    left: -2rem;
    top: -1.75rem;
  }
}

@media (max-width: 480px) {
  .faq-title {
    font-size: 1.75rem;
  }

  .faq-subtitle {
    font-size: 1rem;
  }

  .accordion-title {
    font-size: 1rem;
  }

  .timeline-section,
  .participation-guide {
    padding: 1.5rem 1.25rem;
  }

  .timeline-title,
  .guide-title {
    font-size: 1.25rem;
  }
}
</style>

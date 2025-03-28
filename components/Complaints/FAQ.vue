<template>
  <section id="complaints-faq" class="complaints-faq-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          Frequently Asked <span class="highlight">Questions</span>
        </h2>
        <p class="section-subtitle">
          Everything you need to know about our complaint resolution process
        </p>
      </div>

      <div class="faq-content">
        <div class="faq-tabs">
          <button
            v-for="(tab, index) in tabItems"
            :key="index"
            class="tab-item"
            :class="{ active: activeTab === index }"
            @click="setActiveTab(index)"
          >
            <i :class="tab.icon"></i>
            <span>{{ tab.label }}</span>
          </button>
        </div>

        <div class="tab-content">
          <!-- Process FAQ -->
          <div v-if="activeTab === 0" class="tab-pane">
            <div class="faq-accordion">
              <div
                v-for="(item, index) in processFaq"
                :key="index"
                class="accordion-item"
                :class="{ active: openItems.includes('process-' + index) }"
              >
                <div
                  class="accordion-header"
                  @click="toggleAccordion('process-' + index)"
                >
                  <h3 class="accordion-title">{{ item.question }}</h3>
                  <div class="accordion-icon">
                    <i
                      class="fas"
                      :class="
                        openItems.includes('process-' + index)
                          ? 'fa-minus'
                          : 'fa-plus'
                      "
                    ></i>
                  </div>
                </div>
                <div class="accordion-body">
                  <div class="accordion-content" v-html="item.answer"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Submission Guidelines -->
          <div v-if="activeTab === 1" class="tab-pane">
            <div class="guidelines-container">
              <div class="guidelines-intro">
                <div class="guidelines-icon">
                  <i class="fas fa-clipboard-check"></i>
                </div>
                <div class="guidelines-text">
                  <h3>Effective Complaint Submission</h3>
                  <p>
                    Follow these guidelines to ensure your complaint is
                    processed efficiently and has the best chance of a favorable
                    resolution.
                  </p>
                </div>
              </div>

              <div class="guidelines-list">
                <div
                  v-for="(guideline, index) in submissionGuidelines"
                  :key="index"
                  class="guideline-item"
                >
                  <div class="guideline-number">{{ index + 1 }}</div>
                  <div class="guideline-content">
                    <h4>{{ guideline.title }}</h4>
                    <p>{{ guideline.description }}</p>
                    <div v-if="guideline.example" class="guideline-example">
                      <div class="example-title">Example:</div>
                      <div class="example-content">{{ guideline.example }}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="dos-and-donts">
                <div class="do-column">
                  <div class="column-header">
                    <i class="fas fa-check-circle"></i>
                    <h3>Do's</h3>
                  </div>
                  <ul class="checklist">
                    <li v-for="(item, index) in dosList" :key="'do-' + index">
                      <i class="fas fa-check"></i>
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>

                <div class="dont-column">
                  <div class="column-header">
                    <i class="fas fa-times-circle"></i>
                    <h3>Don'ts</h3>
                  </div>
                  <ul class="checklist">
                    <li
                      v-for="(item, index) in dontsList"
                      :key="'dont-' + index"
                    >
                      <i class="fas fa-times"></i>
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Resolution Process -->
          <div v-if="activeTab === 2" class="tab-pane">
            <div class="process-explainer">
              <h3 class="process-title">How We Handle Your Complaints</h3>

              <div class="process-diagram">
                <div
                  v-for="(step, index) in resolutionProcess"
                  :key="index"
                  class="process-step"
                >
                  <div class="step-header">
                    <div class="step-number">{{ index + 1 }}</div>
                    <h4 class="step-title">{{ step.title }}</h4>
                  </div>
                  <div class="step-description">{{ step.description }}</div>
                  <div class="step-details">
                    <div class="step-timeline">
                      <div class="timeline-label">Timeline:</div>
                      <div class="timeline-value">{{ step.timeline }}</div>
                    </div>
                    <div v-if="step.keyActions" class="step-actions">
                      <div class="actions-label">Key Actions:</div>
                      <ul class="actions-list">
                        <li
                          v-for="(action, actionIndex) in step.keyActions"
                          :key="actionIndex"
                        >
                          {{ action }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="special-cases-box">
                <div class="special-cases-header">
                  <i class="fas fa-exclamation-triangle"></i>
                  <h4>Special Cases</h4>
                </div>
                <div class="special-cases-content">
                  <p>Some complaints may require special handling:</p>
                  <ul>
                    <li>
                      <strong>High-Value Disputes (>$10,000):</strong> May be
                      escalated to our senior mediation team and receive
                      priority handling.
                    </li>
                    <li>
                      <strong>Legal Issues:</strong> Cases involving potential
                      legal violations are reported to relevant authorities
                      while maintaining your confidentiality.
                    </li>
                    <li>
                      <strong>Licensing Violations:</strong> We report operators
                      that violate licensing conditions to appropriate
                      regulatory bodies.
                    </li>
                    <li>
                      <strong>Industry-Wide Issues:</strong> Systemic problems
                      affecting multiple players may be addressed through our
                      industry advocacy initiatives.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Eligibility & Limitations -->
          <div v-if="activeTab === 3" class="tab-pane">
            <div class="eligibility-container">
              <div class="eligibility-intro">
                <p>
                  Understanding what issues we can and cannot address helps set
                  appropriate expectations for the complaint process.
                </p>
              </div>

              <div class="eligibility-sections">
                <div class="eligibility-section">
                  <h3 class="section-title">
                    <i class="fas fa-check-circle"></i>
                    Complaint Types We Can Help With
                  </h3>
                  <ul class="eligibility-list can-help">
                    <li
                      v-for="(item, index) in eligibleComplaints"
                      :key="'eligible-' + index"
                    >
                      <div class="item-header">
                        <i class="fas fa-check"></i>
                        <h4>{{ item.title }}</h4>
                      </div>
                      <p>{{ item.description }}</p>
                    </li>
                  </ul>
                </div>

                <div class="eligibility-section">
                  <h3 class="section-title">
                    <i class="fas fa-times-circle"></i>
                    Issues Outside Our Scope
                  </h3>
                  <ul class="eligibility-list cannot-help">
                    <li
                      v-for="(item, index) in ineligibleComplaints"
                      :key="'ineligible-' + index"
                    >
                      <div class="item-header">
                        <i class="fas fa-times"></i>
                        <h4>{{ item.title }}</h4>
                      </div>
                      <p>{{ item.description }}</p>
                      <div
                        v-if="item.alternative"
                        class="alternative-suggestion"
                      >
                        <span>Alternative:</span> {{ item.alternative }}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="time-limitations-box">
                <div class="time-header">
                  <i class="fas fa-hourglass-end"></i>
                  <h3>Time Limitations</h3>
                </div>
                <div class="time-content">
                  <p>
                    We can only accept complaints that meet these time criteria:
                  </p>
                  <ul>
                    <li>
                      <strong>Recent Issues:</strong> The incident must have
                      occurred within the last 6 months.
                    </li>
                    <li>
                      <strong>Prior Contact:</strong> You must have attempted to
                      resolve the issue directly with the operator at least 14
                      days before filing a complaint with us (with exceptions
                      for account closures and emergency situations).
                    </li>
                    <li>
                      <strong>Documentation:</strong> You must have evidence of
                      your communication with the operator (emails, chat logs,
                      etc.).
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="cta-container">
        <div class="still-have-questions">
          <h3>Still Have Questions?</h3>
          <p>
            Our support team is here to help you navigate the complaint process.
          </p>
        </div>
        <div class="cta-buttons">
          <button class="cta-button contact">
            <i class="fas fa-envelope"></i>
            Contact Support
          </button>
          <button class="cta-button submit">
            <i class="fas fa-edit"></i>
            Submit a Complaint
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// State
const activeTab = ref(0);
const openItems = ref([]);

// Tab items
const tabItems = [
  { label: "FAQ", icon: "fas fa-question-circle" },
  { label: "Submission Guidelines", icon: "fas fa-list-ul" },
  { label: "Resolution Process", icon: "fas fa-tasks" },
  { label: "Eligibility & Limitations", icon: "fas fa-shield-alt" },
];

// FAQ content
const processFaq = [
  {
    question: "How long does the complaint process take?",
    answer:
      "The average resolution time is 14-21 days, although this can vary depending on the complexity of your case and the responsiveness of the casino. Simple issues like bonus disputes may be resolved in as little as 5-7 days, while more complex cases involving technical verification or larger sums might take 30+ days. Well keep you updated on your case status throughout the process.",
  },
  {
    question: "Will the casino know my identity when I make a complaint?",
    answer:
      "Yes, we need to share your identity with the casino to effectively mediate your complaint. This typically includes your name, email address, and account details. However, we <strong>never</strong> share your personal contact information, address, or payment methods. If you have serious privacy concerns, please mention this in your submission and we can discuss options.",
  },
  {
    question: "Do I need to pay for your complaint mediation service?",
    answer:
      "No, our complaint mediation service is <strong>completely free</strong> for players. We never charge fees for handling disputes or securing resolutions. Our service is funded through affiliate partnerships with responsible gaming operators, but this never affects our impartiality in dispute resolution.",
  },
  {
    question: "What information should I include in my complaint?",
    answer:
      "For the most effective handling of your complaint, include: <ul><li>Your casino account details (username/email)</li><li>Date(s) of the incident</li><li>Detailed description of what happened</li><li>Copies of relevant communication with the casino</li><li>Screenshots of games, transactions, or terms in question</li><li>The specific outcome you're seeking</li></ul>",
  },
  {
    question: "Can I submit more than one complaint at a time?",
    answer:
      "Yes, you can have multiple active complaints, but we recommend focusing on one issue per submission. If you have multiple issues with the same casino, it's usually more effective to include all related problems in a single, well-organized complaint. For issues with different casinos, please submit separate complaints.",
  },
  {
    question: "Will submitting a complaint affect my account with the casino?",
    answer:
      "Reputable casinos do not penalize players for filing legitimate complaints. Our mediation is professional and focused on fair resolution rather than confrontation. In our experience, the vast majority of operators engage constructively with our process. If we ever encounter retaliatory behavior from an operator, we take this very seriously and factor it into our casino ratings.",
  },
  {
    question: "What if I'm not satisfied with the resolution?",
    answer:
      "If you're not satisfied with the resolution, you can request a review within 14 days. A different case manager will re-evaluate your case. We also provide information about relevant gambling authorities and regulatory bodies you can escalate your complaint to. In some cases, we may refer you to legal resources if your case requires further action beyond our capabilities.",
  },
];

// Submission guidelines
const submissionGuidelines = [
  {
    title: "Be Clear and Specific",
    description:
      "Clearly state what happened, when it happened, and what outcome you're seeking. Specific details help us understand and address your issue more effectively.",
    example:
      "On March 15, 2025, I attempted to withdraw $500 from my Lucky Spins Casino account. The withdrawal was approved but has not been received after 20 days despite their terms stating 3-5 day processing.",
  },
  {
    title: "Provide Documentation",
    description:
      "Include screenshots, email communications, transaction IDs, and any other relevant evidence that supports your complaint.",
    example:
      "I've attached screenshots of my transaction history showing the approved withdrawal, email exchanges with support dated March 20 and March 25, and their terms and conditions page stating their withdrawal timeframes.",
  },
  {
    title: "Detail Previous Resolution Attempts",
    description:
      "Explain how you've already tried to resolve this issue directly with the casino, including dates and methods of contact.",
    example:
      "I contacted support via live chat on March 22 (transcript attached), sent follow-up emails on March 25 and April 1 (attached), and called their support line on April 5 (call reference #45873).",
  },
  {
    title: "Keep Emotions in Check",
    description:
      "While frustration is understandable, a factual and professional tone is more effective than an emotional approach.",
    example:
      'Instead of "This casino is scamming me and stealing my money!!!" try "I have concerns about the handling of my withdrawal request, which does not appear to follow the casino\'s stated policies."',
  },
  {
    title: "Be Reasonable About Outcomes",
    description:
      "Clearly state what resolution you're seeking, and make sure it's proportional to the issue.",
    example:
      "I am requesting that my $500 withdrawal be processed immediately per the terms and conditions, and an explanation for the delay.",
  },
];

// Do's and Don'ts
const dosList = [
  "Provide a chronological sequence of events",
  "Include relevant account information",
  "Attach clear, readable screenshots",
  "Quote specific terms or rules that were violated",
  "Mention specific amounts in dispute",
  "Specify the resolution you're seeking",
  "Disclose if you've filed complaints elsewhere",
  "Keep copies of all documents you submit",
];

const dontsList = [
  "Use offensive or threatening language",
  "Submit multiple complaints for the same issue",
  "Exaggerate or misrepresent facts",
  "Omit relevant information, even if unfavorable",
  "Expect immediate resolution for complex cases",
  "Share confidential info like passwords or full card numbers",
  "Make unreasonable compensation demands",
  "Wait too long after the incident to file a complaint",
];

// Resolution process
const resolutionProcess = [
  {
    title: "Initial Receipt and Review",
    description:
      "We review your complaint to ensure all necessary information is provided and the issue falls within our scope of assistance.",
    timeline: "1-2 days",
    keyActions: [
      "Verification of account details",
      "Initial assessment of complaint validity",
      "Request for additional information if needed",
      "Assignment of case number and case manager",
    ],
  },
  {
    title: "Contact with the Operator",
    description:
      "We formally present your case to the casino or gambling operator and request their response to the issues raised.",
    timeline: "3-7 days",
    keyActions: [
      "Send detailed case summary to operator",
      "Verify operator receipt of complaint",
      "Set timeline for operator response",
      "Update you on initial operator feedback",
    ],
  },
  {
    title: "Investigation and Evidence Collection",
    description:
      "We analyze all evidence from both sides, request additional information if needed, and conduct independent verification where possible.",
    timeline: "5-10 days",
    keyActions: [
      "Review operators full response",
      "Analyze terms and conditions relevance",
      "Verify technical claims where applicable",
      "Collect precedent information from similar cases",
    ],
  },
  {
    title: "Mediation and Negotiation",
    description:
      "We work with both parties to find a fair resolution, applying industry standards, relevant terms, and gambling regulations.",
    timeline: "7-14 days",
    keyActions: [
      "Facilitate communication between parties",
      "Propose potential solutions",
      "Negotiate terms of resolution",
      "Consult with industry experts if needed",
    ],
  },
  {
    title: "Resolution and Follow-up",
    description:
      "We confirm the implementation of the agreed resolution and ensure youre satisfied with the outcome before closing the case.",
    timeline: "3-7 days",
    keyActions: [
      "Document agreed resolution terms",
      "Verify implementation of resolution",
      "Collect feedback from both parties",
      "Update casino rating and compliance records",
    ],
  },
];

// Eligibility content
const eligibleComplaints = [
  {
    title: "Payment Issues",
    description:
      "Delayed withdrawals, rejected withdrawals without valid reason, payment method problems, and disappearing deposits.",
  },
  {
    title: "Bonus and Promotion Disputes",
    description:
      "Unclear terms, retroactive rule changes, denied winnings from bonuses, and promotional misrepresentations.",
  },
  {
    title: "Account Problems",
    description:
      "Unexplained account closures, verification issues, identity verification delays, and account access problems.",
  },
  {
    title: "Game Malfunctions",
    description:
      "Disconnections during important game events, game errors affecting outcomes, and missing game history.",
  },
  {
    title: "Terms and Conditions Issues",
    description:
      "Ambiguous terms, contradictory rules, unreasonable terms, and unfair implementation of terms.",
  },
];

const ineligibleComplaints = [
  {
    title: "Gambling Losses from Fair Play",
    description:
      "We cannot help with complaints about money lost through normal, fair gameplay. All gambling carries the risk of loss.",
    alternative:
      "If youre concerned about your gambling habits, please visit our responsible gambling resources.",
  },
  {
    title: "Disputes with Unlicensed Casinos",
    description:
      "We have limited ability to help with unlicensed or illegally operating casinos as they operate outside regulatory frameworks.",
    alternative:
      "Report unlicensed operators to your local gambling authority.",
  },
  {
    title: "Technical Issues on Your End",
    description:
      "Problems caused by your internet connection, device compatibility, or software installed on your computer.",
    alternative:
      "Contact the casino's technical support team directly for assistance.",
  },
  {
    title: "Very Old Complaints",
    description:
      "Issues that occurred more than 6 months ago, as evidence becomes difficult to verify and operators may have changed policies.",
    alternative:
      "For historical issues, you may need to consult with a legal professional.",
  },
  {
    title: "Third-Party Disputes",
    description:
      "Complaints filed on behalf of someone else (unless you have legal authority as their representative).",
    alternative: "The affected player should file the complaint directly.",
  },
];

// Methods
function setActiveTab(index) {
  activeTab.value = index;
}

function toggleAccordion(id) {
  if (openItems.value.includes(id)) {
    openItems.value = openItems.value.filter((item) => item !== id);
  } else {
    openItems.value.push(id);
  }
}
</script>

<style scoped>
.complaints-faq-section {
  padding: 5rem 0;
  background-color: #1a1721;
  color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 1rem;
  line-height: 1.2;
}

.section-title .highlight {
  background: linear-gradient(135deg, #ff6767, #ff9d67);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
}

.section-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  max-width: 700px;
  margin: 0 auto;
}

/* Tab navigation */
.faq-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.tab-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

.tab-item.active {
  background: rgba(255, 103, 103, 0.1);
  border-color: rgba(255, 103, 103, 0.3);
  color: #ff6767;
}

.tab-content {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2rem;
  margin-bottom: 3rem;
  min-height: 400px;
}

/* Process FAQ accordion */
.faq-accordion {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.accordion-item {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.accordion-item:hover {
  border-color: rgba(255, 255, 255, 0.1);
}

.accordion-item.active {
  border-color: rgba(255, 103, 103, 0.2);
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  transition: background 0.2s ease;
}

.accordion-header:hover {
  background: rgba(255, 255, 255, 0.02);
}

.accordion-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: white;
  flex: 1;
}

.accordion-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
}

.active .accordion-icon {
  background: rgba(255, 103, 103, 0.2);
  color: #ff6767;
  transform: rotate(180deg);
}

.accordion-body {
  display: none;
  padding: 0 1.5rem 1.5rem;
  animation: fadeIn 0.3s ease;
}

.active .accordion-body {
  display: block;
}

.accordion-content {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.6;
}

.accordion-content ul {
  padding-left: 1.5rem;
  margin: 1rem 0;
}

.accordion-content ul li {
  margin-bottom: 0.5rem;
}

.accordion-content strong {
  color: white;
  font-weight: 600;
}

/* Guidelines tab */
.guidelines-container {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.guidelines-intro {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.guidelines-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 103, 103, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #ff6767;
  flex-shrink: 0;
}

.guidelines-text h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  color: white;
}

.guidelines-text p {
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.5;
}

.guidelines-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.guideline-item {
  display: flex;
  gap: 1.25rem;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.03);
  transition: all 0.3s ease;
}

.guideline-item:hover {
  background: rgba(0, 0, 0, 0.25);
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.05);
}

.guideline-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 103, 103, 0.15);
  color: #ff6767;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.guideline-content {
  flex: 1;
}

.guideline-content h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.75rem;
  color: white;
}

.guideline-content p {
  margin: 0 0 1rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.5;
}

.guideline-example {
  background: rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 1rem;
  border-left: 3px solid rgba(255, 103, 103, 0.5);
}

.example-title {
  font-weight: 600;
  color: #ff6767;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.example-content {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.5;
  font-style: italic;
}

.dos-and-donts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 1rem;
}

.do-column,
.dont-column {
  background: rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.03);
}

.column-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.column-header i {
  font-size: 1.3rem;
}

.do-column .column-header i {
  color: #4caf50;
}

.dont-column .column-header i {
  color: #f44336;
}

.column-header h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  color: white;
}

.checklist {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.checklist li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.5;
}

.checklist li i {
  margin-top: 0.25rem;
  font-size: 0.8rem;
}

.do-column .checklist li i {
  color: #4caf50;
}

.dont-column .checklist li i {
  color: #f44336;
}

/* Process tab */
.process-explainer {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.process-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 2rem;
  color: white;
  text-align: center;
}

.process-diagram {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  position: relative;
}

.process-diagram::before {
  content: "";
  position: absolute;
  left: 25px;
  top: 35px;
  bottom: 35px;
  width: 2px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 0;
}

.process-step {
  position: relative;
  padding-left: 60px;
  z-index: 1;
}

.step-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.step-number {
  position: absolute;
  left: 0;
  top: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 103, 103, 0.15);
  color: #ff6767;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
}

.step-title {
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0;
  color: white;
}

.step-description {
  margin: 0 0 1rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.5;
}

.step-details {
  background: rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 1rem;
}

.step-timeline {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.timeline-label {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.timeline-value {
  color: #ff6767;
  font-weight: 600;
  font-size: 0.9rem;
}

.step-actions {
  margin-top: 0.75rem;
}

.actions-label {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.actions-list {
  margin: 0;
  padding-left: 1.25rem;
}

.actions-list li {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
  line-height: 1.4;
}

.special-cases-box {
  background: rgba(255, 152, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 152, 0, 0.1);
}

.special-cases-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.special-cases-header i {
  color: #ff9800;
  font-size: 1.2rem;
}

.special-cases-header h4 {
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0;
  color: white;
}

.special-cases-content p {
  margin: 0 0 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.5;
}

.special-cases-content ul {
  margin: 0;
  padding-left: 1.25rem;
}

.special-cases-content li {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.special-cases-content strong {
  color: white;
  font-weight: 600;
}

/* Eligibility tab */
.eligibility-container {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.eligibility-intro {
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.eligibility-intro p {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.5;
  text-align: center;
}

.eligibility-sections {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.eligibility-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.section-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.section-title i {
  font-size: 1rem;
}

.eligibility-section:first-child .section-title i {
  color: #4caf50;
}

.eligibility-section:last-child .section-title i {
  color: #f44336;
}

.eligibility-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.eligibility-list li {
  background: rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.03);
}

.can-help li {
  border-left: 3px solid rgba(76, 175, 80, 0.5);
}

.cannot-help li {
  border-left: 3px solid rgba(244, 67, 54, 0.5);
}

.item-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.item-header i {
  font-size: 0.9rem;
}

.can-help .item-header i {
  color: #4caf50;
}

.cannot-help .item-header i {
  color: #f44336;
}

.item-header h4 {
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0;
  color: white;
}

.eligibility-list li p {
  margin: 0 0 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.5;
}

.alternative-suggestion {
  background: rgba(0, 0, 0, 0.2);
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.4;
}

.alternative-suggestion span {
  font-weight: 600;
  color: #ff9800;
}

.time-limitations-box {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  margin-top: 1rem;
}

.time-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.time-header i {
  color: #ff9800;
  font-size: 1.2rem;
}

.time-header h3 {
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0;
  color: white;
}

.time-content p {
  margin: 0 0 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.5;
}

.time-content ul {
  margin: 0;
  padding-left: 1.25rem;
}

.time-content li {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.time-content strong {
  color: white;
  font-weight: 600;
}

/* CTA container */
.cta-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.still-have-questions h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  color: white;
}

.still-have-questions p {
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.5;
  max-width: 500px;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.5rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button.contact {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.cta-button.contact:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transform: translateY(-3px);
}

.cta-button.submit {
  background: linear-gradient(135deg, #ff6767, #ff9d67);
  color: white;
  border: none;
  box-shadow: 0 8px 15px rgba(255, 103, 103, 0.25);
}

.cta-button.submit:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 20px rgba(255, 103, 103, 0.35);
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive styles */
@media (max-width: 1024px) {
  .section-title {
    font-size: 2.2rem;
  }

  .dos-and-donts {
    grid-template-columns: 1fr;
  }

  .eligibility-sections {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .cta-container {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }

  .still-have-questions p {
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .complaints-faq-section {
    padding: 3rem 0;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .tab-content {
    padding: 1.5rem;
  }

  .guideline-item {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .guideline-number {
    margin-bottom: 0.5rem;
  }

  .process-step {
    padding-left: 40px;
  }

  .step-number {
    width: 30px;
    height: 30px;
    font-size: 0.9rem;
  }

  .process-diagram::before {
    left: 15px;
    top: 15px;
    bottom: 15px;
  }

  .cta-buttons {
    flex-direction: column;
    width: 100%;
  }

  .cta-button {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .tab-item {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
    flex: 1;
    justify-content: center;
  }

  .tab-item span {
    display: none;
  }

  .accordion-title {
    font-size: 1rem;
  }

  .guidelines-intro {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .special-cases-box,
  .time-limitations-box {
    padding: 1rem;
  }
}
</style>

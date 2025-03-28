<template>
  <section id="advocacy-resources" class="advocacy-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          Player <span class="highlight">Advocacy</span> Resources
        </h2>
        <p class="section-subtitle">
          Beyond our complaint mediation service, these resources can help
          protect your rights as a player
        </p>
      </div>

      <div class="resources-wrapper">
        <!-- Regulatory Authorities -->
        <div class="resource-category">
          <div class="category-header">
            <div class="category-icon">
              <i class="fas fa-gavel"></i>
            </div>
            <h3>Gambling Regulatory Authorities</h3>
          </div>
          <p class="category-description">
            Gambling authorities oversee licensed operators and enforce
            compliance with regulations. They can intervene in serious disputes
            and have the power to impose sanctions.
          </p>

          <div class="authorities-grid">
            <div
              v-for="(authority, index) in regulatoryAuthorities"
              :key="index"
              class="authority-card"
            >
              <div
                class="authority-flag"
                :style="{ backgroundImage: `url(${authority.flagUrl})` }"
              ></div>
              <div class="authority-content">
                <h4>{{ authority.name }}</h4>
                <div class="authority-details">
                  <div class="detail">
                    <i class="fas fa-globe"></i>
                    <a
                      :href="authority.website"
                      target="_blank"
                      rel="noopener noreferrer"
                      >Visit Website</a
                    >
                  </div>
                  <div class="detail">
                    <i class="fas fa-envelope"></i>
                    <a :href="`mailto:${authority.email}`">{{
                      authority.email
                    }}</a>
                  </div>
                  <div v-if="authority.phone" class="detail">
                    <i class="fas fa-phone-alt"></i>
                    <span>{{ authority.phone }}</span>
                  </div>
                </div>
                <div class="authority-tags">
                  <span
                    v-for="(tag, tagIndex) in authority.tags"
                    :key="tagIndex"
                    class="tag"
                    >{{ tag }}</span
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="find-regulator">
            <div class="find-regulator-content">
              <i class="fas fa-search"></i>
              <div>
                <h4>Not sure which authority regulates your casino?</h4>
                <p>
                  The licensing information is typically found in the footer of
                  the casino's website. If you need help identifying the
                  relevant authority,
                  <a href="#" @click.prevent="openAssistanceChat"
                    >contact our support team</a
                  >.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Player Rights -->
        <div class="resource-category">
          <div class="category-header">
            <div class="category-icon">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h3>Your Rights as a Player</h3>
          </div>
          <p class="category-description">
            Understanding your rights as a player is essential to protecting
            yourself. These are fundamental entitlements that apply regardless
            of which operator you choose.
          </p>

          <div class="rights-container">
            <div
              v-for="(right, index) in playerRights"
              :key="index"
              class="right-item"
            >
              <div class="right-header">
                <div class="right-icon">
                  <i :class="right.icon"></i>
                </div>
                <h4>{{ right.title }}</h4>
              </div>
              <p class="right-description">{{ right.description }}</p>
              <div v-if="right.exampleTitle" class="right-example">
                <div class="example-title">{{ right.exampleTitle }}</div>
                <div class="example-content">{{ right.exampleContent }}</div>
              </div>
            </div>
          </div>

          <div class="download-rights">
            <a
              href="#"
              @click.prevent="downloadRightsGuide"
              class="download-button"
            >
              <i class="fas fa-file-pdf"></i>
              <span>Download Complete Player Rights Guide</span>
            </a>
            <p>
              A comprehensive 12-page guide to your rights and how to enforce
              them
            </p>
          </div>
        </div>

        <!-- External Resources -->
        <div class="resource-category">
          <div class="category-header">
            <div class="category-icon">
              <i class="fas fa-hands-helping"></i>
            </div>
            <h3>Additional Support Organizations</h3>
          </div>
          <p class="category-description">
            For specialized assistance, legal advice, or support with
            gambling-related issues, these organizations offer expertise beyond
            our complaint resolution service.
          </p>

          <div class="resources-tabs">
            <div class="tabs-header">
              <button
                v-for="(tab, index) in resourceTabs"
                :key="index"
                class="tab-button"
                :class="{ active: activeTab === index }"
                @click="activeTab = index"
              >
                <i :class="tab.icon"></i>
                <span>{{ tab.label }}</span>
              </button>
            </div>

            <div class="tabs-content">
              <!-- Legal Assistance -->
              <div v-if="activeTab === 0" class="tab-pane">
                <div class="resource-list">
                  <div
                    v-for="(resource, index) in legalResources"
                    :key="index"
                    class="resource-item"
                  >
                    <div class="resource-logo" v-if="resource.logoUrl">
                      <img
                        :src="resource.logoUrl"
                        :alt="resource.name + ' logo'"
                      />
                    </div>
                    <div class="resource-info">
                      <h4>{{ resource.name }}</h4>
                      <p>{{ resource.description }}</p>
                      <div class="resource-actions">
                        <a
                          :href="resource.website"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="resource-link"
                        >
                          <i class="fas fa-external-link-alt"></i>
                          <span>Visit Website</span>
                        </a>
                        <div class="resource-tag" v-if="resource.type">
                          {{ resource.type }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="legal-disclaimer">
                  <i class="fas fa-info-circle"></i>
                  <p>
                    The resources listed are independent organizations. While
                    we've vetted them for legitimacy, we don't endorse specific
                    legal services. Always conduct your own research before
                    engaging legal assistance.
                  </p>
                </div>
              </div>

              <!-- Problem Gambling -->
              <div v-if="activeTab === 1" class="tab-pane">
                <div class="help-intro">
                  <div class="help-icon">
                    <i class="fas fa-heart"></i>
                  </div>
                  <div class="help-content">
                    <h4>Need help with problem gambling?</h4>
                    <p>
                      If you're concerned about your gambling habits or those of
                      someone close to you, these organizations provide
                      confidential support, counseling, and practical
                      assistance.
                    </p>
                  </div>
                </div>

                <div class="resource-list">
                  <div
                    v-for="(resource, index) in gamblingHelpResources"
                    :key="index"
                    class="resource-item support-item"
                  >
                    <div class="resource-info">
                      <h4>{{ resource.name }}</h4>
                      <p>{{ resource.description }}</p>
                      <div class="resource-contact">
                        <div class="contact-item" v-if="resource.helpline">
                          <i class="fas fa-phone-alt"></i>
                          <span>{{ resource.helpline }}</span>
                        </div>
                        <div class="contact-item" v-if="resource.hours">
                          <i class="fas fa-clock"></i>
                          <span>{{ resource.hours }}</span>
                        </div>
                      </div>
                      <div class="resource-actions">
                        <a
                          :href="resource.website"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="resource-link"
                        >
                          <i class="fas fa-external-link-alt"></i>
                          <span>Get Support</span>
                        </a>
                        <div class="resource-tag urgent" v-if="resource.urgent">
                          Immediate Help
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Industry Advocacy -->
              <div v-if="activeTab === 2" class="tab-pane">
                <div class="resource-list">
                  <div
                    v-for="(resource, index) in advocacyResources"
                    :key="index"
                    class="resource-item"
                  >
                    <div class="resource-logo" v-if="resource.logoUrl">
                      <img
                        :src="resource.logoUrl"
                        :alt="resource.name + ' logo'"
                      />
                    </div>
                    <div class="resource-info">
                      <h4>{{ resource.name }}</h4>
                      <p>{{ resource.description }}</p>
                      <div
                        class="resource-focus"
                        v-if="resource.focus && resource.focus.length"
                      >
                        <span class="focus-label">Focus Areas:</span>
                        <div class="focus-tags">
                          <span
                            v-for="(focus, focusIndex) in resource.focus"
                            :key="focusIndex"
                            class="focus-tag"
                          >
                            {{ focus }}
                          </span>
                        </div>
                      </div>
                      <div class="resource-actions">
                        <a
                          :href="resource.website"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="resource-link"
                        >
                          <i class="fas fa-external-link-alt"></i>
                          <span>Learn More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="next-steps-container">
        <div class="next-steps-content">
          <div class="step-icon">
            <i class="fas fa-arrow-right"></i>
          </div>
          <div class="step-text">
            <h3>Ready to File a Complaint?</h3>
            <p>
              Return to our complaint form to get started with the resolution
              process.
            </p>
          </div>
          <div class="step-action">
            <a href="#complaint-form" class="return-button">
              <i class="fas fa-edit"></i>
              <span>Submit Complaint</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// State
const activeTab = ref(0);

// Methods
function openAssistanceChat() {
  // Implementation depends on your chat system
  console.log("Opening chat for regulator assistance");
  alert("Chat assistance would open here");
}

function downloadRightsGuide() {
  // Implementation for downloading PDF
  console.log("Downloading player rights guide");
  alert("PDF download would start here");
}

// Data: Regulatory Authorities
const regulatoryAuthorities = [
  {
    name: "UK Gambling Commission",
    flagUrl: "/images/flags/uk.png",
    website: "https://www.gamblingcommission.gov.uk",
    email: "info@gamblingcommission.gov.uk",
    phone: "+44 121 230 6666",
    tags: ["UK Casinos", "High Authority", "Player Protection"],
  },
  {
    name: "Malta Gaming Authority",
    flagUrl: "/images/flags/malta.png",
    website: "https://www.mga.org.mt",
    email: "info@mga.org.mt",
    phone: "+356 2546 9000",
    tags: ["International", "EU Jurisdiction", "Licensing"],
  },
  {
    name: "Gibraltar Regulatory Authority",
    flagUrl: "/images/flags/gibraltar.png",
    website: "https://www.gra.gi",
    email: "info@gra.gi",
    phone: "+350 200 74636",
    tags: ["UK-Adjacent", "Tax Haven", "Remote Gaming"],
  },
  {
    name: "Alderney Gambling Control Commission",
    flagUrl: "/images/flags/alderney.png",
    website: "https://www.gamblingcontrol.org",
    email: "info@agcc.gg",
    tags: ["Channel Islands", "Respected", "Game Fairness"],
  },
  {
    name: "Isle of Man Gambling Supervision Commission",
    flagUrl: "/images/flags/isle-of-man.png",
    website: "https://www.gov.im/gambling",
    email: "gaming@gov.im",
    phone: "+44 1624 694331",
    tags: ["Crown Dependency", "UK-Adjacent", "Player Funds Protection"],
  },
  {
    name: "Kahnawake Gaming Commission",
    flagUrl: "/images/flags/kahnawake.png",
    website: "https://www.gamingcommission.ca",
    email: "info@gamingcommission.ca",
    phone: "+1 450 638 5721",
    tags: ["Canadian", "First Nations", "North America"],
  },
];

// Data: Player Rights
const playerRights = [
  {
    title: "Right to Fair Games",
    icon: "fas fa-dice",
    description:
      "All games must use certified Random Number Generators (RNGs) and have verifiable return-to-player percentages that match advertised rates.",
    exampleTitle: "When this applies:",
    exampleContent:
      "If a slot advertises 96% RTP, the operator must be able to prove this rate is implemented. You can request verification of game fairness through technical audit certificates.",
  },
  {
    title: "Right to Clear Terms",
    icon: "fas fa-file-contract",
    description:
      "Terms and conditions must be clear, accessible, and not unfairly weighted against the player. Hidden or ambiguous terms are not enforceable.",
    exampleTitle: "When this applies:",
    exampleContent:
      "A casino cannot deny a withdrawal based on a rule that was not clearly presented to you before you deposited. Terms buried in fine print may be challenged.",
  },
  {
    title: "Right to Account Access",
    icon: "fas fa-user-lock",
    description:
      "You have the right to access your account data, transaction history, and to close your account with any remaining balance returned (subject to legitimate security checks).",
    exampleTitle: "When this applies:",
    exampleContent:
      "If an operator suddenly restricts access to your account without explanation, they must provide evidence of terms violation or restore access.",
  },
  {
    title: "Right to Timely Withdrawals",
    icon: "fas fa-wallet",
    description:
      "Once verification requirements are met, withdrawals must be processed within the timeframe specified in the operator's terms, without unreasonable delays.",
    exampleTitle: "When this applies:",
    exampleContent:
      'If the casino states "3-5 business days" for processing, they cannot hold funds for 3 weeks without legitimate reason such as additional verification for large amounts.',
  },
  {
    title: "Right to Data Protection",
    icon: "fas fa-shield-alt",
    description:
      "Your personal and financial information must be securely stored, used only for legitimate purposes, and protected according to data protection laws.",
    exampleTitle: "When this applies:",
    exampleContent:
      "Your data cannot be shared with third parties without your consent. In case of a data breach, you must be promptly notified and appropriate measures taken.",
  },
  {
    title: "Right to Responsible Gambling Tools",
    icon: "fas fa-hand-paper",
    description:
      "Operators must provide tools to help you control your gambling, including deposit limits, self-exclusion options, and activity statements.",
    exampleTitle: "When this applies:",
    exampleContent:
      "If you set a deposit limit, it must be implemented immediately. If you self-exclude, the operator must block your access for the specified period without exception.",
  },
];

// Data: Legal Resources
const legalResources = [
  {
    name: "International Association of Gaming Attorneys",
    logoUrl: "/images/logos/iaga.png",
    description:
      "Network of attorneys specializing in gambling law across multiple jurisdictions, offering referrals to lawyers experienced in player disputes.",
    website: "https://www.theiaga.org",
    type: "Professional Association",
  },
  {
    name: "Gaming Law Masters",
    logoUrl: "/images/logos/glm.png",
    description:
      "Specialized legal practice focusing exclusively on gambling disputes and regulatory matters, with a track record of resolving major player complaints.",
    website: "https://www.gaminglawmasters.com",
    type: "Legal Firm",
  },
  {
    name: "Consumer Rights Legal Clinic",
    logoUrl: "/images/logos/crlc.png",
    description:
      "Non-profit organization providing legal advice for consumers, including gamblers facing disputes with operators, often at reduced or no cost.",
    website: "https://www.consumerrightslegal.org",
    type: "Non-Profit",
  },
  {
    name: "iGaming Contract Review Service",
    logoUrl: "/images/logos/igcrs.png",
    description:
      "Service that reviews casino terms and conditions to identify unfair clauses and provides analysis of your cases merit before pursuing legal action.",
    website: "https://www.igamingreview.org",
    type: "Advisory Service",
  },
];

// Data: Problem Gambling Resources
const gamblingHelpResources = [
  {
    name: "National Council on Problem Gambling",
    description:
      "Provides support, treatment referrals, and resources for individuals and families affected by problem gambling across the United States.",
    helpline: "1-800-522-4700",
    hours: "24/7 Confidential Support",
    website: "https://www.ncpgambling.org",
    urgent: true,
  },
  {
    name: "GamCare",
    description:
      "UK-based organization offering free information, support and counseling for anyone affected by problem gambling.",
    helpline: "0808 8020 133",
    hours: "24 hours, every day",
    website: "https://www.gamcare.org.uk",
    urgent: true,
  },
  {
    name: "Gamblers Anonymous",
    description:
      "International fellowship of people who share their experience, strength and hope with each other to solve their common problem.",
    website: "https://www.gamblersanonymous.org",
    hours: "Meeting schedules vary by location",
  },
  {
    name: "BeGambleAware",
    description:
      "Independent charity helping to reduce gambling harm through education, research, and treatment services.",
    helpline: "0808 8020 133",
    website: "https://www.begambleaware.org",
    hours: "Support available 24/7",
  },
];

// Data: Advocacy Resources
const advocacyResources = [
  {
    name: "International Association for Player Protection",
    logoUrl: "/images/logos/iapp.png",
    description:
      "Global organization dedicated to advocating for player interests in gambling policy development and promoting industry best practices.",
    website: "https://www.playerprotection.org",
    focus: ["Regulatory Reform", "Industry Standards", "Player Education"],
  },
  {
    name: "Fair Gaming Coalition",
    logoUrl: "/images/logos/fgc.png",
    description:
      "Alliance of player advocates, industry experts, and former regulators working to improve fairness and transparency in online gambling.",
    website: "https://www.fairgamingcoalition.org",
    focus: ["Game Fairness", "Dispute Resolution", "Operator Accountability"],
  },
  {
    name: "Digital Gaming Consumer Rights Network",
    logoUrl: "/images/logos/dgcrn.png",
    description:
      "Network focusing on digital rights in the context of online gambling, addressing data privacy, identity verification, and digital consumer protection.",
    website: "https://www.gamingconsumerrights.org",
    focus: ["Data Privacy", "Digital Rights", "Consumer Protection"],
  },
];

// Tab navigation
const resourceTabs = [
  { label: "Legal Assistance", icon: "fas fa-balance-scale" },
  { label: "Problem Gambling Support", icon: "fas fa-heart" },
  { label: "Player Advocacy Groups", icon: "fas fa-users" },
];
</script>

<style scoped>
.advocacy-section {
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
  margin-bottom: 4rem;
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
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 auto;
  max-width: 700px;
  line-height: 1.6;
}

.resources-wrapper {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

/* Category Styling */
.resource-category {
  margin-bottom: 1rem;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.category-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 103, 103, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.category-icon i {
  font-size: 1.75rem;
  color: #ff6767;
}

.category-header h3 {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0;
  color: white;
}

.category-description {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin: 0 0 2.5rem;
  max-width: 900px;
}

/* Regulatory Authorities */
.authorities-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.authority-card {
  background: rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.authority-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.1);
}

.authority-flag {
  height: 100px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.authority-flag::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
}

.authority-content {
  padding: 1.5rem;
}

.authority-content h4 {
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0 0 1rem;
  color: white;
}

.authority-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.detail {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
}

.detail i {
  color: rgba(255, 103, 103, 0.8);
  width: 16px;
  text-align: center;
}

.detail a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.2s ease;
}

.detail a:hover {
  color: #ff6767;
  text-decoration: underline;
}

.detail span {
  color: rgba(255, 255, 255, 0.8);
}

.authority-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.7);
  padding: 0.25rem 0.75rem;
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 500;
}

.find-regulator {
  background: rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.find-regulator-content {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
}

.find-regulator-content i {
  font-size: 1.5rem;
  color: #ff6767;
  margin-top: 0.25rem;
}

.find-regulator-content h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.75rem;
  color: white;
}

.find-regulator-content p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin: 0;
  line-height: 1.5;
}

.find-regulator-content a {
  color: #ff6767;
  text-decoration: none;
  transition: color 0.2s ease;
  font-weight: 500;
}

.find-regulator-content a:hover {
  text-decoration: underline;
}

/* Player Rights */
.rights-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2.5rem;
}

.right-item {
  background: rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 1.75rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.right-item:hover {
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.right-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.right-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 103, 103, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.right-icon i {
  font-size: 1rem;
  color: #ff6767;
}

.right-header h4 {
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0;
  color: white;
}

.right-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0 0 1.25rem;
}

.right-example {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 1rem;
  border-left: 3px solid rgba(255, 103, 103, 0.3);
}

.example-title {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.example-content {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 1.5;
  font-style: italic;
}

.download-rights {
  text-align: center;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.download-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.5rem;
  background: rgba(255, 103, 103, 0.1);
  color: #ff6767;
  border-radius: 8px;
  border: 1px solid rgba(255, 103, 103, 0.3);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  margin-bottom: 0.75rem;
}

.download-button:hover {
  background: rgba(255, 103, 103, 0.15);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(255, 103, 103, 0.1);
}

.download-rights p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin: 0;
}

/* External Resources Tabs */
.resources-tabs {
  background: rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.tabs-header {
  display: flex;
  background: rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.tab-button {
  flex: 1;
  padding: 1.25rem 1rem;
  text-align: center;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-bottom: 3px solid transparent;
}

.tab-button:hover {
  background: rgba(255, 255, 255, 0.03);
  color: rgba(255, 255, 255, 0.9);
}

.tab-button.active {
  color: #ff6767;
  border-bottom-color: #ff6767;
  background: rgba(255, 103, 103, 0.05);
}

.tabs-content {
  padding: 2rem;
}

.tab-pane {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Resource Lists */
.resource-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.resource-item {
  display: flex;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.resource-item:hover {
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.resource-logo {
  width: 120px;
  background: rgba(255, 255, 255, 0.02);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
}

.resource-logo img {
  max-width: 100%;
  max-height: 80px;
  object-fit: contain;
}

.resource-info {
  padding: 1.5rem;
  flex: 1;
}

.resource-info h4 {
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0 0 0.75rem;
  color: white;
}

.resource-info p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0 0 1rem;
}

.resource-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.resource-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #ff6767;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

.resource-link:hover {
  text-decoration: underline;
}

.resource-tag {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.7);
  padding: 0.25rem 0.75rem;
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 500;
}

.resource-tag.urgent {
  background: rgba(255, 87, 34, 0.1);
  color: #ff5722;
}

.legal-disclaimer {
  margin-top: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 1rem;
}

.legal-disclaimer i {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;
  margin-top: 0.25rem;
}

.legal-disclaimer p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.5;
  font-style: italic;
}

/* Problem Gambling Support */
.help-intro {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 2rem;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.help-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(76, 175, 80, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.help-icon i {
  font-size: 1.5rem;
  color: #4caf50;
}

.help-content h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: white;
}

.help-content p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin: 0;
  line-height: 1.5;
}

.support-item {
  border-left: 4px solid rgba(76, 175, 80, 0.5);
}

.resource-contact {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
}

.contact-item i {
  color: #4caf50;
}

/* Advocacy Groups */
.resource-focus {
  margin-bottom: 1rem;
}

.focus-label {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  margin-right: 0.5rem;
}

.focus-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.focus-tag {
  background: rgba(255, 152, 0, 0.1);
  color: #ff9800;
  padding: 0.25rem 0.75rem;
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Next Steps */
.next-steps-container {
  margin-top: 5rem;
  text-align: center;
}

.next-steps-content {
  background: rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.step-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 103, 103, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-icon i {
  font-size: 1.5rem;
  color: #ff6767;
}

.step-text h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.75rem;
  color: white;
}

.step-text p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.05rem;
  margin: 0;
  line-height: 1.5;
}

.return-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #ff6767, #ff9d67);
  color: white;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.05rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 10px 20px rgba(255, 103, 103, 0.3);
}

.return-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(255, 103, 103, 0.4);
}

/* Responsive styles */
@media (max-width: 1024px) {
  .authorities-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .rights-container {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2.2rem;
  }
}

@media (max-width: 768px) {
  .advocacy-section {
    padding: 3rem 0;
  }

  .authorities-grid {
    grid-template-columns: 1fr;
  }

  .resource-item {
    flex-direction: column;
  }

  .resource-logo {
    width: auto;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .section-title {
    font-size: 2rem;
  }

  .category-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .category-icon {
    margin: 0 auto;
  }

  .category-description {
    text-align: center;
  }

  .find-regulator-content {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .find-regulator-content i {
    margin: 0 auto;
  }

  .help-intro {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .help-icon {
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }

  .tabs-header {
    flex-direction: column;
  }

  .tab-button {
    border-bottom: none;
    border-left: 3px solid transparent;
  }

  .tab-button.active {
    border-bottom: none;
    border-left-color: #ff6767;
  }

  .resources-tabs {
    border-radius: 8px;
  }

  .tabs-content {
    padding: 1.5rem;
  }

  .next-steps-content {
    padding: 1.5rem;
  }

  .return-button {
    width: 100%;
    justify-content: center;
  }
}
</style>

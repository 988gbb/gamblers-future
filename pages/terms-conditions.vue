<template>
  <div class="terms-page">
    <!-- Hero Section -->
    <section class="terms-hero">
      <div class="container">
        <h1 class="page-title">Terms and Conditions</h1>
        <p class="page-subtitle">
          Please read these terms carefully before using our service
        </p>
        <div class="last-updated">Last Updated: March 25, 2025</div>
      </div>
    </section>

    <!-- Terms Navigation -->
    <section class="terms-nav">
      <div class="container">
        <div class="nav-container">
          <button
            v-for="(section, index) in sections"
            :key="index"
            class="nav-item"
            :class="{ active: activeSection === index }"
            @click="scrollToSection(index)"
          >
            <i :class="section.icon"></i>
            <span>{{ section.title }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Terms Content -->
    <section class="terms-content">
      <div class="container">
        <div class="terms-container">
          <!-- Introduction -->
          <div id="introduction" class="terms-section" ref="sectionRefs">
            <div class="section-header">
              <div class="section-icon">
                <i class="fas fa-file-contract"></i>
              </div>
              <h2>Introduction</h2>
            </div>
            <div class="section-content">
              <p>
                Welcome to Gamblers Future ("we," "our," or "us"). These Terms
                and Conditions ("Terms") govern your access to and use of our
                website, located at
                <a href="https://www.gamblersfuture.com" class="text-link"
                  >www.gamblersfuture.com</a
                >, and all related services, features, content, and applications
                (collectively, the "Service").
              </p>
              <p>
                By accessing or using our Service, you agree to be bound by
                these Terms. If you do not agree to these Terms, please do not
                access or use our Service.
              </p>
              <p>
                We may revise these Terms at any time by updating this page.
                Your continued use of the Service after any such changes
                constitutes your acceptance of the new Terms. You are advised to
                review this page periodically for any changes.
              </p>
              <div class="important-note">
                <div class="note-icon">
                  <i class="fas fa-exclamation-circle"></i>
                </div>
                <div class="note-content">
                  <strong>Important:</strong> Gamblers Future is an
                  informational service that compares gambling platforms and
                  provides gambling-related content. We do not operate gambling
                  activities directly. All gambling activities you engage in
                  through third-party platforms accessed via our Service are
                  subject to the terms and conditions of those platforms.
                </div>
              </div>
            </div>
          </div>

          <!-- Eligibility -->
          <div id="eligibility" class="terms-section" ref="sectionRefs">
            <div class="section-header">
              <div class="section-icon">
                <i class="fas fa-user-check"></i>
              </div>
              <h2>Eligibility</h2>
            </div>
            <div class="section-content">
              <p>By using our Service, you represent and warrant that:</p>
              <ul class="terms-list">
                <li>
                  You are at least 18 years of age, or the legal age for
                  gambling in your jurisdiction, whichever is higher;
                </li>
                <li>
                  You are legally permitted to access gambling content in your
                  current jurisdiction;
                </li>
                <li>
                  You are accessing our Service in a jurisdiction where online
                  gambling is legal;
                </li>
                <li>
                  You are not accessing our Service from a jurisdiction where it
                  is illegal to do so;
                </li>
                <li>
                  You are not a Politically Exposed Person or subject to any
                  sanctions;
                </li>
                <li>
                  You create only one account (if account creation is offered)
                  and provide accurate information during registration.
                </li>
              </ul>
              <p>
                Gamblers Future reserves the right to terminate access to the
                Service for users who do not meet these eligibility
                requirements. You are responsible for compliance with all local,
                state, national, and international laws and regulations that
                apply to your use of the Service.
              </p>
            </div>
          </div>

          <!-- Service Description -->
          <div id="service" class="terms-section" ref="sectionRefs">
            <div class="section-header">
              <div class="section-icon">
                <i class="fas fa-server"></i>
              </div>
              <h2>Service Description</h2>
            </div>
            <div class="section-content">
              <p>
                Gamblers Future provides informational and comparison services
                related to gambling platforms, games, odds, and strategies. Our
                Service includes, but is not limited to:
              </p>
              <ul class="terms-list">
                <li>
                  Curated reviews and comparisons of gambling platforms and
                  services;
                </li>
                <li>
                  Educational content on various gambling games and strategies;
                </li>
                <li>Odds comparisons across different platforms;</li>
                <li>Responsible gambling resources;</li>
                <li>News and information related to the gambling industry;</li>
                <li>Referral links to third-party gambling platforms.</li>
              </ul>
              <p>
                While we strive to provide accurate and up-to-date information,
                we make no warranties about the completeness, reliability, or
                accuracy of this information. Any action you take based on the
                information found on our Service is strictly at your own risk.
              </p>
              <div class="important-note">
                <div class="note-icon"><i class="fas fa-info-circle"></i></div>
                <div class="note-content">
                  <strong>Service Updates:</strong> We may update, modify, or
                  discontinue any part of the Service at any time without prior
                  notice. We are not liable to you or any third party for any
                  modifications, suspensions, or discontinuations of the
                  Service.
                </div>
              </div>
            </div>
          </div>

          <!-- Account Terms -->
          <div id="account" class="terms-section" ref="sectionRefs">
            <div class="section-header">
              <div class="section-icon">
                <i class="fas fa-user-circle"></i>
              </div>
              <h2>Account Terms</h2>
            </div>
            <div class="section-content">
              <p>
                When you create an account with Gamblers Future, you agree to:
              </p>
              <ul class="terms-list">
                <li>Provide accurate, current, and complete information;</li>
                <li>Maintain and promptly update your account information;</li>
                <li>Keep your password secure and confidential;</li>
                <li>
                  Be solely responsible for all activities that occur under your
                  account;
                </li>
                <li>
                  Notify us immediately of any unauthorized use of your account
                  or any other breach of security;
                </li>
                <li>
                  Not create multiple accounts or create an account on behalf of
                  someone else without permission.
                </li>
              </ul>
              <p>
                We reserve the right to suspend or terminate your account,
                refuse service, and delete or edit content at our sole
                discretion, with or without notice, if we believe you have
                violated these Terms or our policies.
              </p>
              <p>
                If you wish to delete your account, please contact us through
                our <a href="/contact" class="text-link">Contact page</a>. Upon
                account deletion, we may retain certain information as required
                by law or for legitimate business purposes.
              </p>
            </div>
          </div>

          <!-- Content and Conduct -->
          <div id="content" class="terms-section" ref="sectionRefs">
            <div class="section-header">
              <div class="section-icon">
                <i class="fas fa-edit"></i>
              </div>
              <h2>Content and Conduct</h2>
            </div>
            <div class="section-content">
              <p>
                The content on Gamblers Future, including text, graphics, logos,
                images, audio clips, digital downloads, data compilations, and
                software, is owned by Gamblers Future or its content suppliers
                and is protected by international copyright laws.
              </p>
              <p>You may not:</p>
              <ul class="terms-list">
                <li>
                  Modify, publish, transmit, transfer, sell, reproduce, create
                  derivative works from, distribute, display, or exploit any
                  content from our Service in any way;
                </li>
                <li>
                  Use our Service for any illegal or unauthorized purpose;
                </li>
                <li>
                  Post or transmit any content that is unlawful, harmful,
                  threatening, abusive, harassing, defamatory, vulgar, obscene,
                  or otherwise objectionable;
                </li>
                <li>
                  Interfere with or disrupt the Service or servers or networks
                  connected to the Service;
                </li>
                <li>
                  Use data mining, robots, screen scraping, or similar data
                  gathering and extraction tools on our Service;
                </li>
                <li>
                  Use our Service in any manner that could damage, disable,
                  overburden, or impair our systems;
                </li>
                <li>
                  Attempt to gain unauthorized access to any parts of the
                  Service, accounts, or computer systems or networks connected
                  to our Service.
                </li>
              </ul>
              <p>
                If you post content on interactive areas of our Service (if
                available), you grant us and our licensees, successors, and
                assigns a worldwide, non-exclusive, royalty-free, perpetual,
                irrevocable, and fully sublicensable right to use, reproduce,
                modify, adapt, publish, translate, create derivative works from,
                distribute, and display such content.
              </p>
            </div>
          </div>

          <!-- Affiliate Disclosure -->
          <div id="affiliate" class="terms-section" ref="sectionRefs">
            <div class="section-header">
              <div class="section-icon">
                <i class="fas fa-handshake"></i>
              </div>
              <h2>Affiliate Disclosure</h2>
            </div>
            <div class="section-content">
              <p>
                Gamblers Future participates in various affiliate and referral
                programs. This means that we may receive a commission or other
                compensation if you click on links to third-party gambling
                platforms through our Service and subsequently make a deposit or
                engage in specific activities.
              </p>
              <p>
                We disclose this relationship to remain transparent about how we
                generate revenue. Our participation in these programs does not
                influence our reviews, comparisons, or recommendations. We
                strive to provide objective, accurate information regardless of
                affiliate relationships.
              </p>
              <p>
                When you click on affiliate links and visit third-party
                platforms, you will be subject to the terms and conditions and
                privacy policies of those platforms. We are not responsible for
                the practices, content, or policies of these third-party
                platforms.
              </p>
              <div class="important-note">
                <div class="note-icon">
                  <i class="fas fa-money-bill-wave"></i>
                </div>
                <div class="note-content">
                  <strong>Compensation Disclosure:</strong> Links marked with
                  "*" or "Sponsored" indicate affiliate links for which we may
                  receive compensation. This compensation may impact how and
                  where products appear on our Service but does not influence
                  our evaluations.
                </div>
              </div>
            </div>
          </div>

          <!-- Responsible Gambling -->
          <div id="responsible" class="terms-section" ref="sectionRefs">
            <div class="section-header">
              <div class="section-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h2>Responsible Gambling</h2>
            </div>
            <div class="section-content">
              <p>
                Gamblers Future promotes responsible gambling. Gambling should
                be treated as entertainment, not as a way to make money or solve
                financial problems. We encourage users to:
              </p>
              <ul class="terms-list">
                <li>Set limits on time and money spent on gambling;</li>
                <li>
                  Never chase losses or gamble when upset, stressed, or
                  depressed;
                </li>
                <li>Balance gambling with other activities;</li>
                <li>Recognize the signs of problem gambling;</li>
                <li>Seek help if experiencing gambling-related problems.</li>
              </ul>
              <p>
                We provide information on responsible gambling in our
                <a href="/responsible-gaming" class="text-link"
                  >Responsible Gaming section</a
                >. We encourage all users to read this information and make use
                of the resources provided.
              </p>
              <p>
                We reserve the right to restrict access to our Service for users
                who exhibit signs of problematic gambling behavior or are in
                jurisdictions with restrictions on gambling content.
              </p>
            </div>
          </div>

          <!-- Limitation of Liability -->
          <div id="liability" class="terms-section" ref="sectionRefs">
            <div class="section-header">
              <div class="section-icon">
                <i class="fas fa-gavel"></i>
              </div>
              <h2>Limitation of Liability</h2>
            </div>
            <div class="section-content">
              <p>
                To the maximum extent permitted by law, Gamblers Future, its
                affiliates, officers, directors, employees, and agents shall not
                be liable for any direct, indirect, incidental, special,
                consequential, or punitive damages, including but not limited
                to, damages for loss of profits, goodwill, use, data, or other
                intangible losses, resulting from:
              </p>
              <ul class="terms-list">
                <li>Your use or inability to use the Service;</li>
                <li>
                  Any unauthorized access to or use of our servers and/or any
                  personal information stored therein;
                </li>
                <li>
                  Any interruption or cessation of transmission to or from our
                  Service;
                </li>
                <li>
                  Any bugs, viruses, trojan horses, or the like, which may be
                  transmitted to or through our Service by any third party;
                </li>
                <li>
                  Any errors or omissions in any content or for any loss or
                  damage of any kind incurred as a result of your use of any
                  content posted, transmitted, or otherwise made available via
                  the Service;
                </li>
                <li>
                  Financial losses incurred through gambling activities on
                  third-party platforms accessed through our Service.
                </li>
              </ul>
              <p>
                The Service is provided on an "as is" and "as available" basis.
                We make no warranties, expressed or implied, regarding the
                operation of the Service or the information, content, or
                materials included on the Service.
              </p>
              <div class="important-note">
                <div class="note-icon">
                  <i class="fas fa-exclamation-triangle"></i>
                </div>
                <div class="note-content">
                  <strong>Risk Notice:</strong> Gambling involves risk. By using
                  our Service to access gambling platforms, you acknowledge that
                  you may lose money. You are solely responsible for any
                  gambling activities you engage in and any resulting financial
                  losses.
                </div>
              </div>
            </div>
          </div>

          <!-- Indemnification -->
          <div id="indemnification" class="terms-section" ref="sectionRefs">
            <div class="section-header">
              <div class="section-icon">
                <i class="fas fa-user-shield"></i>
              </div>
              <h2>Indemnification</h2>
            </div>
            <div class="section-content">
              <p>
                You agree to defend, indemnify, and hold harmless Gamblers
                Future, its affiliates, licensors, and service providers, and
                its and their respective officers, directors, employees,
                contractors, agents, licensors, suppliers, successors, and
                assigns from and against any claims, liabilities, damages,
                judgments, awards, losses, costs, expenses, or fees (including
                reasonable attorneys' fees) arising out of or relating to:
              </p>
              <ul class="terms-list">
                <li>Your violation of these Terms;</li>
                <li>
                  Your violation of any third party right, including without
                  limitation any intellectual property right, publicity,
                  confidentiality, property, or privacy right;
                </li>
                <li>
                  Your use of the Service, including, but not limited to, your
                  interactions with other users;
                </li>
                <li>
                  Any gambling activities you engage in as a result of using our
                  Service.
                </li>
              </ul>
            </div>
          </div>

          <!-- Termination -->
          <div id="termination" class="terms-section" ref="sectionRefs">
            <div class="section-header">
              <div class="section-icon">
                <i class="fas fa-times-circle"></i>
              </div>
              <h2>Termination</h2>
            </div>
            <div class="section-content">
              <p>
                We may terminate or suspend your access to all or part of the
                Service, with or without notice, for any conduct that we, in our
                sole discretion, believe violates these Terms, infringes on the
                rights of others, or is otherwise inappropriate.
              </p>
              <p>
                Upon termination, your right to use the Service will immediately
                cease. If your account is terminated for any reason, you will
                continue to be bound by these Terms that, by their nature,
                should survive termination, including, without limitation,
                ownership provisions, warranty disclaimers, indemnity, and
                limitations of liability.
              </p>
            </div>
          </div>

          <!-- Governing Law and Jurisdiction -->
          <div id="governing" class="terms-section" ref="sectionRefs">
            <div class="section-header">
              <div class="section-icon">
                <i class="fas fa-balance-scale"></i>
              </div>
              <h2>Governing Law and Jurisdiction</h2>
            </div>
            <div class="section-content">
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of [Your Jurisdiction], without giving effect to
                any principles of conflicts of law. Any legal action or
                proceeding arising out of or relating to these Terms shall be
                brought exclusively in the courts of [Your Jurisdiction], and
                you consent to the personal jurisdiction and venue therein.
              </p>
              <p>
                If any provision of these Terms is found to be invalid or
                unenforceable, the remaining provisions will remain in full
                force and effect. Our failure to enforce any right or provision
                of these Terms will not be considered a waiver of those rights.
              </p>
            </div>
          </div>

          <!-- Contact Information -->
          <div id="contact" class="terms-section" ref="sectionRefs">
            <div class="section-header">
              <div class="section-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <h2>Contact Information</h2>
            </div>
            <div class="section-content">
              <p>
                If you have any questions about these Terms, please contact us
                at:
              </p>
              <div class="contact-info">
                <p>
                  <strong>Email:</strong>
                  <a href="mailto:legal@gamblersfuture.com" class="text-link"
                    >legal@gamblersfuture.com</a
                  >
                </p>
                <p><strong>Postal Address:</strong> [Your Company Address]</p>
              </div>
              <p>
                You can also reach us through our
                <a href="/contact" class="text-link">Contact page</a>.
              </p>
            </div>
          </div>

          <!-- Print Terms -->
          <div class="print-terms">
            <button @click="printTerms" class="print-button">
              <i class="fas fa-print"></i> Print Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// Navigation sections
const sections = [
  { title: "Introduction", icon: "fas fa-file-contract" },
  { title: "Eligibility", icon: "fas fa-user-check" },
  { title: "Service", icon: "fas fa-server" },
  { title: "Account", icon: "fas fa-user-circle" },
  { title: "Content", icon: "fas fa-edit" },
  { title: "Affiliates", icon: "fas fa-handshake" },
  { title: "Responsible Gambling", icon: "fas fa-shield-alt" },
  { title: "Liability", icon: "fas fa-gavel" },
  { title: "Indemnification", icon: "fas fa-user-shield" },
  { title: "Termination", icon: "fas fa-times-circle" },
  { title: "Governing Law", icon: "fas fa-balance-scale" },
  { title: "Contact", icon: "fas fa-envelope" },
];

// Active section tracking
const activeSection = ref(0);
const sectionRefs = ref([]);

// Handle scroll to track active section
function handleScroll() {
  const scrollPosition = window.scrollY + 200;

  const sectionIds = [
    "introduction",
    "eligibility",
    "service",
    "account",
    "content",
    "affiliate",
    "responsible",
    "liability",
    "indemnification",
    "termination",
    "governing",
    "contact",
  ];

  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const section = document.getElementById(sectionIds[i]);

    if (section && section.offsetTop <= scrollPosition) {
      if (activeSection.value !== i) {
        activeSection.value = i;
      }
      break;
    }
  }
}

// Scroll to specific section
function scrollToSection(index) {
  const sectionIds = [
    "introduction",
    "eligibility",
    "service",
    "account",
    "content",
    "affiliate",
    "responsible",
    "liability",
    "indemnification",
    "termination",
    "governing",
    "contact",
  ];

  const element = document.getElementById(sectionIds[index]);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 100,
      behavior: "smooth",
    });
  }

  activeSection.value = index;
}

// Print terms
function printTerms() {
  window.print();
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  // Initialize empty array with correct length for section refs
  sectionRefs.value = Array(sections.length).fill(null);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.terms-page {
  color: white;
  background-color: #130f1d;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Hero Section */
.terms-hero {
  background: linear-gradient(135deg, #1a1721 0%, #2c1e38 100%);
  padding: 5rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.terms-hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 70% 30%,
    rgba(255, 103, 103, 0.15) 0%,
    rgba(76, 0, 112, 0.1) 50%,
    rgba(0, 0, 0, 0) 70%
  );
  z-index: 0;
}

.page-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  position: relative;
  z-index: 1;
}

.page-subtitle {
  font-size: 1.5rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 auto 1.5rem;
  max-width: 800px;
  position: relative;
  z-index: 1;
}

.last-updated {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  position: relative;
  z-index: 1;
}

/* Navigation */
.terms-nav {
  background-color: #1a1721;
  padding: 0.5rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.nav-container {
  display: flex;
  gap: 0.25rem;
  overflow-x: auto;
  padding: 0.5rem 0;
  scrollbar-width: thin;
}

.nav-container::-webkit-scrollbar {
  height: 4px;
}

.nav-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

.nav-container::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

.nav-item {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
  font-size: 0.9rem;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.nav-item.active {
  background: rgba(255, 103, 103, 0.1);
  color: #ff6767;
  border-color: rgba(255, 103, 103, 0.3);
}

.nav-item i {
  font-size: 0.95rem;
}

/* Terms Content */
.terms-content {
  padding: 4rem 0;
  background-color: #130f1d;
}

.terms-container {
  max-width: 900px;
  margin: 0 auto;
}

.terms-section {
  margin-bottom: 4rem;
  scroll-margin-top: 100px;
}

.terms-section:last-child {
  margin-bottom: 2rem;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.section-icon {
  width: 60px;
  height: 60px;
  background: rgba(255, 103, 103, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.section-icon i {
  font-size: 1.75rem;
  color: #ff6767;
}

.section-header h2 {
  font-size: 2.25rem;
  font-weight: 700;
  color: white;
  margin: 0;
}

.section-content {
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
}

.section-content p {
  margin-bottom: 1.5rem;
}

.terms-list {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.terms-list li {
  margin-bottom: 0.75rem;
}

.important-note {
  display: flex;
  gap: 1.25rem;
  background: rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  border-radius: 12px;
  margin: 2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.note-icon {
  flex-shrink: 0;
  font-size: 1.75rem;
  color: #ff6767;
  margin-top: 0.25rem;
}

.note-content {
  flex: 1;
}

.note-content strong {
  font-weight: 600;
  color: white;
}

.text-link {
  color: #ff6767;
  text-decoration: none;
  transition: all 0.3s;
}

.text-link:hover {
  text-decoration: underline;
}

.contact-info {
  background: rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1.5rem 0;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.contact-info p {
  margin-bottom: 0.75rem;
}

.contact-info p:last-child {
  margin-bottom: 0;
}

.print-terms {
  text-align: center;
  margin-top: 4rem;
}

.print-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.print-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Print Styles */
@media print {
  .terms-hero,
  .terms-nav,
  .print-terms {
    display: none;
  }

  .terms-page {
    background: white;
    color: black;
  }

  .section-content {
    color: #333;
  }

  .important-note {
    border: 1px solid #ddd;
    background: #f9f9f9;
  }

  .note-icon {
    color: #e74c3c;
  }

  .text-link {
    color: #3498db;
    text-decoration: underline;
  }

  .section-icon {
    background: #f9f9f9;
  }

  .section-icon i {
    color: #e74c3c;
  }

  .section-header h2 {
    color: #333;
  }

  .contact-info {
    background: #f9f9f9;
    border: 1px solid #ddd;
  }
}

/* Responsive Styles */
@media (max-width: 991px) {
  .page-title {
    font-size: 2.75rem;
  }

  .page-subtitle {
    font-size: 1.25rem;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .section-icon {
    width: 50px;
    height: 50px;
  }

  .section-icon i {
    font-size: 1.5rem;
  }
}

@media (max-width: 767px) {
  .page-title {
    font-size: 2.25rem;
  }

  .page-subtitle {
    font-size: 1.1rem;
  }

  .terms-hero {
    padding: 4rem 0;
  }

  .section-header {
    gap: 1rem;
  }

  .section-header h2 {
    font-size: 1.75rem;
  }

  .section-content {
    font-size: 1rem;
  }

  .important-note {
    padding: 1.25rem;
    gap: 1rem;
  }

  .nav-item span {
    display: none;
  }

  .nav-item {
    padding: 0.625rem;
  }

  .nav-item i {
    font-size: 1.1rem;
  }
}

@media (max-width: 576px) {
  .page-title {
    font-size: 2rem;
  }

  .terms-section {
    margin-bottom: 3rem;
  }

  .section-header {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }

  .section-header h2 {
    font-size: 1.5rem;
  }

  .important-note {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .note-icon {
    margin-bottom: 0.75rem;
    margin-top: 0;
  }
}
</style>

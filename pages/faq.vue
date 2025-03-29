<template>
  <div class="faq-page">
    <section class="faq-hero">
      <div class="container">
        <h1 class="page-title">Frequently Asked Questions</h1>
        <p class="page-subtitle">
          Find answers to common questions about our gambling dispute resolution
          service
        </p>

        <div class="search-container">
          <div class="search-box">
            <i class="fas fa-search search-icon"></i>
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Search for questions..."
              @input="filterFAQs"
              class="search-input"
            />
            <button
              v-if="searchQuery"
              @click="clearSearch"
              class="clear-search"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="faq-categories">
      <div class="container">
        <div class="categories-wrapper">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="setActiveCategory(category.id)"
            class="category-button"
            :class="{ active: activeCategory === category.id }"
          >
            <i :class="category.icon"></i>
            <span>{{ category.name }}</span>
          </button>
        </div>
      </div>
    </section>

    <section class="faq-content">
      <div class="container">
        <div v-if="filteredFAQs.length === 0" class="no-results">
          <i class="far fa-question-circle"></i>
          <h3>No questions found</h3>
          <p>Try adjusting your search terms or browse our categories.</p>
          <button @click="clearSearch" class="reset-search">
            Reset Search
          </button>
        </div>

        <div v-else>
          <div
            v-for="category in categories"
            :key="category.id"
            class="faq-category-section"
            v-show="shouldShowCategory(category.id)"
          >
            <h2 class="category-title">{{ category.name }}</h2>

            <div class="faq-list">
              <div
                v-for="(faq, index) in getFAQsByCategory(category.id)"
                :key="index"
                class="faq-item"
                :class="{ highlight: isHighlighted(faq) }"
              >
                <div
                  class="faq-question"
                  @click="toggleFAQ(faq)"
                  :class="{ active: openFAQs.includes(faq.id) }"
                >
                  <span v-html="highlightText(faq.question)"></span>
                  <i
                    class="fas"
                    :class="openFAQs.includes(faq.id) ? 'fa-minus' : 'fa-plus'"
                  ></i>
                </div>
                <div
                  class="faq-answer"
                  :class="{ active: openFAQs.includes(faq.id) }"
                >
                  <div
                    class="answer-content"
                    v-html="highlightText(faq.answer)"
                  ></div>

                  <div
                    v-if="faq.relatedLinks && faq.relatedLinks.length > 0"
                    class="related-links"
                  >
                    <h4>Related Resources:</h4>
                    <ul>
                      <li v-for="(link, i) in faq.relatedLinks" :key="i">
                        <a :href="link.url">{{ link.text }}</a>
                      </li>
                    </ul>
                  </div>

                  <div class="feedback-section">
                    <p>Was this answer helpful?</p>
                    <div class="feedback-buttons">
                      <button
                        @click="provideFeedback(faq.id, true)"
                        class="feedback-button"
                      >
                        <i class="fas fa-thumbs-up"></i> Yes
                      </button>
                      <button
                        @click="provideFeedback(faq.id, false)"
                        class="feedback-button"
                      >
                        <i class="fas fa-thumbs-down"></i> No
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <div class="container">
        <div class="contact-content">
          <h2>Still have questions?</h2>
          <p>
            Can't find the answer you're looking for? Please contact our support
            team.
          </p>
          <div class="contact-buttons">
            <router-link to="/contact" class="contact-button primary">
              <i class="fas fa-envelope"></i> Contact Us
            </router-link>
            <button @click="openLiveChat" class="contact-button secondary">
              <i class="fas fa-comments"></i> Live Chat
            </button>
          </div>
        </div>
      </div>
    </section>

    <div
      v-if="showFeedbackModal"
      class="feedback-modal-overlay"
      @click="closeModal"
    >
      <div class="feedback-modal" @click.stop>
        <button class="close-modal" @click="closeModal">
          <i class="fas fa-times"></i>
        </button>
        <h3>
          {{
            feedbackPositive
              ? "Thanks for your feedback!"
              : "We're sorry this wasn't helpful"
          }}
        </h3>
        <p v-if="feedbackPositive">
          We're glad this answer was helpful to you.
        </p>
        <p v-else>Please let us know how we can improve this answer.</p>

        <div v-if="!feedbackPositive" class="feedback-form">
          <textarea
            v-model="feedbackText"
            placeholder="How can we improve this answer?"
            rows="4"
          ></textarea>
          <button @click="submitFeedback" class="submit-feedback">
            <span v-if="!submittingFeedback">Submit Feedback</span>
            <span v-else
              ><i class="fas fa-spinner fa-spin"></i> Submitting...</span
            >
          </button>
        </div>
        <div v-else class="feedback-confirmation">
          <i class="fas fa-check-circle"></i>
          <p>Your feedback helps us improve our support resources.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const searchQuery = ref("");
const activeCategory = ref("all");
const openFAQs = ref([]);
const showFeedbackModal = ref(false);
const currentFAQId = ref(null);
const feedbackPositive = ref(false);
const feedbackText = ref("");
const submittingFeedback = ref(false);

// Define FAQ categories
const categories = [
  { id: "all", name: "All Questions", icon: "fas fa-th-list" },
  { id: "general", name: "General Information", icon: "fas fa-info-circle" },
  { id: "disputes", name: "Dispute Process", icon: "fas fa-gavel" },
  { id: "account", name: "Account & Billing", icon: "fas fa-user-circle" },
  {
    id: "payments",
    name: "Payments & Recovery",
    icon: "fas fa-money-bill-wave",
  },
  { id: "legal", name: "Legal Questions", icon: "fas fa-balance-scale" },
];

// Define FAQ data
const faqData = ref([
  // General Information
  {
    id: 1,
    category: "general",
    question: "What is Gamblers' Future?",
    answer:
      "Gamblers' Future is a dedicated service that helps players resolve disputes with online gambling operators. We advocate for fair treatment and assist in recovering funds when gambling companies fail to honor their obligations or terms of service.",
    relatedLinks: [
      { text: "About Us", url: "/about" },
      { text: "Our Services", url: "/services" },
    ],
  },
  {
    id: 2,
    category: "general",
    question: "What types of gambling disputes do you handle?",
    answer:
      "We handle a wide range of gambling disputes including: <ul><li>Withdrawal refusals or delays</li><li>Bonus disputes</li><li>Account closures/limitations</li><li>Identity verification issues</li><li>Technical malfunctions</li><li>Terms & conditions violations</li><li>Self-exclusion breaches</li><li>Responsible gambling failures</li></ul>",
    relatedLinks: [{ text: "Case Studies", url: "/case-studies" }],
  },
  {
    id: 3,
    category: "general",
    question: "How successful are you in resolving disputes?",
    answer:
      "Our success rate varies depending on the specific circumstances of each case, but we maintain an overall success rate of approximately 78% for cases we accept. Factors that influence success include the operator's licensing jurisdiction, quality of evidence, and the nature of the dispute. Were transparent about your chances of success from the beginning.",
  },

  // Dispute Process
  {
    id: 4,
    category: "disputes",
    question: "How do I submit a dispute?",
    answer:
      "Submitting a dispute is simple:<ol><li>Create an account on our platform</li><li>Fill out our dispute form with all relevant details</li><li>Upload supporting evidence (screenshots, communications, etc.)</li><li>Submit your case for review</li></ol>Our team will evaluate your case and contact you with next steps within 1-2 business days.",
    relatedLinks: [
      { text: "Submit a Dispute", url: "/submit-dispute" },
      { text: "Required Documentation", url: "/documentation-guide" },
    ],
  },
  {
    id: 5,
    category: "disputes",
    question: "What information do I need to provide when filing a dispute?",
    answer:
      "To effectively handle your case, we need:<ul><li>Your casino account details (username, email)</li><li>Name of the gambling operator</li><li>Detailed description of the issue</li><li>Timeline of events</li><li>Amount in dispute</li><li>All communications with the operator</li><li>Screenshots of relevant game sessions, transactions, bonuses, etc.</li><li>Any other evidence supporting your case</li></ul>The more information you provide, the better we can assist you.",
  },
  {
    id: 6,
    category: "disputes",
    question: "How long does the dispute resolution process take?",
    answer:
      "The timeline for resolving disputes varies based on complexity and the operator's responsiveness. Typically:<ul><li>Simple cases: 2-4 weeks</li><li>Moderate complexity: 4-8 weeks</li><li>Complex cases: 2-3 months or more</li></ul>We provide regular updates throughout the process and work to resolve your case as quickly as possible.",
  },
  {
    id: 7,
    category: "disputes",
    question: "Do I need to have contacted the operator first?",
    answer:
      "Yes, we require that you make a reasonable attempt to resolve the issue directly with the gambling operator before submitting a dispute to us. This includes contacting their customer support and following their complaint procedure. Please save all communications as theyll be important evidence for your case.",
  },

  // Account & Billing
  {
    id: 8,
    category: "account",
    question: "Is there a fee for using your service?",
    answer:
      'We operate on a "no win, no fee" basis. Theres no upfront cost to submit a dispute. If we successfully recover funds for you, we charge a success fee of 25% of the recovered amount. For example, if we recover $1,000, our fee would be $250, and you would receive $750.',
    relatedLinks: [{ text: "Fee Structure", url: "/fees" }],
  },
  {
    id: 9,
    category: "account",
    question: "How do I create an account?",
    answer:
      'Creating an account is easy - just click on the "Sign Up" button in the top-right corner of our website. Youll need to provide your name, email address, and create a password. Well send a verification email to confirm your address. Once verified, you can log in and start using our services.',
  },
  {
    id: 10,
    category: "account",
    question: "Can I delete my account?",
    answer:
      "Yes, you can request account deletion from your account settings page. Please note that if you have any active disputes, these will need to be closed or completed before account deletion can be processed. Your data will be handled according to our privacy policy during and after deletion.",
    relatedLinks: [{ text: "Privacy Policy", url: "/privacy-policy" }],
  },

  // Payments & Recovery
  {
    id: 11,
    category: "payments",
    question: "How do I receive my recovered funds?",
    answer:
      "When we successfully recover funds, youll be notified via email. You can choose to receive your payment through:<ul><li>Bank transfer</li><li>PayPal</li><li>Bitcoin/cryptocurrency (where available)</li></ul>Payments are typically processed within 5-7 business days after the operator pays the settlement and our fee has been deducted.",
  },
  {
    id: 12,
    category: "payments",
    question: "What happens if you can't recover my funds?",
    answer:
      "If were unable to recover your funds despite our best efforts, you wont be charged any fees. Well provide a detailed explanation of why the case was unsuccessful and may offer recommendations for alternative actions you could take, if applicable.",
  },
  {
    id: 13,
    category: "payments",
    question: "Do I have to pay taxes on recovered funds?",
    answer:
      "The tax implications of recovered gambling funds vary by country and jurisdiction. We recommend consulting with a tax professional regarding your specific situation. The recovered funds are generally considered to be the return of your original money rather than new income, but tax laws differ significantly around the world.",
  },

  // Legal Questions
  {
    id: 14,
    category: "legal",
    question: "Is your service available worldwide?",
    answer:
      "Yes, we offer our services globally. However, our ability to successfully resolve disputes may vary depending on the licensing jurisdiction of the gambling operator. We have the highest success rates with operators licensed in the UK, Malta, Gibraltar, Isle of Man, Alderney, and certain EU countries where regulatory frameworks are stronger.",
  },
  {
    id: 15,
    category: "legal",
    question: "Are you affiliated with any gambling regulators?",
    answer:
      "No, we are an independent service not affiliated with any gambling regulators or authorities. However, we work within the established regulatory frameworks and maintain professional relationships with various gambling authorities to better assist our clients.",
  },
  {
    id: 16,
    category: "legal",
    question: "What happens if the operator refuses to cooperate?",
    answer:
      "If an operator refuses to cooperate, we have several escalation options:<ul><li>Formal complaints to the relevant gambling licensing authority</li><li>Escalation to alternative dispute resolution (ADR) services recognized by regulators</li><li>Media outreach in egregious cases</li><li>Industry blacklisting reports</li></ul>In some cases, we may recommend legal action if the potential recovery justifies the cost.",
  },
  {
    id: 17,
    category: "legal",
    question: "Do you provide legal representation?",
    answer:
      "We are not a law firm and do not provide legal representation in court proceedings. Our service focuses on dispute resolution through negotiation, mediation, and regulatory complaints. For cases requiring litigation, we can refer you to appropriate legal counsel with gambling industry expertise, though this would be a separate service outside our fee structure.",
  },
]);

// Computed property for filtered FAQs
const filteredFAQs = computed(() => {
  let result = faqData.value;

  // Filter by category if not "all"
  if (activeCategory.value !== "all") {
    result = result.filter((faq) => faq.category === activeCategory.value);
  }

  // Filter by search query if present
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
    );
  }

  return result;
});

// Filter FAQs based on search query
function filterFAQs() {
  // If search is active, open all matching FAQs
  if (searchQuery.value.trim()) {
    openFAQs.value = filteredFAQs.value.map((faq) => faq.id);
  }
}

// Clear search
function clearSearch() {
  searchQuery.value = "";
  // Close all FAQs when search is cleared
  openFAQs.value = [];
}

// Set active category
function setActiveCategory(categoryId) {
  activeCategory.value = categoryId;
  // Close all FAQs when changing category
  openFAQs.value = [];
}

// Toggle FAQ open/close state
function toggleFAQ(faq) {
  const index = openFAQs.value.indexOf(faq.id);
  if (index === -1) {
    openFAQs.value.push(faq.id);
  } else {
    openFAQs.value.splice(index, 1);
  }
}

// Get FAQs by category
function getFAQsByCategory(categoryId) {
  return filteredFAQs.value.filter(
    (faq) => categoryId === "all" || faq.category === categoryId
  );
}

// Determine if a category should be shown
function shouldShowCategory(categoryId) {
  if (categoryId === "all") {
    return activeCategory.value === "all";
  }

  // If filtering by category, only show the active category
  if (activeCategory.value !== "all") {
    return categoryId === activeCategory.value;
  }

  // When searching, show categories that have matching FAQs
  if (searchQuery.value.trim()) {
    return getFAQsByCategory(categoryId).length > 0;
  }

  return true;
}

// Highlight search text in results
function highlightText(text) {
  if (!searchQuery.value.trim()) return text;

  const regex = new RegExp(`(${escapeRegExp(searchQuery.value)})`, "gi");
  return text.replace(regex, '<span class="highlight">$1</span>');
}

// Helper to escape special regex characters
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Check if FAQ should be highlighted
function isHighlighted(faq) {
  if (!searchQuery.value.trim()) return false;

  const query = searchQuery.value.toLowerCase();
  return (
    faq.question.toLowerCase().includes(query) ||
    faq.answer.toLowerCase().includes(query)
  );
}

// Live chat functionality
function openLiveChat() {
  // Implementation would connect to your live chat service
  console.log("Opening live chat...");
  // Redirect to contact page with live chat parameter
  router.push("/contact?open-chat=true");
}

// Feedback functionality
function provideFeedback(faqId, isPositive) {
  currentFAQId.value = faqId;
  feedbackPositive.value = isPositive;
  showFeedbackModal.value = true;

  // If positive feedback, no additional input needed
  if (isPositive) {
    submitFeedback();
  }
}

function submitFeedback() {
  submittingFeedback.value = true;

  // Simulate API call to submit feedback
  setTimeout(() => {
    submittingFeedback.value = false;

    // If negative feedback that was just submitted, show confirmation
    if (!feedbackPositive.value) {
      feedbackText.value = "";
      feedbackPositive.value = true; // Switch to confirmation view
    } else {
      // Close modal after a delay for positive feedback
      setTimeout(() => {
        closeModal();
      }, 1500);
    }

    console.log("Feedback submitted:", {
      faqId: currentFAQId.value,
      isPositive: feedbackPositive.value,
      feedbackText: feedbackText.value,
    });
  }, 1000);
}

function closeModal() {
  showFeedbackModal.value = false;
  setTimeout(() => {
    currentFAQId.value = null;
    feedbackPositive.value = false;
    feedbackText.value = "";
  }, 300);
}

// Check for URL parameters on mount
onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const queryParam = urlParams.get("query");
  const categoryParam = urlParams.get("category");

  if (queryParam) {
    searchQuery.value = queryParam;
    filterFAQs();
  }

  if (categoryParam && categories.some((cat) => cat.id === categoryParam)) {
    activeCategory.value = categoryParam;
  }
});
</script>
<style scoped>
.faq-page {
  color: white;
  background-color: #130f1d;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Hero Section */
.faq-hero {
  background: linear-gradient(135deg, #1a1721 0%, #2c1e38 100%);
  padding: 6rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.faq-hero::before {
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
  margin: 0 auto 3rem;
  max-width: 800px;
  position: relative;
  z-index: 1;
}

.search-container {
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 1.25rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.25rem;
}

.search-input {
  width: 100%;
  padding: 1.25rem 1.25rem 1.25rem 3.5rem;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.2);
  color: white;
  font-size: 1.1rem;
  transition: all 0.3s;
}

.search-input:focus {
  outline: none;
  border-color: rgba(255, 103, 103, 0.5);
  box-shadow: 0 0 0 3px rgba(255, 103, 103, 0.2);
  background: rgba(0, 0, 0, 0.3);
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.clear-search {
  position: absolute;
  right: 1.25rem;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  font-size: 1.1rem;
  transition: color 0.3s;
}

.clear-search:hover {
  color: white;
}

/* Categories Section */
.faq-categories {
  background-color: #1a1721;
  padding: 1.5rem 0;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.categories-wrapper {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 0.5rem 0;
  scrollbar-width: thin;
}

.categories-wrapper::-webkit-scrollbar {
  height: 4px;
}

.categories-wrapper::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

.categories-wrapper::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

.category-button {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
}

.category-button:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.category-button.active {
  background: rgba(255, 103, 103, 0.1);
  color: #ff6767;
  border-color: rgba(255, 103, 103, 0.3);
}

.category-button i {
  font-size: 1.1rem;
}

/* FAQ Content Section */
.faq-content {
  padding: 4rem 0;
  background-color: #130f1d;
}

.no-results {
  text-align: center;
  padding: 4rem 2rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.no-results i {
  font-size: 4rem;
  color: rgba(255, 255, 255, 0.2);
  margin-bottom: 1.5rem;
}

.no-results h3 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.no-results p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
}

.reset-search {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s;
}

.reset-search:hover {
  background: rgba(255, 255, 255, 0.1);
}

.faq-category-section {
  margin-bottom: 3rem;
}

.faq-category-section:last-child {
  margin-bottom: 0;
}

.category-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;
}

.faq-item.highlight {
  border-color: rgba(255, 103, 103, 0.3);
  box-shadow: 0 0 0 2px rgba(255, 103, 103, 0.2);
}

.faq-question {
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.2);
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
}

.faq-question:hover {
  background: rgba(0, 0, 0, 0.3);
}

.faq-question.active {
  background: rgba(255, 103, 103, 0.1);
  color: #ff6767;
}

.faq-question i {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s;
}

.faq-question.active i {
  color: #ff6767;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.1);
  transition: max-height 0.5s ease, padding 0.3s ease;
}

.faq-answer.active {
  max-height: 2000px;
  padding: 1.5rem;
}

.answer-content {
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
}

.answer-content ul,
.answer-content ol {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.answer-content li {
  margin-bottom: 0.5rem;
}

.answer-content a {
  color: #ff6767;
  text-decoration: none;
  transition: all 0.3s;
}

.answer-content a:hover {
  text-decoration: underline;
}

.highlight {
  background-color: rgba(255, 103, 103, 0.2);
  border-radius: 3px;
  padding: 0 3px;
}

.related-links {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.related-links h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: white;
}

.related-links ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.related-links li a {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  color: white;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s;
}

.related-links li a:hover {
  background: rgba(255, 255, 255, 0.1);
  text-decoration: none;
}

.feedback-section {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.feedback-section p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  margin: 0;
}

.feedback-buttons {
  display: flex;
  gap: 0.75rem;
}

.feedback-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s;
}

.feedback-button:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

/* Contact Section */
.contact-section {
  padding: 5rem 0;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
}

.contact-content {
  max-width: 700px;
  margin: 0 auto;
}

.contact-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.contact-content p {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
}

.contact-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.contact-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s;
  cursor: pointer;
}

.contact-button.primary {
  background: linear-gradient(135deg, #ff6767, #ff4b4b);
  color: white;
  border: none;
}

.contact-button.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 7px 14px rgba(255, 75, 75, 0.3);
}

.contact-button.secondary {
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-button.secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

/* Feedback Modal */
.feedback-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.feedback-modal {
  background: #1a1721;
  border-radius: 12px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  position: relative;
}

.close-modal {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s;
}

.close-modal:hover {
  color: white;
}

.feedback-modal h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.feedback-modal p {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
}

.feedback-form {
  margin-top: 1.5rem;
}

.feedback-form textarea {
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.2);
  color: white;
  padding: 1rem;
  font-size: 1rem;
  resize: vertical;
  font-family: inherit;
  margin-bottom: 1.5rem;
  transition: all 0.3s;
}

.feedback-form textarea:focus {
  outline: none;
  border-color: rgba(255, 103, 103, 0.5);
  background: rgba(0, 0, 0, 0.3);
}

.feedback-form textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.submit-feedback {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  background: linear-gradient(135deg, #ff6767, #ff4b4b);
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.submit-feedback:hover {
  transform: translateY(-3px);
  box-shadow: 0 7px 14px rgba(255, 75, 75, 0.3);
}

.feedback-confirmation {
  text-align: center;
  margin-top: 1.5rem;
}

.feedback-confirmation i {
  font-size: 3rem;
  color: #4caf50;
  margin-bottom: 1rem;
}

/* Responsive styles */
@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }

  .page-subtitle {
    font-size: 1.2rem;
  }

  .category-button {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .category-button i {
    font-size: 1rem;
  }

  .contact-buttons {
    flex-direction: column;
    gap: 1rem;
  }

  .feedback-section {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 2rem;
  }

  .faq-question {
    font-size: 1rem;
    padding: 1.25rem;
  }

  .faq-answer.active {
    padding: 1.25rem;
  }

  .category-title {
    font-size: 1.5rem;
  }
}
</style>

<!-- filepath: /Users/aleksamikic/Desktop/gamblers-future/pages/contact.vue -->
<template>
  <div class="contact-page">
    <section class="contact-hero">
      <div class="container">
        <div class="contact-hero-content">
          <h1 class="contact-title">Get in Touch</h1>
          <p class="contact-subtitle">
            Have questions about your case or need assistance with a gambling
            dispute? Our team is here to help you every step of the way.
          </p>
        </div>
      </div>
    </section>

    <section class="contact-options">
      <div class="container">
        <div class="options-grid">
          <div class="contact-option">
            <div class="option-icon">
              <i class="fas fa-life-ring"></i>
            </div>
            <h3>Support</h3>
            <p>
              Questions about your case or need help with the complaint process?
              Our support team is ready to assist you.
            </p>
            <a href="mailto:support@gamblersfuture.com" class="option-button">
              support@gamblersfuture.com
            </a>
          </div>

          <div class="contact-option">
            <div class="option-icon">
              <i class="fas fa-briefcase"></i>
            </div>
            <h3>Business Inquiries</h3>
            <p>
              For partnerships, media inquiries, or business opportunities,
              reach out to our business development team.
            </p>
            <a href="mailto:business@gamblersfuture.com" class="option-button">
              business@gamblersfuture.com
            </a>
          </div>

          <div class="contact-option">
            <div class="option-icon">
              <i class="fas fa-comments"></i>
            </div>
            <h3>Live Chat</h3>
            <p>
              Need immediate assistance? Our live chat support is available
              Monday through Friday, 9am-5pm GMT for real-time help.
            </p>
            <button @click.prevent="openLiveChat" class="option-button">
              Start Live Chat
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-form-section">
      <div class="container">
        <div class="contact-form-container">
          <div class="form-info">
            <h2>Send Us a Message</h2>
            <p>
              Fill out the form below and one of our team members will get back
              to you within 24 hours. For existing cases, please include your
              case number.
            </p>

            <div class="contact-info">
              <div class="info-item">
                <div class="info-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="info-content">
                  <h4>Our Location</h4>
                  <p>123 Resolution Avenue<br />London, UK EC1A 1BB</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <i class="fas fa-clock"></i>
                </div>
                <div class="info-content">
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 9am - 5pm GMT<br />Weekend: Closed</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="info-content">
                  <h4>Email</h4>
                  <p>support@gamblersfuture.com</p>
                </div>
              </div>
            </div>

            <div class="social-connect">
              <h4>Connect With Us</h4>
              <div class="social-links">
                <a href="#" class="social-link" aria-label="Facebook">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-link" aria-label="Twitter">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-link" aria-label="Linkedin">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="social-link" aria-label="Instagram">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="form-wrapper">
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-header">
                <div class="form-icon">
                  <i class="fas fa-paper-plane"></i>
                </div>
                <h3>Contact Form</h3>
              </div>

              <div class="form-group">
                <label for="name"
                  >Full Name <span class="required">*</span></label
                >
                <div class="input-with-icon">
                  <i class="fas fa-user"></i>
                  <input
                    type="text"
                    id="name"
                    v-model="contactForm.name"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div v-if="errors.name" class="error-message">
                  {{ errors.name }}
                </div>
              </div>

              <div class="form-group">
                <label for="email"
                  >Email Address <span class="required">*</span></label
                >
                <div class="input-with-icon">
                  <i class="fas fa-envelope"></i>
                  <input
                    type="email"
                    id="email"
                    v-model="contactForm.email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div v-if="errors.email" class="error-message">
                  {{ errors.email }}
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <div class="input-with-icon">
                    <i class="fas fa-phone-alt"></i>
                    <input
                      type="tel"
                      id="phone"
                      v-model="contactForm.phone"
                      placeholder="+1 (000) 000-0000"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label for="caseNumber">Case Number (if applicable)</label>
                  <div class="input-with-icon">
                    <i class="fas fa-hashtag"></i>
                    <input
                      type="text"
                      id="caseNumber"
                      v-model="contactForm.caseNumber"
                      placeholder="e.g. GF-123456"
                    />
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="subject"
                  >Subject <span class="required">*</span></label
                >
                <div class="input-with-icon">
                  <i class="fas fa-heading"></i>
                  <input
                    type="text"
                    id="subject"
                    v-model="contactForm.subject"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                <div v-if="errors.subject" class="error-message">
                  {{ errors.subject }}
                </div>
              </div>

              <div class="form-group">
                <label for="inquiryType"
                  >Type of Inquiry <span class="required">*</span></label
                >
                <div class="select-with-icon">
                  <i class="fas fa-question-circle"></i>
                  <select
                    id="inquiryType"
                    v-model="contactForm.inquiryType"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="general">General Question</option>
                    <option value="case_status">Case Status Update</option>
                    <option value="new_complaint">New Complaint Help</option>
                    <option value="technical">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div v-if="errors.inquiryType" class="error-message">
                  {{ errors.inquiryType }}
                </div>
              </div>

              <div class="form-group">
                <label for="message"
                  >Message <span class="required">*</span></label
                >
                <div class="textarea-with-icon">
                  <i class="fas fa-comment-alt"></i>
                  <textarea
                    id="message"
                    v-model="contactForm.message"
                    placeholder="Please provide as much detail as possible about your inquiry..."
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div class="character-counter">
                  {{ contactForm.message.length }}/1000 characters
                </div>
                <div v-if="errors.message" class="error-message">
                  {{ errors.message }}
                </div>
              </div>

              <div class="form-group checkbox-group">
                <div class="checkbox-with-label">
                  <input
                    type="checkbox"
                    id="consent"
                    v-model="contactForm.consent"
                    required
                  />
                  <label for="consent">
                    I consent to Gamblers' Future processing my personal data in
                    accordance with the
                    <a href="/privacy-policy" target="_blank">Privacy Policy</a>
                  </label>
                </div>
                <div v-if="errors.consent" class="error-message">
                  {{ errors.consent }}
                </div>
              </div>

              <button
                type="submit"
                class="submit-button"
                :disabled="submitting"
              >
                <span v-if="!submitting">Send Message</span>
                <span v-else>
                  <i class="fas fa-spinner fa-spin"></i>
                  Sending...
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="faq-section">
      <div class="container">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <div
              class="faq-question"
              @click="toggleFAQ(0)"
              :class="{ active: activeFAQ === 0 }"
            >
              <span>How quickly will I receive a response?</span>
              <i
                class="fas"
                :class="activeFAQ === 0 ? 'fa-minus' : 'fa-plus'"
              ></i>
            </div>
            <div class="faq-answer" :class="{ active: activeFAQ === 0 }">
              <p>
                We strive to respond to all inquiries within 24 hours during
                business days. For complex cases or during high volume periods,
                it may take up to 48 hours.
              </p>
            </div>
          </div>

          <div class="faq-item">
            <div
              class="faq-question"
              @click="toggleFAQ(1)"
              :class="{ active: activeFAQ === 1 }"
            >
              <span
                >I need to submit evidence for my case. How do I do that?</span
              >
              <i
                class="fas"
                :class="activeFAQ === 1 ? 'fa-minus' : 'fa-plus'"
              ></i>
            </div>
            <div class="faq-answer" :class="{ active: activeFAQ === 1 }">
              <p>
                If you have an existing case, the best way to submit additional
                evidence is through your case dashboard. If you're having
                trouble, you can attach files to an email to
                support@gamblersfuture.com with your case number in the subject
                line.
              </p>
            </div>
          </div>

          <div class="faq-item">
            <div
              class="faq-question"
              @click="toggleFAQ(2)"
              :class="{ active: activeFAQ === 2 }"
            >
              <span
                >Is your service available in languages other than
                English?</span
              >
              <i
                class="fas"
                :class="activeFAQ === 2 ? 'fa-minus' : 'fa-plus'"
              ></i>
            </div>
            <div class="faq-answer" :class="{ active: activeFAQ === 2 }">
              <p>
                Yes, we currently offer support in English, Spanish, French,
                German, Italian and Portuguese. When contacting us, please
                mention your preferred language and we'll ensure you're
                connected with a team member who can assist you.
              </p>
            </div>
          </div>

          <div class="faq-item">
            <div
              class="faq-question"
              @click="toggleFAQ(3)"
              :class="{ active: activeFAQ === 3 }"
            >
              <span>How do I check the status of my complaint?</span>
              <i
                class="fas"
                :class="activeFAQ === 3 ? 'fa-minus' : 'fa-plus'"
              ></i>
            </div>
            <div class="faq-answer" :class="{ active: activeFAQ === 3 }">
              <p>
                You can check your case status by logging into your account and
                visiting your case dashboard. If you don't have an account, you
                can use the "Track Your Case" feature on our homepage by
                entering your case number and email address.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="modal-overlay">
      <div class="success-modal">
        <div class="success-header">
          <div class="success-icon">
            <i class="fas fa-check-circle"></i>
          </div>
          <h3>Message Sent Successfully!</h3>
        </div>
        <div class="success-content">
          <p>
            Thank you for reaching out to us. We've received your message and
            will get back to you shortly.
          </p>
          <div class="confirmation-details">
            <div class="confirmation-item">
              <span class="label">Reference Number:</span>
              <span class="value">{{ referenceNumber }}</span>
            </div>
            <div class="confirmation-item">
              <span class="label">Expected Response:</span>
              <span class="value">Within 24 hours</span>
            </div>
          </div>
          <p>A confirmation email has been sent to {{ contactForm.email }}.</p>
        </div>
        <div class="success-actions">
          <button @click="closeSuccessModal" class="close-button">
            <i class="fas fa-times"></i>
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

// Form state
const contactForm = reactive({
  name: "",
  email: "",
  phone: "",
  caseNumber: "",
  subject: "",
  inquiryType: "",
  message: "",
  consent: false,
});

const errors = reactive({
  name: "",
  email: "",
  subject: "",
  inquiryType: "",
  message: "",
  consent: "",
});

const submitting = ref(false);
const showSuccessModal = ref(false);
const referenceNumber = ref("");
const showChatWidget = ref(false);

// FAQ state
const activeFAQ = ref(null);

function toggleFAQ(index) {
  if (activeFAQ.value === index) {
    activeFAQ.value = null;
  } else {
    activeFAQ.value = index;
  }
}

// Form validation and submission
function validateForm() {
  let isValid = true;

  // Reset all errors
  Object.keys(errors).forEach((key) => {
    errors[key] = "";
  });

  // Validate name
  if (!contactForm.name.trim()) {
    errors.name = "Please enter your name";
    isValid = false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!contactForm.email.trim()) {
    errors.email = "Please enter your email address";
    isValid = false;
  } else if (!emailRegex.test(contactForm.email)) {
    errors.email = "Please enter a valid email address";
    isValid = false;
  }

  // Validate subject
  if (!contactForm.subject.trim()) {
    errors.subject = "Please enter a subject";
    isValid = false;
  }

  // Validate inquiry type
  if (!contactForm.inquiryType) {
    errors.inquiryType = "Please select an inquiry type";
    isValid = false;
  }

  // Validate message
  if (!contactForm.message.trim()) {
    errors.message = "Please enter your message";
    isValid = false;
  } else if (contactForm.message.length > 1000) {
    errors.message = "Your message must be less than 1000 characters";
    isValid = false;
  }

  // Validate consent
  if (!contactForm.consent) {
    errors.consent = "You must consent to our privacy policy";
    isValid = false;
  }

  return isValid;
}

function submitForm() {
  if (!validateForm()) {
    // Scroll to the first error
    const firstErrorEl = document.querySelector(".error-message");
    if (firstErrorEl) {
      firstErrorEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return;
  }

  // Show loading state
  submitting.value = true;

  // In a real application, you would submit the form to your backend here
  // For this example, we'll simulate a submission with a timeout
  setTimeout(() => {
    submitting.value = false;

    // Generate a reference number
    const timestamp = new Date().getTime().toString().slice(-6);
    const randomChars = Math.random()
      .toString(36)
      .substring(2, 5)
      .toUpperCase();
    referenceNumber.value = `INQ-${randomChars}${timestamp}`;

    // Show success modal
    showSuccessModal.value = true;

    // Reset form (in a real app, you'd do this after successful submission)
    resetForm();

    console.log("Form submitted:", contactForm);
  }, 1500);
}

function resetForm() {
  Object.keys(contactForm).forEach((key) => {
    if (key === "consent") {
      contactForm[key] = false;
    } else {
      contactForm[key] = "";
    }
  });
}

function closeSuccessModal() {
  showSuccessModal.value = false;
}

function openLiveChat() {
  // If using a third-party solution, this might trigger their widget
  // For example: window.Intercom('show');

  // For a custom solution, this might toggle a chat component's visibility
  showChatWidget.value = true;
}
</script>

<style scoped>
.contact-page {
  color: white;
  background-color: #130f1d;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Hero Section */
.contact-hero {
  background: linear-gradient(135deg, #1a1721 0%, #2c1e38 100%);
  padding: 6rem 0 5rem;
  position: relative;
  overflow: hidden;
}

.contact-hero::before {
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

.contact-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.contact-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.contact-subtitle {
  font-size: 1.5rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

/* Contact Options */
.contact-options {
  padding: 5rem 0;
  background-color: #1a1721;
}

.options-grid {
  display: flex;
  gap: 2rem;
}

.contact-option {
  flex: 1;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 2.5rem 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.contact-option:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.05);
}

.option-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 103, 103, 0.1);
  color: #ff6767;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.contact-option h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.contact-option p {
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
  min-height: 4.8rem; /* Ensures consistent height */
}

.option-button {
  display: inline-block;
  padding: 0.875rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.option-button:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

/* Contact Form Section */
.contact-form-section {
  padding: 5rem 0;
  background-color: #130f1d;
}

.contact-form-container {
  display: flex;
  gap: 3rem;
}

.form-info {
  flex: 1;
}

.form-info h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
}

.form-info p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2.5rem;
}

.contact-info {
  margin-bottom: 2.5rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.info-item:last-child {
  margin-bottom: 0;
}

.info-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff6767;
  font-size: 1.25rem;
  margin-right: 1rem;
  flex-shrink: 0;
}

.info-content h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: white;
}

.info-content p {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.social-connect h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 1rem;
  color: white;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  background: #ff6767;
  color: white;
  transform: translateY(-3px);
}

.form-wrapper {
  flex: 1.2;
}

.contact-form {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.form-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.form-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 103, 103, 0.1);
  color: #ff6767;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.form-header h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-row {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-row .form-group {
  flex: 1;
  margin-bottom: 0;
}

label {
  display: block;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.required {
  color: #ff6767;
}

.input-with-icon,
.select-with-icon,
.textarea-with-icon {
  position: relative;
}

.input-with-icon i,
.select-with-icon i,
.textarea-with-icon i {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.5);
}

.textarea-with-icon i {
  top: 1.25rem;
  transform: none;
}

input[type="text"],
input[type="email"],
input[type="tel"],
select,
textarea {
  width: 100%;
  padding: 1rem 1rem 1rem 2.5rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

textarea {
  resize: vertical;
  min-height: 120px;
}

input:focus,
select:focus,
textarea:focus {
  border-color: rgba(255, 103, 103, 0.5);
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 103, 103, 0.1);
}

.character-counter {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: right;
}

.checkbox-group {
  margin-top: 2rem;
}

.checkbox-with-label {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.checkbox-with-label input[type="checkbox"] {
  width: 20px;
  height: 20px;
  margin-top: 0.25rem;
}

.checkbox-with-label label {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
}

.checkbox-with-label label a {
  color: #ff6767;
  text-decoration: none;
}

.checkbox-with-label label a:hover {
  text-decoration: underline;
}

.error-message {
  color: #ff4747;
  font-size: 0.85rem;
  margin-top: 0.5rem;
}

.submit-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  margin-top: 1.5rem;
  background: linear-gradient(135deg, #ff6767, #ff4b4b);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.05rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(255, 103, 103, 0.3);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* FAQ Section */
.faq-section {
  padding: 5rem 0;
  background-color: #1a1721;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
}

.faq-grid {
  max-width: 900px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  overflow: hidden;
}

.faq-question {
  padding: 1.25rem 1.5rem;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 600;
  color: white;
  transition: all 0.3s ease;
}

.faq-question.active {
  background: rgba(255, 103, 103, 0.1);
}

.faq-question i {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
}

.faq-question.active i {
  color: #ff6767;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  padding: 0 1.5rem;
}

.faq-answer.active {
  max-height: 300px;
  padding: 1.25rem 1.5rem;
  background: rgba(0, 0, 0, 0.1);
}

.faq-answer p {
  margin: 0;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}

/* Success Modal */
.modal-overlay {
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

.success-modal {
  width: 90%;
  max-width: 500px;
  background: #1a1721;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  animation: modalFadeIn 0.4s ease;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.success-header {
  background: rgba(76, 175, 80, 0.1);
  padding: 2rem 1.5rem;
  text-align: center;
  border-bottom: 1px solid rgba(76, 175, 80, 0.2);
}

.success-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(76, 175, 80, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.success-icon i {
  font-size: 3rem;
  color: #4caf50;
}

.success-header h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: white;
}

.success-content {
  padding: 2rem 1.5rem;
}

.success-content p {
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 1.5rem;
}

.confirmation-details {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.confirmation-item {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.confirmation-item:last-child {
  border-bottom: none;
}

.confirmation-item .label {
  color: rgba(255, 255, 255, 0.7);
}

.confirmation-item .value {
  font-weight: 600;
  color: white;
}

.success-actions {
  padding: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.close-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .contact-form-container {
    flex-direction: column;
  }

  .form-info {
    margin-bottom: 2rem;
  }
}

@media (max-width: 768px) {
  .contact-title {
    font-size: 2.5rem;
  }

  .contact-subtitle {
    font-size: 1.2rem;
  }

  .options-grid {
    flex-direction: column;
  }

  .contact-option p {
    min-height: auto;
  }

  .form-row {
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-row .form-group {
    margin-bottom: 0;
  }

  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .contact-title {
    font-size: 2rem;
  }

  .contact-form {
    padding: 1.5rem;
  }

  .form-header {
    flex-direction: column;
    text-align: center;
  }

  .form-icon {
    margin: 0 0 1rem;
  }

  .info-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .info-icon {
    margin: 0 0 1rem;
  }

  .social-links {
    justify-content: center;
  }
}
</style>

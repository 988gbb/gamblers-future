<template>
  <section id="contact-options" class="alternative-contact-section">
    <div class="container">
      <div class="section-header">
        <div class="title-container">
          <span class="section-badge">
            <i class="fas fa-headset"></i>
            Support Options
          </span>
          <h2 class="section-title">
            Need <span class="highlight">Additional</span> Help?
          </h2>
          <p class="section-subtitle">
            Alternative ways to reach us for guidance and support
          </p>
        </div>
      </div>

      <div class="contact-options-grid">
        <div class="contact-option">
          <div class="option-icon">
            <i class="fas fa-comments"></i>
          </div>
          <h4 class="option-title">Live Chat Support</h4>
          <p class="option-description">
            Connect instantly with our support team for quick questions and
            real-time assistance with your complaint. Our agents can guide you
            through the submission process or provide status updates.
          </p>
          <div class="availability-indicator available">
            <span class="status-dot"></span>
            <span class="status-text">Online</span>
          </div>
          <button class="option-button" @click="openLiveChat">
            <i class="fas fa-comment-dots"></i>
            <span>Start Chat</span>
          </button>
          <p class="average-response">Avg. response: 2 minutes</p>
        </div>

        <div class="contact-option">
          <div class="option-icon">
            <i class="fas fa-envelope"></i>
          </div>
          <h4 class="option-title">Email Support</h4>
          <p class="option-description">
            Send detailed information about your concerns or questions. Our
            support team will review your inquiry and respond with personalized
            guidance for your situation.
          </p>
          <div class="availability-indicator">
            <span class="status-text">24hr response guaranteed</span>
          </div>
          <a href="mailto:support@gamblersfuture.com" class="option-button">
            <i class="fas fa-envelope-open-text"></i>
            <span>Send Email</span>
          </a>
          <p class="average-response">
            Include any relevant screenshots or documentation
          </p>
        </div>
      </div>

      <div class="contact-note">
        <i class="fas fa-info-circle"></i>
        <div class="note-content">
          <h4>Have a formal complaint?</h4>
          <p>
            For formal complaints about gambling operators, please use our
            <a href="#complaint-form">complaint submission form</a>. The contact
            options above are best for general inquiries, guidance on using our
            services, or questions about an existing complaint.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Methods
function openLiveChat() {
  // Integrate with your live chat solution here
  console.log("Opening live chat");
  // Example implementation: window.open('https://your-live-chat-url.com', '_blank');

  // For demonstration, we could show a modal or redirect to a chat page
  alert("Live chat would open here");
}
</script>

<style scoped>
.alternative-contact-section {
  padding: 4rem 0;
  background-color: #1a1721;
  color: white;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-header {
  margin-bottom: 3rem;
  text-align: center;
}

.title-container {
  max-width: 700px;
  margin: 0 auto;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 103, 103, 0.1);
  color: #ff6767;
  border-radius: 30px;
  padding: 0.5rem 1rem;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  gap: 0.5rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
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
  margin: 0;
  line-height: 1.5;
}

/* Contact options grid */
.contact-options-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.contact-option {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.contact-option:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.option-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.option-icon i {
  font-size: 1.5rem;
  color: #ff6767;
}

.option-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 1rem;
  color: white;
}

.option-description {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin: 0 0 1.5rem;
  flex-grow: 1;
}

.availability-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.availability-indicator.available {
  color: #4caf50;
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #4caf50;
  position: relative;
}

.status-dot::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #4caf50;
  opacity: 0.4;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.4;
  }
  70% {
    transform: scale(2);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

.option-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.25rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-decoration: none;
  margin-bottom: 0.75rem;
  width: 100%;
}

.option-button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.average-response {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  text-align: center;
}

/* Contact note */
.contact-note {
  background: rgba(33, 150, 243, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(33, 150, 243, 0.1);
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.contact-note i {
  font-size: 1.5rem;
  color: #2196f3;
  margin-top: 0.25rem;
}

.note-content h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: white;
}

.note-content p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  margin: 0;
  line-height: 1.6;
}

.note-content a {
  color: #2196f3;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.note-content a:hover {
  text-decoration: underline;
}

/* Responsive styles */
@media (max-width: 768px) {
  .alternative-contact-section {
    padding: 3rem 0;
  }

  .contact-options-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .section-title {
    font-size: 2.2rem;
  }

  .contact-note {
    flex-direction: column;
    gap: 0.75rem;
    text-align: center;
  }

  .contact-note i {
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }

  .contact-option {
    padding: 1.5rem;
  }

  .option-icon {
    width: 50px;
    height: 50px;
    margin: 0 auto 1rem;
  }

  .option-icon i {
    font-size: 1.3rem;
  }

  .option-title {
    font-size: 1.15rem;
    text-align: center;
  }
}
</style>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-main">
        <!-- Footer Logo & Branding -->
        <div class="footer-brand">
          <img
            src="/images/gfuture-red.png"
            alt="Gambler's Future"
            class="footer-logo"
          />
          <div class="social-icons">
            <a href="#" class="social-icon" aria-label="Twitter"
              ><i class="fab fa-twitter"></i
            ></a>
            <a href="#" class="social-icon" aria-label="Instagram"
              ><i class="fab fa-instagram"></i
            ></a>
            <a href="#" class="social-icon" aria-label="Telegram"
              ><i class="fab fa-telegram"></i
            ></a>
          </div>
        </div>

        <!-- Left side - Footer sections -->
        <div class="footer-sections">
          <div class="footer-section">
            <h4>About</h4>
            <nav>
              <a href="/about">About GF</a>
              <a href="/contact">Contact Us</a>
              <a href="/faq">FAQ</a>
              <a href="#">Careers</a>
              <a href="/responsible-gaming">Responsible Gaming</a>
              <a href="/terms-conditions">Terms & Conditions</a>
            </nav>
          </div>
          <div class="footer-section">
            <h4>For Players</h4>
            <nav>
              <a href="/casinos">Casino Reviews</a>
              <a href="/bonuses">Best Bonuses</a>
              <a href="/awards">Awards</a>
              <a href="/news">News</a>
              <a href="/complaints"> Complaints</a>
              <a href="/sitemap.xml"> Sitemap</a>
            </nav>
          </div>
        </div>

        <!-- Right side - Newsletter -->
        <div class="newsletter-section">
          <h3>Join the Winning Team</h3>
          <p>Get exclusive bonuses and offers direct to your inbox</p>
          <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
            <input
              type="email"
              placeholder="Enter your email address"
              class="newsletter-input"
              v-model="email"
              required
            />
            <button type="submit" class="newsletter-button">
              <span>Subscribe</span>
              <i class="fas fa-arrow-right"></i>
            </button>
          </form>
          <p class="privacy-note">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-bottom">
        <div class="responsible-gaming">
          <img src="/images/18-plus.svg" alt="18+" class="age-restriction" />
          <p>Gambling can be addictive. Please play responsibly.</p>
        </div>

        <div class="legal">
          <p>&copy; {{ currentYear }} Gambler's Future. All rights reserved.</p>
          <div class="legal-links">
            <a href="#">Privacy Notice</a>
            <span class="divider">•</span>
            <a href="#">Cookie Policy</a>
            <span class="divider">•</span>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const currentYear = new Date().getFullYear();
const email = ref("");

const subscribeNewsletter = () => {
  // Handle newsletter subscription
  console.log(`Subscribing email: ${email.value}`);
  // Here you would typically call an API to handle the subscription

  // Reset form
  email.value = "";

  // Show success message (in a real app you'd use a proper notification system)
  alert("Thanks for subscribing!");
};
</script>

<style scoped>
.footer {
  background: linear-gradient(to bottom, #201b26, #1a1721);
  color: #e6e6e6;
  padding: 4rem 0 2rem;
  border-top: 3px solid #dd4544;
  position: relative;
}

.footer::before {
  content: "";
  position: absolute;
  top: 3px; /* Position just below the red border */
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-main {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
}

.footer-logo {
  height: 40px;
  width: auto;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  color: #a0a0a0;
  font-size: 1.2rem;
  transition: all 0.2s ease;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-icon:hover {
  color: #fff;
  background: #dd4544;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(221, 69, 68, 0.3);
}

.footer-sections {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.footer-section h4 {
  color: #ffffff;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  padding-bottom: 0.75rem;
}

.footer-section h4::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background: #dd4544;
}

.footer-section nav {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-section a {
  color: #a0a0a0;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 0.875rem;
  line-height: 1.6;
  position: relative;
  padding-left: 0;
}

.footer-section a:hover {
  color: #fff;
  padding-left: 8px;
}

.footer-section a::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 0;
  height: 1px;
  background: #dd4544;
  transition: width 0.2s ease;
  transform: translateY(-50%);
  opacity: 0;
}

.footer-section a:hover::before {
  width: 4px;
  opacity: 1;
}

.newsletter-section {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
}

.newsletter-section h3 {
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.newsletter-section p {
  color: #a0a0a0;
  font-size: 0.9rem;
  margin-bottom: 1.25rem;
}

.newsletter-form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.newsletter-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.2);
  color: #ffffff;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.newsletter-input:focus {
  outline: none;
  border-color: #dd4544;
  box-shadow: 0 0 0 2px rgba(221, 69, 68, 0.25);
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.newsletter-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1.25rem;
  background: linear-gradient(135deg, #dd4544, #c93d3d);
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 42px;
}

.newsletter-button i {
  transition: transform 0.2s ease;
}

.newsletter-button:hover {
  background: linear-gradient(135deg, #e74c3c, #dd4544);
  box-shadow: 0 4px 12px rgba(221, 69, 68, 0.3);
}

.newsletter-button:hover i {
  transform: translateX(3px);
}

.privacy-note {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 0.5rem;
  margin-bottom: 0;
}

.footer-divider {
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  margin-bottom: 2rem;
}

.responsible-gaming {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

.age-restriction {
  height: 30px;
}

.legal {
  text-align: center;
  color: #777;
  font-size: 0.8rem;
}

.legal-links {
  margin-top: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
}

.divider {
  color: #444;
}

.legal-links a {
  color: #777;
  text-decoration: none;
  transition: color 0.2s;
}

.legal-links a:hover {
  color: #dd4544;
}

@media (max-width: 1024px) {
  .footer-main {
    grid-template-columns: 1fr 1fr;
  }

  .footer-brand {
    grid-column: 1 / -1;
    align-items: center;
  }

  .newsletter-section {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 0 1.5rem;
  }

  .footer-main {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-sections {
    grid-template-columns: 1fr;
  }

  .footer-section h4::after {
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
  }

  .footer-section {
    text-align: center;
  }

  .footer-section a:hover {
    transform: none;
    padding-left: 0;
  }

  .footer-section a::before {
    display: none;
  }

  .newsletter-form {
    flex-direction: column;
    gap: 0.75rem;
  }

  .newsletter-button {
    height: 42px;
    justify-content: center;
  }

  .responsible-gaming {
    flex-direction: column;
    text-align: center;
    padding: 1.25rem;
  }
}
</style>

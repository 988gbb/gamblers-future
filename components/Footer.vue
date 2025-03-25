<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-main">
        <!-- Left side - Footer sections -->
        <div class="footer-sections">
          <div class="footer-section">
            <h4>About</h4>
            <nav>
              <a href="#">About GF</a>
              <a href="#">Contact Us</a>
              <a href="#">Careers</a>
              <a href="#">Responsible Gaming</a>
              <a href="#">Terms & Conditions</a>
            </nav>
          </div>
          <div class="footer-section">
            <h4>For Players</h4>
            <nav>
              <a href="#">Casino Reviews</a>
              <a href="#">Best Bonuses</a>
              <a href="#">New Casinos</a>
              <a href="#">Casino Games</a>
              <a href="#">Payment Methods</a>
            </nav>
          </div>
        </div>

        <!-- Right side - Newsletter -->
        <div class="newsletter-section">
          <h3>
            Stay in the Game – Get the Hottest Casino & Gambler's Future
            Updates!
          </h3>
          <p>Stay informed about the latest offers and updates</p>
          <div class="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              class="newsletter-input"
            />
            <button class="newsletter-button">Subscribe</button>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="responsible-gaming">
          <img src="/images/18-plus.svg" alt="18+" class="age-restriction" />
          <p>Gambling can be addictive. Please play responsibly.</p>
        </div>
        <div class="legal">
          <p>&copy; {{ currentYear }} Gambler's Future. All rights reserved.</p>
          <div class="legal-info">
            <div class="legal-links">
              <a href="#">Privacy Notice</a>
              <span class="divider">•</span>
              <a href="#">Cookie Policy</a>
              <span class="divider">•</span>
              <a href="#">Disclaimer</a>
            </div>
            <div class="social-icons">
              <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
              <a href="#" class="social-icon"
                ><i class="fab fa-instagram"></i
              ></a>
              <a href="#" class="social-icon"
                ><i class="fab fa-telegram"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer {
  background: #1a1721;
  color: #e6e6e6;
  padding: 4rem 0 2rem;
  border-top: 3px solid #dd4544;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-logo {
  text-align: center;
  margin-bottom: 3rem;
}

.footer-logo img {
  height: 40px;
  margin-bottom: 1rem;
}

.footer-logo p {
  color: #a0a0a0;
  font-size: 0.9rem;
}

.footer-main {
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  margin-bottom: 4rem;
}

.footer-sections {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  flex: 1;
  max-width: 50%; /* Add this to limit width */
}

.footer-section h4 {
  color: #ffffff;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
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
}

.footer-section a:hover {
  color: #dd4544;
  transform: translateX(5px);
}

.social-links .social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.social-links i {
  font-size: 1.1rem;
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.responsible-gaming {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
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
  margin-top: 1rem;
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
  .footer-sections {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    max-width: 100%; /* Reset max-width on smaller screens */
  }

  .footer-main {
    flex-direction: column;
  }

  .newsletter-section {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 640px) {
  .footer {
    padding: 3rem 0 1.5rem;
  }

  .footer-sections {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-section a:hover {
    transform: none;
  }

  .social-links .social-link {
    justify-content: center;
  }

  .responsible-gaming {
    flex-direction: column;
    text-align: center;
  }

  .legal-info {
    flex-direction: column;
    gap: 1rem;
  }
}

/* Add these new styles */
.newsletter-section {
  flex: 1; /* Changed from max-width */
  text-align: left;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  height: fit-content;
}

.newsletter-section h3 {
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
}

.newsletter-section p {
  color: #a0a0a0;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.newsletter-form {
  display: flex;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.newsletter-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.newsletter-input:focus {
  outline: none;
  border-color: #dd4544;
  background: rgba(255, 255, 255, 0.1);
}

.newsletter-input::placeholder {
  color: #777;
}

.newsletter-button {
  padding: 0.75rem 2rem;
  background: #dd4544;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.newsletter-button:hover {
  background: #c93d3d;
}

.legal-info {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  color: #777;
  font-size: 1.2rem;
  transition: color 0.2s;
}

.social-icon:hover {
  color: #dd4544;
}

/* Add to existing media queries */
@media (max-width: 640px) {
  .newsletter-form {
    flex-direction: column;
    gap: 0.75rem;
  }

  .newsletter-section {
    padding: 1.5rem;
  }

  .newsletter-section h3 {
    font-size: 1.1rem;
  }
}
</style>

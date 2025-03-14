<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <p>&copy; {{ currentYear }} Gambler's Future. All rights reserved.</p>
      </div>
      <div class="footer-section">
        <nav>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer {
  background-color: #2c3e50;
  color: #ffffff;
  padding: 2rem 0;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-section nav {
  display: flex;
  gap: 1.5rem;
}

.footer-section a {
  color: #ffffff;
  text-decoration: none;
  transition: opacity 0.2s;
}

.footer-section a:hover {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
}
</style>

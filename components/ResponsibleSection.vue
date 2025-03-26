<template>
  <section class="responsible-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Gamble Responsibly</h2>
      </div>

      <div class="responsible-content">
        <div class="responsible-info">
          <p class="info-text">
            At Gambler's Future, we believe gambling should be fun and
            entertaining. Remember to:
          </p>
          <div class="info-tips">
            <div class="tip">
              <i class="fas fa-wallet"></i> Set spending limits
            </div>
            <div class="tip">
              <i class="fas fa-clock"></i> Control your time
            </div>
            <div class="tip"><i class="fas fa-ban"></i> Never chase losses</div>
          </div>
        </div>

        <div class="help-resources">
          <span class="help-text">Need support?</span>
          <a
            href="https://www.ncpgambling.org/"
            target="_blank"
            rel="noopener noreferrer"
            class="help-link"
          >
            <i class="fas fa-phone"></i> 1-800-522-4700
          </a>
          <a
            href="https://www.gamblersanonymous.org/"
            target="_blank"
            rel="noopener noreferrer"
            class="help-link"
          >
            <i class="fas fa-users"></i> Gamblers Anonymous
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.responsible-section {
  padding: 2rem 0;
  background-color: rgba(26, 23, 33, 0.6);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: 1.8rem;
  background: linear-gradient(90deg, #4caf50, #8bc34a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.responsible-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.responsible-info {
  flex: 1;
  min-width: 280px;
}

.info-text {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.75rem;
}

.info-tips {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.tip {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(76, 175, 80, 0.1);
  padding: 0.4rem 0.75rem;
  border-radius: 30px;
  border: 1px solid rgba(76, 175, 80, 0.2);
}

.tip i {
  color: #4caf50;
  font-size: 0.8rem;
}

.help-resources {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.help-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
}

.help-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  text-decoration: none;
  color: #fff;
  background: rgba(33, 150, 243, 0.1);
  padding: 0.4rem 0.75rem;
  border-radius: 30px;
  border: 1px solid rgba(33, 150, 243, 0.2);
  transition: all 0.2s ease;
}

.help-link:hover {
  background: rgba(33, 150, 243, 0.2);
  transform: translateY(-2px);
}

.help-link i {
  color: #2196f3;
}

@media (max-width: 768px) {
  .responsible-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .help-resources {
    width: 100%;
    justify-content: flex-start;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.5rem;
  }

  .info-text {
    font-size: 0.85rem;
  }

  .tip,
  .help-link {
    font-size: 0.8rem;
  }
}
</style>

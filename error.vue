<template>
  <div class="error-container">
    <div class="error-bg-elements">
      <div class="error-circle circle-1"></div>
      <div class="error-circle circle-2"></div>
      <div class="error-pattern"></div>
    </div>

    <div class="error-content">
      <div class="error-card">
        <img
          src="/images/gfuture-red.png"
          alt="Gambler's Future"
          class="error-logo"
        />

        <div class="error-status">
          <div class="status-code">{{ error.statusCode || "404" }}</div>
          <div class="status-divider"></div>
          <h1 class="status-message">
            {{
              error.statusCode === 404
                ? "Page Not Found"
                : "Oops! Something went wrong"
            }}
          </h1>
        </div>

        <p class="error-message">{{ error.message || getErrorMessage() }}</p>

        <div class="error-illustrations">
          <div
            class="illustration"
            :class="`illustration-${error.statusCode === 404 ? 'map' : 'bug'}`"
          >
            <i
              :class="
                error.statusCode === 404 ? 'fas fa-map-signs' : 'fas fa-bug'
              "
            ></i>
          </div>
        </div>

        <div class="error-actions">
          <button class="error-button primary" @click="handleError">
            {{ error.statusCode === 404 ? "Go Home" : "Try Again" }}
            <i class="fas fa-arrow-right"></i>
          </button>

          <button
            v-if="error.statusCode === 404"
            class="error-button secondary"
            @click="goToSearch"
          >
            <i class="fas fa-search"></i>
            Search
          </button>

          <button v-else class="error-button secondary" @click="reportIssue">
            <i class="fas fa-flag"></i>
            Report Issue
          </button>
        </div>

        <div class="support-contact">
          <p>
            Need assistance?
            <a href="/contact" class="support-link">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    required: true,
  },
});

const getErrorMessage = () => {
  switch (props.error.statusCode) {
    case 404:
      return "The page you're looking for doesn't exist or may have been moved. Let us help you find what you need.";
    case 403:
      return "You don't have permission to access this page. Please check your credentials or contact support.";
    case 500:
      return "Our servers are experiencing technical difficulties. We're working to fix the issue as quickly as possible.";
    case 503:
      return "Our service is temporarily unavailable due to maintenance or high load. Please try again in a few minutes.";
    default:
      return "An unexpected error occurred. Our team has been notified and we're looking into it.";
  }
};

const handleError = () => {
  if (props.error.statusCode === 404) {
    navigateTo("/");
  } else {
    clearError({ redirect: "/" });
  }
};

const goToSearch = () => {
  navigateTo("/search");
};

const reportIssue = () => {
  // In a real implementation, this could open a modal or navigate to a bug report form
  navigateTo("/contact?type=bug&error=" + props.error.statusCode);
};
</script>

<style scoped>
.error-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #130f1d;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

/* Background Elements */
.error-bg-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 0;
}

.error-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
}

.circle-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, #ff6767 0%, transparent 70%);
  top: -200px;
  right: -100px;
  animation: pulse 8s infinite alternate;
}

.circle-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #9a4dff 0%, transparent 70%);
  bottom: -150px;
  left: -100px;
  animation: pulse 6s infinite alternate-reverse;
}

.error-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3Ccircle cx='13' cy='13' r='1.5'/%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
}

@keyframes pulse {
  0% {
    opacity: 0.05;
    transform: scale(1);
  }
  50% {
    opacity: 0.1;
    transform: scale(1.05);
  }
  100% {
    opacity: 0.05;
    transform: scale(1);
  }
}

/* Content Styling */
.error-content {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 700px;
  perspective: 1000px;
}

.error-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 24px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  padding: 3rem;
  text-align: center;
  color: white;
  transform-style: preserve-3d;
  animation: floatCard 6s ease-in-out infinite;
}

@keyframes floatCard {
  0%,
  100% {
    transform: translateY(0) rotateX(0deg);
  }
  50% {
    transform: translateY(-10px) rotateX(1deg);
  }
}

.error-logo {
  height: 70px;
  margin-bottom: 2.5rem;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
}

.error-status {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.status-code {
  font-size: 5rem;
  font-weight: 800;
  line-height: 1;
  background: linear-gradient(135deg, #ff6767, #ff4b4b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 4px rgba(255, 75, 75, 0.3));
  margin-right: 1.5rem;
}

.status-divider {
  width: 2px;
  height: 60px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  margin-right: 1.5rem;
}

.status-message {
  font-size: 2.2rem;
  font-weight: 700;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  margin: 0;
}

.error-message {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2.5rem;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.error-illustrations {
  margin-bottom: 2.5rem;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.illustration {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: float 3s ease-in-out infinite;
}

.illustration i {
  font-size: 3.5rem;
  color: #fff;
}

.illustration-map {
  background: linear-gradient(135deg, #3498db, #2980b9);
  box-shadow: 0 10px 20px rgba(52, 152, 219, 0.3);
}

.illustration-bug {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  box-shadow: 0 10px 20px rgba(231, 76, 60, 0.3);
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.error-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.error-button {
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.error-button.primary {
  background: linear-gradient(135deg, #ff6767, #ff4b4b);
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(255, 75, 75, 0.4);
}

.error-button.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 7px 20px rgba(255, 75, 75, 0.5);
}

.error-button.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.error-button.secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.support-contact {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

.support-link {
  color: #ff6767;
  text-decoration: none;
  transition: all 0.3s;
}

.support-link:hover {
  text-decoration: underline;
  color: #ff4b4b;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .error-card {
    padding: 2rem;
  }

  .status-code {
    font-size: 4rem;
    margin-right: 1rem;
  }

  .status-divider {
    height: 50px;
    margin-right: 1rem;
  }

  .status-message {
    font-size: 1.8rem;
  }

  .error-message {
    font-size: 1rem;
    max-width: 100%;
  }
}

@media (max-width: 576px) {
  .error-container {
    padding: 1rem;
  }

  .error-card {
    padding: 1.5rem;
  }

  .error-status {
    flex-direction: column;
    gap: 0.5rem;
  }

  .status-code {
    margin-right: 0;
  }

  .status-divider {
    width: 50px;
    height: 2px;
    margin: 0.5rem 0;
  }

  .status-message {
    font-size: 1.5rem;
  }

  .error-actions {
    flex-direction: column;
  }

  .error-button {
    width: 100%;
    justify-content: center;
  }

  .illustration {
    width: 100px;
    height: 100px;
  }

  .illustration i {
    font-size: 3rem;
  }
}
</style>

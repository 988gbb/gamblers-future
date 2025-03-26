<template>
  <div class="login-page">
    <div class="page-background"></div>

    <div class="auth-container">
      <!-- Form Container -->
      <div class="form-wrapper">
        <!-- Form Header -->
        <div class="form-header">
          <h1 class="form-title">
            {{ isLogin ? "Welcome Back" : "Join Our Community" }}
          </h1>
          <p class="form-subtitle">
            {{
              isLogin
                ? "Sign in to access exclusive benefits and track your rewards"
                : "Create an account to start earning rewards and exclusive bonuses"
            }}
          </p>
        </div>

        <!-- Auth Tabs -->
        <div class="auth-tabs">
          <button
            @click="setAuthMode(true)"
            :class="['tab-button', { active: isLogin }]"
          >
            Sign In
          </button>
          <button
            @click="setAuthMode(false)"
            :class="['tab-button', { active: !isLogin }]"
          >
            Sign Up
          </button>
        </div>

        <!-- Login Form -->
        <form v-if="isLogin" @submit.prevent="handleLogin" class="auth-form">
          <div class="form-group">
            <label for="login-email">Email</label>
            <div class="input-wrapper">
              <i class="fas fa-envelope input-icon"></i>
              <input
                type="email"
                id="login-email"
                v-model="loginForm.email"
                placeholder="Your email address"
                required
              />
            </div>
          </div>

          <div class="form-group">
            <div class="password-label-container">
              <label for="login-password">Password</label>
              <NuxtLink to="/forgot-password" class="forgot-link"
                >Forgot password?</NuxtLink
              >
            </div>
            <div class="input-wrapper">
              <i class="fas fa-lock input-icon"></i>
              <input
                :type="showLoginPassword ? 'text' : 'password'"
                id="login-password"
                v-model="loginForm.password"
                placeholder="Your password"
                required
              />
              <button
                type="button"
                class="password-toggle"
                @click="showLoginPassword = !showLoginPassword"
              >
                <i
                  :class="showLoginPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"
                ></i>
              </button>
            </div>
          </div>

          <div class="form-group remember-me">
            <label class="checkbox-container">
              <input type="checkbox" v-model="loginForm.rememberMe" />
              <span class="checkmark"></span>
              Remember me
            </label>
          </div>

          <div class="form-group">
            <button type="submit" class="submit-button">
              <span>Sign In</span>
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </form>

        <!-- Registration Form -->
        <form v-else @submit.prevent="handleRegister" class="auth-form">
          <div class="form-group">
            <label for="register-username">Username</label>
            <div class="input-wrapper">
              <i class="fas fa-user input-icon"></i>
              <input
                type="text"
                id="register-username"
                v-model="registerForm.username"
                placeholder="Choose a username"
                required
              />
            </div>
          </div>

          <div class="form-group">
            <label for="register-email">Email</label>
            <div class="input-wrapper">
              <i class="fas fa-envelope input-icon"></i>
              <input
                type="email"
                id="register-email"
                v-model="registerForm.email"
                placeholder="Your email address"
                required
              />
            </div>
          </div>

          <div class="form-group">
            <label for="register-password">Password</label>
            <div class="input-wrapper">
              <i class="fas fa-lock input-icon"></i>
              <input
                :type="showRegisterPassword ? 'text' : 'password'"
                id="register-password"
                v-model="registerForm.password"
                placeholder="Create a strong password"
                required
              />
              <button
                type="button"
                class="password-toggle"
                @click="showRegisterPassword = !showRegisterPassword"
              >
                <i
                  :class="
                    showRegisterPassword ? 'fas fa-eye-slash' : 'fas fa-eye'
                  "
                ></i>
              </button>
            </div>
            <div class="password-strength" v-if="registerForm.password">
              <div class="strength-meter">
                <div
                  class="strength-level"
                  :style="{ width: passwordStrength + '%' }"
                  :class="passwordStrengthClass"
                ></div>
              </div>
              <span class="strength-text" :class="passwordStrengthClass">
                {{ passwordStrengthText }}
              </span>
            </div>
          </div>

          <div class="form-group agree-terms">
            <label class="checkbox-container">
              <input
                type="checkbox"
                v-model="registerForm.agreeTerms"
                required
              />
              <span class="checkmark"></span>
              I agree to the
              <NuxtLink to="/terms-and-conditions" class="terms-link"
                >Terms & Conditions</NuxtLink
              >
              and
              <NuxtLink to="/privacy-policy" class="terms-link"
                >Privacy Policy</NuxtLink
              >
            </label>
          </div>

          <div class="form-group">
            <button type="submit" class="submit-button">
              <span>Create Account</span>
              <i class="fas fa-user-plus"></i>
            </button>
          </div>
        </form>

        <!-- Replaced social login with a simple message -->
        <div class="form-footer">
          <p class="footer-text">
            {{
              isLogin
                ? "Don't have an account yet?"
                : "Already have an account?"
            }}
            <a
              href="#"
              class="switch-mode-link"
              @click.prevent="isLogin = !isLogin"
            >
              {{ isLogin ? "Sign up here" : "Sign in here" }}
            </a>
          </p>
        </div>
      </div>
    </div>

    <!-- Notification for form submission -->
    <div
      v-if="notification.show"
      class="notification"
      :class="notification.type"
    >
      <i :class="notification.icon"></i>
      <span>{{ notification.message }}</span>
      <button class="close-notification" @click="notification.show = false">
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// State for toggling between login and register
const isLogin = ref(true);

// Login form state
const loginForm = ref({
  email: "",
  password: "",
  rememberMe: false,
});

// Register form state
const registerForm = ref({
  username: "",
  email: "",
  password: "",
  agreeTerms: false,
});

// Password visibility toggles
const showLoginPassword = ref(false);
const showRegisterPassword = ref(false);

// Notification state
const notification = ref({
  show: false,
  type: "success",
  message: "",
  icon: "fas fa-check-circle",
});

// Function to toggle between login and register
const setAuthMode = (mode) => {
  isLogin.value = mode;
};

// Password strength calculation
const passwordStrength = computed(() => {
  const password = registerForm.value.password;
  if (!password) return 0;

  let strength = 0;

  // Length check
  if (password.length >= 8) strength += 25;

  // Character variety checks
  if (/[A-Z]/.test(password)) strength += 25; // uppercase
  if (/[0-9]/.test(password)) strength += 25; // numbers
  if (/[^A-Za-z0-9]/.test(password)) strength += 25; // special chars

  return strength;
});

const passwordStrengthClass = computed(() => {
  const strength = passwordStrength.value;
  if (strength < 25) return "very-weak";
  if (strength < 50) return "weak";
  if (strength < 75) return "medium";
  return "strong";
});

const passwordStrengthText = computed(() => {
  const strength = passwordStrength.value;
  if (strength < 25) return "Very Weak";
  if (strength < 50) return "Weak";
  if (strength < 75) return "Medium";
  return "Strong";
});

// Form submission handlers
const handleLogin = async () => {
  try {
    // Here you would implement the actual login logic
    console.log("Login form submitted:", loginForm.value);

    // Show success notification
    notification.value = {
      show: true,
      type: "success",
      message: "Login successful! Redirecting...",
      icon: "fas fa-check-circle",
    };

    // Simulate redirect delay
    setTimeout(() => {
      // Navigate to dashboard or home
      // For now just reset form
      loginForm.value = {
        email: "",
        password: "",
        rememberMe: false,
      };
    }, 2000);
  } catch (error) {
    // Show error notification
    notification.value = {
      show: true,
      type: "error",
      message: "Login failed. Please check your credentials.",
      icon: "fas fa-exclamation-circle",
    };
    console.error("Login error:", error);
  }
};

const handleRegister = async () => {
  try {
    // Here you would implement the actual registration logic
    console.log("Register form submitted:", registerForm.value);

    // Show success notification
    notification.value = {
      show: true,
      type: "success",
      message: "Account created! Welcome to Gamblers Future!",
      icon: "fas fa-check-circle",
    };

    // Simulate redirect delay
    setTimeout(() => {
      // Navigate to dashboard or home
      // For now just reset form and switch to login
      registerForm.value = {
        username: "",
        email: "",
        password: "",
        agreeTerms: false,
      };
      isLogin.value = true;
    }, 2000);
  } catch (error) {
    // Show error notification
    notification.value = {
      show: true,
      type: "error",
      message: "Registration failed. Please try again.",
      icon: "fas fa-exclamation-circle",
    };
    console.error("Registration error:", error);
  }
};
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 6rem 1rem;
  background-color: #1a1721;
}

.page-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
      circle at 10% 20%,
      rgba(221, 69, 68, 0.03) 0%,
      transparent 30%
    ),
    radial-gradient(
      circle at 90% 80%,
      rgba(76, 175, 80, 0.03) 0%,
      transparent 30%
    ),
    linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(30, 25, 35, 0.5) 100%);
  z-index: 0;
  overflow: hidden;
}

.page-background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/images/noise.png");
  opacity: 0.03;
  pointer-events: none;
}

.auth-container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 480px;
  background: rgba(30, 25, 35, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.form-wrapper {
  padding: 0 2.5rem 2.5rem;
}

.form-header {
  text-align: center;
  margin-bottom: 2rem;
}

.form-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #ffffff;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.form-subtitle {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
}

.auth-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  border-radius: 30px;
  padding: 0.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.tab-button {
  flex: 1;
  padding: 0.75rem 1.5rem;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.2s ease;
}

.tab-button.active {
  background: linear-gradient(135deg, #dd4544, #e8937c);
  color: white;
  box-shadow: 0 4px 10px rgba(221, 69, 68, 0.3);
}

.auth-form {
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.password-label-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.forgot-link {
  font-size: 0.8rem;
  color: #dd4544;
  text-decoration: none;
  transition: all 0.2s ease;
}

.forgot-link:hover {
  color: #e8937c;
  text-decoration: underline;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 1rem;
  color: rgba(255, 255, 255, 0.4);
  font-size: 1rem;
}

.auth-form input[type="text"],
.auth-form input[type="email"],
.auth-form input[type="password"] {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.auth-form input:focus {
  outline: none;
  border-color: rgba(221, 69, 68, 0.5);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 3px rgba(221, 69, 68, 0.15);
}

.auth-form input::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

.password-toggle {
  position: absolute;
  right: 1rem;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  padding: 0.5rem;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.password-toggle:hover {
  color: rgba(255, 255, 255, 0.7);
}

.password-strength {
  margin-top: 0.75rem;
}

.strength-meter {
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.strength-level {
  height: 100%;
  transition: all 0.3s ease;
}

.strength-level.very-weak {
  background-color: #ff4d4d;
  width: 25%;
}
.strength-level.weak {
  background-color: #ffa64d;
  width: 50%;
}
.strength-level.medium {
  background-color: #ffdd4d;
  width: 75%;
}
.strength-level.strong {
  background-color: #4cd964;
  width: 100%;
}

.strength-text {
  font-size: 0.8rem;
  float: right;
}

.strength-text.very-weak {
  color: #ff4d4d;
}
.strength-text.weak {
  color: #ffa64d;
}
.strength-text.medium {
  color: #ffdd4d;
}
.strength-text.strong {
  color: #4cd964;
}

.checkbox-container {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  user-select: none;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  transition: all 0.2s ease;
}

.checkbox-container:hover input ~ .checkmark {
  background-color: rgba(255, 255, 255, 0.1);
}

.checkbox-container input:checked ~ .checkmark {
  background-color: #dd4544;
  border-color: #dd4544;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.terms-link {
  color: #dd4544;
  text-decoration: none;
  transition: all 0.2s ease;
}

.terms-link:hover {
  text-decoration: underline;
  color: #e8937c;
}

.submit-button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(221, 69, 68, 0.3);
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(221, 69, 68, 0.4);
}

.submit-button:active {
  transform: translateY(0);
}

.notification {
  position: fixed;
  top: 2rem;
  right: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: white;
  animation: slideIn 0.3s ease forwards;
  z-index: 1000;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  max-width: 350px;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.notification.success {
  background: linear-gradient(135deg, #28a745, #20c997);
  border-left: 4px solid #1e7e34;
}

.notification.error {
  background: linear-gradient(135deg, #dc3545, #f86277);
  border-left: 4px solid #bd2130;
}

.close-notification {
  margin-left: auto;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.close-notification:hover {
  opacity: 1;
}

.form-footer {
  margin-top: 2rem;
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-text {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
}

.switch-mode-link {
  color: #dd4544;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.switch-mode-link:hover {
  color: #e8937c;
  text-decoration: underline;
}

/* Responsive styles */
@media (max-width: 576px) {
  .form-wrapper {
    padding: 0 1.5rem 1.5rem;
  }

  .auth-tabs {
    width: 100%;
  }

  .tab-button {
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
  }

  .form-title {
    font-size: 1.5rem;
  }

  .form-subtitle {
    font-size: 0.875rem;
  }

  .notification {
    top: 1rem;
    right: 1rem;
    left: 1rem;
    max-width: none;
  }
}
</style>

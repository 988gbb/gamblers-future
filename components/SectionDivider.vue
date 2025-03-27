<template>
  <div class="section-divider">
    <!-- Main divider line -->
    <div class="divider-container" :class="theme">
      <!-- Stitch effect -->
      <div class="stitch-line">
        <div class="stitch" v-for="n in stitchCount" :key="n"></div>
      </div>

      <!-- Optional accent mark in the center -->
      <div class="accent-mark" v-if="showAccent && !label && !promptLabel">
        <div class="diamond"></div>
        <div class="dot"></div>
      </div>

      <!-- Optional standard label for the divider -->
      <div class="divider-label" v-if="label">
        {{ label }}
      </div>

      <!-- New prompt label with enhanced styling -->
      <div class="prompt-label" v-if="promptLabel">
        <div class="prompt-bg"></div>
        <div class="prompt-content">
          <span class="prompt-icon" v-if="promptIcon">
            <i :class="promptIcon"></i>
          </span>
          <span class="prompt-text">{{ promptLabel }}</span>
        </div>
        <div class="pulse-ring"></div>
      </div>

      <!-- Shine animation element -->
      <div class="shine-effect"></div>
    </div>
  </div>
</template>

<script setup>
// Props allow customization of the divider
const props = defineProps({
  theme: {
    type: String,
    default: "primary",
    validator: (value) =>
      ["primary", "secondary", "dark", "light"].includes(value),
  },
  showAccent: {
    type: Boolean,
    default: true,
  },
  label: {
    type: String,
    default: "",
  },
  promptLabel: {
    type: String,
    default: "",
  },
  promptIcon: {
    type: String,
    default: "", // Example: "fas fa-star"
  },
  stitchCount: {
    type: Number,
    default: 30,
  },
});
</script>

<style scoped>
.section-divider {
  position: relative;
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.divider-container {
  position: relative;
  height: 4px;
  width: 100%;
  background: #dd4544;
  margin: -2px 0;
  z-index: 2;
  box-shadow: 0 1px 15px rgba(221, 69, 68, 0.4);
}

/* Theme variants */
.divider-container.secondary {
  background: #6a11cb;
  box-shadow: 0 1px 15px rgba(106, 17, 203, 0.4);
}

.divider-container.dark {
  background: #2d2d2d;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
}

.divider-container.light {
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 1px 15px rgba(255, 255, 255, 0.2);
}

.stitch-line {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.stitch {
  width: 12px;
  height: 2px;
  background: #ffffff;
  opacity: 0.5;
  transform: rotate(-45deg);
  box-shadow: 0 0 2px rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

/* Pulse animation for stitches on hover */
.divider-container:hover .stitch {
  opacity: 0.7;
  transform: rotate(-45deg) scale(1.2);
}

.accent-mark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}

.diamond {
  position: absolute;
  width: 14px;
  height: 14px;
  background: white;
  transform: rotate(45deg);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
}

.divider-container.secondary .diamond {
  background: #c471ed;
}

.divider-container.dark .diamond {
  background: #444;
}

.divider-container.light .diamond {
  background: white;
}

.dot {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #dd4544;
  z-index: 4;
}

.divider-container.secondary .dot {
  background: #6a11cb;
}

.divider-container.dark .dot {
  background: #1a1a1a;
}

.divider-container.light .dot {
  background: #eaeaea;
}

.divider-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #1a1721;
  padding: 0.3rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
  color: #dd4544;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  z-index: 5;
}

.divider-container.secondary .divider-label {
  color: #6a11cb;
}

.divider-container.dark .divider-label {
  color: #aaa;
}

.divider-container.light .divider-label {
  color: #1a1721;
  background: #f5f5f5;
}

/* NEW PROMPT LABEL STYLES */
.prompt-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  min-width: 140px;
  padding: 0 5px;
}

.prompt-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #1a1721;
  border-radius: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  z-index: -1;
  border: 1px solid rgba(221, 69, 68, 0.3);
  overflow: hidden;
}

.prompt-bg::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(221, 69, 68, 0.15) 0%,
    rgba(221, 69, 68, 0) 60%
  );
  z-index: 1;
}

.divider-container.secondary .prompt-bg {
  border-color: rgba(106, 17, 203, 0.3);
}

.divider-container.secondary .prompt-bg::after {
  background: linear-gradient(
    135deg,
    rgba(106, 17, 203, 0.15) 0%,
    rgba(106, 17, 203, 0) 60%
  );
}

.divider-container.dark .prompt-bg {
  border-color: rgba(80, 80, 80, 0.3);
}

.divider-container.dark .prompt-bg::after {
  background: linear-gradient(
    135deg,
    rgba(80, 80, 80, 0.15) 0%,
    rgba(80, 80, 80, 0) 60%
  );
}

.divider-container.light .prompt-bg {
  background: #f7f7f7;
  border-color: rgba(255, 255, 255, 0.5);
}

.divider-container.light .prompt-bg::after {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 60%
  );
}

.prompt-content {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  height: 100%;
  gap: 8px;
}

.prompt-text {
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background: linear-gradient(to right, #dd4544, #e8937c);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
}

.divider-container.secondary .prompt-text {
  background: linear-gradient(to right, #6a11cb, #c471ed);
  -webkit-background-clip: text;
  background-clip: text;
}

.divider-container.dark .prompt-text {
  background: linear-gradient(to right, #aaa, #ddd);
  -webkit-background-clip: text;
  background-clip: text;
}

.divider-container.light .prompt-text {
  background: linear-gradient(to right, #1a1721, #444);
  -webkit-background-clip: text;
  background-clip: text;
}

.prompt-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dd4544;
  font-size: 0.9rem;
}

.divider-container.secondary .prompt-icon {
  color: #6a11cb;
}

.divider-container.dark .prompt-icon {
  color: #aaa;
}

.divider-container.light .prompt-icon {
  color: #333;
}

/* Pulse ring animation */
.pulse-ring {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 30px;
  z-index: -2;
}

.pulse-ring::before,
.pulse-ring::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 30px;
  animation: pulse 3s ease-out infinite;
  opacity: 0;
  border: 2px solid rgba(221, 69, 68, 0.5);
}

.pulse-ring::after {
  animation-delay: 1.5s;
}

.divider-container.secondary .pulse-ring::before,
.divider-container.secondary .pulse-ring::after {
  border-color: rgba(106, 17, 203, 0.5);
}

.divider-container.dark .pulse-ring::before,
.divider-container.dark .pulse-ring::after {
  border-color: rgba(80, 80, 80, 0.5);
}

.divider-container.light .pulse-ring::before,
.divider-container.light .pulse-ring::after {
  border-color: rgba(255, 255, 255, 0.7);
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.15);
    opacity: 0;
  }
}

/* Shimmering effect */
.shine-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  animation: shimmer 4s infinite;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 200%;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .stitch {
    width: 8px;
  }

  .divider-label,
  .prompt-label {
    font-size: 0.7rem;
    padding: 0.2rem 0.8rem;
  }

  .prompt-label {
    height: 30px;
    min-width: 120px;
  }

  .prompt-text {
    font-size: 0.75rem;
  }

  .prompt-icon {
    font-size: 0.8rem;
  }
}
</style>

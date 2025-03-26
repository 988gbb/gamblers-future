<template>
  <div class="section-divider">
    <!-- Main divider line -->
    <div class="divider-container" :class="theme">
      <!-- Stitch effect -->
      <div class="stitch-line">
        <div class="stitch" v-for="n in stitchCount" :key="n"></div>
      </div>

      <!-- Optional accent mark in the center -->
      <div class="accent-mark" v-if="showAccent">
        <div class="diamond"></div>
        <div class="dot"></div>
      </div>

      <!-- Optional label for the divider -->
      <div class="divider-label" v-if="label">
        {{ label }}
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

  .divider-label {
    font-size: 0.7rem;
    padding: 0.2rem 0.8rem;
  }
}
</style>

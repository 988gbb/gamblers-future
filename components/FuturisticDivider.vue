<template>
  <div class="futuristic-divider">
    <svg viewBox="0 0 1440 48" preserveAspectRatio="none">
      <defs>
        <linearGradient id="darkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color: #1a1721; stop-opacity: 1" />
          <stop offset="50%" style="stop-color: #29252c; stop-opacity: 1" />
          <stop offset="100%" style="stop-color: #1a1721; stop-opacity: 1" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color: #dd4544; stop-opacity: 1" />
          <stop offset="50%" style="stop-color: #ff4747; stop-opacity: 1" />
          <stop offset="100%" style="stop-color: #dd4544; stop-opacity: 1" />
        </linearGradient>
      </defs>
      <path
        d="M0 48h1440V0C944 24 720 36 480 36C240 36 0 0 0 0v48z"
        fill="url(#darkGradient)"
        class="primary-path"
      />
      <path
        d="M0 28.72L480 48l480-32L1440 48V0C944 24 720 36 480 36C240 36 0 0 0 0v28.72z"
        fill="url(#accentGradient)"
        class="accent-path"
      />
      <line x1="0" y1="48" x2="1440" y2="48" class="glow-line" />
    </svg>
  </div>
</template>

<style scoped>
.futuristic-divider {
  height: 48px;
  width: 100%;
  position: relative;
  margin-top: -48px;
  z-index: 1;
  overflow: hidden;
}

.futuristic-divider svg {
  width: 100%;
  height: 100%;
  display: block;
}

.primary-path {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.accent-path {
  opacity: 0.15;
  animation: pulse 4s ease-in-out infinite;
  filter: drop-shadow(0 0 8px rgba(221, 69, 68, 0.3));
}

.glow-line {
  stroke: url(#accentGradient);
  stroke-width: 1;
  opacity: 0.4;
  filter: blur(3px) drop-shadow(0 0 5px rgba(221, 69, 68, 0.5));
  animation: glow 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.15;
  }
  50% {
    opacity: 0.25;
  }
}

@keyframes glow {
  0%,
  100% {
    opacity: 0.4;
    stroke-width: 1;
    filter: blur(3px) drop-shadow(0 0 5px rgba(221, 69, 68, 0.5));
  }
  50% {
    opacity: 0.6;
    stroke-width: 2;
    filter: blur(4px) drop-shadow(0 0 8px rgba(221, 69, 68, 0.7));
  }
}
</style>

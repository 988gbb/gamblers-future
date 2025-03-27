<template>
  <section class="recommended-casinos">
    <div class="section-divider top-divider">
      <div class="divider-line"></div>
      <div class="divider-icon">
        <i class="fas fa-dice"></i>
      </div>
      <div class="divider-line"></div>
    </div>

    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Recommended Casinos</h2>
        <p class="section-subtitle">
          Hand-picked selections with exclusive bonuses for our users
        </p>
      </div>

      <!-- Filter chips -->
      <div class="filter-chips">
        <div
          v-for="tab in tabsWithCounts"
          :key="tab.id"
          :class="['filter-chip', { active: activeTab === tab.id }]"
          @click="setActiveTab(tab.id)"
        >
          <i :class="tab.icon"></i>
          <span>{{ tab.label }}</span>
          <span v-if="tab.id !== 'all'" class="chip-count">{{
            tab.count
          }}</span>
        </div>
      </div>

      <!-- Single Carousel for both Mobile and Desktop -->
      <div class="carousel-container">
        <div class="carousel-navigation">
          <button
            class="carousel-nav-btn prev"
            @click="prevSlide"
            :disabled="animating"
          >
            <i class="fas fa-chevron-left"></i>
          </button>
          <div class="carousel-counter">
            <span>{{ currentPosition + 1 }}/{{ totalItems }}</span>
          </div>
          <button
            class="carousel-nav-btn next"
            @click="nextSlide"
            :disabled="animating"
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>

        <div
          class="carousel-wrapper"
          @mouseenter="pauseAutoScroll"
          @mouseleave="resumeAutoScroll"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          <div
            class="carousel-track"
            ref="carouselTrack"
            :style="{ transform: `translateX(${-scrollPosition}px)` }"
          >
            <div
              v-for="casino in filteredCasinos"
              :key="casino.id"
              class="casino-card"
            >
              <!-- Badge if available -->
              <div
                v-if="casino.badge"
                :class="['casino-badge', casino.badge.type]"
              >
                <i :class="casino.badge.icon"></i>
              </div>

              <!-- Timer if limited time offer -->
              <div v-if="casino.limitedTimeOffer" class="mini-timer">
                <i class="fas fa-clock"></i>
                {{ formatTimeLeft(casino.limitedTimeOffer) }}
              </div>

              <!-- Casino logo -->
              <div class="casino-logo">
                <img :src="casino.logo" :alt="casino.name" />
              </div>

              <!-- Rating stars -->
              <div class="mini-rating">
                <div class="mini-stars">
                  <i class="fas fa-star"></i>
                  <span>{{ casino.rating.toFixed(1) }}</span>
                </div>
              </div>

              <!-- Casino name -->
              <h3 class="casino-name">{{ casino.name }}</h3>

              <!-- Bonus amount -->
              <div class="casino-bonus">{{ casino.bonus }}</div>

              <!-- Action buttons -->
              <div class="card-actions">
                <a :href="`/casino/${casino.id}`" class="review-link">
                  <i class="fas fa-info-circle"></i>
                </a>
                <a :href="casino.playUrl" class="play-button">
                  Play <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Carousel indicators -->
        <div class="carousel-indicators">
          <span
            v-for="n in Math.min(10, totalItems)"
            :key="n"
            :class="[
              'carousel-indicator',
              { active: currentPosition === n - 1 },
            ]"
            @click="goToPosition(n - 1)"
          ></span>
        </div>
      </div>

      <!-- View all button -->
      <div class="view-all-wrapper">
        <NuxtLink to="/casinos" class="view-all-button">
          View All Casinos
          <i class="fas fa-arrow-right"></i>
        </NuxtLink>
      </div>
    </div>

    <div class="section-divider bottom-divider">
      <div class="divider-line"></div>
      <div class="divider-icon">
        <i class="fas fa-trophy"></i>
      </div>
      <div class="divider-line"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// Tab definitions
const tabs = [
  {
    id: "all",
    label: "All Recommended",
    icon: "fas fa-star",
  },
  {
    id: "exclusive",
    label: "Exclusive Deals",
    icon: "fas fa-gem",
  },
  {
    id: "new",
    label: "New Casinos",
    icon: "fas fa-certificate",
  },
  {
    id: "limited",
    label: "Limited Time",
    icon: "fas fa-clock",
  },
];

const activeTab = ref("all");

// Carousel state
const carouselTrack = ref(null);
const scrollPosition = ref(0);
const currentPosition = ref(0);
const cardWidth = ref(180); // Default width, will be calculated dynamically
const animating = ref(false);
const touchStartX = ref(0);
const touchEndX = ref(0);
const autoScrollInterval = ref(null);
const autoPaused = ref(false);

// Set active tab and reset carousel
const setActiveTab = (tabId) => {
  activeTab.value = tabId;
  resetCarousel();
};

// Your existing casino data
const casinosData = ref([
  // Original casinos (first 5)
  {
    id: 1,
    name: "Lucky Spins Casino",
    logo: "/images/casinos/lucky-spins-logo.png",
    rating: 4.8,
    bonus: "200% up to $1,000",
    bonusExtra: "+ 50 Free Spins",
    badge: {
      type: "exclusive",
      icon: "fas fa-gem",
      text: "EXCLUSIVE",
    },
    highlights: [
      { icon: "fas fa-check-circle", text: "24hr Withdrawals" },
      { icon: "fas fa-check-circle", text: "2,000+ Games" },
      { icon: "fas fa-check-circle", text: "Mobile Friendly" },
    ],
    playUrl: "#",
    isNew: false,
    isExclusive: true,
    limitedTimeOffer: null,
  },
  {
    id: 2,
    name: "Royal Vegas",
    logo: "/images/casinos/royal-vegas-logo.png",
    rating: 4.5,
    bonus: "$1,200 Welcome Package",
    bonusExtra: "+ 120 Free Spins",
    badge: {
      type: "top",
      icon: "fas fa-trophy",
      text: "TOP RATED",
    },
    highlights: [
      { icon: "fas fa-check-circle", text: "97.8% Payout Rate" },
      { icon: "fas fa-check-circle", text: "Live Dealer Games" },
      { icon: "fas fa-check-circle", text: "24/7 Support" },
    ],
    playUrl: "#",
    isNew: false,
    isExclusive: false,
    limitedTimeOffer: null,
  },
  {
    id: 3,
    name: "Bitcoin Casino",
    logo: "/images/casinos/bitcoin-casino-logo.png",
    rating: 4.6,
    bonus: "5 BTC Welcome Package",
    bonusExtra: "+ 200 Free Spins",
    badge: {
      type: "limited",
      icon: "fas fa-clock",
      text: "LIMITED TIME",
    },
    highlights: [
      { icon: "fas fa-check-circle", text: "Instant Withdrawals" },
      { icon: "fas fa-check-circle", text: "Anonymous Play" },
      { icon: "fas fa-check-circle", text: "No Fees" },
    ],
    playUrl: "#",
    isNew: false,
    isExclusive: false,
    limitedTimeOffer: Date.now() + 86400000 * 2, // 2 days from now
  },
  {
    id: 4,
    name: "Jackpot City",
    logo: "/images/casinos/jackpot-city-logo.png",
    rating: 4.3,
    bonus: "100% up to $400",
    bonusExtra: "On First 4 Deposits",
    badge: null,
    highlights: [
      { icon: "fas fa-check-circle", text: "600+ Slot Games" },
      { icon: "fas fa-check-circle", text: "Progressive Jackpots" },
      { icon: "fas fa-check-circle", text: "Loyalty Program" },
    ],
    playUrl: "#",
    isNew: false,
    isExclusive: false,
    limitedTimeOffer: null,
  },
  {
    id: 5,
    name: "Vegas Paradise",
    logo: "/images/casinos/vegas-paradise-logo.png",
    rating: 4.7,
    bonus: "300% up to $1,500",
    bonusExtra: "+ 25 No Deposit Spins",
    badge: {
      type: "new",
      icon: "fas fa-certificate",
      text: "NEW",
    },
    highlights: [
      { icon: "fas fa-check-circle", text: "Huge Game Selection" },
      { icon: "fas fa-check-circle", text: "Fast Payouts" },
      { icon: "fas fa-check-circle", text: "Mobile App Available" },
    ],
    playUrl: "#",
    isNew: true,
    isExclusive: true,
    limitedTimeOffer: Date.now() + 86400000 * 5, // 5 days from now
  },
  // Additional "Exclusive" casinos (10 total)
  {
    id: 6,
    name: "Platinum Play",
    logo: "/images/casinos/platinum-play-logo.png",
    rating: 4.6,
    bonus: "150% up to $800",
    badge: { type: "exclusive", icon: "fas fa-gem" },
    playUrl: "#",
    isNew: false,
    isExclusive: true,
    limitedTimeOffer: null,
  },
  {
    id: 7,
    name: "Genesis Casino",
    logo: "/images/casinos/genesis-casino-logo.png",
    rating: 4.7,
    bonus: "$1,000 + 300 Spins",
    badge: { type: "exclusive", icon: "fas fa-gem" },
    playUrl: "#",
    isNew: false,
    isExclusive: true,
    limitedTimeOffer: null,
  },
  {
    id: 8,
    name: "Spin Casino",
    logo: "/images/casinos/spin-casino-logo.png",
    rating: 4.5,
    bonus: "$1,000 Welcome Bonus",
    badge: { type: "exclusive", icon: "fas fa-gem" },
    playUrl: "#",
    isNew: false,
    isExclusive: true,
    limitedTimeOffer: null,
  },
  {
    id: 9,
    name: "Ruby Fortune",
    logo: "/images/casinos/ruby-fortune-logo.png",
    rating: 4.4,
    bonus: "$750 Bonus Package",
    badge: { type: "exclusive", icon: "fas fa-gem" },
    playUrl: "#",
    isNew: false,
    isExclusive: true,
    limitedTimeOffer: null,
  },
  {
    id: 10,
    name: "King Billy",
    logo: "/images/casinos/king-billy-logo.png",
    rating: 4.8,
    bonus: "151% up to $500",
    badge: { type: "exclusive", icon: "fas fa-gem" },
    playUrl: "#",
    isNew: false,
    isExclusive: true,
    limitedTimeOffer: null,
  },
  // Additional "New" casinos (10 total)
  {
    id: 11,
    name: "High Roller",
    logo: "/images/casinos/high-roller-logo.png",
    rating: 4.3,
    bonus: "200% First Deposit",
    badge: { type: "new", icon: "fas fa-certificate" },
    playUrl: "#",
    isNew: true,
    isExclusive: false,
    limitedTimeOffer: null,
  },
  {
    id: 12,
    name: "Captain Spins",
    logo: "/images/casinos/captain-spins-logo.png",
    rating: 4.6,
    bonus: "$1,200 + 260 Spins",
    badge: { type: "new", icon: "fas fa-certificate" },
    playUrl: "#",
    isNew: true,
    isExclusive: true,
    limitedTimeOffer: null,
  },
  {
    id: 13,
    name: "Wild Fortune",
    logo: "/images/casinos/wild-fortune-logo.png",
    rating: 4.5,
    bonus: "100% up to $100",
    badge: { type: "new", icon: "fas fa-certificate" },
    playUrl: "#",
    isNew: true,
    isExclusive: false,
    limitedTimeOffer: null,
  },
  {
    id: 14,
    name: "Spinaway",
    logo: "/images/casinos/spinaway-logo.png",
    rating: 4.2,
    bonus: "100% up to $500",
    badge: { type: "new", icon: "fas fa-certificate" },
    playUrl: "#",
    isNew: true,
    isExclusive: false,
    limitedTimeOffer: null,
  },
  {
    id: 15,
    name: "Lucky Days",
    logo: "/images/casinos/lucky-days-logo.png",
    rating: 4.4,
    bonus: "$1,000 Welcome Bonus",
    badge: { type: "new", icon: "fas fa-certificate" },
    playUrl: "#",
    isNew: true,
    isExclusive: false,
    limitedTimeOffer: null,
  },
  {
    id: 16,
    name: "Wheelz",
    logo: "/images/casinos/wheelz-logo.png",
    rating: 4.7,
    bonus: "100% up to $300",
    badge: { type: "new", icon: "fas fa-certificate" },
    playUrl: "#",
    isNew: true,
    isExclusive: false,
    limitedTimeOffer: null,
  },
  {
    id: 17,
    name: "Casino Days",
    logo: "/images/casinos/casino-days-logo.png",
    rating: 4.6,
    bonus: "100% up to $1,000",
    badge: { type: "new", icon: "fas fa-certificate" },
    playUrl: "#",
    isNew: true,
    isExclusive: true,
    limitedTimeOffer: null,
  },
  {
    id: 18,
    name: "Casimba",
    logo: "/images/casinos/casimba-logo.png",
    rating: 4.8,
    bonus: "200% up to $5,000",
    badge: { type: "new", icon: "fas fa-certificate" },
    playUrl: "#",
    isNew: true,
    isExclusive: false,
    limitedTimeOffer: null,
  },
  // Additional "Limited Time" casinos (10 total)
  {
    id: 19,
    name: "CasinoNic",
    logo: "/images/casinos/casinonic-logo.png",
    rating: 4.3,
    bonus: "$1,200 + 120 Spins",
    badge: { type: "limited", icon: "fas fa-clock" },
    playUrl: "#",
    isNew: false,
    isExclusive: false,
    limitedTimeOffer: Date.now() + 86400000 * 3, // 3 days from now
  },
  {
    id: 20,
    name: "Slots Million",
    logo: "/images/casinos/slots-million-logo.png",
    rating: 4.5,
    bonus: "100% up to $100",
    badge: { type: "limited", icon: "fas fa-clock" },
    playUrl: "#",
    isNew: false,
    isExclusive: false,
    limitedTimeOffer: Date.now() + 86400000 * 1, // 1 day from now
  },
  {
    id: 21,
    name: "Wildz",
    logo: "/images/casinos/wildz-logo.png",
    rating: 4.7,
    bonus: "100% up to $500",
    badge: { type: "limited", icon: "fas fa-clock" },
    playUrl: "#",
    isNew: false,
    isExclusive: false,
    limitedTimeOffer: Date.now() + 86400000 * 4, // 4 days from now
  },
  {
    id: 22,
    name: "MrPlay",
    logo: "/images/casinos/mrplay-logo.png",
    rating: 4.2,
    bonus: "100 Spins + $200",
    badge: { type: "limited", icon: "fas fa-clock" },
    playUrl: "#",
    isNew: false,
    isExclusive: false,
    limitedTimeOffer: Date.now() + 86400000 * 2, // 2 days from now
  },
  {
    id: 23,
    name: "PlayOJO",
    logo: "/images/casinos/playojo-logo.png",
    rating: 4.6,
    bonus: "50 Free Spins",
    badge: { type: "limited", icon: "fas fa-clock" },
    playUrl: "#",
    isNew: false,
    isExclusive: false,
    limitedTimeOffer: Date.now() + 86400000 * 5, // 5 days from now
  },
  {
    id: 24,
    name: "Karamba",
    logo: "/images/casinos/karamba-logo.png",
    rating: 4.1,
    bonus: "$100 + 100 Spins",
    badge: { type: "limited", icon: "fas fa-clock" },
    playUrl: "#",
    isNew: false,
    isExclusive: false,
    limitedTimeOffer: Date.now() + 86400000 * 6, // 6 days from now
  },
  {
    id: 25,
    name: "LVBet",
    logo: "/images/casinos/lvbet-logo.png",
    rating: 4.3,
    bonus: "$1,000 + 1,000 Spins",
    badge: { type: "limited", icon: "fas fa-clock" },
    playUrl: "#",
    isNew: false,
    isExclusive: false,
    limitedTimeOffer: Date.now() + 86400000 * 3, // 3 days from now
  },
  // Additional regular casinos
  {
    id: 26,
    name: "Betsson",
    logo: "/images/casinos/betsson-logo.png",
    rating: 4.4,
    bonus: "100% up to $100",
    badge: { type: "top", icon: "fas fa-trophy" },
    playUrl: "#",
    isNew: false,
    isExclusive: false,
    limitedTimeOffer: null,
  },
  {
    id: 27,
    name: "GGBet",
    logo: "/images/casinos/ggbet-logo.png",
    rating: 4.2,
    bonus: "Up to $500",
    badge: null,
    playUrl: "#",
    isNew: false,
    isExclusive: false,
    limitedTimeOffer: null,
  },
  {
    id: 28,
    name: "Unibet",
    logo: "/images/casinos/unibet-logo.png",
    rating: 4.5,
    bonus: "$100 Casino Bonus",
    badge: null,
    playUrl: "#",
    isNew: false,
    isExclusive: false,
    limitedTimeOffer: null,
  },
  {
    id: 29,
    name: "Casumo",
    logo: "/images/casinos/casumo-logo.png",
    rating: 4.7,
    bonus: "100% up to $300",
    badge: null,
    playUrl: "#",
    isNew: false,
    isExclusive: false,
    limitedTimeOffer: null,
  },
  {
    id: 30,
    name: "Slotty Vegas",
    logo: "/images/casinos/slotty-vegas-logo.png",
    rating: 4.3,
    bonus: "Up to $350 + 135 Spins",
    badge: null,
    playUrl: "#",
    isNew: false,
    isExclusive: false,
    limitedTimeOffer: null,
  },
]);

// Filter casinos based on active tab
const filteredCasinos = computed(() => {
  if (activeTab.value === "all") {
    return casinosData.value;
  } else if (activeTab.value === "exclusive") {
    return casinosData.value.filter((casino) => casino.isExclusive);
  } else if (activeTab.value === "new") {
    return casinosData.value.filter((casino) => casino.isNew);
  } else if (activeTab.value === "limited") {
    return casinosData.value.filter((casino) => casino.limitedTimeOffer);
  }
  return casinosData.value;
});

// Total items in carousel
const totalItems = computed(() => filteredCasinos.value.length);

// Dynamically calculate tab counts
const tabsWithCounts = computed(() => {
  return tabs.map((tab) => {
    let count = null;

    if (tab.id === "exclusive") {
      count = casinosData.value.filter((casino) => casino.isExclusive).length;
    } else if (tab.id === "new") {
      count = casinosData.value.filter((casino) => casino.isNew).length;
    } else if (tab.id === "limited") {
      count = casinosData.value.filter(
        (casino) => casino.limitedTimeOffer
      ).length;
    }

    return {
      ...tab,
      count,
    };
  });
});

// Calculate and update card width based on viewport
const calculateCardWidth = () => {
  const wrapper = carouselTrack.value?.parentElement;
  if (!wrapper) return;

  // Get the width of the wrapper
  const wrapperWidth = wrapper.offsetWidth;

  // Determine how many cards should be visible at once
  let visibleCards = 6; // Default for large screens

  if (window.innerWidth < 576) {
    visibleCards = 2; // Mobile
  } else if (window.innerWidth < 768) {
    visibleCards = 3; // Small tablets
  } else if (window.innerWidth < 992) {
    visibleCards = 4; // Tablets
  } else if (window.innerWidth < 1200) {
    visibleCards = 5; // Small desktop
  }

  // Calculate card width with gap (assuming 1rem = 16px gap)
  const gap = 16;
  cardWidth.value = (wrapperWidth - gap * (visibleCards - 1)) / visibleCards;

  // Update the scroll position to maintain the current visible card
  updateScrollPosition();
};

// Carousel navigation functions
const nextSlide = () => {
  if (currentPosition.value < totalItems.value - 1 && !animating.value) {
    animating.value = true;
    currentPosition.value++;
    updateScrollPosition();
    setTimeout(() => {
      animating.value = false;
    }, 300); // Match transition duration
  }
};

const prevSlide = () => {
  if (currentPosition.value > 0 && !animating.value) {
    animating.value = true;
    currentPosition.value--;
    updateScrollPosition();
    setTimeout(() => {
      animating.value = false;
    }, 300); // Match transition duration
  }
};

const goToPosition = (position) => {
  if (!animating.value && position >= 0 && position < totalItems.value) {
    animating.value = true;
    currentPosition.value = position;
    updateScrollPosition();
    setTimeout(() => {
      animating.value = false;
    }, 300); // Match transition duration
  }
};

const updateScrollPosition = () => {
  // Calculate scroll position based on currentPosition and cardWidth
  // Include gap (assume 1rem = 16px)
  const gap = 16;
  scrollPosition.value = currentPosition.value * (cardWidth.value + gap);
};

const resetCarousel = () => {
  currentPosition.value = 0;
  scrollPosition.value = 0;
};

// Auto scroll functionality
const startAutoScroll = () => {
  // Clear any existing interval
  if (autoScrollInterval.value) {
    clearInterval(autoScrollInterval.value);
  }

  // Start new interval for auto scrolling
  autoScrollInterval.value = setInterval(() => {
    if (!autoPaused.value) {
      if (currentPosition.value < totalItems.value - 1) {
        nextSlide();
      } else {
        // Loop back to beginning when reaching the end
        currentPosition.value = 0;
        updateScrollPosition();
      }
    }
  }, 3000); // Scroll every 3 seconds
};

const pauseAutoScroll = () => {
  autoPaused.value = true;
};

const resumeAutoScroll = () => {
  autoPaused.value = false;
};

// Touch handling for swipe gestures
const handleTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX;
  pauseAutoScroll();
};

const handleTouchMove = (e) => {
  touchEndX.value = e.touches[0].clientX;
};

const handleTouchEnd = () => {
  // Detect swipe direction (minimum 50px movement to register as swipe)
  const swipeThreshold = 50;
  const touchDiff = touchStartX.value - touchEndX.value;

  if (touchDiff > swipeThreshold) {
    // Swipe left (next slide)
    nextSlide();
  } else if (touchDiff < -swipeThreshold) {
    // Swipe right (previous slide)
    prevSlide();
  }

  // Reset touch values
  touchStartX.value = 0;
  touchEndX.value = 0;

  // Resume auto scroll after a delay
  setTimeout(resumeAutoScroll, 4000);
};

// Format time left for limited time offers in a compact way
const formatTimeLeft = (endTime) => {
  const now = Date.now();
  const diff = Math.max(0, endTime - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  if (days > 0) {
    return `${days}d ${hours}h`;
  } else {
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  }
};

// Update carousel and auto scroll setup
onMounted(() => {
  // Calculate initial card width
  nextTick(() => {
    calculateCardWidth();

    // Start auto scroll
    startAutoScroll();

    // Add window resize listener
    window.addEventListener("resize", calculateCardWidth);
  });

  // Update timer for limited offers
  const timerInterval = setInterval(() => {
    // Force re-render of computed values
    casinosData.value = [...casinosData.value];
  }, 60000);

  // Clean up on component unmount
  onUnmounted(() => {
    if (autoScrollInterval.value) {
      clearInterval(autoScrollInterval.value);
    }
    clearInterval(timerInterval);
    window.removeEventListener("resize", calculateCardWidth);
  });
});
</script>

<style scoped>
.recommended-casinos {
  padding: 0;
  background: rgb(22, 19, 30);
  background: linear-gradient(
    135deg,
    rgba(22, 19, 30, 1) 0%,
    rgba(31, 26, 40, 1) 100%
  );
  position: relative;
  z-index: 1;
}

/* Section dividers (your existing styles) */
.section-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  height: 80px;
}

.top-divider {
  background: linear-gradient(
    to bottom,
    rgba(30, 25, 38, 0) 0%,
    rgba(30, 25, 38, 1) 50%
  );
}

.bottom-divider {
  background: linear-gradient(
    to top,
    rgba(30, 25, 38, 0) 0%,
    rgba(30, 25, 38, 1) 50%
  );
}

.divider-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(
    to right,
    rgba(221, 69, 68, 0) 0%,
    rgba(221, 69, 68, 0.5) 50%,
    rgba(221, 69, 68, 0) 100%
  );
}

.divider-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(221, 69, 68, 0.1);
  border-radius: 50%;
  margin: 0 1.5rem;
}

.divider-icon i {
  color: #dd4544;
  font-size: 1.1rem;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.section-subtitle {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 700px;
  margin: 0 auto;
}

/* Filter chips (your existing styles) */
.filter-chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.filter-chip {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-chip:hover {
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.9);
}

.filter-chip.active {
  background: rgba(221, 69, 68, 0.15);
  border-color: rgba(221, 69, 68, 0.3);
  color: #fff;
}

.filter-chip.active i {
  color: #dd4544;
}

.filter-chip i {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
}

.chip-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.25rem;
  height: 1.25rem;
  padding: 0 0.3rem;
  background: rgba(221, 69, 68, 0.25);
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 700;
  color: #dd4544;
  margin-left: 0.25rem;
}

/* Carousel styles */
.carousel-container {
  margin-bottom: 2.5rem;
  position: relative;
  overflow: hidden;
}

.carousel-navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.carousel-nav-btn {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.carousel-nav-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.12);
  color: white;
}

.carousel-nav-btn:disabled {
  opacity: 0.4;
  cursor: default;
}

.carousel-counter {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
}

.carousel-wrapper {
  overflow: hidden;
  position: relative;
  margin: 0 -1rem;
  padding: 0 1rem;
}

.carousel-track {
  display: flex;
  gap: 1rem;
  transition: transform 0.3s ease;
}

.casino-card {
  position: relative;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 1rem;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  min-width: 180px;
  flex-shrink: 0;
}

.casino-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  border-color: rgba(221, 69, 68, 0.2);
  background: rgba(255, 255, 255, 0.06);
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.carousel-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.2s ease;
}

.carousel-indicator.active {
  background: rgba(221, 69, 68, 0.7);
  transform: scale(1.2);
}

/* Casino card styles (your existing styles) */
.casino-badge {
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 10px 0 10px;
  font-size: 0.7rem;
}

.casino-badge.exclusive {
  background: linear-gradient(135deg, #7b4397, #dc2430);
}

.casino-badge.top {
  background: linear-gradient(135deg, #ffd700, #ffa500);
}

.casino-badge.new {
  background: linear-gradient(135deg, #00c853, #64dd17);
}

.casino-badge.limited {
  background: linear-gradient(135deg, #e53935, #ff3d00);
}

.mini-timer {
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 0.2rem 0.5rem;
  background: rgba(221, 69, 68, 0.15);
  border-radius: 20px;
  font-size: 0.7rem;
  color: #dd4544;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.casino-logo {
  width: 80px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.35rem;
  overflow: hidden;
  margin-bottom: 0.75rem;
  margin-top: 0.5rem;
}

.casino-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.mini-rating {
  margin-bottom: 0.5rem;
}

.mini-stars {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
}

.mini-stars i {
  color: #ffc107;
}

.mini-stars span {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
}

.casino-name {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
  line-height: 1.3;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.casino-bonus {
  font-size: 0.8rem;
  background: rgba(221, 69, 68, 0.1);
  border: 1px dashed rgba(221, 69, 68, 0.2);
  border-radius: 6px;
  padding: 0.4rem 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.75rem;
  line-height: 1.3;
  min-height: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.card-actions {
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
  width: 100%;
}

.review-link {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  border-radius: 6px;
  transition: all 0.2s ease;
}

.review-link:hover {
  background: rgba(255, 255, 255, 0.12);
  color: white;
}

.play-button {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  height: 30px;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.play-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(221, 69, 68, 0.3);
}

.play-button i {
  font-size: 0.7rem;
}

/* View all button (your existing styles) */
.view-all-wrapper {
  text-align: center;
  margin-top: 1rem;
}

.view-all-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.view-all-button:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  color: white;
}

.view-all-button i {
  transition: transform 0.2s ease;
}

.view-all-button:hover i {
  transform: translateX(3px);
}

/* Background pattern (your existing styles) */
.recommended-casinos::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  z-index: -1;
}

/* Responsive styles */
@media (max-width: 992px) {
  .section-title {
    font-size: 2rem;
  }

  .carousel-nav-btn {
    width: 32px;
    height: 32px;
    font-size: 0.8rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 2.5rem 1rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .filter-chip {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }

  .casino-badge {
    width: 20px;
    height: 20px;
    font-size: 0.65rem;
  }

  .casino-logo {
    width: 70px;
    height: 35px;
  }

  .casino-name {
    font-size: 0.9rem;
    height: 2.2rem;
  }

  .casino-bonus {
    font-size: 0.75rem;
    padding: 0.35rem 0.4rem;
  }

  .section-divider {
    height: 60px;
  }
}

@media (max-width: 576px) {
  .section-title {
    font-size: 1.5rem;
  }

  .casino-logo {
    width: 60px;
    height: 30px;
    margin-bottom: 0.5rem;
  }

  .casino-name {
    font-size: 0.8rem;
  }

  .mini-stars {
    font-size: 0.7rem;
  }

  .play-button,
  .review-link {
    height: 26px;
  }

  .play-button {
    font-size: 0.75rem;
  }

  .carousel-indicator {
    width: 6px;
    height: 6px;
  }
}

@media (max-width: 400px) {
  .casino-bonus {
    min-height: 3rem;
    font-size: 0.7rem;
    padding: 0.3rem;
  }

  .carousel-navigation {
    gap: 0.5rem;
  }

  .carousel-nav-btn {
    width: 28px;
    height: 28px;
    font-size: 0.7rem;
  }

  .carousel-counter {
    font-size: 0.75rem;
  }
}
</style>

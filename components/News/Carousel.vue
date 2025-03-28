<template>
  <section class="featured-carousel">
    <div class="carousel-container">
      <div class="carousel-header">
        <h2 class="section-title">
          Featured <span class="highlight">Stories</span>
        </h2>
        <div class="carousel-controls">
          <button class="control-button prev" @click="prevSlide">
            <i class="fas fa-chevron-left"></i>
          </button>
          <div class="slide-indicators">
            <button
              v-for="(slide, index) in slides"
              :key="index"
              class="indicator"
              :class="{ active: currentSlide === index }"
              @click="goToSlide(index)"
            ></button>
          </div>
          <button class="control-button next" @click="nextSlide">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div class="carousel-track" ref="trackRef">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="carousel-slide"
          :class="{ active: currentSlide === index }"
          :style="{ transform: `translateX(${(index - currentSlide) * 100}%)` }"
        >
          <div class="slide-content">
            <div class="slide-category">
              <i :class="slide.categoryIcon"></i>
              <span>{{ slide.category }}</span>
            </div>
            <h3 class="slide-title">{{ slide.title }}</h3>
            <p class="slide-description">{{ slide.description }}</p>
            <div class="slide-meta">
              <div class="slide-date">
                <i class="fas fa-calendar-alt"></i>
                <span>{{ formatDate(slide.date) }}</span>
              </div>
              <div class="slide-author">
                <i class="fas fa-user"></i>
                <span>{{ slide.author }}</span>
              </div>
            </div>
            <NuxtLink :to="slide.url" class="read-btn">
              Read Article
              <i class="fas fa-arrow-right"></i>
            </NuxtLink>
          </div>
          <div class="slide-image">
            <img :src="slide.image" :alt="slide.title" />
            <div class="image-overlay"></div>
          </div>
        </div>
      </div>

      <div class="carousel-thumbnails">
        <div
          v-for="(slide, index) in slides"
          :key="`thumb-${index}`"
          class="thumbnail"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
        >
          <div class="thumbnail-image">
            <img :src="slide.image" :alt="slide.title" />
          </div>
          <div class="thumbnail-title">
            {{
              slide.title.length > 50
                ? slide.title.substring(0, 50) + "..."
                : slide.title
            }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// Sample data for the carousel
const slides = [
  {
    title:
      "Exclusive: Major Casino Groups Considering Blockchain Integration for 2026",
    description:
      "In a groundbreaking shift, industry giants are looking to implement blockchain technology for transparent odds verification and instant withdrawals.",
    image: "/images/news/blockchain-casino.jpg",
    category: "Industry News",
    categoryIcon: "fas fa-chart-line",
    date: "2025-03-28",
    author: "Sarah Peterson",
    url: "/news/blockchain-integration-casinos",
  },
  {
    title:
      "Legendary Poker Pro Launches Revolutionary Training Platform With AI Coach",
    description:
      "Phil Iverson's new platform promises to transform how players learn with personalized AI coaching that adapts to individual playing styles.",
    image: "/images/news/poker-ai.jpg",
    category: "Strategy",
    categoryIcon: "fas fa-chess",
    date: "2025-03-26",
    author: "Michael Torres",
    url: "/news/poker-ai-training-platform",
  },
  {
    title: "Exclusive Review: We Tested The New $50M Luxor VIP Gaming Floor",
    description:
      "Our team got unprecedented access to Luxor's invite-only VIP area featuring $100k minimum tables and complimentary helicopter transfers.",
    image: "/images/news/vip-casino.jpg",
    category: "Reviews",
    categoryIcon: "fas fa-star",
    date: "2025-03-24",
    author: "Jessica Wong",
    url: "/news/luxor-vip-gaming-floor-review",
  },
  {
    title:
      "Breaking: New Regulation Allows Interstate Poker Tournaments Across 12 States",
    description:
      "The landmark decision creates America's largest poker network, with combined prize pools expected to exceed $50 million monthly.",
    image: "/images/news/poker-tournament.jpg",
    category: "Legal Updates",
    categoryIcon: "fas fa-gavel",
    date: "2025-03-23",
    author: "Robert Johnson",
    url: "/news/interstate-poker-tournaments",
  },
  {
    title:
      "Gambler's Future Exclusive: $250,000 Freeroll Tournament For Our Members",
    description:
      "We've partnered with leading online casinos to bring you the largest freeroll tournament ever, exclusively for Gambler's Future members.",
    image: "/images/news/freeroll-tournament.jpg",
    category: "Promotions",
    categoryIcon: "fas fa-gift",
    date: "2025-03-22",
    author: "The GF Team",
    url: "/news/exclusive-freeroll-tournament",
  },
];

const currentSlide = ref(0);
const autoplayTimer = ref(null);
const trackRef = ref(null);
let touchStartX = 0;
let touchEndX = 0;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
  resetAutoplay();
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
  resetAutoplay();
};

const goToSlide = (index) => {
  currentSlide.value = index;
  resetAutoplay();
};

const startAutoplay = () => {
  autoplayTimer.value = setInterval(() => {
    nextSlide();
  }, 5000);
};

const resetAutoplay = () => {
  clearInterval(autoplayTimer.value);
  startAutoplay();
};

const handleTouchStart = (e) => {
  touchStartX = e.touches[0].clientX;
};

const handleTouchMove = (e) => {
  touchEndX = e.touches[0].clientX;
};

const handleTouchEnd = () => {
  if (touchStartX - touchEndX > 50) {
    nextSlide(); // Swipe left
  } else if (touchEndX - touchStartX > 50) {
    prevSlide(); // Swipe right
  }
};

onMounted(() => {
  startAutoplay();

  // Add touch event listeners for mobile swiping
  const track = trackRef.value;
  if (track) {
    track.addEventListener("touchstart", handleTouchStart);
    track.addEventListener("touchmove", handleTouchMove);
    track.addEventListener("touchend", handleTouchEnd);
  }
});

onBeforeUnmount(() => {
  clearInterval(autoplayTimer.value);

  // Clean up event listeners
  const track = trackRef.value;
  if (track) {
    track.removeEventListener("touchstart", handleTouchStart);
    track.removeEventListener("touchmove", handleTouchMove);
    track.removeEventListener("touchend", handleTouchEnd);
  }
});
</script>

<style scoped>
.featured-carousel {
  padding: 4rem 0;
  background-color: #1a1721;
  position: relative;
  overflow: hidden;
}

.featured-carousel::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/images/backgrounds/hideout.svg");
  background-repeat: repeat;
  background-size: 200px 200px;
  opacity: 0.05;
  z-index: 0;
}

.carousel-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
}

.carousel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin: 0;
}

.section-title .highlight {
  background: linear-gradient(135deg, #dd4544, #e8937c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
}

.section-title .highlight::after {
  content: "";
  position: absolute;
  bottom: 3px;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(
    90deg,
    rgba(221, 69, 68, 0.2),
    rgba(232, 147, 124, 0)
  );
  z-index: -1;
  border-radius: 3px;
}

.carousel-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.control-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.control-button:hover {
  background: rgba(221, 69, 68, 0.2);
  border-color: rgba(221, 69, 68, 0.3);
  color: #dd4544;
}

.control-button i {
  font-size: 0.8rem;
}

.slide-indicators {
  display: flex;
  gap: 0.5rem;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: #dd4544;
  transform: scale(1.2);
}

/* Carousel track and slides */
.carousel-track {
  position: relative;
  height: 500px;
  overflow: hidden;
  border-radius: 16px;
  margin-bottom: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  transition: transform 0.6s ease-in-out;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.slide-content {
  flex: 0 0 40%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  z-index: 2;
}

.slide-category {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(221, 69, 68, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 30px;
  color: white;
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 1.5rem;
  align-self: flex-start;
}

.slide-title {
  font-size: 2.2rem;
  font-weight: 800;
  color: white;
  margin: 0 0 1.25rem;
  line-height: 1.2;
}

.slide-description {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.slide-meta {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.slide-date,
.slide-author {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.read-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  border: none;
  border-radius: 30px;
  padding: 0.875rem 1.75rem;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  align-self: flex-start;
  box-shadow: 0 8px 15px rgba(221, 69, 68, 0.3);
}

.read-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 20px rgba(221, 69, 68, 0.4);
}

.read-btn i {
  transition: transform 0.3s ease;
}

.read-btn:hover i {
  transform: translateX(3px);
}

.slide-image {
  position: absolute;
  top: 0;
  right: 0;
  width: 65%;
  height: 100%;
  z-index: 1;
}

.slide-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(26, 23, 33, 0.95),
    rgba(26, 23, 33, 0.7) 40%,
    transparent 70%
  );
}

/* Thumbnails */
.carousel-thumbnails {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 0.5rem 0;
  scrollbar-width: thin;
  scrollbar-color: rgba(221, 69, 68, 0.3) rgba(255, 255, 255, 0.05);
}

.carousel-thumbnails::-webkit-scrollbar {
  height: 5px;
}

.carousel-thumbnails::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}

.carousel-thumbnails::-webkit-scrollbar-thumb {
  background-color: rgba(221, 69, 68, 0.3);
  border-radius: 10px;
}

.thumbnail {
  flex: 0 0 200px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0.7;
  transform: scale(0.95);
}

.thumbnail:hover {
  opacity: 0.9;
}

.thumbnail.active {
  opacity: 1;
  transform: scale(1);
}

.thumbnail-image {
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.thumbnail.active .thumbnail-image {
  border-color: #dd4544;
}

.thumbnail-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnail-title {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4;
}

.thumbnail.active .thumbnail-title {
  color: white;
  font-weight: 500;
}

/* Responsive styles */
@media (max-width: 1024px) {
  .carousel-track {
    height: 450px;
  }

  .slide-content {
    flex: 0 0 50%;
  }

  .slide-image {
    width: 55%;
  }

  .slide-title {
    font-size: 1.8rem;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .carousel-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .carousel-controls {
    align-self: center;
  }

  .carousel-track {
    height: 650px;
  }

  .carousel-slide {
    flex-direction: column-reverse;
  }

  .slide-content {
    flex: 1;
    padding: 2rem;
  }

  .slide-image {
    position: relative;
    width: 100%;
    height: 250px;
  }

  .image-overlay {
    background: linear-gradient(
      to top,
      rgba(26, 23, 33, 1),
      rgba(26, 23, 33, 0.5) 70%,
      transparent
    );
  }

  .slide-title {
    font-size: 1.6rem;
  }

  .slide-description {
    font-size: 1rem;
  }

  .thumbnail {
    flex: 0 0 160px;
  }

  .thumbnail-image {
    height: 80px;
  }
}

@media (max-width: 480px) {
  .featured-carousel {
    padding: 3rem 0;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .carousel-track {
    height: 600px;
  }

  .slide-content {
    padding: 1.5rem;
  }

  .slide-image {
    height: 200px;
  }

  .slide-category {
    padding: 0.4rem 0.75rem;
    font-size: 0.75rem;
    margin-bottom: 1rem;
  }

  .slide-title {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  .slide-meta {
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .read-btn {
    width: 100%;
    justify-content: center;
    padding: 0.75rem 1.5rem;
  }

  .thumbnail {
    flex: 0 0 140px;
  }

  .thumbnail-image {
    height: 70px;
  }

  .thumbnail-title {
    font-size: 0.75rem;
  }
}
</style>

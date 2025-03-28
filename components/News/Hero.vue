<template>
  <section class="news-hero">
    <div class="hero-gradient"></div>
    <div class="hero-pattern"></div>

    <div class="container">
      <div class="hero-content">
        <div class="hero-header">
          <h1 class="hero-title">
            Gambling <span class="highlight">News & Insights</span>
          </h1>
          <p class="hero-subtitle">
            Stay informed with the latest updates, trends, and exclusive content
          </p>
        </div>

        <div class="categories-nav">
          <button
            v-for="category in categories"
            :key="category.id"
            class="category-button"
            :class="{ active: activeCategory === category.id }"
            @click="setActiveCategory(category.id)"
          >
            <i :class="category.icon"></i>
            <span>{{ category.name }}</span>
          </button>
        </div>
      </div>

      <div class="featured-article">
        <div class="article-image">
          <img :src="featuredArticle.image" alt="Featured article" />
          <div class="article-overlay"></div>
          <div class="article-category">
            <i :class="getCategoryIcon(featuredArticle.category)"></i>
            <span>{{ featuredArticle.category }}</span>
          </div>
          <div class="article-date">
            <i class="fas fa-calendar-alt"></i>
            <span>{{ formatDate(featuredArticle.date) }}</span>
          </div>
        </div>

        <div class="article-content">
          <h2 class="article-title">{{ featuredArticle.title }}</h2>
          <p class="article-excerpt">{{ featuredArticle.excerpt }}</p>
          <div class="article-meta">
            <div class="meta-item author">
              <i class="fas fa-user"></i>
              <span>{{ featuredArticle.author }}</span>
            </div>
            <div class="meta-item views">
              <i class="fas fa-eye"></i>
              <span>{{ formatNumber(featuredArticle.views) }} views</span>
            </div>
            <div class="meta-item comments">
              <i class="fas fa-comment"></i>
              <span>{{ featuredArticle.comments }} comments</span>
            </div>
          </div>
          <NuxtLink :to="featuredArticle.url" class="read-more-btn">
            Read Full Article
            <i class="fas fa-arrow-right"></i>
          </NuxtLink>
        </div>
      </div>

      <div class="trending-strip">
        <div class="trending-label">
          <i class="fas fa-fire"></i>
          <span>Trending</span>
        </div>
        <div class="trending-items">
          <div
            v-for="(item, index) in trendingItems"
            :key="index"
            class="trending-item"
          >
            <i class="fas fa-circle"></i>
            <NuxtLink :to="item.url">{{ item.title }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const activeCategory = ref("all");

const setActiveCategory = (categoryId) => {
  activeCategory.value = categoryId;
};

const getCategoryIcon = (categoryName) => {
  const category = categories.find((c) => c.name === categoryName);
  return category ? category.icon : "fas fa-newspaper";
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const formatNumber = (number) => {
  return number >= 1000 ? `${(number / 1000).toFixed(1)}k` : number;
};

const categories = [
  { id: "all", name: "All News", icon: "fas fa-newspaper" },
  { id: "industry", name: "Industry Updates", icon: "fas fa-chart-line" },
  { id: "strategy", name: "Strategies", icon: "fas fa-chess" },
  { id: "reviews", name: "Casino Reviews", icon: "fas fa-star" },
  { id: "bonuses", name: "Bonus Offers", icon: "fas fa-gift" },
  { id: "events", name: "Events", icon: "fas fa-calendar-day" },
];

const featuredArticle = {
  title: "Revolutionary New Online Casino Launches with $10M Tournament",
  excerpt:
    "Explore the groundbreaking features of Fortune Galaxy Casino as they kick off their platform with the industry's largest tournament prize pool, featuring zero wagering requirements on winnings.",
  image: "/images/news/featured-article.jpg",
  category: "Industry Updates",
  date: "2025-03-25T08:00:00",
  author: "Alex Johnson",
  views: 3240,
  comments: 47,
  url: "/news/revolutionary-new-online-casino-launches",
};

const trendingItems = [
  {
    title:
      "Nevada Gaming Commission Introduces New Regulations for Online Operators",
    url: "/news/nevada-gaming-commission",
  },
  {
    title:
      "Top 5 Slot Strategies That Actually Work According to Math Professors",
    url: "/news/slot-strategies",
  },
  {
    title: "Exclusive: Interview with World Series of Poker 2024 Champion",
    url: "/news/wsop-champion-interview",
  },
  {
    title: "Microgaming Announces Revolutionary AI-Powered Casino Platform",
    url: "/news/microgaming-ai-platform",
  },
];
</script>

<style scoped>
.news-hero {
  position: relative;
  padding: 6rem 0 2rem;
  background-color: #1a1721;
  overflow: hidden;
  color: white;
}

.hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      circle at 10% 10%,
      rgba(221, 69, 68, 0.05) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 90% 90%,
      rgba(0, 153, 255, 0.05) 0%,
      transparent 50%
    );
  z-index: 0;
}

.hero-pattern {
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
}

.hero-content {
  text-align: center;
  margin-bottom: 3rem;
}

.hero-header {
  margin-bottom: 2.5rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.hero-title .highlight {
  background: linear-gradient(135deg, #dd4544, #e8937c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
}

.hero-title .highlight::after {
  content: "";
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  height: 8px;
  background: linear-gradient(
    90deg,
    rgba(221, 69, 68, 0.2),
    rgba(232, 147, 124, 0)
  );
  z-index: -1;
  border-radius: 4px;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
  margin: 0 auto;
}

/* Category Navigation */
.categories-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.category-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
}

.category-button:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.category-button.active {
  background: linear-gradient(
    135deg,
    rgba(221, 69, 68, 0.1),
    rgba(232, 147, 124, 0.1)
  );
  border-color: rgba(221, 69, 68, 0.3);
  color: #dd4544;
  box-shadow: 0 5px 15px rgba(221, 69, 68, 0.1);
}

.category-button i {
  font-size: 0.9rem;
}

/* Featured Article */
.featured-article {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  margin-bottom: 2rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.article-image {
  position: relative;
  height: 100%;
  min-height: 400px;
}

.article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.article-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), transparent);
}

.article-category {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(221, 69, 68, 0.9);
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 600;
  color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.article-date {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 30px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.9);
}

.article-content {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
}

.article-title {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1.25rem;
}

.article-excerpt {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.article-meta {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.meta-item.author {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

.read-more-btn {
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
  box-shadow: 0 8px 15px rgba(221, 69, 68, 0.2);
  text-decoration: none;
  align-self: flex-start;
}

.read-more-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 20px rgba(221, 69, 68, 0.3);
}

.read-more-btn i {
  transition: transform 0.3s ease;
}

.read-more-btn:hover i {
  transform: translateX(3px);
}

/* Trending Strip */
.trending-strip {
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.trending-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: #dd4544;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  white-space: nowrap;
}

.trending-label i {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.trending-items {
  flex: 1;
  display: flex;
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  padding: 0.75rem 0;
  scroll-behavior: smooth;
}

.trending-items::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.trending-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1.25rem;
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.trending-item:last-child {
  border-right: none;
}

.trending-item i {
  font-size: 0.4rem;
  color: #dd4544;
}

.trending-item a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.2s ease;
}

.trending-item a:hover {
  color: white;
  text-decoration: underline;
}

/* Responsive styles */
@media (max-width: 1024px) {
  .featured-article {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .article-image {
    min-height: 300px;
  }

  .article-overlay {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .categories-nav {
    gap: 0.5rem;
  }

  .category-button {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }

  .article-title {
    font-size: 1.5rem;
  }

  .article-excerpt {
    font-size: 1rem;
  }

  .article-content {
    padding: 1.5rem;
  }

  .trending-label {
    padding: 0.75rem 1rem;
  }

  .trending-item {
    padding: 0 0.75rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .news-hero {
    padding: 3rem 0 1.5rem;
  }

  .categories-nav {
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: flex-start;
    padding-bottom: 0.5rem;
    margin: 0 -1.5rem;
    padding: 0 1.5rem 0.5rem;
    scroll-snap-type: x mandatory;
  }

  .category-button {
    scroll-snap-align: start;
    flex-shrink: 0;
  }

  .article-category,
  .article-date {
    font-size: 0.75rem;
    padding: 0.4rem 0.75rem;
  }

  .article-meta {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .read-more-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>

<template>
  <SectionDivider promptLabel="Hot News" promptIcon="fas fa-fire" />

  <section class="latest-news-section">
    <!-- Enhanced background elements -->
    <div class="bg-pattern"></div>
    <div class="floating-elements">
      <div class="floating-element e1"></div>
      <div class="floating-element e2"></div>
      <div class="floating-element e3"></div>
      <div class="floating-element e4"></div>
    </div>

    <div class="section-header">
      <h2 class="section-title">Latest Updates</h2>
      <p class="section-subtitle">
        Stay informed with fresh news from the online casino world
      </p>
    </div>

    <!-- News Categories Tabs -->
    <div class="news-tabs">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        class="tab-button"
        :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        <i :class="tab.icon"></i>
        <span>{{ tab.name }}</span>
        <div class="notification" v-if="tab.newCount > 0">
          {{ tab.newCount }}
        </div>
      </button>
    </div>

    <!-- News Content Area with improved grid layout -->
    <div class="news-content">
      <!-- Industry News with featured layout -->
      <div v-if="activeTab === 'industry' && loading" class="loading-spinner">
        <div class="spinner"></div>
        <span>Loading news...</span>
      </div>

      <div
        class="news-featured-grid"
        v-else-if="activeTab === 'industry' && displayedNews.length >= 3"
      >
        <!-- Main featured article -->
        <div class="featured-article">
          <div
            class="news-card featured"
            :class="{
              'has-new-tag':
                displayedNews[0].isNew || isNewArticle(displayedNews[0].date),
            }"
          >
            <div class="news-image">
              <img
                :src="displayedNews[0].image || '/images/news/default-news.jpg'"
                :alt="displayedNews[0].title"
              />
              <div class="news-date">
                <div class="date-month">
                  {{ formatDateMonth(displayedNews[0].date) }}
                </div>
                <div class="date-day">
                  {{ formatDateDay(displayedNews[0].date) }}
                </div>
              </div>
              <div class="news-category">
                {{ displayedNews[0].category || "News" }}
              </div>
            </div>
            <div class="news-content">
              <h3 class="news-title">{{ displayedNews[0].title }}</h3>
              <p class="news-excerpt">
                {{ displayedNews[0].excerpt || displayedNews[0].summary }}
              </p>
              <div class="news-meta">
                <div class="news-source">
                  <img
                    v-if="displayedNews[0].sourceLogo"
                    :src="displayedNews[0].sourceLogo"
                    :alt="displayedNews[0].source"
                  />
                  <span>{{ displayedNews[0].source || "Casino News" }}</span>
                </div>
                <a
                  :href="displayedNews[0].url"
                  target="_blank"
                  class="read-more"
                  >Read More <i class="fas fa-arrow-right"></i
                ></a>
              </div>
            </div>
            <div
              class="new-tag"
              v-if="
                displayedNews[0].isNew || isNewArticle(displayedNews[0].date)
              "
            >
              Featured
            </div>
          </div>
        </div>

        <!-- Side articles stack -->
        <div class="side-articles">
          <div
            v-for="index in [1, 2]"
            :key="index"
            class="news-card compact"
            :class="{
              'has-new-tag':
                displayedNews[index].isNew ||
                isNewArticle(displayedNews[index].date),
            }"
          >
            <div class="news-image">
              <img
                :src="
                  displayedNews[index].image || '/images/news/default-news.jpg'
                "
                :alt="displayedNews[index].title"
              />
              <div class="news-date">
                <div class="date-month">
                  {{ formatDateMonth(displayedNews[index].date) }}
                </div>
                <div class="date-day">
                  {{ formatDateDay(displayedNews[index].date) }}
                </div>
              </div>
              <div class="news-category">
                {{ displayedNews[index].category || "News" }}
              </div>
            </div>
            <div class="news-content">
              <h3 class="news-title">{{ displayedNews[index].title }}</h3>
              <p class="news-excerpt">
                {{
                  displayedNews[index].excerpt || displayedNews[index].summary
                }}
              </p>
              <div class="news-meta">
                <div class="news-source">
                  <img
                    v-if="displayedNews[index].sourceLogo"
                    :src="displayedNews[index].sourceLogo"
                    :alt="displayedNews[index].source"
                  />
                  <span>{{
                    displayedNews[index].source || "Casino News"
                  }}</span>
                </div>
                <a
                  :href="displayedNews[index].url"
                  target="_blank"
                  class="read-more"
                  >Read <i class="fas fa-arrow-right"></i
                ></a>
              </div>
            </div>
            <div
              class="new-tag"
              v-if="
                displayedNews[index].isNew ||
                isNewArticle(displayedNews[index].date)
              "
            >
              New
            </div>
          </div>
        </div>
      </div>

      <!-- Fallback to standard grid if not enough articles -->
      <div class="news-grid" v-else-if="activeTab === 'industry'">
        <div
          v-for="(item, index) in displayedNews"
          :key="index"
          class="news-card"
          :class="{ featured: index === 0 }"
        >
          <!-- Same card content as before -->
          <div class="news-image">
            <img
              :src="item.image || '/images/news/default-news.jpg'"
              :alt="item.title"
            />
            <div class="news-date">
              <div class="date-month">{{ formatDateMonth(item.date) }}</div>
              <div class="date-day">{{ formatDateDay(item.date) }}</div>
            </div>
            <div class="news-category">{{ item.category || "News" }}</div>
          </div>
          <div class="news-content">
            <h3 class="news-title">{{ item.title }}</h3>
            <p class="news-excerpt">{{ item.excerpt || item.summary }}</p>
            <div class="news-meta">
              <div class="news-source">
                <img
                  v-if="item.sourceLogo"
                  :src="item.sourceLogo"
                  :alt="item.source"
                />
                <span>{{ item.source || "Casino News" }}</span>
              </div>
              <a :href="item.url" target="_blank" class="read-more"
                >Read More <i class="fas fa-arrow-right"></i
              ></a>
            </div>
          </div>
          <div class="new-tag" v-if="item.isNew || isNewArticle(item.date)">
            New
          </div>
        </div>
      </div>

      <!-- Additional news articles in standard grid -->
      <div
        class="secondary-news-grid"
        v-if="activeTab === 'industry' && displayedNews.length > 3"
      >
        <h4 class="section-subheading">More Casino News</h4>
        <div class="news-grid">
          <div
            v-for="index in displayedNews.length > 6
              ? 3
              : displayedNews.length - 3"
            :key="index + 3"
            class="news-card"
            :class="{
              'has-new-tag':
                displayedNews[index + 2].isNew ||
                isNewArticle(displayedNews[index + 2].date),
            }"
          >
            <div class="news-image">
              <img
                :src="
                  displayedNews[index + 2].image ||
                  '/images/news/default-news.jpg'
                "
                :alt="displayedNews[index + 2].title"
              />
              <div class="news-date">
                <div class="date-month">
                  {{ formatDateMonth(displayedNews[index + 2].date) }}
                </div>
                <div class="date-day">
                  {{ formatDateDay(displayedNews[index + 2].date) }}
                </div>
              </div>
              <div class="news-category">
                {{ displayedNews[index + 2].category || "News" }}
              </div>
            </div>
            <div class="news-content">
              <h3 class="news-title">{{ displayedNews[index + 2].title }}</h3>
              <p class="news-excerpt">
                {{
                  displayedNews[index + 2].excerpt ||
                  displayedNews[index + 2].summary
                }}
              </p>
              <div class="news-meta">
                <div class="news-source">
                  <img
                    v-if="displayedNews[index + 2].sourceLogo"
                    :src="displayedNews[index + 2].sourceLogo"
                    :alt="displayedNews[index + 2].source"
                  />
                  <span>{{
                    displayedNews[index + 2].source || "Casino News"
                  }}</span>
                </div>
                <a
                  :href="displayedNews[index + 2].url"
                  target="_blank"
                  class="read-more"
                  >Read More <i class="fas fa-arrow-right"></i
                ></a>
              </div>
            </div>
            <div
              class="new-tag"
              v-if="
                displayedNews[index + 2].isNew ||
                isNewArticle(displayedNews[index + 2].date)
              "
            >
              New
            </div>
          </div>
        </div>
      </div>

      <!-- Rest of the component remains the same -->
      <!-- Bonus Updates -->
      <div class="bonus-updates" v-if="activeTab === 'bonuses'">
        <!-- Same bonus content from before -->
        <div
          v-for="(bonus, index) in newsItems.bonuses"
          :key="index"
          class="bonus-card"
        >
          <div class="bonus-casino">
            <div class="casino-logo">
              <img :src="bonus.casinoLogo" :alt="bonus.casinoName" />
            </div>
            <div class="casino-info">
              <h4 class="casino-name">{{ bonus.casinoName }}</h4>
              <div class="casino-rating">
                <i class="fas fa-star"></i>
                <span>{{ bonus.rating.toFixed(1) }}</span>
              </div>
            </div>
            <div class="bonus-badge" v-if="bonus.isNew">NEW</div>
            <div class="bonus-badge updated" v-else-if="bonus.isUpdated">
              UPDATED
            </div>
          </div>

          <div class="bonus-details">
            <div class="bonus-offer">{{ bonus.offerText }}</div>
            <div class="bonus-terms">{{ bonus.termsText }}</div>
          </div>

          <div class="bonus-meta">
            <div class="bonus-expiry" v-if="bonus.expiryDate">
              <i class="fas fa-clock"></i>
              <span>Expires: {{ formatExpiryDate(bonus.expiryDate) }}</span>
            </div>
            <div class="bonus-code" v-if="bonus.bonusCode">
              <div class="code-label">CODE:</div>
              <div class="code-value">{{ bonus.bonusCode }}</div>
              <button
                class="copy-code"
                @click="copyToClipboard(bonus.bonusCode)"
              >
                <i class="fas fa-copy"></i>
              </button>
            </div>
          </div>

          <div class="bonus-actions">
            <a :href="bonus.claimUrl" class="claim-bonus">
              Claim Bonus <i class="fas fa-external-link-alt"></i>
            </a>
            <a :href="bonus.reviewUrl" class="review-link">
              Review <i class="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- New Casino Alerts -->
      <div class="new-casinos" v-if="activeTab === 'newCasinos'">
        <!-- Same new casino content from before -->
        <div
          v-for="(casino, index) in newsItems.newCasinos"
          :key="index"
          class="new-casino-card"
        >
          <div class="launch-date">
            <div class="launch-label">Launched</div>
            <div class="launch-value">
              {{ formatLaunchDate(casino.launchDate) }}
            </div>
          </div>

          <div class="casino-header">
            <div class="casino-logo">
              <img :src="casino.logo" :alt="casino.name" />
            </div>
            <div class="casino-title">
              <h4 class="casino-name">{{ casino.name }}</h4>
              <div class="casino-tags">
                <span
                  v-for="(tag, idx) in casino.tags"
                  :key="idx"
                  class="casino-tag"
                  >{{ tag }}</span
                >
              </div>
            </div>
          </div>

          <div class="casino-highlights">
            <div
              class="highlight"
              v-for="(highlight, idx) in casino.highlights"
              :key="idx"
            >
              <i :class="highlight.icon"></i>
              <div class="highlight-content">
                <div class="highlight-label">{{ highlight.label }}</div>
                <div class="highlight-value">{{ highlight.value }}</div>
              </div>
            </div>
          </div>

          <div class="casino-preview">
            <p>{{ casino.description }}</p>
          </div>

          <div class="casino-actions">
            <a :href="casino.playUrl" class="play-button">
              Visit Casino <i class="fas fa-external-link-alt"></i>
            </a>
            <a :href="casino.reviewUrl" class="review-button">
              Review <i class="fas fa-chevron-right"></i>
            </a>
          </div>

          <div class="license-info">
            <i class="fas fa-certificate"></i>
            <span>Licensed by: {{ casino.license }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="view-all-container">
      <a :href="viewAllLinks[activeTab]" class="view-all-button">
        View All {{ viewAllText[activeTab] }}
        <i class="fas fa-arrow-right"></i>
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import SectionDivider from "../SectionDivider.vue";

// Tab configuration
const tabs = [
  {
    id: "industry",
    name: "Industry News",
    icon: "fas fa-newspaper",
    newCount: 3,
  },
  { id: "bonuses", name: "Bonus Updates", icon: "fas fa-gift", newCount: 5 },
  {
    id: "newCasinos",
    name: "New Casinos",
    icon: "fas fa-certificate",
    newCount: 2,
  },
];

const activeTab = ref("industry");
const apiNews = ref([]);
const loading = ref(false);

// Links for view all buttons
const viewAllLinks = {
  industry: "/news",
  bonuses: "/bonuses",
  newCasinos: "/new-casinos",
};

const viewAllText = {
  industry: "News",
  bonuses: "Bonuses",
  newCasinos: "Casinos",
};

// Sample data for other tabs
const newsItems = {
  bonuses: [
    {
      casinoName: "Lucky Spins",
      casinoLogo: "/images/casinos/lucky-spins-logo.png",
      rating: 4.8,
      offerText: "300% up to $3,000 + 200 Free Spins",
      termsText: "Wagering: 35x | Min deposit: $20",
      bonusCode: "WELCOME300",
      expiryDate: "2025-04-30",
      isNew: true,
      claimUrl: "#",
      reviewUrl: "#",
    },
    {
      casinoName: "Royal Vegas",
      casinoLogo: "/images/casinos/royal-vegas-logo.png",
      rating: 4.5,
      offerText: "Updated: $1,500 Welcome Package",
      termsText: "Across first 5 deposits | Wagering: 40x",
      bonusCode: null,
      expiryDate: null,
      isUpdated: true,
      claimUrl: "#",
      reviewUrl: "#",
    },
    {
      casinoName: "Bitcoin Casino",
      casinoLogo: "/images/casinos/bitcoin-casino-logo.png",
      rating: 4.6,
      offerText: "10 BTC Welcome Package + 250 Free Spins",
      termsText: "New crypto-only welcome offer | Wagering: 30x",
      bonusCode: "CRYPTO2025",
      expiryDate: "2025-05-15",
      isNew: true,
      claimUrl: "#",
      reviewUrl: "#",
    },
  ],
  newCasinos: [
    {
      name: "Fortune Palace",
      logo: "/images/casinos/fortune-palace-logo.png",
      launchDate: "2025-03-10",
      license: "Malta Gaming Authority",
      tags: ["New", "High Roller", "Crypto"],
      highlights: [
        {
          icon: "fas fa-gift",
          label: "Welcome Bonus",
          value: "400% up to $2,000",
        },
        { icon: "fas fa-gamepad", label: "Games", value: "3,500+" },
        { icon: "fas fa-sync", label: "Withdrawals", value: "1-24 hours" },
      ],
      description:
        "Fortune Palace is a new premium online casino featuring over 3,500 games from 50+ providers, supporting 15 payment methods including major cryptocurrencies.",
      playUrl: "#",
      reviewUrl: "#",
    },
    {
      name: "Neon Vegas",
      logo: "/images/casinos/neon-vegas-logo.png",
      launchDate: "2025-02-28",
      license: "Curacao eGaming",
      tags: ["High RTP", "Live Dealer", "Fast Payouts"],
      highlights: [
        {
          icon: "fas fa-gift",
          label: "Welcome Bonus",
          value: "200% up to $1,000",
        },
        { icon: "fas fa-gamepad", label: "Games", value: "2,800+" },
        { icon: "fas fa-sync", label: "Withdrawals", value: "Instant" },
      ],
      description:
        "Neon Vegas delivers a vibrant gaming experience with instant withdrawals, 24/7 live dealer tables, and an impressive collection of high RTP slots from industry-leading providers.",
      playUrl: "#",
      reviewUrl: "#",
    },
  ],
};

// Fallback industry news (used if API fails)
const fallbackNews = [
  {
    title: "UK Gambling Commission Introduces New Slot Game Restrictions",
    excerpt:
      "The UKGC has announced new regulations for online slot games to improve player safety, including spin speed limits and ban on auto-play features.",
    image: "/images/news/ukgc-regulations.jpg",
    date: "2025-03-18",
    category: "Regulation",
    source: "Gambling Insider",
    sourceLogo: "/images/sources/gambling-insider-logo.png",
    url: "#",
    isNew: true,
  },
  {
    title: "Evolution Gaming Launches New Live Casino Studio in Michigan",
    excerpt:
      "Evolution has opened its latest state-of-the-art live casino studio in Michigan, supporting the growing US market with 10 new live game tables.",
    image: "/images/news/evolution-studio.jpg",
    date: "2025-03-15",
    category: "Business",
    source: "Casino Beats",
    sourceLogo: "/images/sources/casino-beats-logo.png",
    url: "#",
    isNew: true,
  },
  {
    title: "NetEnt Announces Revolutionary VR Slot Experience",
    excerpt:
      "NetEnt is set to release its first virtual reality slot game, promising an immersive 3D experience that could change how players interact with online slots.",
    image: "/images/news/netent-vr.jpg",
    date: "2025-03-10",
    category: "Technology",
    source: "iGaming Business",
    sourceLogo: "/images/sources/igaming-business-logo.png",
    url: "#",
    isNew: true,
  },
];

// Computed property for displaying news articles
const displayedNews = computed(() => {
  return apiNews.value.length > 0 ? apiNews.value : fallbackNews;
});

// Function to check if article is new (less than 3 days old)
const isNewArticle = (dateString) => {
  const articleDate = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - articleDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 3;
};

// API call to fetch news
const fetchCasinoNews = async () => {
  loading.value = true;
  try {
    // Using NewsAPI to get gambling/casino related news
    // Note: In production, you should use your backend to proxy this request
    const response = await fetch(
      "https://newsapi.org/v2/everything?" +
        'q=casino+OR+gambling+OR+"online+betting"&' +
        "language=en&" +
        "sortBy=publishedAt&" +
        "pageSize=6",
      {
        headers: {
          "X-Api-Key": "YOUR_API_KEY", // Replace with your actual API key
        },
      }
    );

    const data = await response.json();

    if (data.status === "ok" && data.articles && data.articles.length > 0) {
      // Transform the API data into our format
      apiNews.value = data.articles.map((article) => ({
        title: article.title,
        excerpt: article.description,
        image: article.urlToImage,
        date: article.publishedAt,
        category: categorizeCasinoNews(article.title, article.description),
        source: article.source.name,
        url: article.url,
      }));
    } else {
      // If API returns no results, use fallback
      console.log("No news found, using fallback data");
      apiNews.value = [];
    }
  } catch (error) {
    console.error("Error fetching news:", error);
    apiNews.value = [];
  } finally {
    loading.value = false;
  }
};

// Simple algorithm to categorize news based on content
const categorizeCasinoNews = (title, description) => {
  const text = (title + " " + description).toLowerCase();

  if (
    text.includes("regulation") ||
    text.includes("law") ||
    text.includes("commission") ||
    text.includes("license")
  ) {
    return "Regulation";
  } else if (
    text.includes("bonus") ||
    text.includes("offer") ||
    text.includes("promotion")
  ) {
    return "Promotions";
  } else if (
    text.includes("slot") ||
    text.includes("game") ||
    text.includes("jackpot")
  ) {
    return "Games";
  } else if (
    text.includes("technology") ||
    text.includes("software") ||
    text.includes("platform")
  ) {
    return "Technology";
  } else if (
    text.includes("crypto") ||
    text.includes("bitcoin") ||
    text.includes("blockchain")
  ) {
    return "Crypto";
  }

  return "Industry";
};

// Helper functions for date formatting
const formatDateMonth = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString("en-US", { month: "short" });
};

const formatDateDay = (dateString) => {
  const date = new Date(dateString);
  return date.getDate();
};

const formatExpiryDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const formatLaunchDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

// Copy bonus code to clipboard with better notification
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);

  // Create and show floating notification
  const notification = document.createElement("div");
  notification.className = "copy-notification";
  notification.innerHTML = `<i class="fas fa-check"></i> Code copied!`;
  document.body.appendChild(notification);

  // Remove notification after animation
  setTimeout(() => {
    notification.classList.add("fade-out");
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 500);
  }, 2000);
};

// Fetch news when component mounts
onMounted(() => {
  fetchCasinoNews();
});
</script>

<style scoped>
/* Main container - more compact */
.latest-news-section {
  position: relative;
  padding: 3rem 1.5rem;
  color: white;
  overflow: hidden;
  margin: 0 auto;
}

/* Enhanced stylish background */
.bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #1a1721;
  background-image: radial-gradient(
      rgba(221, 69, 68, 0.03) 2px,
      transparent 2px
    ),
    radial-gradient(rgba(106, 17, 203, 0.02) 2px, transparent 2px);
  background-size: 40px 40px;
  background-position: 0 0, 20px 20px;
  z-index: -2;
  opacity: 0.8;
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

.floating-element {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.15;
}

.e1 {
  top: 10%;
  left: -5%;
  width: 25%;
  height: 30%;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  animation: floatSlow 20s ease-in-out infinite alternate;
}

.e2 {
  bottom: 15%;
  right: -10%;
  width: 30%;
  height: 25%;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  animation: floatSlow 25s ease-in-out infinite alternate-reverse;
}

.e3 {
  top: 70%;
  left: 20%;
  width: 15%;
  height: 15%;
  background: linear-gradient(135deg, #dd4544, transparent);
  animation: breathe 15s ease-in-out infinite;
}

.e4 {
  top: 25%;
  right: 15%;
  width: 20%;
  height: 20%;
  background: radial-gradient(
    circle at center,
    rgba(106, 17, 203, 0.3),
    transparent
  );
  animation: breathe 18s ease-in-out infinite reverse;
}

@keyframes floatSlow {
  0% {
    transform: translateY(0) translateX(0) scale(1);
  }
  100% {
    transform: translateY(30px) translateX(20px) scale(1.05);
  }
}

@keyframes breathe {
  0%,
  100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.18;
    transform: scale(1.1);
  }
}

/* Section header - more compact */
.section-header {
  text-align: center;
  margin-bottom: 1.75rem;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 1px;
}

.section-subtitle {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;
}

/* News Tabs - smaller */
.news-tabs {
  display: flex;
  justify-content: center;
  margin: 1.75rem 0 1.5rem;
  gap: 0.8rem;
  flex-wrap: wrap;
}

.tab-button {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.7);
  border-radius: 50px;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.tab-button i {
  font-size: 0.9rem;
}

.tab-button:hover {
  background: rgba(255, 255, 255, 0.06);
  color: white;
}

.tab-button.active {
  background: rgba(221, 69, 68, 0.15);
  border-color: rgba(221, 69, 68, 0.3);
  color: white;
  box-shadow: 0 5px 15px rgba(221, 69, 68, 0.1);
}

.notification {
  position: absolute;
  top: -6px;
  right: -6px;
  background: #dd4544;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 0.7rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

/* News Content Container - smaller */
.news-content {
  max-width: 1200px;
  margin: 0 auto;
}

/* Loading indicator */
.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: rgba(255, 255, 255, 0.7);
  gap: 1rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  border-top-color: #dd4544;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Industry News Grid - smaller */
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

/* Enhanced Card Styling */
.news-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.news-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(221, 69, 68, 0.03) 0%,
    transparent 50%
  );
  z-index: 1;
  pointer-events: none;
}

.news-card:hover {
  transform: translateY(-5px) scale(1.01);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  border-color: rgba(221, 69, 68, 0.3);
}

.news-image {
  position: relative;
  width: 100%;
  height: 180px;
  overflow: hidden;
  z-index: 0;
}

.featured .news-image {
  height: 230px;
}

.news-image::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 60%,
    rgba(26, 23, 33, 0.8)
  );
  z-index: 1;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.7s ease;
  filter: brightness(0.95);
}

.news-card:hover .news-image img {
  transform: scale(1.08);
  filter: brightness(1.05);
}

.news-date {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 50px;
  height: 50px;
  background: rgba(26, 23, 33, 0.85);
  backdrop-filter: blur(8px);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 2;
  transition: all 0.3s ease;
}

.news-card:hover .news-date {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}

.date-day {
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1;
}

.date-month {
  font-size: 0.7rem;
  text-transform: uppercase;
  margin-bottom: 0.2rem;
  opacity: 0.8;
}

.news-category {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(221, 69, 68, 0.85);
  color: white;
  padding: 0.3rem 0.9rem;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 600;
  z-index: 2;
  box-shadow: 0 3px 10px rgba(221, 69, 68, 0.3);
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.news-card:hover .news-category {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(221, 69, 68, 0.4);
}

.news-content {
  padding: 1.2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
}

.news-title {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.3s ease;
}

.news-card:hover .news-title {
  background: linear-gradient(135deg, #dd4544, #e8937c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.featured .news-title {
  font-size: 1.25rem;
}

.news-excerpt {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.news-source {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
}

.news-source img {
  width: 18px;
  height: 18px;
  object-fit: contain;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  padding: 2px;
}

.read-more {
  color: #dd4544;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.3s ease;
  padding: 0.4rem 0.8rem;
  border-radius: 30px;
  background: rgba(221, 69, 68, 0.1);
}

.read-more i {
  transition: transform 0.3s ease;
}

.read-more:hover {
  color: white;
  background: rgba(221, 69, 68, 0.8);
}

.read-more:hover i {
  transform: translateX(3px);
}

.new-tag {
  position: absolute;
  top: 15px;
  left: -35px;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  color: white;
  padding: 0.25rem 2rem;
  transform: rotate(-45deg);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  z-index: 3;
}

/* View All Button - smaller */
.view-all-container {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.view-all-button {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transition: all 0.3s ease;
}

.view-all-button:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transform: translateY(-2px);
}

/* Bonus Updates - smaller */
.bonus-updates {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

/* Bonus Card Styling */
.bonus-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.4rem;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.bonus-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: linear-gradient(to bottom, #dd4544, #e8937c);
  opacity: 0.7;
  transition: all 0.3s ease;
}

.bonus-card:hover {
  transform: translateY(-5px) scale(1.01);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  border-color: rgba(221, 69, 68, 0.3);
}

.bonus-card:hover::before {
  width: 7px;
  opacity: 1;
}

.bonus-casino {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.2rem;
  position: relative;
}

.casino-logo {
  width: 80px;
  height: 40px;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.bonus-card:hover .casino-logo {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.casino-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: all 0.3s ease;
}

.casino-info {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.casino-name {
  font-size: 1.1rem;
  font-weight: 700;
  transition: color 0.3s ease;
}

.bonus-card:hover .casino-name {
  color: #dd4544;
}

.casino-rating {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  background: rgba(255, 255, 255, 0.07);
  padding: 0.2rem 0.6rem;
  border-radius: 30px;
  width: fit-content;
}

.casino-rating i {
  color: #ffc107;
}

.bonus-badge {
  position: absolute;
  right: 0;
  top: 0;
  background: #dd4544;
  color: white;
  padding: 0.25rem 0.7rem;
  border-radius: 5px;
  font-size: 0.7rem;
  font-weight: 700;
  box-shadow: 0 3px 10px rgba(221, 69, 68, 0.3);
  transition: all 0.3s ease;
}

.bonus-card:hover .bonus-badge {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(221, 69, 68, 0.4);
}

.bonus-badge.updated {
  background: #2575fc;
  box-shadow: 0 3px 10px rgba(37, 117, 252, 0.3);
}

.bonus-card:hover .bonus-badge.updated {
  box-shadow: 0 5px 15px rgba(37, 117, 252, 0.4);
}

.bonus-details {
  border-radius: 10px;
  padding: 1rem 1.2rem;
  margin-bottom: 1.2rem;
  background: rgba(221, 69, 68, 0.08);
  border: 1px dashed rgba(221, 69, 68, 0.25);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.bonus-details::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(221, 69, 68, 0.1) 0%,
    transparent 70%
  );
  z-index: 0;
  pointer-events: none;
}

.bonus-card:hover .bonus-details {
  border-color: rgba(221, 69, 68, 0.4);
  background: rgba(221, 69, 68, 0.12);
  transform: scale(1.02);
}

.bonus-offer {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
}

.bonus-terms {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  position: relative;
  z-index: 1;
}

.bonus-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
  gap: 0.75rem;
}

.bonus-expiry {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.05);
  padding: 0.3rem 0.8rem;
  border-radius: 30px;
  transition: all 0.3s ease;
}

.bonus-card:hover .bonus-expiry {
  background: rgba(255, 255, 255, 0.08);
}

.bonus-code {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.07);
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.bonus-card:hover .bonus-code {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.15);
}

.code-label {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.75rem;
}

.code-value {
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 0.15rem 0.5rem;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 4px;
}

.copy-code {
  background: rgba(221, 69, 68, 0.2);
  border: none;
  color: #dd4544;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
}

.copy-code:hover {
  background: rgba(221, 69, 68, 0.9);
  color: white;
  transform: scale(1.1);
}

.bonus-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.claim-bonus {
  background: linear-gradient(135deg, #dd4544, #e8937c);
  color: white;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  flex: 1;
  text-align: center;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(221, 69, 68, 0.3);
  position: relative;
  overflow: hidden;
}

.claim-bonus::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transform: rotate(45deg);
  transition: all 0.8s ease;
  opacity: 0;
}

.claim-bonus:hover {
  transform: translateY(-3px);
  box-shadow: 0 7px 20px rgba(221, 69, 68, 0.4);
}

.claim-bonus:hover::after {
  opacity: 1;
  transform: rotate(45deg) translate(100%, -100%);
}

.review-link {
  background: rgba(255, 255, 255, 0.07);
  color: rgba(255, 255, 255, 0.9);
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.review-link:hover {
  background: rgba(255, 255, 255, 0.12);
  color: white;
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* New Casino Cards - smaller */
.new-casinos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

/* New Casino Styling */
.new-casino-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.4rem;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.new-casino-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(to right, #dd4544, #e8937c);
  z-index: 1;
}

.new-casino-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(221, 69, 68, 0.03) 0%,
    transparent 70%
  );
  z-index: 0;
  pointer-events: none;
}

.new-casino-card:hover {
  transform: translateY(-5px) scale(1.01);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  border-color: rgba(221, 69, 68, 0.3);
}

.new-casino-card:hover::before {
  height: 7px;
}

.launch-date {
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  text-align: right;
  background: rgba(26, 23, 33, 0.75);
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.new-casino-card:hover .launch-date {
  background: rgba(26, 23, 33, 0.85);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.launch-label {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.15rem;
}

.launch-value {
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
}

.casino-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.2rem;
  padding-right: 100px; /* Space for launch date */
}

.casino-title {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.casino-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.casino-tag {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.7);
  padding: 0.15rem 0.5rem;
  border-radius: 50px;
  font-size: 0.65rem;
}

.casino-highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 1rem;
  margin-bottom: 1.2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.2rem 0;
}

.highlight {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  transition: all 0.3s ease;
  padding: 0.8rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
}

.new-casino-card:hover .highlight {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
}

.highlight i {
  color: #dd4544;
  font-size: 0.9rem;
  margin-top: 0.15rem;
  background: rgba(221, 69, 68, 0.1);
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.new-casino-card:hover .highlight i {
  background: rgba(221, 69, 68, 0.2);
  transform: scale(1.1);
}

.casino-preview {
  margin-bottom: 1.2rem;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  position: relative;
  transition: all 0.3s ease;
}

.casino-preview::before {
  content: "";
  position: absolute;
  top: -15px;
  left: 10px;
  font-size: 3rem;
  color: rgba(221, 69, 68, 0.2);
  font-family: serif;
  line-height: 1;
}

.new-casino-card:hover .casino-preview {
  background: rgba(255, 255, 255, 0.05);
}

.casino-preview p {
  font-size: 0.85rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Copy notification enhancement */
.copy-notification {
  position: fixed;
  bottom: 25px;
  right: 25px;
  background: rgba(26, 23, 33, 0.9);
  color: white;
  padding: 0.9rem 1.3rem;
  border-radius: 10px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.9rem;
  z-index: 1000;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.3s ease;
  border: 1px solid rgba(76, 175, 80, 0.3);
  backdrop-filter: blur(10px);
}

.copy-notification i {
  color: #4caf50;
  background: rgba(76, 175, 80, 0.15);
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.fade-out {
  animation: fadeOut 0.5s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
}

/* Responsive styles */
@media (max-width: 992px) {
  .section-title {
    font-size: 1.8rem;
  }

  .section-subtitle {
    font-size: 0.9rem;
  }

  .news-card.featured {
    grid-column: span 1;
  }

  .featured .news-image {
    height: 170px;
  }

  .featured .news-title {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .latest-news-section {
    padding: 2.5rem 1rem;
  }

  .news-tabs {
    gap: 0.6rem;
  }

  .tab-button {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }

  .news-grid,
  .bonus-updates,
  .new-casinos {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  .news-title,
  .bonus-offer,
  .casino-name {
    font-size: 0.95rem;
  }

  .bonus-details,
  .casino-highlights {
    padding: 0.7rem;
  }

  .casino-header {
    padding-right: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.6rem;
  }

  .launch-date {
    position: relative;
    top: 0;
    right: 0;
    text-align: left;
    margin-bottom: 0.8rem;
  }
}

@media (max-width: 576px) {
  .section-title {
    font-size: 1.5rem;
  }

  .section-subtitle {
    font-size: 0.85rem;
  }

  .news-grid,
  .bonus-updates,
  .new-casinos {
    grid-template-columns: 1fr;
  }

  .news-image,
  .featured .news-image {
    height: 160px;
  }

  .bonus-meta {
    flex-direction: column;
    align-items: flex-start;
  }

  .bonus-actions,
  .casino-actions {
    flex-direction: column;
  }

  .review-link,
  .review-button {
    width: 100%;
  }

  .casino-highlights {
    grid-template-columns: 1fr;
  }
}

/* Add these new styles for the featured grid layout */
.news-featured-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.featured-article {
  height: 100%;
}

.side-articles {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;
}

.news-card.featured {
  height: 100%;
}

.news-card.featured .news-image {
  height: 300px;
}

.news-card.featured .news-title {
  font-size: 1.4rem;
  -webkit-line-clamp: 3;
}

.news-card.featured .news-excerpt {
  -webkit-line-clamp: 4;
  margin-bottom: 1.5rem;
}

.news-card.compact .news-image {
  height: 130px;
}

.news-card.compact .news-title {
  font-size: 0.95rem;
  -webkit-line-clamp: 2;
  margin-bottom: 0.5rem;
}

.news-card.compact .news-excerpt {
  font-size: 0.8rem;
  -webkit-line-clamp: 2;
  margin-bottom: 0.75rem;
}

.news-card.compact .news-meta {
  padding-top: 0.75rem;
}

.news-card.compact .read-more {
  padding: 0.3rem 0.6rem;
  font-size: 0.75rem;
}

.secondary-news-grid {
  margin-top: 2rem;
}

.section-subheading {
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 1rem;
  font-weight: 600;
}

.section-subheading::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 3px;
  background: linear-gradient(to bottom, #dd4544, #e8937c);
  border-radius: 3px;
}

/* Update existing news grid for secondary news */
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

/* Responsive adjustments for the featured grid */
@media (max-width: 992px) {
  .news-card.featured .news-image {
    height: 250px;
  }

  .news-card.featured .news-title {
    font-size: 1.2rem;
  }

  .news-card.compact .news-image {
    height: 120px;
  }
}

@media (max-width: 768px) {
  .news-featured-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .side-articles {
    flex-direction: row;
    gap: 1rem;
  }

  .news-card.featured .news-image {
    height: 220px;
  }

  .section-subheading {
    font-size: 1.2rem;
  }
}

@media (max-width: 576px) {
  .side-articles {
    flex-direction: column;
  }

  .news-card.compact .news-image {
    height: 160px;
  }

  .news-card.featured .news-title {
    font-size: 1.1rem;
  }
}
</style>

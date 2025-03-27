<template>
  <section class="casino-comparison">
    <div class="animated-bg"></div>

    <div class="comparison-header">
      <div class="comparison-title-container">
        <h2 class="section-title">Casino Face-Off</h2>
        <p class="section-subtitle">
          Choose any two casinos and compare features head-to-head
        </p>
      </div>
    </div>

    <!-- VS Battle Card Selection Interface -->
    <div class="battle-selection">
      <!-- Left Side Selection -->
      <div class="battle-side left-side">
        <div class="side-title">
          <span class="pill">First Casino</span>
        </div>

        <div
          v-if="leftCasino"
          class="selected-casino-card"
          :class="{ loaded: leftCasino }"
        >
          <div class="card-header">
            <div class="selected-casino-logo">
              <img :src="leftCasino.logo" :alt="leftCasino.name" />
            </div>
            <div class="selected-casino-rating">
              <span class="rating-value">{{
                leftCasino.rating.toFixed(1)
              }}</span>
              <div class="stars">
                <i class="fas fa-star"></i>
              </div>
            </div>
          </div>
          <h3 class="selected-casino-name">{{ leftCasino.name }}</h3>
          <div class="selected-casino-bonus">{{ leftCasino.bonus }}</div>
          <button class="change-selection-btn" @click="openLeftSelection">
            <i class="fas fa-exchange-alt"></i> Change
          </button>
        </div>

        <div v-else class="empty-selection" @click="openLeftSelection">
          <div class="empty-icon">
            <i class="fas fa-plus"></i>
          </div>
          <p>Select Casino</p>
        </div>
      </div>

      <!-- VS Center -->
      <div class="battle-vs">
        <div class="vs-circle">
          <span>VS</span>
        </div>
        <div class="vs-line"></div>
        <button
          class="compare-now-btn"
          :disabled="!canCompare"
          @click="openComparisonModal"
        >
          Compare Now
        </button>
      </div>

      <!-- Right Side Selection -->
      <div class="battle-side right-side">
        <div class="side-title">
          <span class="pill">Second Casino</span>
        </div>

        <div
          v-if="rightCasino"
          class="selected-casino-card"
          :class="{ loaded: rightCasino }"
        >
          <div class="card-header">
            <div class="selected-casino-logo">
              <img :src="rightCasino.logo" :alt="rightCasino.name" />
            </div>
            <div class="selected-casino-rating">
              <span class="rating-value">{{
                rightCasino.rating.toFixed(1)
              }}</span>
              <div class="stars">
                <i class="fas fa-star"></i>
              </div>
            </div>
          </div>
          <h3 class="selected-casino-name">{{ rightCasino.name }}</h3>
          <div class="selected-casino-bonus">{{ rightCasino.bonus }}</div>
          <button class="change-selection-btn" @click="openRightSelection">
            <i class="fas fa-exchange-alt"></i> Change
          </button>
        </div>

        <div v-else class="empty-selection" @click="openRightSelection">
          <div class="empty-icon">
            <i class="fas fa-plus"></i>
          </div>
          <p>Select Casino</p>
        </div>
      </div>
    </div>

    <!-- Casino Picker Modal -->
    <div class="casino-picker-modal" v-if="showPickerModal">
      <div class="modal-overlay" @click="closePickerModal"></div>
      <div class="picker-modal-container">
        <div class="picker-modal-header">
          <h3>
            Select {{ currentSide === "left" ? "First" : "Second" }} Casino
          </h3>
          <button class="close-btn" @click="closePickerModal">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="picker-modal-body">
          <div class="casino-grid">
            <div
              v-for="casino in casinosData"
              :key="casino.id"
              class="casino-pick-card"
              :class="{
                unavailable:
                  (currentSide === 'left' &&
                    rightCasino &&
                    rightCasino.id === casino.id) ||
                  (currentSide === 'right' &&
                    leftCasino &&
                    leftCasino.id === casino.id),
              }"
              @click="selectCasino(casino)"
            >
              <div class="casino-pick-logo">
                <img :src="casino.logo" :alt="casino.name" />
              </div>
              <div class="casino-pick-name">{{ casino.name }}</div>
              <div class="mini-rating">
                <i class="fas fa-star"></i>
                <span>{{ casino.rating.toFixed(1) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Comparison Modal -->
    <div class="comparison-modal" v-if="showComparisonModal">
      <div class="modal-overlay" @click="closeComparisonModal"></div>
      <div class="modal-container">
        <div class="modal-header">
          <h3>Casino Comparison</h3>
          <button class="close-btn" @click="closeComparisonModal">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="modal-body">
          <!-- Comparison Table -->
          <div class="comparison-table-wrapper">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th class="feature-column">Features</th>
                  <th v-if="leftCasino" class="casino-column">
                    <div class="compared-casino-header">
                      <div class="compared-casino-logo">
                        <img :src="leftCasino.logo" :alt="leftCasino.name" />
                      </div>
                      <div class="compared-casino-name">
                        {{ leftCasino.name }}
                      </div>
                      <div class="compared-casino-rating">
                        <span class="rating-value">{{
                          leftCasino.rating.toFixed(1)
                        }}</span>
                        <div class="mini-stars">
                          <i class="fas fa-star"></i>
                        </div>
                      </div>
                      <a
                        :href="leftCasino.playUrl"
                        class="play-button"
                        target="_blank"
                      >
                        Visit Site <i class="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </th>
                  <th v-if="rightCasino" class="casino-column">
                    <div class="compared-casino-header">
                      <div class="compared-casino-logo">
                        <img :src="rightCasino.logo" :alt="rightCasino.name" />
                      </div>
                      <div class="compared-casino-name">
                        {{ rightCasino.name }}
                      </div>
                      <div class="compared-casino-rating">
                        <span class="rating-value">{{
                          rightCasino.rating.toFixed(1)
                        }}</span>
                        <div class="mini-stars">
                          <i class="fas fa-star"></i>
                        </div>
                      </div>
                      <a
                        :href="rightCasino.playUrl"
                        class="play-button"
                        target="_blank"
                      >
                        Visit Site <i class="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <!-- Bonus Row -->
                <tr>
                  <td class="feature-name">
                    <div class="feature-icon">
                      <i class="fas fa-gift"></i>
                    </div>
                    <span>Welcome Bonus</span>
                  </td>
                  <td v-if="leftCasino">
                    <div
                      class="feature-value bonus-value"
                      :class="getComparisonClass('bonus')"
                    >
                      <div class="primary-value">{{ leftCasino.bonus }}</div>
                      <div
                        class="secondary-value"
                        v-if="leftCasino.bonusDetails"
                      >
                        {{ leftCasino.bonusDetails }}
                      </div>
                    </div>
                  </td>
                  <td v-if="rightCasino">
                    <div
                      class="feature-value bonus-value"
                      :class="getComparisonClass('bonus', true)"
                    >
                      <div class="primary-value">{{ rightCasino.bonus }}</div>
                      <div
                        class="secondary-value"
                        v-if="rightCasino.bonusDetails"
                      >
                        {{ rightCasino.bonusDetails }}
                      </div>
                    </div>
                  </td>
                </tr>

                <!-- Withdrawal Time Row -->
                <tr>
                  <td class="feature-name">
                    <div class="feature-icon">
                      <i class="fas fa-clock"></i>
                    </div>
                    <span>Withdrawal Time</span>
                  </td>
                  <td v-if="leftCasino">
                    <div
                      class="feature-value"
                      :class="getComparisonClass('withdrawalTime')"
                    >
                      <div class="primary-value">
                        {{ leftCasino.withdrawalTime }}
                      </div>
                    </div>
                  </td>
                  <td v-if="rightCasino">
                    <div
                      class="feature-value"
                      :class="getComparisonClass('withdrawalTime', true)"
                    >
                      <div class="primary-value">
                        {{ rightCasino.withdrawalTime }}
                      </div>
                    </div>
                  </td>
                </tr>

                <!-- Games Count Row -->
                <tr>
                  <td class="feature-name">
                    <div class="feature-icon">
                      <i class="fas fa-dice"></i>
                    </div>
                    <span>Games Count</span>
                  </td>
                  <td v-if="leftCasino">
                    <div
                      class="feature-value"
                      :class="getComparisonClass('gamesCount')"
                    >
                      <div class="primary-value">
                        {{ leftCasino.gamesCount.toLocaleString() }}
                      </div>
                    </div>
                  </td>
                  <td v-if="rightCasino">
                    <div
                      class="feature-value"
                      :class="getComparisonClass('gamesCount', true)"
                    >
                      <div class="primary-value">
                        {{ rightCasino.gamesCount.toLocaleString() }}
                      </div>
                    </div>
                  </td>
                </tr>

                <!-- Providers Count Row -->
                <tr>
                  <td class="feature-name">
                    <div class="feature-icon">
                      <i class="fas fa-laptop-code"></i>
                    </div>
                    <span>Software Providers</span>
                  </td>
                  <td v-if="leftCasino">
                    <div
                      class="feature-value"
                      :class="getComparisonClass('providerCount')"
                    >
                      <div class="providers-chips">
                        <span
                          v-for="(provider, idx) in leftCasino.topProviders"
                          :key="idx"
                          class="provider-chip"
                        >
                          {{ provider }}
                        </span>
                        <span
                          class="more-chip"
                          v-if="
                            leftCasino.providerCount >
                            leftCasino.topProviders.length
                          "
                        >
                          +{{
                            leftCasino.providerCount -
                            leftCasino.topProviders.length
                          }}
                          more
                        </span>
                      </div>
                    </div>
                  </td>
                  <td v-if="rightCasino">
                    <div
                      class="feature-value"
                      :class="getComparisonClass('providerCount', true)"
                    >
                      <div class="providers-chips">
                        <span
                          v-for="(provider, idx) in rightCasino.topProviders"
                          :key="idx"
                          class="provider-chip"
                        >
                          {{ provider }}
                        </span>
                        <span
                          class="more-chip"
                          v-if="
                            rightCasino.providerCount >
                            rightCasino.topProviders.length
                          "
                        >
                          +{{
                            rightCasino.providerCount -
                            rightCasino.topProviders.length
                          }}
                          more
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>

                <!-- Payment Methods Row -->
                <tr>
                  <td class="feature-name">
                    <div class="feature-icon">
                      <i class="fas fa-credit-card"></i>
                    </div>
                    <span>Payment Methods</span>
                  </td>
                  <td v-if="leftCasino">
                    <div
                      class="feature-value payment-methods"
                      :class="getComparisonClass('paymentMethodsCount')"
                    >
                      <div class="payment-icons">
                        <div
                          v-for="(method, idx) in leftCasino.topPaymentMethods"
                          :key="idx"
                          class="payment-icon"
                          :title="method"
                        >
                          <img
                            :src="`/images/payment-methods/${method
                              .toLowerCase()
                              .replace(' ', '-')}.png`"
                            :alt="method"
                          />
                        </div>
                        <div
                          class="more-methods"
                          v-if="
                            leftCasino.paymentMethodsCount >
                            leftCasino.topPaymentMethods.length
                          "
                        >
                          +{{
                            leftCasino.paymentMethodsCount -
                            leftCasino.topPaymentMethods.length
                          }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td v-if="rightCasino">
                    <div
                      class="feature-value payment-methods"
                      :class="getComparisonClass('paymentMethodsCount', true)"
                    >
                      <div class="payment-icons">
                        <div
                          v-for="(method, idx) in rightCasino.topPaymentMethods"
                          :key="idx"
                          class="payment-icon"
                          :title="method"
                        >
                          <img
                            :src="`/images/payment-methods/${method
                              .toLowerCase()
                              .replace(' ', '-')}.png`"
                            :alt="method"
                          />
                        </div>
                        <div
                          class="more-methods"
                          v-if="
                            rightCasino.paymentMethodsCount >
                            rightCasino.topPaymentMethods.length
                          "
                        >
                          +{{
                            rightCasino.paymentMethodsCount -
                            rightCasino.topPaymentMethods.length
                          }}
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>

                <!-- Supported Languages Row -->
                <tr>
                  <td class="feature-name">
                    <div class="feature-icon">
                      <i class="fas fa-globe"></i>
                    </div>
                    <span>Languages</span>
                  </td>
                  <td v-if="leftCasino">
                    <div
                      class="feature-value languages"
                      :class="getComparisonClass('languagesCount')"
                    >
                      <div class="language-icons">
                        <div
                          v-for="(lang, idx) in leftCasino.topLanguages"
                          :key="idx"
                          class="language-icon"
                          :title="lang"
                        >
                          <img
                            :src="`/images/flags/${lang.toLowerCase()}.png`"
                            :alt="lang"
                          />
                        </div>
                        <div
                          class="more-langs"
                          v-if="
                            leftCasino.languagesCount >
                            leftCasino.topLanguages.length
                          "
                        >
                          +{{
                            leftCasino.languagesCount -
                            leftCasino.topLanguages.length
                          }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td v-if="rightCasino">
                    <div
                      class="feature-value languages"
                      :class="getComparisonClass('languagesCount', true)"
                    >
                      <div class="language-icons">
                        <div
                          v-for="(lang, idx) in rightCasino.topLanguages"
                          :key="idx"
                          class="language-icon"
                          :title="lang"
                        >
                          <img
                            :src="`/images/flags/${lang.toLowerCase()}.png`"
                            :alt="lang"
                          />
                        </div>
                        <div
                          class="more-langs"
                          v-if="
                            rightCasino.languagesCount >
                            rightCasino.topLanguages.length
                          "
                        >
                          +{{
                            rightCasino.languagesCount -
                            rightCasino.topLanguages.length
                          }}
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>

                <!-- Minimum Deposit Row -->
                <tr>
                  <td class="feature-name">
                    <div class="feature-icon">
                      <i class="fas fa-dollar-sign"></i>
                    </div>
                    <span>Min. Deposit</span>
                  </td>
                  <td v-if="leftCasino">
                    <div class="feature-value">
                      <div class="primary-value">
                        {{ leftCasino.minDeposit }}
                      </div>
                    </div>
                  </td>
                  <td v-if="rightCasino">
                    <div class="feature-value">
                      <div class="primary-value">
                        {{ rightCasino.minDeposit }}
                      </div>
                    </div>
                  </td>
                </tr>

                <!-- License Row -->
                <tr>
                  <td class="feature-name">
                    <div class="feature-icon">
                      <i class="fas fa-certificate"></i>
                    </div>
                    <span>Licensed By</span>
                  </td>
                  <td v-if="leftCasino">
                    <div class="feature-value">
                      <div class="primary-value">{{ leftCasino.license }}</div>
                    </div>
                  </td>
                  <td v-if="rightCasino">
                    <div class="feature-value">
                      <div class="primary-value">{{ rightCasino.license }}</div>
                    </div>
                  </td>
                </tr>

                <!-- Year Established Row -->
                <tr>
                  <td class="feature-name">
                    <div class="feature-icon">
                      <i class="fas fa-calendar-alt"></i>
                    </div>
                    <span>Established</span>
                  </td>
                  <td v-if="leftCasino">
                    <div
                      class="feature-value"
                      :class="
                        getComparisonClass('yearEstablished', false, true)
                      "
                    >
                      <div class="primary-value">
                        {{ leftCasino.yearEstablished }}
                      </div>
                    </div>
                  </td>
                  <td v-if="rightCasino">
                    <div
                      class="feature-value"
                      :class="getComparisonClass('yearEstablished', true, true)"
                    >
                      <div class="primary-value">
                        {{ rightCasino.yearEstablished }}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="modal-footer">
          <button class="secondary-btn" @click="resetComparison">
            Reset Comparison
          </button>
          <button class="primary-btn" @click="closeComparisonModal">
            Close
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

// Casino data for comparison (using your existing data)
const casinosData = ref([
  {
    id: 1,
    name: "Lucky Spins",
    logo: "/images/casinos/lucky-spins-logo.png",
    rating: 4.8,
    bonus: "200% up to $1,000",
    bonusDetails: "Wagering: 35x | Min deposit: $20",
    withdrawalTime: "24-48 hours",
    gamesCount: 2500,
    topProviders: ["NetEnt", "Microgaming", "Evolution"],
    providerCount: 32,
    topPaymentMethods: ["Visa", "Mastercard", "PayPal", "Bitcoin"],
    paymentMethodsCount: 12,
    topLanguages: ["en", "de", "fr", "es"],
    languagesCount: 8,
    minDeposit: "$10",
    compatibility: [
      { name: "Desktop", icon: "desktop" },
      { name: "Mobile", icon: "mobile-alt" },
      { name: "Tablet", icon: "tablet-alt" },
    ],
    license: "Malta Gaming Authority",
    yearEstablished: 2018,
    playUrl: "#",
  },
  {
    id: 2,
    name: "Royal Vegas",
    logo: "/images/casinos/royal-vegas-logo.png",
    rating: 4.5,
    bonus: "$1,200 Welcome Package",
    bonusDetails: "Across first 4 deposits | Wagering: 40x",
    withdrawalTime: "1-3 business days",
    gamesCount: 700,
    topProviders: ["Microgaming", "Evolution", "Play'n GO"],
    providerCount: 10,
    topPaymentMethods: ["Visa", "Mastercard", "Skrill", "Neteller"],
    paymentMethodsCount: 9,
    topLanguages: ["en", "de", "fr"],
    languagesCount: 6,
    minDeposit: "$20",
    compatibility: [
      { name: "Desktop", icon: "desktop" },
      { name: "Mobile", icon: "mobile-alt" },
    ],
    license: "Kahnawake Gaming Commission",
    yearEstablished: 2000,
    playUrl: "#",
  },
  {
    id: 3,
    name: "Bitcoin Casino",
    logo: "/images/casinos/bitcoin-casino-logo.png",
    rating: 4.6,
    bonus: "5 BTC Welcome Package",
    bonusDetails: "+ 200 Free Spins | Crypto-only casino",
    withdrawalTime: "Instant",
    gamesCount: 3000,
    topProviders: ["Pragmatic Play", "Yggdrasil", "BGaming", "Booongo"],
    providerCount: 45,
    topPaymentMethods: [
      "Bitcoin",
      "Ethereum",
      "Litecoin",
      "Dogecoin",
      "Ripple",
    ],
    paymentMethodsCount: 14,
    topLanguages: ["en", "jp", "kr", "ru"],
    languagesCount: 9,
    minDeposit: "0.0001 BTC",
    compatibility: [
      { name: "Desktop", icon: "desktop" },
      { name: "Mobile", icon: "mobile-alt" },
      { name: "Tablet", icon: "tablet-alt" },
    ],
    license: "Curacao eGaming",
    yearEstablished: 2019,
    playUrl: "#",
  },
  {
    id: 4,
    name: "Jackpot City",
    logo: "/images/casinos/jackpot-city-logo.png",
    rating: 4.3,
    bonus: "100% up to $400",
    bonusDetails: "On first 4 deposits, total $1,600",
    withdrawalTime: "24-48 hours",
    gamesCount: 600,
    topProviders: ["Microgaming", "Evolution"],
    providerCount: 4,
    topPaymentMethods: ["Visa", "Mastercard", "iDebit", "Interac"],
    paymentMethodsCount: 8,
    topLanguages: ["en", "fr", "de"],
    languagesCount: 5,
    minDeposit: "$10",
    compatibility: [
      { name: "Desktop", icon: "desktop" },
      { name: "Mobile", icon: "mobile-alt" },
      { name: "Tablet", icon: "tablet-alt" },
    ],
    license: "Malta Gaming Authority",
    yearEstablished: 1998,
    playUrl: "#",
  },
  {
    id: 5,
    name: "Vegas Paradise",
    logo: "/images/casinos/vegas-paradise-logo.png",
    rating: 4.7,
    bonus: "300% up to $1,500",
    bonusDetails: "+ 50 Free Spins on Book of Dead",
    withdrawalTime: "1-5 business days",
    gamesCount: 1800,
    topProviders: ["NetEnt", "Microgaming", "Play'n GO", "Red Tiger"],
    providerCount: 28,
    topPaymentMethods: ["Visa", "Mastercard", "PayPal", "Skrill", "Neteller"],
    paymentMethodsCount: 15,
    topLanguages: ["en", "de", "fr", "fi", "no"],
    languagesCount: 12,
    minDeposit: "$20",
    compatibility: [
      { name: "Desktop", icon: "desktop" },
      { name: "Mobile", icon: "mobile-alt" },
      { name: "Tablet", icon: "tablet-alt" },
    ],
    license: "UK Gambling Commission",
    yearEstablished: 2014,
    playUrl: "#",
  },
  {
    id: 6,
    name: "King Billy",
    logo: "/images/casinos/king-billy-logo.png",
    rating: 4.8,
    bonus: "151% up to $500",
    bonusDetails: "+ 51 Free Spins | Code: WELCOME",
    withdrawalTime: "0-24 hours",
    gamesCount: 5000,
    topProviders: [
      "NetEnt",
      "Microgaming",
      "Play'n GO",
      "Pragmatic Play",
      "Yggdrasil",
    ],
    providerCount: 51,
    topPaymentMethods: ["Visa", "Mastercard", "Bitcoin", "Ethereum", "Skrill"],
    paymentMethodsCount: 18,
    topLanguages: ["en", "de", "fi", "jp", "no", "ca"],
    languagesCount: 14,
    minDeposit: "$10",
    compatibility: [
      { name: "Desktop", icon: "desktop" },
      { name: "Mobile", icon: "mobile-alt" },
      { name: "Tablet", icon: "tablet-alt" },
    ],
    license: "Malta Gaming Authority",
    yearEstablished: 2017,
    playUrl: "#",
  },
  {
    id: 7,
    name: "Betway",
    logo: "/images/casinos/betway-logo.png",
    rating: 4.6,
    bonus: "100% up to $250",
    bonusDetails: "Wagering: 50x | Min deposit: $20",
    withdrawalTime: "2-5 business days",
    gamesCount: 400,
    topProviders: ["Microgaming", "NetEnt"],
    providerCount: 6,
    topPaymentMethods: ["Visa", "Mastercard", "PayPal", "Neteller"],
    paymentMethodsCount: 10,
    topLanguages: ["en", "es", "de", "fr", "it"],
    languagesCount: 10,
    minDeposit: "$10",
    compatibility: [
      { name: "Desktop", icon: "desktop" },
      { name: "Mobile", icon: "mobile-alt" },
      { name: "Tablet", icon: "tablet-alt" },
    ],
    license: "UK Gambling Commission",
    yearEstablished: 2006,
    playUrl: "#",
  },
  {
    id: 8,
    name: "888 Casino",
    logo: "/images/casinos/888-logo.png",
    rating: 4.4,
    bonus: "$200 Welcome Bonus",
    bonusDetails: "100% match | 30x wagering",
    withdrawalTime: "1-5 business days",
    gamesCount: 1000,
    topProviders: ["NetEnt", "Evolution", "Red Tiger", "888 Gaming"],
    providerCount: 12,
    topPaymentMethods: ["Visa", "Mastercard", "PayPal", "Apple Pay"],
    paymentMethodsCount: 12,
    topLanguages: ["en", "de", "es", "fr", "pt", "ru"],
    languagesCount: 18,
    minDeposit: "$20",
    compatibility: [
      { name: "Desktop", icon: "desktop" },
      { name: "Mobile", icon: "mobile-alt" },
      { name: "Tablet", icon: "tablet-alt" },
    ],
    license: "Gibraltar Regulatory Authority",
    yearEstablished: 1997,
    playUrl: "#",
  },
  {
    id: 9,
    name: "LeoVegas",
    logo: "/images/casinos/leovegas-logo.png",
    rating: 4.7,
    bonus: "$1,000 + 200 Free Spins",
    bonusDetails: "Across first 4 deposits | Mobile focused",
    withdrawalTime: "24 hours",
    gamesCount: 2500,
    topProviders: [
      "NetEnt",
      "Microgaming",
      "Play'n GO",
      "Evolution",
      "Pragmatic",
    ],
    providerCount: 48,
    topPaymentMethods: ["Visa", "Mastercard", "Trustly", "Skrill"],
    paymentMethodsCount: 10,
    topLanguages: ["en", "de", "fi", "se", "no", "ca"],
    languagesCount: 9,
    minDeposit: "$10",
    compatibility: [
      { name: "Desktop", icon: "desktop" },
      { name: "Mobile", icon: "mobile-alt" },
      { name: "Tablet", icon: "tablet-alt" },
    ],
    license: "Malta Gaming Authority",
    yearEstablished: 2012,
    playUrl: "#",
  },
  {
    id: 10,
    name: "Casumo",
    logo: "/images/casinos/casumo-logo.png",
    rating: 4.6,
    bonus: "100% up to $300",
    bonusDetails: "+ 20 Free Spins | No bonus code needed",
    withdrawalTime: "Instant - 24 hours",
    gamesCount: 2000,
    topProviders: [
      "NetEnt",
      "Microgaming",
      "Play'n GO",
      "Evolution",
      "Red Tiger",
    ],
    providerCount: 31,
    topPaymentMethods: ["Visa", "Mastercard", "Apple Pay", "MuchBetter"],
    paymentMethodsCount: 9,
    topLanguages: ["en", "de", "fi", "no", "se"],
    languagesCount: 6,
    minDeposit: "$10",
    compatibility: [
      { name: "Desktop", icon: "desktop" },
      { name: "Mobile", icon: "mobile-alt" },
      { name: "Tablet", icon: "tablet-alt" },
    ],
    license: "UK Gambling Commission",
    yearEstablished: 2012,
    playUrl: "#",
  },
]);

// Selected casinos
const leftCasino = ref(null);
const rightCasino = ref(null);

// Modal states
const showPickerModal = ref(false);
const showComparisonModal = ref(false);
const currentSide = ref("left"); // Which side we're currently selecting for

// Check if comparison is possible
const canCompare = computed(() => {
  return leftCasino.value && rightCasino.value;
});

// Open casino picker modal for left side
const openLeftSelection = () => {
  currentSide.value = "left";
  showPickerModal.value = true;
};

// Open casino picker modal for right side
const openRightSelection = () => {
  currentSide.value = "right";
  showPickerModal.value = true;
};

// Close picker modal
const closePickerModal = () => {
  showPickerModal.value = false;
};

// Select a casino for current side
const selectCasino = (casino) => {
  // Check if casino is already selected on the other side
  if (
    (currentSide.value === "left" && rightCasino.value?.id === casino.id) ||
    (currentSide.value === "right" && leftCasino.value?.id === casino.id)
  ) {
    return; // Can't select the same casino on both sides
  }

  if (currentSide.value === "left") {
    leftCasino.value = casino;
  } else {
    rightCasino.value = casino;
  }

  closePickerModal();
};

// Open comparison modal
const openComparisonModal = () => {
  if (canCompare.value) {
    showComparisonModal.value = true;
  }
};

// Close comparison modal
const closeComparisonModal = () => {
  showComparisonModal.value = false;
};

// Reset the comparison (clear both selections)
const resetComparison = () => {
  leftCasino.value = null;
  rightCasino.value = null;
  closeComparisonModal();
};

// Helper function to determine better/worse for comparison highlighting
const getComparisonClass = (
  property,
  isRight = false,
  lowerIsBetter = false
) => {
  if (!leftCasino.value || !rightCasino.value) return "";

  let leftValue = leftCasino.value[property];
  let rightValue = rightCasino.value[property];

  // For withdrawal time, we need to compare differently (instant is best)
  if (property === "withdrawalTime") {
    if (
      leftValue.toLowerCase().includes("instant") &&
      !rightValue.toLowerCase().includes("instant")
    ) {
      return isRight ? "worse" : "better";
    } else if (
      !leftValue.toLowerCase().includes("instant") &&
      rightValue.toLowerCase().includes("instant")
    ) {
      return isRight ? "better" : "worse";
    }

    // Try to extract numeric values if possible
    const leftHours = extractHours(leftValue);
    const rightHours = extractHours(rightValue);

    if (leftHours !== null && rightHours !== null) {
      if (leftHours < rightHours) {
        return isRight ? "worse" : "better";
      } else if (leftHours > rightHours) {
        return isRight ? "better" : "worse";
      }
    }

    return "";
  }

  // For numeric values
  if (typeof leftValue === "number" && typeof rightValue === "number") {
    if (lowerIsBetter) {
      if (leftValue < rightValue) {
        return isRight ? "worse" : "better";
      } else if (leftValue > rightValue) {
        return isRight ? "better" : "worse";
      }
    } else {
      if (leftValue > rightValue) {
        return isRight ? "worse" : "better";
      } else if (leftValue < rightValue) {
        return isRight ? "better" : "worse";
      }
    }
  }

  return "";
};

// Helper function to extract hours from withdrawal time string
const extractHours = (timeStr) => {
  const hoursMatch = timeStr.match(/(\d+)[\s-]*hour/i);
  if (hoursMatch) return parseInt(hoursMatch[1]);

  const daysMatch = timeStr.match(/(\d+)[\s-]*day/i);
  if (daysMatch) return parseInt(daysMatch[1]) * 24;

  const businessDaysMatch = timeStr.match(/(\d+)[\s-]*business/i);
  if (businessDaysMatch) return parseInt(businessDaysMatch[1]) * 24;

  if (timeStr.toLowerCase().includes("instant")) return 0;

  return null;
};
</script>

<style scoped>
/* Main container */
.casino-comparison {
  margin-left: auto;
  margin-right: auto;
  color: white;
  position: relative;
  overflow: hidden;
  background-color: transparent;
}

/* Animated background - replacing the current animated-bg styles */
.animated-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #1e1a28;
  overflow: hidden;
}

.animated-bg::before {
  content: "";
  position: absolute;
  top: -10%;
  left: -10%;
  right: -10%;
  bottom: -10%;
  background: radial-gradient(
      ellipse at 20% 20%,
      rgba(221, 69, 68, 0.08) 0%,
      rgba(221, 69, 68, 0) 70%
    ),
    radial-gradient(
      ellipse at 80% 80%,
      rgba(69, 137, 221, 0.08) 0%,
      rgba(69, 137, 221, 0) 70%
    );
  filter: blur(10px);
  opacity: 0.8;
  z-index: -1;
}

.animated-bg::after {
  content: "";
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  z-index: -1;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dd4544' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
    url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23e8937c' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E");
  animation: slowDrift 35s linear infinite;
}

/* Add floating card effects */
.battle-side .selected-casino-card {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  animation: cardFloat 6s ease-in-out infinite;
}

.right-side .selected-casino-card {
  animation-delay: 0.5s;
}

.vs-circle {
  animation: pulseGlow 3s ease-in-out infinite;
}

/* Create animations */
@keyframes slowDrift {
  from {
    transform: translate(-10px, 10px) rotate(0deg);
  }
  to {
    transform: translate(10px, -10px) rotate(1deg);
  }
}

@keyframes cardFloat {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulseGlow {
  0%,
  100% {
    box-shadow: 0 5px 15px rgba(221, 69, 68, 0.3);
  }
  50% {
    box-shadow: 0 5px 30px rgba(221, 69, 68, 0.5);
  }
}

/* Remove the existing background animation */
@keyframes backgroundShift {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

/* Header styles */
.comparison-header {
  margin-bottom: 2.5rem;
  position: relative;
  padding-top: 2rem;
}

.comparison-title-container {
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  border-radius: 3px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 700px;
  margin: 1.5rem auto 0;
}

/* Rest of your styles remain the same */
.battle-selection {
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  position: relative;
}

.battle-side {
  flex: 1;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.side-title {
  margin-bottom: 1.5rem;
  text-align: center;
}

.pill {
  padding: 0.4rem 1.2rem;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  display: inline-block;
}

.selected-casino-card {
  width: 100%;
  height: 320px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(20px);
}

.selected-casino-card.loaded {
  opacity: 1;
  transform: translateY(0);
}

.left-side .selected-casino-card {
  background: linear-gradient(
    135deg,
    rgba(221, 69, 68, 0.1),
    rgba(255, 255, 255, 0.04)
  );
}

.right-side .selected-casino-card {
  background: linear-gradient(
    135deg,
    rgba(69, 137, 221, 0.1),
    rgba(255, 255, 255, 0.04)
  );
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  width: 100%;
}

.selected-casino-logo {
  width: 120px;
  height: 60px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  overflow: hidden;
}

.selected-casino-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.selected-casino-rating {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin-left: auto;
}

.rating-value {
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
}

.stars {
  color: #ffc107;
  font-size: 0.9rem;
}

.selected-casino-name {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
  text-align: center;
}

.selected-casino-bonus {
  background: rgba(221, 69, 68, 0.08);
  border: 1px dashed rgba(221, 69, 68, 0.2);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  width: 100%;
  margin-bottom: 1.5rem;
}

.right-side .selected-casino-bonus {
  background: rgba(69, 137, 221, 0.08);
  border: 1px dashed rgba(69, 137, 221, 0.2);
}

.change-selection-btn {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: auto;
}

.change-selection-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  color: white;
}

.empty-selection {
  width: 100%;
  height: 320px;
  background: rgba(255, 255, 255, 0.02);
  border: 2px dashed rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.empty-selection:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}

.empty-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.empty-icon i {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.4);
}

.empty-selection p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
}

/* VS Battle Center */
.battle-vs {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  margin-top: 4rem;
}

.vs-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  position: relative;
  box-shadow: 0 5px 15px rgba(221, 69, 68, 0.3);
  z-index: 2;
}

.vs-circle span {
  font-size: 1.1rem;
  font-weight: 800;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.vs-line {
  width: 2px;
  flex: 1;
  background: linear-gradient(
    to bottom,
    rgba(221, 69, 68, 0.6) 0%,
    rgba(221, 69, 68, 0.4) 50%,
    rgba(221, 69, 68, 0.1) 100%
  );
  margin-bottom: 1.5rem;
}

.compare-now-btn {
  background: linear-gradient(135deg, #dd4544, #e8937c);
  border: none;
  color: white;
  border-radius: 30px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(221, 69, 68, 0.25);
}

.compare-now-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(221, 69, 68, 0.35);
}

.compare-now-btn:disabled {
  background: rgba(221, 69, 68, 0.3);
  cursor: not-allowed;
  box-shadow: none;
}

/* Casino Picker Modal */
.casino-picker-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
}

.picker-modal-container {
  position: relative;
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  background: #1e1a28;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1001;
}

.picker-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.picker-modal-header h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
}

.close-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.picker-modal-body {
  padding: 1.5rem;
  overflow-y: auto;
  max-height: 70vh;
}

.casino-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
}

.casino-pick-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s ease;
  cursor: pointer;
}

.casino-pick-card:hover:not(.unavailable) {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-3px);
}

.casino-pick-card.unavailable {
  opacity: 0.4;
  cursor: not-allowed;
  position: relative;
}

.casino-pick-card.unavailable::after {
  content: "Already Selected";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(221, 69, 68, 0.8);
  color: white;
  padding: 0.3rem 0.7rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 600;
}

.casino-pick-logo {
  width: 100px;
  height: 50px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  margin-bottom: 0.8rem;
}

.casino-pick-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.casino-pick-name {
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 0.5rem;
}

.mini-rating {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8rem;
}

.mini-rating i {
  color: #ffc107;
}

/* Comparison Modal (keeping much of your original styles) */
.comparison-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-container {
  position: relative;
  width: 90%;
  max-width: 1000px;
  max-height: 90vh;
  background: #1e1a28;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1001;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.modal-header h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
}

.modal-body {
  padding: 0;
  overflow-y: auto;
  flex: 1;
}

.comparison-table-wrapper {
  overflow-x: auto;
  padding: 1rem;
}

.comparison-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

.comparison-table th,
.comparison-table td {
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.comparison-table tr:last-child td {
  border-bottom: none;
}

.feature-column {
  width: 20%;
  min-width: 180px;
  text-align: left;
  position: sticky;
  left: 0;
  background: #1e1a28;
  z-index: 2;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
}

.casino-column {
  width: 40%;
  min-width: 200px;
}

.feature-name {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-align: left;
  font-weight: 500;
}

.feature-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(221, 69, 68, 0.1);
  border-radius: 50%;
  color: #dd4544;
  font-size: 0.9rem;
}

.feature-value {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  transition: all 0.3s ease;
}

.feature-value.better {
  background: rgba(76, 175, 80, 0.06);
}

.feature-value.better::after {
  content: "✓ Better";
  position: absolute;
  top: -0.6rem;
  right: 0.5rem;
  font-size: 0.7rem;
  font-weight: 600;
  color: #4caf50;
  background: rgba(76, 175, 80, 0.1);
  padding: 0.1rem 0.4rem;
  border-radius: 3px;
}

.feature-value.worse {
  background: rgba(255, 87, 34, 0.03);
}

.primary-value {
  font-weight: 600;
  color: white;
}

.secondary-value {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
}

.bonus-value {
  background: rgba(221, 69, 68, 0.05);
  border: 1px dashed rgba(221, 69, 68, 0.15);
  border-radius: 6px;
  padding: 0.5rem;
  width: 100%;
}

.providers-chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.35rem;
}

.provider-chip,
.more-chip {
  padding: 0.25rem 0.5rem;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 50px;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.8);
}

.more-chip {
  background: rgba(255, 255, 255, 0.02);
  color: rgba(255, 255, 255, 0.5);
}

.payment-methods,
.languages {
  padding: 0.5rem;
}

.payment-icons,
.language-icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.payment-icon {
  width: 28px;
  height: 18px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 3px;
  padding: 0.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.payment-icon img,
.language-icon img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.more-methods,
.more-langs {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
}

.language-icon {
  width: 24px;
  height: 16px;
  border-radius: 2px;
  overflow: hidden;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.secondary-btn,
.primary-btn {
  padding: 0.6rem 1.25rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.secondary-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.primary-btn {
  background: linear-gradient(135deg, #dd4544, #e8937c);
  color: white;
  border: none;
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(221, 69, 68, 0.3);
}

/* Responsive styles */
@media (max-width: 992px) {
  .section-title {
    font-size: 2rem;
  }

  .battle-side {
    max-width: 260px;
  }

  .selected-casino-logo {
    width: 100px;
    height: 50px;
  }

  .selected-casino-name {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .battle-selection {
    flex-direction: column;
    gap: 3rem;
  }

  .battle-side {
    max-width: 100%;
  }

  /* Fix the order of elements on mobile */
  .battle-vs {
    order: 0; /* Change from -1 to 0 to maintain natural order */
    margin: 2rem 0; /* Add margin above and below */
  }

  /* Ensure sides maintain proper order */
  .left-side {
    order: -1; /* First casino always appears first */
  }

  .right-side {
    order: 1; /* Second casino always appears last */
  }

  .vs-line {
    display: none;
  }

  .vs-circle::before,
  .vs-circle::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 100px;
    background: linear-gradient(
      to right,
      rgba(221, 69, 68, 0.6),
      rgba(221, 69, 68, 0.1)
    );
    top: 50%;
  }

  .vs-circle::before {
    right: 70px;
  }

  .vs-circle::after {
    left: 70px;
    transform: scaleX(-1);
  }

  /* Adjust spacing for better mobile presentation */
  .section-title {
    font-size: 1.75rem;
  }

  .section-subtitle {
    font-size: 0.9rem;
  }

  /* Create a clearer visual hierarchy for the VS element */
  .vs-circle {
    width: 70px;
    height: 70px;
    font-size: 1.2rem;
    box-shadow: 0 5px 20px rgba(221, 69, 68, 0.4);
  }

  /* Add a visual separator between elements */
  .battle-side:after {
    content: "";
    position: absolute;
    bottom: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 1px;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0)
    );
  }

  .left-side:after {
    display: none; /* Remove separator after first casino */
  }

  /* Rest of your existing mobile styles */
  .casino-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  .compared-casino-logo {
    width: 70px;
    height: 35px;
  }

  .compared-casino-name {
    font-size: 0.9rem;
  }

  .play-button {
    height: 32px;
    font-size: 0.75rem;
  }

  .feature-icon {
    width: 28px;
    height: 28px;
    font-size: 0.8rem;
  }
}

@media (max-width: 576px) {
  .section-title {
    font-size: 1.5rem;
  }

  .casino-grid {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 0.75rem;
  }

  .casino-selection-card {
    padding: 1rem;
  }

  .selected-casino-logo {
    width: 90px;
    height: 45px;
  }

  .selected-casino-name {
    font-size: 1rem;
  }

  .selected-casino-bonus {
    font-size: 0.85rem;
    padding: 0.6rem 0.8rem;
  }

  .change-selection-btn {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }

  .feature-name {
    gap: 0.5rem;
  }

  .feature-column {
    min-width: 150px;
  }

  .casino-column {
    min-width: 180px;
  }

  .feature-icon {
    width: 24px;
    height: 24px;
    font-size: 0.75rem;
  }

  .vs-circle::before,
  .vs-circle::after {
    width: 50px;
  }

  .vs-circle::before {
    right: 40px;
  }

  .vs-circle::after {
    left: 40px;
  }

  .modal-footer {
    flex-direction: column-reverse;
    padding: 1rem;
    gap: 0.75rem;
  }

  .primary-btn,
  .secondary-btn {
    width: 100%;
    text-align: center;
  }
}
</style>

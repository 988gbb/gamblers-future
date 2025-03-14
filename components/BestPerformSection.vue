<template>
  <section class="bg-gray-50 py-8">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Top Online Casinos</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div
          v-for="casino in casinos"
          :key="casino.id"
          class="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow border border-gray-100"
        >
          <div class="flex items-center justify-between mb-3">
            <span class="text-lg font-bold text-blue-600">{{
              casino.name
            }}</span>
            <div class="flex items-center">
              <span class="text-yellow-400 mr-1">★</span>
              <span class="text-sm font-medium text-gray-600">
                {{ casino.rating }}
              </span>
            </div>
          </div>
          <div class="space-y-2">
            <p class="text-xs text-gray-500">{{ casino.mainBenefit }}</p>
            <div
              class="text-green-600 font-medium text-sm p-2 bg-green-50 rounded"
            >
              {{ casino.bonus }}
            </div>
            <div class="pt-2">
              <a
                :href="casino.link"
                class="block w-full text-center bg-blue-600 text-white text-sm py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Play Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Casino {
  id: number;
  name: string;
  rating: number;
  mainBenefit: string;
  bonus: string;
  link: string;
}

const casinos: Casino[] = [
  {
    id: 1,
    name: "Bet365",
    rating: 4.9,
    mainBenefit: "Best Overall Experience",
    bonus: "Up to €100",
    link: "#",
  },
  {
    id: 2,
    name: "888Casino",
    rating: 4.8,
    mainBenefit: "Exclusive Games",
    bonus: "200% up to €300",
    link: "#",
  },
  {
    id: 3,
    name: "Unibet",
    rating: 4.8,
    mainBenefit: "Fast Payouts",
    bonus: "100% up to €200",
    link: "#",
  },
  {
    id: 4,
    name: "LeoVegas",
    rating: 4.7,
    mainBenefit: "Best Mobile Casino",
    bonus: "Up to €1000",
    link: "#",
  },
  {
    id: 5,
    name: "Betway",
    rating: 4.7,
    mainBenefit: "24/7 Support",
    bonus: "€1000 Welcome Package",
    link: "#",
  },
  {
    id: 6,
    name: "William Hill",
    rating: 4.6,
    mainBenefit: "Trusted Brand",
    bonus: "100% up to €300",
    link: "#",
  },
  {
    id: 7,
    name: "Pokerstars",
    rating: 4.6,
    mainBenefit: "Poker Specialist",
    bonus: "€500 + 100 Free Spins",
    link: "#",
  },
  {
    id: 8,
    name: "Bwin",
    rating: 4.5,
    mainBenefit: "Great Live Casino",
    bonus: "Up to €200",
    link: "#",
  },
  {
    id: 9,
    name: "Betfair",
    rating: 4.5,
    mainBenefit: "Exchange & Casino",
    bonus: "€100 + 100 Free Spins",
    link: "#",
  },
  {
    id: 10,
    name: "Mr Green",
    rating: 4.4,
    mainBenefit: "Award-Winning Casino",
    bonus: "Up to €100",
    link: "#",
  },
];
</script>

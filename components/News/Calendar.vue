<template>
  <section class="news-calendar-section">
    <div class="calendar-header">
      <h3 class="calendar-title">
        <i class="fas fa-calendar-alt"></i>
        Upcoming Events
      </h3>
      <div class="calendar-controls">
        <button class="month-nav prev" @click="previousMonth">
          <i class="fas fa-chevron-left"></i>
        </button>
        <div class="current-month">
          {{ currentMonthName }} {{ currentYear }}
        </div>
        <button class="month-nav next" @click="nextMonth">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>

    <div class="calendar-grid">
      <div v-for="day in weekDays" :key="day" class="calendar-day-header">
        {{ day }}
      </div>
      <div
        v-for="day in calendarDays"
        :key="`day-${day.date}`"
        class="calendar-day"
        :class="{
          'outside-month': !day.currentMonth,
          today: day.isToday,
          'has-events': day.events.length > 0,
        }"
      >
        <div class="day-number">{{ day.dayOfMonth }}</div>
        <div v-if="day.events.length > 0" class="day-events">
          <div
            v-for="(event, index) in day.events.slice(0, 2)"
            :key="`event-${day.date}-${index}`"
            class="event-pill"
            :class="event.type"
            @click="selectEvent(event)"
          >
            {{ event.title }}
          </div>
          <div
            v-if="day.events.length > 2"
            class="more-events"
            @click="viewAllEvents(day)"
          >
            +{{ day.events.length - 2 }} more
          </div>
        </div>
      </div>
    </div>

    <div v-if="showEventModal" class="event-modal">
      <div class="event-modal-content">
        <button class="close-modal" @click="closeModal">
          <i class="fas fa-times"></i>
        </button>
        <div class="event-modal-header">
          <div class="event-type-badge" :class="selectedEvent.type">
            <i :class="getEventIcon(selectedEvent.type)"></i>
            {{ formatEventType(selectedEvent.type) }}
          </div>
          <h4 class="event-title">{{ selectedEvent.title }}</h4>
          <div class="event-date">
            <i class="fas fa-calendar-day"></i>
            {{ formatEventDate(selectedEvent.date) }}
          </div>
        </div>
        <div class="event-details">
          <p>{{ selectedEvent.description }}</p>

          <div v-if="selectedEvent.location" class="event-location">
            <i class="fas fa-map-marker-alt"></i>
            <span>{{ selectedEvent.location }}</span>
          </div>

          <div v-if="selectedEvent.time" class="event-time">
            <i class="fas fa-clock"></i>
            <span>{{ selectedEvent.time }}</span>
          </div>

          <div v-if="selectedEvent.link" class="event-link">
            <a
              :href="selectedEvent.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ selectedEvent.linkText || "Learn More" }}
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showDayModal" class="day-modal">
      <div class="day-modal-content">
        <button class="close-modal" @click="closeDayModal">
          <i class="fas fa-times"></i>
        </button>
        <div class="day-modal-header">
          <h4>Events on {{ formatDayModalDate(selectedDay.date) }}</h4>
        </div>
        <div class="day-events-list">
          <div
            v-for="(event, index) in selectedDay.events"
            :key="`day-event-${index}`"
            class="day-event-item"
            @click="selectEvent(event)"
          >
            <div class="event-type-indicator" :class="event.type"></div>
            <div class="event-info">
              <div class="event-title">{{ event.title }}</div>
              <div class="event-time" v-if="event.time">{{ event.time }}</div>
            </div>
            <div class="event-arrow">
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

// State
const currentMonth = ref(new Date().getMonth());
const currentYear = ref(new Date().getFullYear());
const showEventModal = ref(false);
const showDayModal = ref(false);
const selectedEvent = ref({});
const selectedDay = ref({});

// Sample events data - in a real application, this would come from an API
const events = [
  {
    id: 1,
    title: "WSOP 2025 Main Event",
    type: "tournament",
    date: "2025-06-01",
    time: "12:00 PM PST",
    description:
      "The World Series of Poker Main Event kicks off with a $10,000 buy-in and an estimated prize pool of over $80 million.",
    location: "Las Vegas, NV",
    link: "/events/wsop-2025",
    linkText: "Tournament Details",
  },
  {
    id: 2,
    title: "Evolution Gaming Live Casino Launch",
    type: "release",
    date: "2025-04-15",
    description:
      "Evolution Gaming launches their next-generation live casino platform with revolutionary AR features and multi-angle streaming.",
    link: "/news/evolution-gaming-next-gen",
  },
  {
    id: 3,
    title: "Nevada Gaming Commission Hearing",
    type: "industry",
    date: "2025-04-10",
    time: "10:00 AM PST",
    description:
      "Public hearing on proposed regulations for AI-powered gambling systems and player protection measures.",
    location: "Carson City, NV",
    link: "/news/nevada-gaming-commission-ai-regulations",
  },
  {
    id: 4,
    title: "NetEnt Slots Championship",
    type: "tournament",
    date: "2025-04-22",
    time: "2:00 PM GMT",
    description:
      "Online slots tournament with a $500,000 guaranteed prize pool across all NetEnt games.",
    link: "/tournaments/netent-championship",
  },
  {
    id: 5,
    title: "Microgaming April Release: Immortal Romance 2",
    type: "release",
    date: "2025-04-05",
    description:
      "The long-awaited sequel to the vampire-themed slot classic with expanded storylines and revolutionary bonus features.",
    link: "/games/immortal-romance-2",
  },
  {
    id: 6,
    title: "Gamblers Anonymous Virtual Summit",
    type: "industry",
    date: "2025-04-28",
    time: "9:00 AM - 5:00 PM EST",
    description:
      "Annual virtual conference on responsible gambling, featuring experts in addiction treatment and prevention.",
    link: "/events/ga-summit",
  },
  {
    id: 7,
    title: "Poker Masters High Roller Series",
    type: "tournament",
    date: "2025-05-10",
    time: "1:00 PM PST",
    description:
      "$50,000 buy-in high roller poker tournament series with multiple events and a $5M guaranteed prize pool.",
    location: "ARIA Resort & Casino, Las Vegas",
    link: "/tournaments/poker-masters",
  },
  {
    id: 8,
    title: "iGaming Innovation Conference",
    type: "industry",
    date: "2025-05-15",
    time: "All Day",
    description:
      "Leading industry conference showcasing the latest in gambling technology, regulation, and marketing.",
    location: "London, UK",
    link: "/events/igaming-innovation",
  },
  {
    id: 9,
    title: "Exclusive Vegas Hotel Promotions",
    type: "promotion",
    date: "2025-04-17",
    description:
      "Special rates and casino credits for Gambler's Future members at top Las Vegas Strip hotels.",
    link: "/promotions/vegas-hotel-deals",
  },
  {
    id: 10,
    title: "PlayTech New Platform Launch",
    type: "release",
    date: "2025-05-01",
    description:
      "PlayTech unveils their completely redesigned casino platform with integrated social features.",
    link: "/news/playtech-social-platform",
  },
  {
    id: 11,
    title: "GF Exclusive: 200% Deposit Match",
    type: "promotion",
    date: "2025-04-20",
    description:
      "24-hour exclusive promotion for Gambler's Future members at participating casinos.",
    link: "/promotions/exclusive-deposit-match",
  },
  {
    id: 12,
    title: "Virtual Reality Casino Preview",
    type: "industry",
    date: "2025-04-25",
    time: "3:00 PM EST",
    description:
      "Live streaming preview of the world's first fully immersive VR casino experience.",
    link: "/events/vr-casino-preview",
  },
];

// Computed properties
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const currentMonthName = computed(() => {
  const date = new Date(currentYear.value, currentMonth.value, 1);
  return date.toLocaleString("default", { month: "long" });
});

const calendarDays = computed(() => {
  const days = [];
  const firstDayOfMonth = new Date(currentYear.value, currentMonth.value, 1);
  const lastDayOfMonth = new Date(currentYear.value, currentMonth.value + 1, 0);

  // Get the first day of the week (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfWeek = firstDayOfMonth.getDay();

  // Add days from the previous month to fill the first row
  const prevMonthLastDay = new Date(
    currentYear.value,
    currentMonth.value,
    0
  ).getDate();
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    const day = prevMonthLastDay - i;
    const date = new Date(currentYear.value, currentMonth.value - 1, day);
    days.push({
      date: date.toISOString().split("T")[0],
      dayOfMonth: day,
      currentMonth: false,
      isToday: isToday(date),
      events: getEventsForDate(date),
    });
  }

  // Add days for the current month
  for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
    const date = new Date(currentYear.value, currentMonth.value, day);
    days.push({
      date: date.toISOString().split("T")[0],
      dayOfMonth: day,
      currentMonth: true,
      isToday: isToday(date),
      events: getEventsForDate(date),
    });
  }

  // Add days from the next month to complete the grid
  const remainingDays = 42 - days.length; // 6 rows of 7 days
  for (let day = 1; day <= remainingDays; day++) {
    const date = new Date(currentYear.value, currentMonth.value + 1, day);
    days.push({
      date: date.toISOString().split("T")[0],
      dayOfMonth: day,
      currentMonth: false,
      isToday: isToday(date),
      events: getEventsForDate(date),
    });
  }

  return days;
});

// Helper functions
function isToday(date) {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

function getEventsForDate(date) {
  const dateString = date.toISOString().split("T")[0];
  return events.filter((event) => event.date === dateString);
}

function formatEventDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatDayModalDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function formatEventType(type) {
  const types = {
    tournament: "Tournament",
    release: "Game Release",
    industry: "Industry Event",
    promotion: "Promotion",
  };
  return types[type] || type;
}

function getEventIcon(type) {
  const icons = {
    tournament: "fas fa-trophy",
    release: "fas fa-gamepad",
    industry: "fas fa-briefcase",
    promotion: "fas fa-tags",
  };
  return icons[type] || "fas fa-calendar-day";
}

// Methods
function previousMonth() {
  if (currentMonth.value === 0) {
    currentMonth.value = 11;
    currentYear.value--;
  } else {
    currentMonth.value--;
  }
}

function nextMonth() {
  if (currentMonth.value === 11) {
    currentMonth.value = 0;
    currentYear.value++;
  } else {
    currentMonth.value++;
  }
}

function selectEvent(event) {
  selectedEvent.value = event;
  showEventModal.value = true;
  showDayModal.value = false;
}

function closeModal() {
  showEventModal.value = false;
}

function viewAllEvents(day) {
  selectedDay.value = day;
  showDayModal.value = true;
}

function closeDayModal() {
  showDayModal.value = false;
}

onMounted(() => {
  // Find current or upcoming events to highlight initially
  const today = new Date();
  const todayString = today.toISOString().split("T")[0];

  // If there are events today, make sure the calendar shows this month
  if (events.some((event) => event.date === todayString)) {
    currentMonth.value = today.getMonth();
    currentYear.value = today.getFullYear();
  } else {
    // Otherwise, find the next event and show that month
    const futureEvents = events
      .filter((event) => event.date >= todayString)
      .sort((a, b) => a.date.localeCompare(b.date));

    if (futureEvents.length > 0) {
      const nextEvent = futureEvents[0];
      const nextEventDate = new Date(nextEvent.date);
      currentMonth.value = nextEventDate.getMonth();
      currentYear.value = nextEventDate.getFullYear();
    }
  }
});
</script>

<style scoped>
.news-calendar-section {
  padding: 2rem;
  background: rgba(26, 23, 33, 0.3);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
}

.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.calendar-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.calendar-title i {
  color: #dd4544;
}

.calendar-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.month-nav {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.month-nav:hover {
  background: rgba(221, 69, 68, 0.1);
  border-color: rgba(221, 69, 68, 0.3);
  color: #dd4544;
}

.current-month {
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  min-width: 140px;
  text-align: center;
}

/* Calendar grid */
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
}

.calendar-day-header {
  text-align: center;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
}

.calendar-day {
  height: 90px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 0.5rem;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.calendar-day:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
}

.calendar-day.outside-month {
  opacity: 0.5;
}

.calendar-day.today {
  background: rgba(221, 69, 68, 0.1);
  border: 1px solid rgba(221, 69, 68, 0.2);
}

.calendar-day.has-events {
  cursor: pointer;
}

.day-number {
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
  margin-bottom: 0.5rem;
}

.today .day-number {
  color: #dd4544;
  font-weight: 700;
}

.day-events {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  overflow: hidden;
}

.event-pill {
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  cursor: pointer;
}

.event-pill.tournament {
  background: rgba(221, 69, 68, 0.2);
  color: #dd4544;
  border: 1px solid rgba(221, 69, 68, 0.3);
}

.event-pill.release {
  background: rgba(75, 192, 192, 0.2);
  color: rgb(75, 192, 192);
  border: 1px solid rgba(75, 192, 192, 0.3);
}

.event-pill.industry {
  background: rgba(153, 102, 255, 0.2);
  color: rgb(153, 102, 255);
  border: 1px solid rgba(153, 102, 255, 0.3);
}

.event-pill.promotion {
  background: rgba(255, 206, 86, 0.2);
  color: rgb(255, 206, 86);
  border: 1px solid rgba(255, 206, 86, 0.3);
}

.more-events {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  padding: 0.25rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  cursor: pointer;
}

.more-events:hover {
  color: white;
  background: rgba(0, 0, 0, 0.3);
}

/* Event modal */
.event-modal,
.day-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.event-modal-content,
.day-modal-content {
  background: #1a1721;
  border-radius: 16px;
  width: 100%;
  max-width: 600px;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  animation: modalFadeIn 0.3s ease;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.close-modal {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 10;
}

.close-modal:hover {
  background: rgba(221, 69, 68, 0.2);
  color: #dd4544;
}

.event-modal-header {
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.event-type-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.event-type-badge.tournament {
  background: rgba(221, 69, 68, 0.1);
  color: #dd4544;
  border: 1px solid rgba(221, 69, 68, 0.3);
}

.event-type-badge.release {
  background: rgba(75, 192, 192, 0.1);
  color: rgb(75, 192, 192);
  border: 1px solid rgba(75, 192, 192, 0.3);
}

.event-type-badge.industry {
  background: rgba(153, 102, 255, 0.1);
  color: rgb(153, 102, 255);
  border: 1px solid rgba(153, 102, 255, 0.3);
}

.event-type-badge.promotion {
  background: rgba(255, 206, 86, 0.1);
  color: rgb(255, 206, 86);
  border: 1px solid rgba(255, 206, 86, 0.3);
}

.event-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0 0 1rem;
  line-height: 1.3;
}

.event-date {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
}

.event-details {
  padding: 1.5rem 2rem 2rem;
}

.event-details p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin: 0 0 1.5rem;
}

.event-location,
.event-time {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
}

.event-location i,
.event-time i {
  color: #dd4544;
  font-size: 1.1rem;
  width: 20px;
  text-align: center;
}

.event-link {
  margin-top: 1.5rem;
}

.event-link a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: 0 8px 15px rgba(221, 69, 68, 0.2);
}

.event-link a:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 20px rgba(221, 69, 68, 0.3);
}

/* Day modal styles */
.day-modal-header {
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.day-modal-header h4 {
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  margin: 0;
}

.day-events-list {
  padding: 1rem 2rem 2rem;
}

.day-event-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  border-radius: 8px;
  margin-bottom: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  transition: all 0.2s ease;
  cursor: pointer;
}

.day-event-item:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
}

.event-type-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
}

.event-type-indicator.tournament {
  background: #dd4544;
  box-shadow: 0 0 10px rgba(221, 69, 68, 0.5);
}

.event-type-indicator.release {
  background: rgb(75, 192, 192);
  box-shadow: 0 0 10px rgba(75, 192, 192, 0.5);
}

.event-type-indicator.industry {
  background: rgb(153, 102, 255);
  box-shadow: 0 0 10px rgba(153, 102, 255, 0.5);
}

.event-type-indicator.promotion {
  background: rgb(255, 206, 86);
  box-shadow: 0 0 10px rgba(255, 206, 86, 0.5);
}

.event-info {
  flex: 1;
}

.event-info .event-title {
  font-size: 1rem;
  margin: 0 0 0.25rem;
}

.event-info .event-time {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.event-arrow {
  color: rgba(255, 255, 255, 0.4);
  transition: transform 0.2s ease;
}

.day-event-item:hover .event-arrow {
  transform: translateX(3px);
  color: rgba(255, 255, 255, 0.7);
}

/* Responsive styles */
@media (max-width: 768px) {
  .news-calendar-section {
    padding: 1.5rem;
  }

  .calendar-title {
    font-size: 1.2rem;
  }

  .calendar-day {
    height: 80px;
  }

  .event-modal-content,
  .day-modal-content {
    max-width: 95%;
  }

  .event-modal-header,
  .day-modal-header {
    padding: 1.5rem 1.5rem 1rem;
  }

  .event-details,
  .day-events-list {
    padding: 1rem 1.5rem 1.5rem;
  }

  .event-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 600px) {
  .calendar-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .calendar-controls {
    width: 100%;
    justify-content: space-between;
  }

  .calendar-day-header {
    font-size: 0.75rem;
  }

  .calendar-day {
    height: 70px;
    padding: 0.4rem;
  }

  .day-number {
    font-size: 0.8rem;
  }

  .event-pill {
    font-size: 0.65rem;
    padding: 0.2rem 0.4rem;
  }
}

@media (max-width: 480px) {
  .calendar-grid {
    gap: 0.25rem;
  }

  .calendar-day {
    height: 60px;
  }

  .event-modal-content,
  .day-modal-content {
    max-height: 90vh;
  }
}
</style>

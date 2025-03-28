<template>
  <section id="status-tracker" class="status-tracker-section">
    <div class="container">
      <div class="section-header">
        <div class="title-container">
          <h2 class="section-title">
            Complaint <span class="highlight">Status</span> Tracker
          </h2>
          <p class="section-subtitle">
            Track the progress of your submitted complaints and view your
            resolution history
          </p>
        </div>

        <div class="tracker-controls">
          <div class="filter-container">
            <label for="status-filter">Filter by:</label>
            <select
              id="status-filter"
              v-model="statusFilter"
              class="status-select"
            >
              <option value="all">All Complaints</option>
              <option value="open">Open</option>
              <option value="in-progress">In Progress</option>
              <option value="pending">Pending Response</option>
              <option value="resolved">Resolved</option>
              <option value="closed">Closed</option>
            </select>
          </div>

          <button class="refresh-button" @click="refreshComplaints">
            <i class="fas fa-sync-alt"></i>
            Refresh
          </button>
        </div>
      </div>

      <div v-if="isLoggedIn" class="tracker-content">
        <div v-if="loading" class="loading-state">
          <div class="spinner"></div>
          <p>Loading your complaints...</p>
        </div>

        <div v-else-if="filteredComplaints.length === 0" class="empty-state">
          <div class="empty-icon">
            <i class="fas fa-search"></i>
          </div>
          <h3>No complaints found</h3>
          <p v-if="statusFilter !== 'all'">
            Try changing your filter selection or view all complaints.
          </p>
          <p v-else>
            You haven't submitted any complaints yet. When you do, they'll
            appear here.
          </p>
          <button class="submit-button" @click="navigateToForm">
            Submit a New Complaint
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>

        <div v-else class="complaints-list">
          <div
            v-for="complaint in filteredComplaints"
            :key="complaint.id"
            class="complaint-card"
            :class="{ expanded: expandedId === complaint.id }"
          >
            <div class="complaint-header" @click="toggleExpand(complaint.id)">
              <div class="complaint-summary">
                <div class="complaint-meta">
                  <div class="complaint-id">#{{ complaint.id }}</div>
                  <div class="complaint-date">
                    {{ formatDate(complaint.dateSubmitted) }}
                  </div>
                </div>
                <h3 class="complaint-title">{{ complaint.title }}</h3>
                <div class="complaint-target">
                  <i class="fas fa-building"></i>
                  <span>{{ complaint.againstEntity }}</span>
                </div>
              </div>

              <div class="complaint-status-container">
                <div class="status-badge" :class="complaint.status">
                  <i :class="getStatusIcon(complaint.status)"></i>
                  <span>{{ formatStatus(complaint.status) }}</span>
                </div>
                <button class="toggle-button">
                  <i
                    :class="
                      expandedId === complaint.id
                        ? 'fas fa-chevron-up'
                        : 'fas fa-chevron-down'
                    "
                  ></i>
                </button>
              </div>
            </div>

            <div class="complaint-details">
              <div class="complaint-info">
                <div class="info-group">
                  <div class="info-label">Category:</div>
                  <div class="info-value">{{ complaint.category }}</div>
                </div>
                <div class="info-group">
                  <div class="info-label">Amount in Dispute:</div>
                  <div class="info-value">
                    {{ formatCurrency(complaint.amount) }}
                  </div>
                </div>
                <div class="info-group">
                  <div class="info-label">Case Manager:</div>
                  <div class="info-value">
                    {{ complaint.caseManager || "Not assigned yet" }}
                  </div>
                </div>
                <div class="info-group">
                  <div class="info-label">Last Updated:</div>
                  <div class="info-value">
                    {{ formatDate(complaint.lastUpdated) }}
                  </div>
                </div>
              </div>

              <div class="complaint-description">
                <h4>Description</h4>
                <p>{{ complaint.description }}</p>
              </div>

              <div class="resolution-timeline">
                <h4>Resolution Progress</h4>
                <div class="timeline">
                  <div
                    v-for="(stage, index) in resolutionStages"
                    :key="stage.id"
                    class="timeline-stage"
                    :class="{
                      completed: isStageCompleted(complaint, index),
                      current: isCurrentStage(complaint, index),
                      future: isFutureStage(complaint, index),
                    }"
                  >
                    <div class="stage-marker">
                      <i
                        v-if="isStageCompleted(complaint, index)"
                        class="fas fa-check"
                      ></i>
                      <span v-else>{{ index + 1 }}</span>
                    </div>
                    <div
                      class="stage-connector"
                      v-if="index < resolutionStages.length - 1"
                    ></div>
                    <div class="stage-details">
                      <div class="stage-name">{{ stage.name }}</div>
                      <div
                        v-if="
                          complaint.stageTimestamps &&
                          complaint.stageTimestamps[index]
                        "
                        class="stage-date"
                      >
                        {{ formatDate(complaint.stageTimestamps[index]) }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="case-updates"
                v-if="complaint.updates && complaint.updates.length > 0"
              >
                <h4>Case Updates</h4>
                <div class="updates-list">
                  <div
                    v-for="(update, index) in complaint.updates"
                    :key="`update-${complaint.id}-${index}`"
                    class="update-item"
                  >
                    <div class="update-date">{{ formatDate(update.date) }}</div>
                    <div class="update-content">
                      <div class="update-message">{{ update.message }}</div>
                      <div v-if="update.actionRequired" class="action-required">
                        <i class="fas fa-exclamation-circle"></i>
                        <span>Action Required</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="complaint-actions">
                <button class="action-button message">
                  <i class="fas fa-comment"></i>
                  Send Message
                </button>
                <button
                  v-if="complaint.status === 'pending'"
                  class="action-button respond"
                >
                  <i class="fas fa-reply"></i>
                  Respond to Request
                </button>
                <button
                  v-if="canBeEscalated(complaint)"
                  class="action-button escalate"
                >
                  <i class="fas fa-level-up-alt"></i>
                  Escalate Case
                </button>
                <button class="action-button details">
                  <i class="fas fa-file-alt"></i>
                  Full Details
                </button>
              </div>
            </div>
          </div>

          <div class="pagination-controls" v-if="totalPages > 1">
            <button
              class="page-button prev"
              :disabled="currentPage === 1"
              @click="prevPage"
            >
              <i class="fas fa-chevron-left"></i>
              Previous
            </button>

            <div class="page-numbers">
              <button
                v-for="page in displayedPages"
                :key="page"
                class="page-number"
                :class="{ active: currentPage === page }"
                @click="goToPage(page)"
              >
                {{ page }}
              </button>
            </div>

            <button
              class="page-button next"
              :disabled="currentPage === totalPages"
              @click="nextPage"
            >
              Next
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>

      <div v-else class="login-prompt">
        <div class="lock-icon">
          <i class="fas fa-lock"></i>
        </div>
        <h3>Login Required</h3>
        <p>
          You need to be logged in to track your complaints and view your
          history.
        </p>
        <div class="login-buttons">
          <button class="login-button">
            <i class="fas fa-sign-in-alt"></i>
            Log In
          </button>
          <button class="signup-button">
            <i class="fas fa-user-plus"></i>
            Sign Up
          </button>
        </div>
      </div>

      <div
        class="tracker-stats"
        v-if="isLoggedIn && filteredComplaints.length > 0"
      >
        <h3 class="stats-title">Your Complaint Statistics</h3>
        <div class="stats-container">
          <div class="stat-box">
            <div class="stat-label">Total Complaints</div>
            <div class="stat-value">{{ complaints.length }}</div>
          </div>
          <div class="stat-box">
            <div class="stat-label">Resolved Positively</div>
            <div class="stat-value">{{ positiveOutcomes }}</div>
            <div class="stat-percentage">{{ positivePercentage }}%</div>
          </div>
          <div class="stat-box">
            <div class="stat-label">Average Resolution Time</div>
            <div class="stat-value">{{ averageResolutionDays }} days</div>
          </div>
          <div class="stat-box">
            <div class="stat-label">Amount Recovered</div>
            <div class="stat-value">{{ formattedTotalRecovered }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

// Authentication state (normally this would come from your auth store)
const isLoggedIn = ref(true); // Set to true for demonstration

// UI state
const loading = ref(true);
const expandedId = ref(null);
const currentPage = ref(1);
const itemsPerPage = 5;
const statusFilter = ref("all");

// Mock complaints data - in a real app, this would come from an API
const complaints = ref([
  {
    id: "2305",
    title: "Withdrawal delayed for over 30 days",
    description:
      "I requested a withdrawal of $1,200 on March 1st, 2025. The casino terms state that withdrawals are processed within 3-5 business days. It has now been over 30 days, and despite multiple emails to support, I have not received my funds.",
    status: "in-progress",
    category: "Withdrawal Issues",
    dateSubmitted: "2025-03-01T14:32:00",
    lastUpdated: "2025-03-28T09:15:00",
    againstEntity: "Royal Flush Casino",
    amount: 1200,
    caseManager: "Sarah Thompson",
    currentStage: 2,
    stageTimestamps: [
      "2025-03-01T14:32:00",
      "2025-03-03T10:45:00",
      null,
      null,
      null,
    ],
    updates: [
      {
        date: "2025-03-01T14:32:00",
        message: "Complaint received and assigned case number #2305.",
        actionRequired: false,
      },
      {
        date: "2025-03-03T10:45:00",
        message:
          "Initial review completed. We have reached out to Royal Flush Casino regarding your withdrawal.",
        actionRequired: false,
      },
      {
        date: "2025-03-15T16:20:00",
        message:
          "Royal Flush Casino has responded that they are investigating the delay and will provide an update within 7 days.",
        actionRequired: false,
      },
      {
        date: "2025-03-28T09:15:00",
        message:
          "We have sent a follow-up request to Royal Flush Casino as they have not provided the promised update.",
        actionRequired: false,
      },
    ],
  },
  {
    id: "2288",
    title: "Bonus terms changed after opt-in",
    description:
      "I claimed a 100% deposit bonus with a 30x wagering requirement as advertised. After meeting the requirements and attempting to withdraw, customer service informed me the requirement was actually 40x and refused my withdrawal.",
    status: "resolved",
    category: "Bonus Disputes",
    dateSubmitted: "2025-02-15T11:20:00",
    lastUpdated: "2025-03-10T14:30:00",
    againstEntity: "Lucky Spins Casino",
    amount: 500,
    caseManager: "Michael Rodriguez",
    currentStage: 4,
    stageTimestamps: [
      "2025-02-15T11:20:00",
      "2025-02-16T09:30:00",
      "2025-02-20T15:45:00",
      "2025-03-01T11:20:00",
      "2025-03-10T14:30:00",
    ],
    updates: [
      {
        date: "2025-02-15T11:20:00",
        message: "Complaint received and assigned case number #2288.",
        actionRequired: false,
      },
      {
        date: "2025-02-16T09:30:00",
        message:
          "Initial review completed. We have reached out to Lucky Spins Casino regarding your bonus dispute.",
        actionRequired: false,
      },
      {
        date: "2025-02-20T15:45:00",
        message:
          "Lucky Spins Casino has responded and provided their terms and conditions. We are reviewing them against your screenshots.",
        actionRequired: false,
      },
      {
        date: "2025-03-01T11:20:00",
        message:
          "We have presented evidence to Lucky Spins Casino showing the advertised 30x requirement from your screenshots. They are reviewing internally.",
        actionRequired: false,
      },
      {
        date: "2025-03-10T14:30:00",
        message:
          "RESOLVED: Lucky Spins Casino has acknowledged the error in their system and has processed your withdrawal of $500. They have also offered a $50 free chip as an apology for the inconvenience.",
        actionRequired: false,
      },
    ],
    outcome: "positive",
    amountRecovered: 500,
  },
  {
    id: "2156",
    title: "Account closed without explanation",
    description:
      "My account was suddenly closed without any explanation or prior warning. I had a balance of $350 which I cannot access. I have tried contacting support multiple times but have not received any substantive response.",
    status: "pending",
    category: "Account Issues",
    dateSubmitted: "2025-01-05T16:45:00",
    lastUpdated: "2025-03-25T13:10:00",
    againstEntity: "Vegas Paradise",
    amount: 350,
    caseManager: "Jennifer Wu",
    currentStage: 3,
    stageTimestamps: [
      "2025-01-05T16:45:00",
      "2025-01-07T10:30:00",
      "2025-01-15T14:20:00",
      null,
      null,
    ],
    updates: [
      {
        date: "2025-01-05T16:45:00",
        message: "Complaint received and assigned case number #2156.",
        actionRequired: false,
      },
      {
        date: "2025-01-07T10:30:00",
        message:
          "Initial review completed. We have reached out to Vegas Paradise regarding your account closure.",
        actionRequired: false,
      },
      {
        date: "2025-01-15T14:20:00",
        message:
          "Vegas Paradise has responded that your account was flagged in their system. They require additional verification documents.",
        actionRequired: true,
      },
      {
        date: "2025-03-25T13:10:00",
        message:
          "We need you to provide the requested documentation so we can proceed with your case. Please upload the required documents.",
        actionRequired: true,
      },
    ],
  },
  {
    id: "2089",
    title: "Game disconnected during jackpot win",
    description:
      "I was playing Mega Fortune slots when the game disconnected right as I hit the jackpot wheel. When I logged back in, there was no record of my win and customer support claims no jackpot was triggered.",
    status: "closed",
    category: "Technical Issues",
    dateSubmitted: "2024-12-10T19:30:00",
    lastUpdated: "2025-01-20T11:45:00",
    againstEntity: "Super Play Casino",
    amount: 25000,
    caseManager: "Robert Chen",
    currentStage: 4,
    stageTimestamps: [
      "2024-12-10T19:30:00",
      "2024-12-12T10:15:00",
      "2024-12-20T15:30:00",
      "2025-01-10T13:45:00",
      "2025-01-20T11:45:00",
    ],
    updates: [
      {
        date: "2024-12-10T19:30:00",
        message: "Complaint received and assigned case number #2089.",
        actionRequired: false,
      },
      {
        date: "2024-12-12T10:15:00",
        message:
          "Initial review completed. We have reached out to Super Play Casino and the game provider regarding your jackpot dispute.",
        actionRequired: false,
      },
      {
        date: "2024-12-20T15:30:00",
        message:
          "The game provider has checked their server logs and confirmed that no jackpot was triggered before the disconnection. They have provided technical logs as evidence.",
        actionRequired: false,
      },
      {
        date: "2025-01-10T13:45:00",
        message:
          "After thorough investigation and review of the technical logs, we cannot confirm that a jackpot was actually triggered. The disconnection occurred during regular gameplay.",
        actionRequired: false,
      },
      {
        date: "2025-01-20T11:45:00",
        message:
          "CLOSED: Based on all available evidence, including game server logs, we cannot confirm that a jackpot win occurred. Super Play Casino has offered a $100 goodwill bonus for the disconnection issue.",
        actionRequired: false,
      },
    ],
    outcome: "negative",
    amountRecovered: 0,
  },
  {
    id: "2302",
    title: 'Refused payout due to "bonus abuse"',
    description:
      'I was accused of "bonus abuse" after winning $1,500 using a legitimate strategy with their 100% match bonus. There was nothing in their terms prohibiting the way I played.',
    status: "open",
    category: "Bonus Disputes",
    dateSubmitted: "2025-02-28T13:15:00",
    lastUpdated: "2025-02-28T13:15:00",
    againstEntity: "Grand Jackpot Casino",
    amount: 1500,
    caseManager: "",
    currentStage: 0,
    stageTimestamps: ["2025-02-28T13:15:00", null, null, null, null],
    updates: [
      {
        date: "2025-02-28T13:15:00",
        message: "Complaint received and assigned case number #2302.",
        actionRequired: false,
      },
    ],
  },
]);

// Resolution stages
const resolutionStages = [
  { id: "submission", name: "Submitted" },
  { id: "review", name: "Under Review" },
  { id: "mediation", name: "Mediation" },
  { id: "decision", name: "Decision Phase" },
  { id: "closed", name: "Resolved" },
];

// Computed properties
const filteredComplaints = computed(() => {
  let result = complaints.value;

  if (statusFilter.value !== "all") {
    result = result.filter(
      (complaint) => complaint.status === statusFilter.value
    );
  }

  // Sort by date, newest first
  result = result.sort(
    (a, b) => new Date(b.dateSubmitted) - new Date(a.dateSubmitted)
  );

  // Paginate
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return result.slice(startIndex, endIndex);
});

const totalComplaints = computed(() => {
  if (statusFilter.value === "all") {
    return complaints.value.length;
  }
  return complaints.value.filter(
    (complaint) => complaint.status === statusFilter.value
  ).length;
});

const totalPages = computed(() => {
  return Math.ceil(totalComplaints.value / itemsPerPage);
});

const displayedPages = computed(() => {
  const pages = [];
  const maxDisplayedPages = 5;

  if (totalPages.value <= maxDisplayedPages) {
    for (let i = 1; i <= totalPages.value; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage.value <= 3) {
      for (let i = 1; i <= 5; i++) {
        pages.push(i);
      }
    } else if (currentPage.value >= totalPages.value - 2) {
      for (let i = totalPages.value - 4; i <= totalPages.value; i++) {
        pages.push(i);
      }
    } else {
      for (let i = currentPage.value - 2; i <= currentPage.value + 2; i++) {
        pages.push(i);
      }
    }
  }

  return pages;
});

const positiveOutcomes = computed(() => {
  return complaints.value.filter(
    (complaint) => complaint.outcome === "positive"
  ).length;
});

const positivePercentage = computed(() => {
  const resolved = complaints.value.filter(
    (complaint) =>
      complaint.status === "resolved" || complaint.status === "closed"
  ).length;

  if (resolved === 0) return 0;

  return Math.round((positiveOutcomes.value / resolved) * 100);
});

const averageResolutionDays = computed(() => {
  const resolvedComplaints = complaints.value.filter(
    (complaint) =>
      complaint.status === "resolved" || complaint.status === "closed"
  );

  if (resolvedComplaints.length === 0) return 0;

  const totalDays = resolvedComplaints.reduce((sum, complaint) => {
    const submitted = new Date(complaint.dateSubmitted);
    const resolved = new Date(complaint.lastUpdated);
    const days = Math.round((resolved - submitted) / (1000 * 60 * 60 * 24));
    return sum + days;
  }, 0);

  return Math.round(totalDays / resolvedComplaints.length);
});

const totalRecovered = computed(() => {
  return complaints.value.reduce((sum, complaint) => {
    return sum + (complaint.amountRecovered || 0);
  }, 0);
});

const formattedTotalRecovered = computed(() => {
  return formatCurrency(totalRecovered.value);
});

// Methods
function toggleExpand(id) {
  if (expandedId.value === id) {
    expandedId.value = null;
  } else {
    expandedId.value = id;
  }
}

function formatDate(dateString) {
  if (!dateString) return "N/A";

  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatCurrency(amount) {
  if (amount === null || amount === undefined) return "$0";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatStatus(status) {
  const statusMap = {
    open: "Open",
    "in-progress": "In Progress",
    pending: "Pending Response",
    resolved: "Resolved",
    closed: "Closed",
  };

  return statusMap[status] || status;
}

function getStatusIcon(status) {
  const iconMap = {
    open: "fas fa-folder-open",
    "in-progress": "fas fa-cogs",
    pending: "fas fa-clock",
    resolved: "fas fa-check-circle",
    closed: "fas fa-archive",
  };

  return iconMap[status] || "fas fa-question-circle";
}

function isStageCompleted(complaint, stageIndex) {
  return complaint.currentStage > stageIndex;
}

function isCurrentStage(complaint, stageIndex) {
  return complaint.currentStage === stageIndex;
}

function isFutureStage(complaint, stageIndex) {
  return complaint.currentStage < stageIndex;
}

function canBeEscalated(complaint) {
  const daysSinceLastUpdate = Math.round(
    (new Date() - new Date(complaint.lastUpdated)) / (1000 * 60 * 60 * 24)
  );

  return (
    (complaint.status === "in-progress" || complaint.status === "open") &&
    daysSinceLastUpdate > 14
  );
}

function navigateToForm() {
  // Navigate to complaint form
  console.log("Navigating to complaint form");
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

function goToPage(page) {
  currentPage.value = page;
}

function refreshComplaints() {
  loading.value = true;

  // Simulate API call
  setTimeout(() => {
    loading.value = false;
  }, 1000);
}

onMounted(() => {
  // Simulate loading data
  setTimeout(() => {
    loading.value = false;
  }, 1500);
});
</script>

<style scoped>
.status-tracker-section {
  padding: 4rem 0;
  background-color: #1a1721;
  color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2.5rem;
}

.title-container {
  max-width: 600px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 1rem;
  line-height: 1.2;
}

.section-title .highlight {
  background: linear-gradient(135deg, #ff6767, #ff9d67);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
}

.section-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.5;
}

.tracker-controls {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.filter-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filter-container label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.status-select {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  font-size: 0.9rem;
  color: white;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 0.7rem top 50%;
  background-size: 0.65rem auto;
  padding-right: 2rem;
  transition: all 0.2s ease;
}

.status-select:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.refresh-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  font-size: 0.9rem;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.refresh-button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.refresh-button i {
  transition: transform 0.5s ease;
}

.refresh-button:hover i {
  transform: rotate(180deg);
}

/* Loading state */
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 2rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: #ff6767;
  animation: spinner 1s infinite linear;
  margin-bottom: 1rem;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.loading-state p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  margin: 0;
}

/* Empty state */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
}

.empty-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 1.5rem;
}

.empty-state h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0 0 0.75rem;
}

.empty-state p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  margin: 0 0 1.5rem;
  max-width: 450px;
}

.submit-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #ff6767, #ff9d67);
  color: white;
  border: none;
  border-radius: 30px;
  padding: 0.875rem 1.75rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 15px rgba(255, 103, 103, 0.25);
}

.submit-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 20px rgba(255, 103, 103, 0.35);
}

.submit-button i {
  transition: transform 0.2s ease;
}

.submit-button:hover i {
  transform: translateX(3px);
}

/* Login prompt */
.login-prompt {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
}

.lock-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 103, 103, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #ff6767;
  margin-bottom: 1.5rem;
}

.login-prompt h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0 0 0.75rem;
}

.login-prompt p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  margin: 0 0 1.5rem;
  max-width: 450px;
}

.login-buttons {
  display: flex;
  gap: 1rem;
}

.login-button,
.signup-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.75rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.login-button {
  background: linear-gradient(135deg, #ff6767, #ff9d67);
  color: white;
  border: none;
  box-shadow: 0 8px 15px rgba(255, 103, 103, 0.25);
}

.login-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 20px rgba(255, 103, 103, 0.35);
}

.signup-button {
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.signup-button:hover {
  background: rgba(255, 255, 255, 0.05);
  color: white;
  transform: translateY(-3px);
}

/* Complaints list */
.complaints-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.complaint-card {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.complaint-card:hover {
  border-color: rgba(255, 255, 255, 0.1);
}

.complaint-card.expanded {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.complaint-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  transition: background 0.2s ease;
}

.complaint-header:hover {
  background: rgba(255, 255, 255, 0.02);
}

.complaint-summary {
  flex: 1;
}

.complaint-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.complaint-id {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  font-family: monospace;
}

.complaint-date {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
}

.complaint-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: white;
}

.complaint-target {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.complaint-status-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.status-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.75rem;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 500;
}

.status-badge.open {
  background: rgba(33, 150, 243, 0.1);
  color: #2196f3;
  border: 1px solid rgba(33, 150, 243, 0.3);
}

.status-badge.in-progress {
  background: rgba(255, 152, 0, 0.1);
  color: #ff9800;
  border: 1px solid rgba(255, 152, 0, 0.3);
}

.status-badge.pending {
  background: rgba(156, 39, 176, 0.1);
  color: #9c27b0;
  border: 1px solid rgba(156, 39, 176, 0.3);
}

.status-badge.resolved {
  background: rgba(76, 175, 80, 0.1);
  color: #4caf50;
  border: 1px solid rgba(76, 175, 80, 0.3);
}

.status-badge.closed {
  background: rgba(158, 158, 158, 0.1);
  color: #9e9e9e;
  border: 1px solid rgba(158, 158, 158, 0.3);
}

.toggle-button {
  background: transparent;
  border: none;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.2s ease;
}

.toggle-button:hover {
  color: white;
}

.complaint-details {
  display: none;
  padding: 0 1.5rem 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.complaint-card.expanded .complaint-details {
  display: block;
}

.complaint-info {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.info-group {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.info-label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-value {
  font-size: 0.95rem;
  color: white;
  font-weight: 500;
}

.complaint-description {
  margin-bottom: 1.5rem;
}

.complaint-description h4,
.resolution-timeline h4,
.case-updates h4 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.75rem;
  color: rgba(255, 255, 255, 0.9);
}

.complaint-description p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}

.resolution-timeline {
  margin-bottom: 1.5rem;
}

.timeline {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  position: relative;
}

.timeline::before {
  content: "";
  position: absolute;
  top: 35px;
  left: 0;
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
}

.timeline-stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1;
}

.stage-marker {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  font-weight: 600;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  position: relative;
  z-index: 2;
}

.timeline-stage.completed .stage-marker {
  background: rgba(76, 175, 80, 0.2);
  border-color: #4caf50;
  color: #4caf50;
}

.timeline-stage.current .stage-marker {
  background: rgba(255, 152, 0, 0.2);
  border-color: #ff9800;
  color: #ff9800;
}

.timeline-stage.future .stage-marker {
  background: rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
}

.stage-connector {
  position: absolute;
  top: 35px;
  left: 50%;
  width: 100%;
  height: 2px;
  z-index: 1;
}

.stage-details {
  text-align: center;
  max-width: 100px;
}

.stage-name {
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: rgba(255, 255, 255, 0.8);
}

.timeline-stage.completed .stage-name {
  color: #4caf50;
}

.timeline-stage.current .stage-name {
  color: #ff9800;
}

.timeline-stage.future .stage-name {
  color: rgba(255, 255, 255, 0.5);
}

.stage-date {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
}

.case-updates {
  margin-bottom: 1.5rem;
}

.updates-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.update-item {
  display: flex;
  gap: 1rem;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1rem;
  border-left: 3px solid rgba(255, 255, 255, 0.1);
}

.update-date {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  flex-shrink: 0;
  min-width: 100px;
}

.update-content {
  flex: 1;
}

.update-message {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin-bottom: 0.5rem;
}

.action-required {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 87, 34, 0.1);
  color: #ff5722;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
}

.complaint-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.action-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.action-button.message {
  background: rgba(33, 150, 243, 0.1);
  color: #2196f3;
  border: 1px solid rgba(33, 150, 243, 0.3);
}

.action-button.message:hover {
  background: rgba(33, 150, 243, 0.2);
}

.action-button.respond {
  background: rgba(156, 39, 176, 0.1);
  color: #9c27b0;
  border: 1px solid rgba(156, 39, 176, 0.3);
}

.action-button.respond:hover {
  background: rgba(156, 39, 176, 0.2);
}

.action-button.escalate {
  background: rgba(255, 87, 34, 0.1);
  color: #ff5722;
  border: 1px solid rgba(255, 87, 34, 0.3);
}

.action-button.escalate:hover {
  background: rgba(255, 87, 34, 0.2);
}

.action-button.details {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.action-button.details:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

/* Pagination controls */
.pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.page-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  font-size: 0.9rem;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.page-button:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.page-button:disabled {
  opacity: 0.5;
  cursor: default;
}

.page-numbers {
  display: flex;
  gap: 0.5rem;
}

.page-number {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  font-size: 0.9rem;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.page-number:hover:not(.active) {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.page-number.active {
  background: rgba(255, 103, 103, 0.2);
  border-color: rgba(255, 103, 103, 0.4);
  color: #ff6767;
  font-weight: 600;
}

/* Statistics */
.tracker-stats {
  margin-top: 3rem;
}

.stats-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 1.5rem;
  text-align: center;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.stat-box {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.stat-box:hover {
  background: rgba(0, 0, 0, 0.3);
  transform: translateY(-5px);
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #ff6767;
  margin-bottom: 0.25rem;
}

.stat-percentage {
  font-size: 1rem;
  color: #4caf50;
  font-weight: 500;
}

/* Responsive styles */
@media (max-width: 1024px) {
  .section-header {
    flex-direction: column;
    gap: 1.5rem;
  }

  .tracker-controls {
    width: 100%;
    justify-content: space-between;
  }

  .section-title {
    font-size: 2.2rem;
  }
}

@media (max-width: 768px) {
  .status-tracker-section {
    padding: 3rem 0;
  }

  .timeline {
    overflow-x: auto;
    padding-bottom: 1rem;
    justify-content: flex-start;
  }

  .timeline-stage {
    flex: 0 0 100px;
  }

  .complaint-info {
    grid-template-columns: 1fr;
  }

  .update-item {
    flex-direction: column;
    gap: 0.5rem;
  }

  .update-date {
    min-width: auto;
  }

  .complaint-actions {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }

  .tracker-controls {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
  }

  .filter-container {
    justify-content: space-between;
  }

  .complaint-meta {
    flex-direction: column;
    gap: 0.25rem;
  }

  .complaint-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .complaint-status-container {
    width: 100%;
    justify-content: space-between;
  }

  .page-numbers {
    display: none;
  }

  .stat-box {
    padding: 1rem;
  }

  .stat-value {
    font-size: 1.5rem;
  }
}
</style>

<template>
  <div class="error-container">
    <div class="error-content">
      <img
        src="/images/gfuture-red.png"
        alt="Gambler's Future"
        class="error-logo"
      />
      <h1>
        {{
          error.statusCode === 404
            ? "Page Not Found"
            : "Oops! Something went wrong"
        }}
      </h1>
      <p>{{ error.message || getErrorMessage() }}</p>
      <button class="error-button" @click="handleError">
        {{ error.statusCode === 404 ? "Go Home" : "Try Again" }}
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    required: true,
  },
});

const getErrorMessage = () => {
  switch (props.error.statusCode) {
    case 404:
      return "The page you're looking for doesn't exist or has been moved.";
    case 500:
      return "Our servers are having issues right now. Please try again later.";
    default:
      return "An unexpected error occurred. Please try again.";
  }
};

const handleError = () => {
  if (props.error.statusCode === 404) {
    navigateTo("/");
  } else {
    clearError({ redirect: "/" });
  }
};
</script>

<style scoped>
.error-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(26, 23, 33, 0.98) 0%,
    rgba(41, 37, 44, 0.98) 100%
  );
  padding: 2rem;
}

.error-content {
  text-align: center;
  color: white;
  max-width: 600px;
}

.error-logo {
  height: 60px;
  margin-bottom: 2rem;
}

.error-button {
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #dd4544, #e8937c);
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.error-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(221, 69, 68, 0.4);
}
</style>

<template>
  <div class="bonus-types-modal" @click.stop>
    <div class="modal-header">
      <h2>Bonus Types Breakdown</h2>
      <button class="close-button" @click="closeModal">X</button>
    </div>
    <div class="modal-body">
      <section>
        <h3>Welcome Bonuses</h3>
        <WelcomeBonus />
      </section>
      <section>
        <h3>No Deposit Bonuses</h3>
        <NoDepositBonus />
      </section>
      <section>
        <h3>Free Spins</h3>
        <FreeSpinsBonus />
      </section>
      <section>
        <h3>Reload Bonuses</h3>
        <ReloadBonus />
      </section>
      <section>
        <h3>Loyalty/VIP Programs</h3>
        <LoyaltyProgram />
      </section>
      <section>
        <h3>Cashback Offers</h3>
        <CashbackOffer />
      </section>
    </div>
  </div>
</template>

<script setup>
import WelcomeBonus from "./WelcomeBonus.vue";
import NoDepositBonus from "./NoDepositBonus.vue";
import FreeSpinsBonus from "./FreeSpinsBonus.vue";
import ReloadBonus from "./ReloadBonus.vue";
import LoyaltyProgram from "./LoyaltyProgram.vue";
import CashbackOffer from "./CashbackOffer.vue";

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>

<style scoped>
.bonus-types-modal {
  background: rgba(26, 23, 33, 0.98);
  border-radius: 16px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(90deg, rgba(221, 69, 68, 0.2), transparent);
  flex-shrink: 0;
}

.modal-header h2 {
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  margin: 0;
}

.close-button {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.modal-body {
  padding: 2rem;
  overflow-y: auto;
  flex-grow: 1;
  -webkit-overflow-scrolling: touch;
}

.modal-body::-webkit-scrollbar {
  width: 8px;
}

.modal-body::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

.modal-body::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
}

.modal-body::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.25);
}

section {
  margin-bottom: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
}

section:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 4px solid;
  display: inline-block;
}

section:nth-child(1) h3 {
  border-color: #dd4544;
  color: #dd4544;
}

section:nth-child(2) h3 {
  border-color: #4caf50;
  color: #4caf50;
}

section:nth-child(3) h3 {
  border-color: #ffc107;
  color: #ffc107;
}

section:nth-child(4) h3 {
  border-color: #9c27b0;
  color: #9c27b0;
}

section:nth-child(5) h3 {
  border-color: #2196f3;
  color: #2196f3;
}

section:nth-child(6) h3 {
  border-color: #009688;
  color: #009688;
}

@media (max-width: 768px) {
  .modal-header {
    padding: 1.2rem 1.5rem;
  }

  .modal-header h2 {
    font-size: 1.5rem;
  }

  .modal-body {
    padding: 1.5rem;
  }

  h3 {
    font-size: 1.3rem;
  }
}
</style>

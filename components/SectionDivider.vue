<template>
  <div class="divider-container">
    <div class="stitch-line">
      <div class="stitch" v-for="n in 30" :key="n"></div>
    </div>
  </div>
</template>

<style scoped>
.divider-container {
  position: relative;
  height: 4px;
  background: #dd4544;
  margin: -2px 0;
  z-index: 2;
}

.stitch-line {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.stitch {
  width: 12px;
  height: 2px;
  background: #ffffff;
  opacity: 0.5;
  transform: rotate(-45deg);
}
</style>

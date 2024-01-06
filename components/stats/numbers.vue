<script lang="ts" setup>
import { ChatLineRound, Male } from "@element-plus/icons-vue";

const props = defineProps([
  "title",
  "incomeTitle",
  "incomeValue",
  "balanceTitle",
  "balanceDebt",
  "balance",
  "transactionsTitle",
  "transactionsValue",
  "weeksTitle",
  "weeksToClose",
]);
</script>

<template>
  <div class="stats-wrapper">
    <h6>{{ props.title }}</h6>

    <div class="items">
      <div class="item">
        <h6 class="item-title">{{ $props.incomeTitle }}</h6>
        <p class="item-content">{{ props.incomeValue }}</p>
      </div>

      <div>
        <h6 class="item-title">{{ props.balanceTitle }}</h6>
        <p class="item-content">
          {{ props.balanceDebt }} / {{ props.balance }}
        </p>
      </div>

      <div>
        <h6 class="item-title">{{ props.transactionsTitle }}</h6>
        <p class="item-content">{{ props.transactionsValue }}</p>
      </div>
      <div>
        <h6 class="item-title">{{ props.weeksTitle }}</h6>
        <p class="item-content">{{ props.weeksToClose }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.items {
  display: flex;
  justify-content: space-evenly;
  
}

.item-title {
  font-weight: bold;
  color: rgb(150, 150, 150);
  font-size: 0.9rem;
  letter-spacing: 0.02rem;
  margin: 0.2em 10px;
}

.item-content {
  letter-spacing: 0.02rem;
  align-content: center;
  text-align: center;
  color: rgb(0, 0, 0);
  font-weight: 500;
  font-size: 1.1rem;
}
.el-col {
  text-align: center;
}
.stats-wrapper {
  padding:0.5rem 1rem;
}
</style>
11

import { ElColorPicker } from '../../.nuxt/components';
<script setup>
const avatar = ref("AVATAR");
const format = (percentage) => (percentage === 100 ? "Full" : `${percentage}%`);
</script>

<template>
  <div>
    USER HOME ROUTE

    <UILayout>
      <div class="external row">
        <!-- GREETING -->
        <UIGreeting></UIGreeting>

        <div class="right col-lg-8 col-md-8">
          <UICard> <StatsNumbers /></UICard>
          <UICard><h3>LATEST TRANSACTIONS</h3></UICard>
          <UICard><h3>ACCOUNTS INFO/ACCOUNTS</h3></UICard>
          <UICard>MOST FRECUENT PURCHASES</UICard>
          <UICard> <StatsNumbers /></UICard>
          <UICard> <StatsNumbers /></UICard>
        </div>
        <div class="left col-lg-4 col-md-4">
          <AvatarProfile />
          <UICard> <h5>BALANCE STANDING 80%</h5></UICard>
          <UICard> <h5>BALANCE STANDING 80%</h5></UICard>
        
          <UICard><h5>WEEKLY STATS</h5></UICard>
        </div>
      </div>
    </UILayout>
  </div>
</template>

<style scoped>
.dot {
  align-content: center;
  background-color: white;
  border-radius: 5px;
  margin: 1rem auto;
  border: solid rgb(187, 187, 187) 1px;
}

@media screen and (max-width: 678px) {
  .left,
  .right {
    min-width: 100%;
  }

  .external {
    margin: 0;
  }

  .right {
    order: 0;
  }
  .left {
    order: 1;
  }
}
</style>

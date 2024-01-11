<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const userId = route.params.userId;

//?COMPUTED PROPERTIES
const accountLink = computed(() => `/auth/${userId}/accounts`);
const infoLink = computed(() => `/auth/${userId}}/info`);
const historyLink = computed(() => `/auth/${userId}/history`);
const balanceLink = computed(() => `/auth/${userId}/balance`);
</script>

<template>
  <div>
    USER HOME ROUTE

    <UILayout>
      <div class="external row">
        <!-- GREETING -->

        <UIGreeting></UIGreeting>

        <div class="right col-lg-8 col-md-8">
        
          <!-- users Menu -->
          <!-- userId below passed to parent components for id -->
          <UserMenu
            :userId="userId"
            account="Add Account"
            profile="Profile"
            history="History"
            balance="Balance"
            :route="accountLink"
            :route2="infoLink"
            :route3="historyLink"
            :route4="balanceLink"
          />
          <UICard>
            <StatsNumbers
              title="Balance"
              incomeTitle="Income"
              incomeValue="1,000"
              balanceTitle="Overall Debt"
              balanceDebt="10000"
              balance="8000"
              transactionsTitle="Transactions"
              transactionsValue="35"
              weeksTitle="Weeks to even"
              weeksToClose="8"
          /></UICard>

          <TransactionsLatest />
          <UICard>
            <StatsNumbers
              title="Balance"
              incomeTitle="Income"
              incomeValue="1,000"
              balanceTitle="Overall Debt"
              balanceDebt="10000"
              balance="8000"
              transactionsTitle="Transactions"
              transactionsValue="35"
              weeksTitle="Weeks to even"
              weeksToClose="8"
          /></UICard>
          <TransactionsLatest />
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

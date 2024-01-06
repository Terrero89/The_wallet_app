<script lang="ts" setup>
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";

const activeName = ref("first");
const BankAccounts = ref([
  {
    accountId: "15",
    addedBy: "Jackie",
    name: "Bank of america",
    accountType: "Regular",
    balance: 400.0,
    lastFour: "4513",
    dateAdded: "10/31/2023",
  },
  {
    accountId: "15",
    addedBy: "Sergio",
    name: "Boston Firefighter",
    accountType: "Savings",
    balance: 150.0,
    lastFour: "2817",
    dateAdded: "10/31/2023",
  },
  {
    accountId: "15",
    addedBy: "Jackie",
    name: "Chase Bank",
    accountType: "Credit Card",
    balance: 1500,
    limit: 15000,
    lastFour: "2915",
    dateAdded: "10/31/2023",
  },
  {
    accountId: "15",
    addedBy: "Jackie",
    name: "Chase Bank",
    accountType: "Credit Card",
    limit: 15000,
    balance: 1500.0,
    lastFour: "2915",
    dateAdded: "10/31/2023",
  },
]);
</script>

<template>
  <div>
    <UILayout>
      <div class="right col">
     
        <AccountsOptions> </AccountsOptions>
      
      </div>
    </UILayout>
  </div>
</template>

<style>
.menu {
  display: flex;
  justify-content: space-evenly;
}
.link {
  text-decoration: none;
}
.demo-tabs > .el-tabs__content {
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>

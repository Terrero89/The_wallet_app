<script lang="ts" setup>
const props = defineProps([
  "userId",
  "account",
  "profile",
  "history",
  "route",
  "route2",
  "route3",
  "route4",
]);
</script>

<template>
  <div>
    <!-- users Menu -->
    <!-- userId below passed to parent components for id -->
    <UIMenu
     :userId ="userId"
      account="Accounts"
      profile="Profile"
      history="History"
      balance="Balance"
      route="Accounts"
      route2="info"
      route3="history"
      route4="balance"
    />
  </div>
</template>

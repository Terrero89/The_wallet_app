<script lang="ts" setup>
import { ref, computed } from "vue";
import { useAccountsStore } from "@/stores/accounts";
import { storeToRefs } from "pinia";

const props = defineProps(["id"]);

const accountStore = useAccountsStore(); //projects store
//?PROPERTIES DESTRUCTURING

const { getAccountId } = storeToRefs(accountStore);

const accountId = computed(() => getAccountId.value("15")!);
const accounts = [
  {
    accountId: "15",
    addedBy: "Jackie",
    name: "Bank of america",
    accountType: "Regular",
    balance: 400.0,
    lastFour: "4513",
    dateAdded: "10/31/2023",
    status: true,
  },
  {
    accountId: "11",
    addedBy: "Sergio",
    name: "Boston Firefighter",
    accountType: "Savings",
    balance: 150.0,
    lastFour: "2817",
    dateAdded: "10/31/2023",
    status: true,
  },

  {
    accountId: "12",
    addedBy: "Jackie",
    name: "Chase Bank",
    accountType: "Credit Card",
    balance: 1500,
    limit: 15000,
    lastFour: "2915",
    dateAdded: "10/31/2023",
    status: true,
  },
  {
    accountId: "19",
    addedBy: "Jackie",
    name: "Chase Bank",
    accountType: "Credit Card",
    limit: 15000,
    balance: 1500.0,
    lastFour: "2915",
    dateAdded: "10/31/2023",
    status: true,
  },
];

const filterUser = accounts.find((item) => item.accountId === "15")!;
</script>

<template>
  <div>
    {{ accountId.name }}
    <AccountsDescription
      :account="accountId.name"
      :type="accountId.accountType"
      :four="accountId.lastFour"
      :limit="accountId.limit"
      :date="accountId.dateAdded"
      :balance="accountId.balance"
      :user="accountId.addedBy"
      :status="filterUser.status"
    />
  </div>
</template>

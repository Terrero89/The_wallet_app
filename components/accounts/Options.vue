<script setup>
import { ref, computed } from "vue";
import { useAccountsStore } from "@/stores/accounts";
import { storeToRefs } from "pinia";

const props = defineProps(["id"]);

const accountStore = useAccountsStore(); //projects store
//?PROPERTIES DESTRUCTURING

const { getAccountId } = storeToRefs(accountStore);

const items = [
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



const activeName = ref("first");
const detailsLink = computed(() => {
  return `/auth/5555/52122/details`;
});
</script>

<template>
  <div>
    <!-- <AccountsMenu
      account="Account"
      profile="Profile"
      history="History"
      route="Account"
      route2="Profile"
      route3="history"
      route4="balance"
    /> -->

    <UICard>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="activeName">
        <el-tab-pane label="Accounts" name="first" class="bor" :stretch="true"
          >Accounts
          <NuxtLink :to="detailsLink" style="text-decoration: none">
            <AccountsDescription
              class="border m-2"
              v-for="item in items"
              :key="item.accountId"
              :account="item.name"
              :type="item.accountType"
              :four="item.lastFour"
              :limit="item.limit"
              :date="item.dateAdded"
              :balance="item.balance"
              :user="item.addedBy"
              :status="item.status"
            />
          </NuxtLink>
          <!-- link to show more or next 5 other accounts -->
          <a href="">Show more</a>
        </el-tab-pane>

        <el-tab-pane
          label="User Details"
          name="second"
          strech="false"
          class="border"
          >Profile information, preferences etc.</el-tab-pane
        >

        <el-tab-pane label="Transactions" name="third">
          <h5>SEE TRANSACTIONS</h5>
        </el-tab-pane>

        <el-tab-pane label="History" name="fourth">
          <h5>ACCOUNT UPDATES</h5>
        </el-tab-pane>
      </el-tabs>
    </UICard>
  </div>
</template>

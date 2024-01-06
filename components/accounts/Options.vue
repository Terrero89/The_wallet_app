<script setup>
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
    accountId: "11",
    addedBy: "Sergio",
    name: "Boston Firefighter",
    accountType: "Savings",
    balance: 150.0,
    lastFour: "2817",
    dateAdded: "10/31/2023",
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
  },
]);
const activeName = ref("first");
</script>

<template>
  <div>
 

<AccountsMenu/>
 
    <UICard>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="activeName">
        <el-tab-pane label="Accounts" name="first" class="bor" :stretch="true"
          >Accounts

          <div
            v-for="account in BankAccounts"
            class="border my-3 bor"
            :key="account.name"
          >
            <el-descriptions title="Account" class="mx-2 my-1">
              <el-descriptions-item label="Account:">{{
                account.name
              }}</el-descriptions-item>

              <el-descriptions-item label="Type:">{{
                account.accountType
              }}</el-descriptions-item>
              <el-descriptions-item label="Last four:">
                {{ account.lastFour }}</el-descriptions-item
              >

              <el-descriptions-item label="Added on">
                {{ account.dateAdded }}</el-descriptions-item
              >
              <el-descriptions-item label="Balance">
                $ {{ account.balance }}
              </el-descriptions-item>

              <el-descriptions-item label="Status">
                <el-tag size="small">Active</el-tag>
              </el-descriptions-item>
            </el-descriptions>
          </div>
        </el-tab-pane>
        <el-tab-pane
          label="User Details"
          name="second"
          strech="false"
          class="border"
          >User Information displayed/balance etcc...</el-tab-pane
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

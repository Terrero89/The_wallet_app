<script setup>

const route = useRoute();
const infoId = route.params.infoId;


//composable for sample data
const accounts = useBanks()


const activeName = ref("first");
const detailsLink = computed(() => {
  return `/auth/5555`;
});
</script>

<template>
  <div>
    <AccountsMenu
      account="Account"
      profile="Profile"
      history="History"
      route="Account"
      route2="Profile"
      route3="history"
    />

    <UICard>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="activeName">
        <el-tab-pane label="Accounts" name="first" class="bor" :stretch="true"
          >Accounts
          <NuxtLink :to="detailsLink" style="text-decoration: none">
            <div
              v-for="account in accounts"
              class="border my-3 bor"
              :key="account.name"
            >
              <el-descriptions title="Account" class="mx-2 my-1">
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

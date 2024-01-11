<script lang="ts" setup>
import { ref, computed } from "vue";
import {useRoute} from 'vue-router'
import type { TabsPaneContext } from "element-plus";

const route = useRoute();
const Id = route.params.userId; //userId params





//?routes
//?COMPUTED PROPERTIES
const accountLink = computed(()=> `/auth/${Id}/info`)
const profileLink = computed(()=> `/auth/${Id}/info/profile`)
const historyLink = computed(()=> `/auth/${Id}/info/history`)
const balanceLink = computed(()=> `/auth/${Id}/info/balance`)

const activeName = ref("first");
</script>

<template>
  <div>
    <UILayout>
      
      {{ Id }}---user param id
      <div class="right col">
        <AccountsMenu
          :userId="Id"
          account="Account"
          profile="Profile"
          history="History"
          balance="balance"
          :route="accountLink"
          :route2="profileLink"
          :route3="historyLink"
          :route4="balanceLink"
        />
        <AccountsOptions :id="Id" />
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

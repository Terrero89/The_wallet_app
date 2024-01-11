<script lang="ts" setup>
import { ref } from "vue";

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

const activeIndex = ref("1");
const activeIndex2 = ref("2");
const activeIndex3 = ref("3");



const routes = [props.route, props.route2, props.route3, props.route4];

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<template>
  <div>
    <UICard style="border: none">
      <UIMenu
        :userId="props.userId"
        account="Accounts"
        profile="Profile"
        history="History"
        balance="balance"
        route="Account"
        route2="Profile"
        route3="history"
        route4="balance"
      />
    </UICard>

    <div class="h-6" />
  </div>
</template>

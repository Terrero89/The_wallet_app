<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps([
  "account",
  "profile",
  "history",
  "route",
  "route2",
  "route3",
]);

const activeIndex = ref("1");
const activeIndex2 = ref("2");
const activeIndex3 = ref("3");

// const routeLink = computed<string>(():string => `/auth/user/account/${router}`);

const routes = [props.route, props.route2, props.route3];

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<template>
  <div>
    <UICard style="border: none">
      <UIMenu
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

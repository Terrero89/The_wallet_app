<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps([
  "userId",
  "account",
  "profile",
  "history",
  "balance",
  "route",
  "route2",
  "route3",
  "route4",
]);

const activeIndex = ref("1");
const activeIndex2 = ref("2");
const activeIndex3 = ref("3");

const routes = [props.route, props.route2, props.route3, props.route4];
const userParamId = ref(props.userId);
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const routingLink = (key: Number) => {
  if (key === 0) {
    return `/auth/${userParamId.value}/accounts`;
  }
  if (key === 1) {
    return `/auth/${userParamId.value}/info/profile`;
  }
  if (key === 2) {
    return `/auth/${userParamId.value}/info/history`;
  }
  if (key === 3) {
    return `/auth/${userParamId.value}/info/balance`;
  }
};
</script>
<template>
  <div>
    <UICard style="border: none">
      {{ routes }}
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <div v-for="(link, index) in routes" :key="index">
          <el-menu-item index="index" style="text-decoration: none">
            <NuxtLink :to="routingLink(index)"
              >{{ link }}-{{ index }}</NuxtLink
            ></el-menu-item
          >
        </div>
      </el-menu>
    </UICard>

    <div class="h-6" />
  </div>
</template>

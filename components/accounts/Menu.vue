<script lang="ts" setup>
import { ref} from "vue";

const props = defineProps(["account", "profile", "history", "route", "route2","route3"]);

const activeIndex = ref("1");
const activeIndex2 = ref("2");
const activeIndex3 = ref("3");

// const routeLink = computed<string>(():string => `/auth/user/account/${router}`);

const routes = [props.route,props.route2, props.route3]




const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
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
        <el-menu-item index="1">
          <NuxtLink to="/auth/user/accounts/add">{{
            $props.account
          }}</NuxtLink></el-menu-item
        >

        <el-menu-item index="2"
          ><NuxtLink to="/auth/user/accounts/add">{{
            $props.profile
          }}</NuxtLink></el-menu-item
        >
        <el-menu-item index="3"
          ><NuxtLink to="/auth/user/accounts/add">{{
            $props.history
          }}</NuxtLink>
        </el-menu-item>
      </el-menu>
    </UICard>

    <div class="h-6" />
  </div>
</template>

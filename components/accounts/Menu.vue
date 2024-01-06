<script lang="ts" setup>
import { ref } from "vue";

const activeIndex = ref("1");
const activeIndex2 = ref("2");
const activeIndex3 = ref("3");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <NuxtLink to="/auth/user/accounts/add"
          >Add Account</NuxtLink
        ></el-menu-item
      >

      <el-menu-item index="2"
        ><NuxtLink to="/auth/user/accounts/add"
          >Update profile</NuxtLink
        ></el-menu-item
      >
      <el-menu-item index="3"
        ><NuxtLink to="/auth/user/accounts/add">History</NuxtLink>
      </el-menu-item>
    </el-menu>
    <div class="h-6" />
  </div>
</template>

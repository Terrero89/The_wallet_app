<template>
  <div class="home-links">
    <el-menu
      ellipsis
      class="el-menu-popper-demo menu"
      mode="horizontal"
      :popper-offset="16"
    >
      <el-menu-item index="1">
        <NuxtLink class="link" to="/auth/user/transaction"
          >Add Trasaction</NuxtLink
        ></el-menu-item
      >
      <el-menu-item index="2">
        <NuxtLink class="link" to="/auth/user/addaccount"
          >Add Bank</NuxtLink
        ></el-menu-item
      >
      <el-menu-item index="2">
        <NuxtLink class="link" to="/auth/user/updateaccount"
          >Update Account</NuxtLink
        ></el-menu-item
      >
      <el-menu-item index="2">
        <NuxtLink class="link" to="/auth/user/updateaccount"
          >Update Account</NuxtLink
        ></el-menu-item
      >
    </el-menu>
  </div>
</template>

<style scoped>
.home-links {
  margin: 1rem 0;
}
</style>

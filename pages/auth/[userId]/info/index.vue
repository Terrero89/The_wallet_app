<script lang="ts" setup>
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";

const route = useRoute();

const Id = route.params.userId;
const activeName = ref("first");

</script>

<template>
  <div>
    <UILayout>
      {{ Id }}---user param id
      <div class="right col">
        <AccountsOptions> </AccountsOptions>
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

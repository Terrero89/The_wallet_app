<script lang="ts" setup>
import { ref } from 'vue'
const props = defineProps(["input"]);
const value = ref('')


</script>

<template>
  <div>
    <el-select v-model="value" class="m-2" placeholder="Select" size="large">
      <el-option
        v-for="item in input"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
 
  </div>
</template>

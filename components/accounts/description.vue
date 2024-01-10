<script setup>
const props = defineProps([
  "account",
  "type",
  "four",
  "date",
  "limit",
  "balance",
  "user",
  "status",
]);
</script>
<template>
  <div>
    <el-descriptions title="Account" class="mx-2 my-1">
      <el-descriptions-item label="Account:">
        {{ props.account }}</el-descriptions-item
      >

      <el-descriptions-item label="Type:">{{
        props.type
      }}</el-descriptions-item>
      <el-descriptions-item label="Last four:">
        {{ props.lastFour }}</el-descriptions-item
      >

      <el-descriptions-item label="Added On">
        <el-tag>{{ props.date }}</el-tag></el-descriptions-item
      >
      <el-descriptions-item label="Balance">
        <el-tag>${{ props.balance }}</el-tag></el-descriptions-item
      >

      <el-descriptions-item label="Limit:">
        <el-tag>{{ props.limit }}</el-tag></el-descriptions-item
      >

      <el-descriptions-item label="Added By">
        <el-tag>{{ props.user }}</el-tag></el-descriptions-item
      >

      <el-descriptions-item label="Status">
        <el-tag size="small">Active</el-tag>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

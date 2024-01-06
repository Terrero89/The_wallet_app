

<script setup>
const tableData = [
  {
    date: "2016-05-03",
    account: "Chase Bank",
    amount: 15,
  },
  {
    date: "2016-05-02",
    account: "Bank of america",
    amount: 15,
  },
];
</script>

<template>
  <div>
    <UICard>
      <h6>Latest transactions</h6>
      <div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="account" label="Account" width="180" />
          <el-table-column prop="amount" label="Amount" />
        </el-table>
      </div>
    </UICard>
  </div>
</template>

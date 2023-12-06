<template>
    <el-row>
      <el-col :span="6">
        <el-statistic title="Balance" :value="4000" />
      </el-col>
      <el-col :span="6">
        <el-statistic :value="4000">
          <template #title>
            <div style="display: inline-flex; align-items: center">
          Total Debt
              <el-icon style="margin-left: 4px" :size="12">
                <Male />
              </el-icon>
            </div>
          </template>
          <template #suffix>/1,500</template>
        </el-statistic>
      </el-col>
      <el-col :span="6">
        <el-statistic title="Total Transactions" :value="35" />
      </el-col>
      <el-col :span="6">
        <el-statistic title="Weeks to close" :value="8">
          <template #suffix>
            <el-icon style="vertical-align: -0.125em">
              <ChatLineRound />
            </el-icon>
          </template>
        </el-statistic>
      </el-col>
    </el-row>
  </template>
  
  <script lang="ts" setup>
  import { ChatLineRound, Male } from '@element-plus/icons-vue'
  </script>
  
  <style scoped>
  .el-col {
    text-align: center;
  }
  </style>
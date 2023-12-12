<script setup></script>

<template>
  <div>
    <UICard>
      <div class="personal-info">
        <el-avatar class="avatar" :size="50" :color="secondary">S</el-avatar>
        <div class="avatar-info">
          <div class="profile">Sergio Terrero</div>
          <div class="avatar-dash">Dashboard</div>
        </div>
      </div>
    </UICard>
  </div>
</template>

<style scoped>
.personal-info {
  display: flex;
}

.avatar-info {
  display: flex;
  margin: auto;
}
.avatar {
  margin-right: auto;
  background-color: rgb(62, 65, 255);
}

.avatar-info .profile {
  margin: 0 1rem;
}
</style>

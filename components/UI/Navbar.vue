<script setup lang="ts">
const admin = ref(true);
</script>

<template>
  <header>
    <nav class="navbar">
      <div>
        <NuxtLink class="nav-logo" to="/"> Wallet app</NuxtLink>
      </div>
      <div class="links">
        <ul class="nav-links">
          <NuxtLink class="nav-links" to="/auth/55505"> Home </NuxtLink>

          <NuxtLink class="nav-links" to="/auth/55550/info"> Profile </NuxtLink>

          <NuxtLink v-if="admin" class="nav-links" to="/auth">
            Dashboard
          </NuxtLink>
          <!-- <NuxtLink v-if="admin" class="nav-links" to="/auth"> Admin</NuxtLink> -->
        </ul>
      </div>

      <el-button>
        <NuxtLink class="login-btn" to="/login">Login</NuxtLink></el-button
      >
      <el-button>
        <NuxtLink class="signup-btn" to="/login">Logout</NuxtLink></el-button
      >
    </nav>
  </header>
</template>

<style scoped>
.nav-logo {
  font-size: 18px;
  padding: 10px 12px;
  color: white;
  list-style: none;
}

.nav-logo a {
  color: rgb(252, 252, 252);
  text-decoration: none;
}

.navbar {
  background-color: #057059;
  padding: 8px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-links {
  color: white;
  list-style: none;
  display: flex;
  margin: 0 1rem;
  padding: 0;
}

@media screen and (max-width: 678px) {
  .nav-links {
    display: none;
  }
}

.nav-links li {
  margin-right: 10px;
  color: white;
}

.links {
  margin-left: auto;
}

a {
  text-decoration: none;
  padding: 5px;
  border-radius: 5px;
  align-items: center;
}

.buttons {
  margin-left: 10rem;
  display: block;
}

.login-btn,
.signup-btn {
  text-decoration: none;
  border: none;
  color: black;
  cursor: pointer;
}
</style>

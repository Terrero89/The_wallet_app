<script setup lang="ts"></script>

<template>
  <header>
    <nav class="navbar">
      <div>
        <li class="nav-logo"><a href="/">Wallet App</a></li>
      </div>
      <div class="links">
        <ul class="nav-links">
          <li><a href="#">Reserve</a></li>

          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>
      <NuxtLink to="/login" class="login-btn">
        <el-button class="login-btn"> login</el-button>
      </NuxtLink>
      <NuxtLink to="/signup" class="signup-btn">
        <el-button type="info" class="signup-btn">log out</el-button>
      </NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.nav-logo {
  font-size: 18px;
  padding: 10px 12px;

  list-style: none;
  color: black;
}

.nav-logo a {
  color: rgb(252, 252, 252);
  text-decoration: none;
}

.navbar {
  border-radius: 0 0 10px 10px;
  background-color: #303031;
  padding: 8px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border:solid rgb(197, 197, 197) 1px; */
}

.nav-links {
  list-style: none;
  display: flex;
  margin: 0;
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
  margin: 0 4rem;
}

.nav-links li a {
  text-decoration: none;
  padding: 5px;
  border-radius: 5px;
  color: white;
  align-items: center;
}

.buttons {
  margin-left: 10rem;
  display: block;
}

.login-btn {
  text-decoration: none;
  border: none;
  color: black;
}

.signup-btn {
  padding: 8px 16px;

  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>

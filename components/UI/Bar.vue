<template>
       <div class="common-layout">
      <el-container>
        <el-header class="header">
          <div class="navbar">
            <div class="logo">The Wallet</div>
            <div class="divider">
              <ul class="nav">
                <NuxtLink class="nav-links" to="/login"> Home </NuxtLink>
                <NuxtLink class="nav-links" to="/login"> Spending </NuxtLink>
                <NuxtLink class="nav-links" to="/login"> Balance </NuxtLink>
                <NuxtLink class="nav-links" to="/login"> Profile </NuxtLink>
              </ul>
            </div>

            <div class="control">
              <el-button>LOGOUT</el-button>
            </div>
          </div>
        </el-header>
        <el-main
          >MAIN PAGE FOR USER HOME

          <slot />
        </el-main>
      </el-container>
    </div>
</template>

<style scoped>


.header {
  background-color: rgb(27, 0, 97);
  color: white;
}
.navbar {
  display: flex;
  justify-content: center;
  margin: auto 0;
}
.divider {
  margin-left: auto;
}
.nav {
  margin: auto;
  align-content: center;
}

.nav-links {
  margin: 0 1rem;
}

.control {
  margin-right: 2rem;
  margin-left: 2rem;
}
a {
  color: #ffffff;
  text-decoration: none;
}


</style>
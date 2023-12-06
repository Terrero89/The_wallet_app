<script setup></script>

<template>
  <div>
    USER HOME ROUTE

    <UILayout>
      <div class="external row">
        <div class="right col-lg-8 col-md-8">
          <div class="dot"><StatsNumbers /></div>
          <div class="dot"><StatsNumbers /></div>
          <div class="dot"><StatsNumbers /></div>
          <div class="dot"><StatsNumbers /></div>
          <div class="dot"><StatsNumbers /></div>
          <div class="dot"><StatsNumbers /></div>
        </div>
        <div class="left col-lg-4 col-md-4">
          <div class="dot">Personal User info</div>
          <div class="dot">Weekly Stats</div>
          <div class="dot">Progress Lately</div>
          <div class="dot"><StatsNumbers /></div>
        </div>
      </div>
    </UILayout>
  </div>
</template>

<style scoped>
.external {
}
.right {
}

.left {
}

.dot {
align-content: center;

  background-color: white;
  border-radius: 5px;
  height: 10rem;
  margin: 1rem auto;
  border: solid rgb(187, 187, 187) 1px;
}

@media screen and (max-width: 678px) {
  .left,
  .right {
    min-width: 100%;
  }

  .external {
    margin: 0;
  }

  .right{
    order:0
  }
  .left{
    order:1
  }
}
</style>

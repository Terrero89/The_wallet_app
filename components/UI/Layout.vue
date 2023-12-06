<script setup></script>

<template>
  <div>
    <div class="container main-container">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.main-container {
   
  padding: 1rem 1rem;
  margin: 1rem auto 3rem auto;
  border-radius: 5px;
  box-shadow: 0px 6px 40px 15px rgba(0, 0, 0, 0.05);

  border-radius: 5px;
}

@media screen and (max-width: 578px) {
.container{
    background-color: transparent;
}

 
}



</style>

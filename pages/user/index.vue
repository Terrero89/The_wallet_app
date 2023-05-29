<script setup>
definePageMeta({
  layout: "default",
  middleware: "auth",
});
</script>

<template>
  <div>
    <UIPage>
      <div class="main-section">
        <h1>primary section</h1>

      
      </div>
      <div class="secondary-section">
        <h1>secondary section</h1>
        <div class="box box1">box1</div>
        <div class="box box2">box2</div>


      </div>
    </UIPage>
  </div>
</template>
<style scoped>
.main-section {
  border: solid red 1px;
  width: 60%;
  margin: 0 1rem;
}

.secondary-section {
  border: solid red 1px;
  width: 20%;
  display: flex;
  justify-content:center;
  flex-wrap: wrap;
}

.box{
  width: 25%;
  border: blue 1px solid;
}
</style>

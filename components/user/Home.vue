<script setup></script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 bord">
        <div class="bord1">
          <UIDescription />
        </div>
        <!-- border on the right -->

        <div class="bord1">
          <StatsNumbers />
        </div>
        <div class="bord1">
       
          <StatsNumbers />
        </div>
        <div class="bord1">
          <StatsNumbers />
        </div>
        <div class="bord1 row">
          <div>BORDER TOGETHER</div>

          <div class="bord1 col-sm-6">
            <div>BORDER PERSONAL</div>
          </div>

          <div class="bord1 col-sm-6">
            <div>BORDER PERSONAL</div>
          </div>
        </div>
        <div class="bord1">
          <div>BORDER RANDOM</div>
        </div>
        <div class="bord1">
          <div>BORDER RANDOM</div>
        </div>
        <div class="bord1">
          <div>BORDER RANDOM</div>
        </div>
      </div>
      <!-- border on the right -->
      <div class="col-md-4">
        <div class="bord2">
          <div><el-avatar /></div>
          <div>Sergio Terrero</div>
          <div>Ok standing</div>
          <div>Week Plan</div>
        </div>
        <div class="bord2">
          <div>MONTHLY PAYMENTS</div>
        </div>
        <div class="bord2">
          <div>PROGRESS</div>
        </div>
        <div class="bord2">
          <div>MONTHLY PLAN</div>
        </div>
        <div class="bord2">borderxx1</div>
        <div class="bord2">borderxx1</div>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  border-radius: 5px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: rgb(255, 255, 255);
  /* border: solid rgb(46, 46, 46) 1px; */
}

.bord1 {
  padding: 1rem;
  border-radius: 5px;
  min-height: 5rem;
  margin: 1rem 0;
  border: solid rgb(170, 170, 170) 1px;
}

.bord2 {
  padding: 1rem;
  min-height: 7rem;
  border-radius: 5px;

  margin: 1rem 0;
  border: solid rgb(0, 89, 255) 1px;
}

@media screen and (max-width: 678px) {
  .bord1 {
    order: 1;
  }

  .bord {
    order: 2;
  }
}
</style>

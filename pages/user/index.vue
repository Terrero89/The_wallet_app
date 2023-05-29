<script setup>
import { useReservationsStore } from "@/stores/reservations";
const reservationsStore = useReservationsStore()
const {dates} = reservationsStore

definePageMeta({
  layout: "default",
  // middleware: "auth",
});

const d= ref("05/22/2023")

const searchDates = () => {
  console.log(d.value)

}
</script>

<template>
  <div>
    <UIPage>
  

      <div class="row">
        <div class="col-lg-8 col-md-8 border"></div>
        <div class="col-lg-4 col-md-4 border">
          <form class="select-dates-form border border-gray mt-5 px-3 align-left">
            <!-- <div class="col border my-3 px-2">
              <span></span>

              searched "05/29/2023"
            </div> -->
            <div class="search-bar">
              <label for=""> Search</label>
              <input v-model="d" type="search" placeholder="05/29/2023" />
              <button @click="searchDates">Search</button>
            </div>
            <div class="selected-dates col">
              
       
              <div class="dates">
               
                <div class="available-dates">"05/29/23" <span>1:30 pm</span></div>
                <div class="available-dates">"05/29/23" <span>3:30 pm</span></div>
                <div class="available-dates">"05/29/23" <span>5:30 pm</span></div>
                <div class="available-dates">"05/29/23" <span>7:30 pm</span></div> 
              </div>
            </div>

            <el-button>Submit</el-button>
          </form>
        </div>
      </div>
    </UIPage>
  </div>
</template>
<style scoped>
.dates{
  width: auto;
  margin: 0 auto;
}
.selected-dates{
margin: 0 auto;
 
}
.select-dates-form {
  border-radius: 10px;
  padding: 1rem 0;
}

.available-dates {
  border: solid rgb(0, 196, 0,0.8) 1px;
  border-radius: 10px;
  padding: 0 1rem;
  margin: 0.7rem 0;
  width: auto;
  list-style: none;
}

.main-section {
  border: solid red 1px;
  width: 60%;
  margin: 0 1rem;
}

.secondary-section {
  border: solid red 1px;
  width: 20%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.box {
  width: 25%;
  border: blue 1px solid;
}
</style>

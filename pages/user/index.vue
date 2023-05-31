<script setup>
import { useReservationsStore } from "@/stores/reservations";
const reservationsStore = useReservationsStore();
const { dates } = reservationsStore;

// definePageMeta({
// layout: "default",
// middleware: "auth",
// });

const date = ref(new Date().toLocaleDateString());
console.log(date.value);

const mm = ref("");

const dateForm = computed(() => dates.filter((el) => el.date === date.value)); //displays the dates entered in date
</script>

<template>
  <div>
    <UIPage>
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-6 order-1-sm border">
          <!-- search bar for dates -->
          <div class="search-bar d-flex justify-content-center">
            <label for=""> </label>
            <input v-model="date" type="search" placeholder="MM/DD/YY" />
           
          </div>
        



        <div>Menu</div>
        <div class="row">

          <div class="col-lg-12 border my-2">
           up coming appointents
          </div>
          <div class="col-12 border my-2">
            Last appointment
          </div>

          <div class="col-12 border my-2">
            Visist last 3 months
          </div>
        </div>

        <el-button class="my-2"> send message</el-button>
        </div>

        <!-- dates sections -->
        <div class="col-lg-4 col-md-4 col-sm-6  ">
          <form class="select-dates-form border border-gray mt-5 px-3 align-left">
            <div class="selected-dates col">
              <h6>Available dates</h6>
              <div class="dates" v-for="(date) in dateForm" :key="date">
              
                <div class="available-dates">
                  <input type="radio" :value="date.slotNumber" v-model="mm" />
                  <span>{{ date.slotNumber }} -</span>
                  <span>{{ date.date }} -</span>
                  <span>{{ date.time }}</span>
                </div>
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
.dates {
  width: auto;
  margin: 0 auto;
}
.selected-dates {
  margin: 0 auto;
}
.select-dates-form {
  border-radius: 10px;
  padding: .5rem 0;
}

.available-dates {
  border: solid rgba(43, 44, 43, 0.8) 1px;
  border-radius: 5px;
  padding: 0 1rem;
  margin: 0.7rem 0;
  width: auto;
  list-style: none;
}

.main-section {
  border: solid red 1px;
  width: 60%;
  margin: 0 .5rem;
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

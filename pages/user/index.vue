<script setup lang="ts">
import { useReservationsStore } from "@/stores/reservations";
const reservationsStore = useReservationsStore();
const { dates } = reservationsStore;

interface Reservation {
  date: string | null;
  time: string | null;
}

// const date = ref(new Date().toLocaleDateString());

const date = ref("");
const time = ref(""); //testing time picker

//function used to clear inputs adter submitted
const clearInputs = () => {
  date.value = "";
  time.value = "";
};

//submits form with data to server
const submitHandler = () => {
  const reservation = ref<Reservation>({
    time: time.value,
    date: date.value,
  });

  console.log(reservation.value.date, reservation.value.time);

  clearInputs();
};

// const dateFormat = computed(()=>{
//   let year = date.value.slice(0,4)
//   let day = date.value.slice(8,10)
//   let month = date.value.slice(5,7)
//   let fullDate =  `${month}/${day}/${year}`
//   date.value = fullDate
//   return fullDate.toString()

const mm = ref("");

const dateForm = computed(() => dates.filter((el) => el.date === date.value)); //displays the dates entered in date

const dd = ref(new Date());

const timeFormat = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  var format = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var time = hours + ":" + minutes + " " + format;
  return time;
};

// definePageMeta({
// layout: "default",
// middleware: "auth",
// });
</script>

<template>
  <div >
   
      <div class="row options border">
        <div class="col-lg-8">
          <div class=""> 
            <el-date-picker
                v-model="date"
                placeholder="Pick a date"
                format="MM/DD/YYYY"
                value-format="MM/DD/YYYY"
             
              />

            <el-time-select
            class="round"
                v-model="time"
                start="10:00"
                step="01:30"
                end="20:30"
                placeholder="Select time"
                format="hh:mm A"
              
              />

          </div>
1
    
        </div>

        <div class="col-lg-4 ">
          <div class="mx-4">
          <!-- {{ dd.getHours() }}
          {{ dd.getMinutes() }}
          {{ dd.getSeconds() }}--->
          {{ timeFormat(new Date()) }}
          {{ time }}
          {{ date }}

          <form
            @submit.prevent="submitHandler"
            class="select-dates-form dates-border mt-1 px-1"
          >
            <div class="mx-3">
              <div>Select date</div>
              <!-- Will be in separate component DATE -->
              <el-date-picker
                v-model="date"
                placeholder="Pick a date"
                format="MM/DD/YYYY"
                value-format="MM/DD/YYYY"
             
              />
              <!-- will be in separate component TIME-->
              <el-time-select
                v-model="time"
                start="10:00"
                step="01:30"
                end="20:30"
                placeholder="Select time"
                format="hh:mm A"
              
              />
            </div>

            <div class="selected-dates mx-2 my-4">
              <div class="dates" v-for="date in dateForm" :key="date">
                <div class="available-dates">
                  <input type="radio" :value="date.time" v-model="mm" class="mx-1" />
                  <span>{{ date.name }} </span> - <span>{{ date.date }} </span> -
                  <span>{{ date.time }} </span>
                </div>
              </div>
            </div>

            <el-button class="mx-3" @click="submitHandler">Submit</el-button>
          </form>
        </div>
        </div>

        <!-- dates sections -->
   


      </div>
  
  </div>
</template>
<style scoped>

.round{
  border-radius: 15px;
 border: solid red 1px;}
.details {
  border: solid rgb(185, 185, 185, 0.6) 1px;
  border-radius: 8px;
}
.info {
  width: 100%;
}
.details .title {
  font-size: 0.9rem;
  font-weight: 500;
}
.details .date,
.time,
.info {
  font-size: 0.8rem;
  font-weight: 500;
  color: rgb(78, 77, 77);
}
.details .date,
.time {
  font-size: 0.8rem;
  font-weight: 500;
  color: rgb(78, 77, 77);
}

.dates {
  width: 20rem;
 

  
}
.selected-dates {

  width: 20rem;
  /* border: solid red 1px; */
}
.select-dates-form {
  border-radius: 10px;
  padding: 0.5rem 0;
  width: 100%;
  border: solid rgb(196, 196, 196, 0.7) 1px;
}

.available-dates {
  border: solid rgba(230, 230, 230, 0.8) 1px;
  border-radius: 5px;
  padding: 0 1rem;
  margin: 0.8rem 0;
  width: auto;
  list-style: none;
  color: rgb(88, 87, 87);
  font-size: 0.8rem;
}

.main-section {
  border: solid red 1px;
  width: 60%;
  margin: 0 0.5rem;
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



/* dates section */
</style>

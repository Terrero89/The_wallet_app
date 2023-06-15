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
//will be converted into a composable
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
  <div class="wrapper">
    <div class="inner-wrapper">
      <div class="option-box">
        <div class="box">Menu</div>
        <div class="box">Next reservation</div>
        <div class="box">Last reservation</div>
        <div class="box">Last 3 months</div>
      </div>

      <div class="calendar row">
        <div class="calendar-wrapper col-lg-6">
          <div class="">
            <el-date-picker
              v-model="date"
              type="week"
              format="MM/DD/YYYY"
              placeholder="Pick a week"
            />
          </div>

   <div>           <el-time-select
    v-model="time"
    start="08:30"
    step="00:15"
    end="18:30"
    placeholder="Select time"
  /></div>
        </div>
        <div class="dates-selection col-lg-6">
          <div class="wrp" v-for="items in dates" :key="items">
            <div class="dates">
              <el-button>
                {{ items.date }}
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  max-width: 97%;
  margin: 0 auto;
  border: solid red 1px;
  height: 50rem;
  border-radius: 10px;
  padding: 0 0.5rem;
}

.option-box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: solid blue 1px;

  max-width: 50em;
  margin: 2rem auto;
}
.option-box .box {
  min-width: 5rem;
  display: flex;
  justify-content: evenly;
  flex-wrap: wrap;
  border: solid green 1px;
  align-content: center;
  margin: auto 1rem;
  padding: 0.5rem;
  border-radius: 10px;
  align-items: left;
}

.calendar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: solid rgb(221, 221, 221) 1px;

  max-width: 50em;
  margin: 2rem auto;
}

.calendar-wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;



}
.dates-selection {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.wrp {
}

.dates {
}
</style>

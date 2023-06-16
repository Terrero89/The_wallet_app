<script setup lang="ts">
import { useReservationsStore } from "@/stores/reservations";
const reservationsStore = useReservationsStore();
const { dates } = reservationsStore;

interface Reservation {
  date: string | null;
  time: string | null;
}

// const date = ref(new Date().toLocaleDateString());

const date = ref(""); //testing time picker
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

const dateForm = computed(() => dates.filter((el) => el.date === date.value)); //displays the dates entered in date

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
      <div class="option-box row">
        <Nuxt-link class="box col col-lg-3 col-md-6 col-sm-6" to="/">
        </Nuxt-link>
        <Nuxt-link class="box col col-lg-3 col-md-6 col-sm-6" to="/">
        </Nuxt-link>
        <Nuxt-link class="box col col-lg-3 col-md-6 col-sm-6" to="/">
          ></Nuxt-link
        >
        <Nuxt-link class="box col col-lg-3 col-md-6 col-sm-6" to="/">
        </Nuxt-link>
      </div>

      <form class="calendar">
        <div class="calendar-wrapper col-lg-6 col-sm-12">
          <div class="pickers">
            <div class="input-group">
              <div class="input-group-text">
                <input
                  class="form-check-input mt-0"
                  type="radio"
                  value=""
                  aria-label="Radio button for following text input"
                />
              </div>
              <input
                type="date"
                v-model="date"
                class="form-control"
                aria-label="Text input with radio button"
              />
            </div>
            <!-- <el-date-picker
    
              v-model="date"
              type="date"
              placeholder="Pick a Date"
              format="MM/DD/YYYY"
              value-format="MM/DD/YYYY"
            />

            <el-time-select
           
              v-model="time"
              start="10:30"
              step="01:30"
              end="18:30"
              placeholder="Select time"
            /> -->
          </div>
        </div>

        <div class="date col-lg-6 col">
          <div class="dates-title">Available Dates</div>
          <div class="dates-selection">
            <div class="wrp" v-for="items in dateForm" :key="items">
              <div class="dates">
                <el-button>
                  {{ items.date }}
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {{ time }} ====
      {{ timeFormat(new Date()) }}
      xxx==== {{ date }}
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  max-width: auto;
  margin: 0 auto;
  border: solid red 1px;

  height: 95vh;
  border-radius: 10px;
  padding: 0 0.5rem;
}
.inner-wrapper{
    border: solid rgb(129, 129, 129) 1px;
    margin: 5rem 0;
}

.option-box {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border: solid rgb(129, 129, 129) 1px;
  max-width: 50rem;
  margin: 1rem auto;
  padding: 1rem;
}
.option-box .box {
  border: solid rgb(67, 90, 67) 1px;
  text-align: center;

  margin: 0.2rem;
  padding: 0.1rem auto;
  border-radius: 5px;
  width: 7rem;
}
.option-box .box button {
  border: none;
  background: transparent;
}
.calendar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* border: solid rgb(161, 10, 221) 1px; */

  max-width: 50em;
  /* padding: 0.5rem 0; */
  margin: 1rem auto; /**0 when is mobile */
  padding: 0 0.8rem;
}

.calendar-wrapper {
  border: solid rgb(129, 129, 129) 1px;
  border-radius: 10px;
  min-height: 5rem;
  margin: 1.5rem 0;
  align-content: center;
}
.dates-selection {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  min-height: 5rem;
  border: solid red 1px;
  border-radius: 10px;
  align-content: center;

  /* padding: 0.5rem 0.8rem; */
}

.dates {
  margin: 0.3rem;
}

.pickers {
  margin: 1rem auto;
}
.dates-title {
  text-align: center;
}
</style>

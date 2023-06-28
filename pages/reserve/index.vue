<script setup lang="ts">
import {beforeMount} from 'vue'
import { useReservationsStore } from "@/stores/reservations";
import { storeToRefs } from "pinia";
const reservationsStore = useReservationsStore();
const { reserveTimes, reservedDates, reserveSlot, isSlotAvailable} = reservationsStore;
const { workingHours, datesFilter, dates } = storeToRefs(reservationsStore);

interface Reservation {
  date: string | null;
  time: string | null;
}

// const date = ref(new Date().toLocaleDateString());

const date = ref<string>(""); //testing time picker
const time = ref<string>(""); //testing time picker

//function used to clear inputs after submitted
const clearInputs = (): void => {
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

  // clearInputs();
};
//computed to format date from input to proper input form
const dateFormat = computed(() => {
  let year = date.value.slice(0, 4);
  let day = date.value.slice(8, 10);
  let month = date.value.slice(5, 7);
  let fullDate = `${month}/${day}/${year}`;
  date.value = fullDate;
  return fullDate.toString();
});

const dateForm = computed(() =>
  dates.value.filter((el) => el.date === date.value)
); //displays the dates entered in date formatted

const unavailableDate = computed(() => {});

const timeFormat = (date: any) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  var format = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var time = hours + ":" + minutes + " " + format;
  return time;
};

//TODO: compare the dates with the dates already reserved to avoid date duplication issues


console.log("testing " + isSlotAvailable(date, workingHours))





// definePageMeta({
// layout: "default",
// middleware: "auth",
// });
</script>

<template>
  <div class="wrapper">
    <div class="inner-wrapper">
      <UICard>
        <div class="option-box">
          <!-- <button class="btn btn-outline-success px-1">
            <Nuxt-link class="box col-lg-3 col-md-6 col-sm-6 " to="/">
              Reservations
            </Nuxt-link>
          
          </button> -->

          <button class="btn btn-outline-success px-1">
            <Nuxt-link class="box col-lg-3 col-md-6 col-sm-6" to="/">
              Last 3 months
            </Nuxt-link>
          </button>
          <button class="btn btn-outline-success px-1">
            <Nuxt-link class="box col-lg-3 col-md-6 col-sm-6" to="/">
              Next Reservation
            </Nuxt-link>
          </button>
        </div>
      </UICard>
     
    
    <h1>Available Time Slots</h1>
    <ul >
      <li v-for="timeSlot in workingHours" :key="timeSlot">
        {{ timeSlot }} - {{ isSlotAvailable(dateForm, timeSlot) ? 'Available' : 'Not Available' }}
         <button  :disabled="!isSlotAvailable(dateForm, timeSlot)">
          Reserve
        </button>
      </li>
    </ul>


      <UICard>
        <form class="calendar">
          <div class="calendar-wrapper col-lg-6 col-sm-6">
            <div class="pickers">
              <div class="input-group row">
                <h6 class="mx-auto">Select time and date</h6>
                <div class="col-lg-6 col-sm-6 my-1">
                  <input
                    type="date"
                    v-model="date"
                    placeholder="date"
                    class="form-control"
                    aria-label="Text input with radio button"
                  />
                </div>

                <div class="col-lg-6 col-sm-6 my-1">
                  <select
                    v-model="time"
                    class="form-select"
                    id="inputGroupSelect01"
                  >
                    <option
                      selected
                      v-for="hours in workingHours"
                      :key="hours"
                      :value="hours"
                    >
                      {{ hours }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="date col-lg-6 col-sm-12">
            <div class="dates-title my-3">Available Hours</div>
            <div class="dates-selection">
              <div class="wrp" v-for="items in workingHours" :key="items">
                <div class="dates">
                  <div
                    class="border border-success py-1 px-2 rounded-1 text"
                    :value="items"
                  >
                    <input
                      type="radio"
                      :value="items"
                      v-model="time"
                      class="mx-1"
                    />
                    {{ items }}
                  </div>
                </div>
              </div>
            </div>
            <button
              class="btn btn-md btn-outline-primary my-2 text"
              @click="submitHandler"
            >
              Reserve
            </button>
          </div>
        </form>
      </UICard>
      <!-- {{ time }}

      {{ dateFormat }}
      {{ datesFilter(dateFormat) }}
      {{ date }} -->
    </div>
  </div>
</template>
<style scoped>
.not-available {
  color: red;
  border: solid blue 1px;
}

.text {
  font-size: 0.7rem;
}
.wrapper {
  max-width: auto;
  margin: 0 auto;
  border: solid rgb(240, 240, 240) 1px;
  background-color: rgb(236, 243, 248);

  height: 95vh;
  border-radius: 5px;
  padding: 0 0.3rem;
}

.option-box {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.option-box .box {
  font-size: 0.75rem;
  color: rgb(61, 61, 61);
  text-decoration: none;
  list-style: none;
  text-align: center;
  max-width: 2rem;
}
.option-box .box button {
  font-size: 0.75rem;
  color: rgb(61, 61, 61);
  text-decoration: none;
  list-style: none;
  text-align: center;
  max-width: 2rem;
}
.option-box .box {
  width: 2rem;
}

.option-box .box:hover {
  color: white;
  border: none;
  transition: 0.1s;
}
.option-box .box button {
  border: none;
  background: transparent;
}

.calendar-wrapper {
  /* border: solid rgb(129, 129, 129) 1px; */
  border-radius: 3px;
  margin: 1.5rem auto;
  padding: 1rem;
  max-width: 35rem;
}
.dates-selection {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 5rem;
  border: solid rgb(248, 248, 248) 1px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 3px;
  padding: 0.5rem;
  margin: 0 auto;

  /* padding: 0.5rem 0.8rem; */
}

.form {
  margin: 0 auto;
}

.dates {
  margin: 0.3rem;
}
.date {
  margin: 0 auto;
  max-width: 35rem;
}

.pickers {
  margin: 1rem auto;
}
.dates-title {
  text-align: center;
}
</style>

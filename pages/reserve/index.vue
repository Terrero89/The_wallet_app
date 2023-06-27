<script setup lang="ts">
import { useReservationsStore } from "@/stores/reservations";
const reservationsStore = useReservationsStore();
const { dates,datesFilter } = reservationsStore;

interface Reservation {
  date: string | null;
  time: string | null;
}

// const date = ref(new Date().toLocaleDateString());

const date = ref<string>(""); //testing time picker
const time = ref<string>(""); //testing time picker
const schedule = ref<string[]>([
  "10:00 AM",
  "11:30 AM",
  "02:00 PM",
  "03:30 PM",
  "05:00 PM",
  "06:30 PM",
  "08:00 PM",
]);

//function used to clear inputs adter submitted
const clearInputs = ():void =>{
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

const dateForm = computed(() => dates.filter((el) => el.date === date.value)); //displays the dates entered in date formatted

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
          <Nuxt-link class="box col col-lg-3 col-md-6 col-sm-6" to="/">
            Reservations
          </Nuxt-link>
          <Nuxt-link class="box col col-lg-3 col-md-6 col-sm-6" to="/">
            Last 3 months
          </Nuxt-link>
          <Nuxt-link class="box col col-lg-3 col-md-6 col-sm-6" to="/">
            Next reservation
          </Nuxt-link>
        </div>
      </UICard>
{{ datesFilter(dateFormat)}} 
{{ compare }}

      <!-- <div v-for="t in schedule" :key="t">
        <span>{{ t }}</span>
      </div> -->
      <UICard>
        <form class="calendar">
          <div class="calendar-wrapper col-lg-6 col-sm-6">
            <div class="pickers">
              <div class="input-group row">
                <div class="col-lg-6 col-sm-6 my-1">
                  <input
                    type="date"
                    v-model="date"
                    placeholder="date"
                    class="form-control"
                    aria-label="Text input with radio button"
                  />
                </div>

                <div class="col-lg-6 col-sm-6">
                  <select
                    v-model="time"
                    class="form-select"
                    id="inputGroupSelect01"
                  >
                    >
                    <option selected>Choose...</option>

                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option disabled value="01:00">01:00 PM</option>
                    <option value="02:00">02:00 PM</option>
                    <option value="03:30">03:30 PM</option>
                    <option value="05:00">05:00 PM</option>
                    <option value="06:30">06:30 PM</option>
                    <option value="08:00">08:00 AM</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="date col-lg-6 col-sm-12">
            <div class="dates-title">Available Dates</div>
            <div class="dates-selection">
              <div class="wrp" v-for="items in schedule" :key="items">
                <div class="dates">
                  <el-button>
                    {{ items }}
                  </el-button>
                </div>
              </div>
            </div>
            <el-button @click="submitHandler" > Submit</el-button>
          </div>
        </form>
      </UICard>
      {{ time }}

      {{ dateFormat }}
      <!-- {{ time }} ====
      {{ timeFormat(new Date()) }}
      xxx==== {{ date }} {{ timeFormat(new Date()) }}--- {{ dateFormat }} -->
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
  padding: 0 0.3rem;
}

.option-box {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  /* border: solid rgb(129, 129, 129) 1px; */
  /* max-width: 50rem; */
  /* margin: 1rem auto; */
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

.calendar-wrapper {
  /* border: solid rgb(129, 129, 129) 1px; */
  border-radius: 10px;
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
  border-radius: 10px;
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

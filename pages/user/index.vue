<script setup>
import { useReservationsStore } from "@/stores/reservations";
const reservationsStore = useReservationsStore();
const { dates } = reservationsStore;

// definePageMeta({
// layout: "default",
// middleware: "auth",
// });

// const date = ref(new Date().toLocaleDateString());

const date = ref("05/22/2023");
const time = ref(null); //testing time picker
console.log(date.value);

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
</script>

<template>
  <div>
    <UIPage>
      <div class="row options border">
        <div class="col-lg-8 col-md-6 col-sm-10 order-1-sm">
          <!-- search bar for dates -->

          <div>Menu</div>
          <div class="row d-flex justify-content-center">
            <div class="options col-4 col-md-4 col-sm-12 my-2">
              <NuxtLink class="option">
                <el-button>Reservations</el-button>
              </NuxtLink>
            </div>

            <div class="options col-4 col-md-4 col-sm-12 my-2">
              <NuxtLink class="option">
                <el-button>Last 3 months</el-button>
              </NuxtLink>
            </div>

            <div class="options col-4 col-md-4 col-sm-12 my-2">
              <NuxtLink class="option">
                <el-button>Message</el-button>
              </NuxtLink>
            </div>
          </div>
          <!-- info for display -->
          <div class="row">
            <div class="details col-lg-5 mt-1 mx-auto">
              <h4 class="title">Up coming reservation</h4>
              <div>
                <h6 class="date">Jun 24, 2023</h6>
                <h6 class="time">06:30 PM</h6>
                <p class="info">Coloring and bleaching</p>
              </div>
            </div>
            <div class="details col-lg-5 mt-1 mx-auto">
              <h4 class="title">latest appointment</h4>
              <div>
                <h6 class="date">Jun 24, 2023</h6>
                <h6 class="time">06:30 PM</h6>
                <p class="info">Coloring and bleaching</p>
              </div>
            </div>
            <!-- last 3 visits details -->
            <div class="row">
              <div class="details d-flex justify-content-center flex-wrap">
                <h4 class="title">last 3 visits</h4>
                <div class="info border mt-2 px-2 py-1 col-sm-12">
                  <h6 class="date">Jun 24, 2023</h6>
                  <h6 class="time">06:30 PM</h6>
                </div>
                <div class="info border mt-2 px-2 py-1 col-sm-12">
                  <h6 class="date">Jun 24, 2023</h6>
                  <h6 class="time">06:30 PM</h6>
                </div>
                <div class="info border mt-2 px-2 py-1 col-sm-12">
                  <h6 class="date">Jun 24, 2023</h6>
                  <h6 class="time">06:30 PM</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- dates sections -->
        <div class="col-lg-4 col-md-6 col-sm-10">
          {{ dd.getHours() }}
          {{ dd.getMinutes() }}
          {{ dd.getSeconds() }}
          {{ timeFormat(new Date()) }}
          {{ time }}

          <form class="select-dates-form dates-border mt-1 px-1">
            <div class="block">
              <div>Select date</div>
              <!-- Will be in separate component DATE -->
              <el-date-picker
                v-model="date"
                type="date"
                placeholder="Pick a date"
                format="MM/DD/YYYY"
                value-format="MM/DD/YYYY"
              />
            </div>
            <!-- will be in separate component TIME-->
            <el-time-select
              v-model="time"
              start="10:00"
              step="01:30"
              end="20:30"
              placeholder="Select time"
              format="hh:mm A"
            />

            <div class="selected-dates col">
              <div class="dates" v-for="date in dateForm" :key="date">
                <div class="available-dates">
                  <input
                    type="radio"
                    :value="date.time"
                    v-model="mm"
                    class="mx-2"
                  />
                  <span>{{ date.name }} </span> -
                  <span>{{ date.date }} </span> -
                  <span>{{ date.time }} </span>
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
  width: auto;
  margin: 0 auto;
}
.selected-dates {
  margin: 0 auto;
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
  margin: 0.7rem 0;
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
.dates-border {
}
</style>

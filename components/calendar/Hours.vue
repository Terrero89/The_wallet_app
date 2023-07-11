<script setup lang="ts">
import { useReservationsStore } from "@/stores/reservations";
import { storeToRefs } from "pinia";
const reservationsStore = useReservationsStore();
const { filteredDates, reservedDates, workingHours } = reservationsStore;
const {} = storeToRefs(reservationsStore);

const props = defineProps(["dateTime"]);

const timeSlot = ref<string>("");

//?METHODS
const getSlots = (date: string): string[] => {
  let reservedTimes: string[] = []; //array with dates available

  const dateReserved = reservedDates.filter((d) => d.date === date); // will retrieve dates for specific date arg

  for (let i = 0; i < dateReserved.length; i++) {
    reservedTimes.push(dateReserved[i].time.toString());
  }

  return reservedTimes;
};

const checkSlotsAndReserve = (time: string[]): string[] => {
  let availableTimes: string[] = [];
  let dates = time;
  for (let i = 0; i < workingHours.length; i++) {}
  return availableTimes;
};

const pepe = getSlots(props.dateTime);
</script>

<template>
  <div class="dates-selection">
    <div class="wrp" v-for="(times) in workingHours" :key="times">
      <div class="dates">
        <div class="border border-primary py-1 px-2 rounded-1 text">
          <input type="radio" :value="times" v-model="timeSlot" class="mx-1" />
          {{ times }}
        </div>
      </div>
    </div>
  </div>
  {{ props.dateTime}}

  <!-- {{ checkSlotsAndReserve(getSlots(props.dateTime)) }} -==========>
  {{ getSlots(props.dateTime) }} -->
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

.noDate {
  background: red;
}
</style>

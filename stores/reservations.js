import { defineStore } from "pinia";

export const useReservationsStore = defineStore("reservations", {
  state: () => ({
    workingHours: [
      "10:00 AM",
      "11:30 AM",
      "02:00 PM",
      "03:30 PM",
      "05:00 PM",
      "06:30 PM",
      "08:00 PM",
    ],
    reservedDates: [
      {
        reservationId: "RES01",
        name: "Sergio Terrero",
        date: "05/22/2023",
        time: "06:00 PM",
      },
      {
        reservationId: "RES02",
        name: "Jackie Terrero",
        date: "05/22/2023",
        time: "03:00 PM",
      },
      {
        reservationId: "RES03",
        name: "Ezra Terrero",
        date: "05/22/2023",
        time: "04:00 PM",
      },

      {
        reservationId: "RES04",
        name: "Ivanoska petrier",
        date: "06/29/2023",
        time: "04:00 PM",
      },
      {
        reservationId: "RES05",
        name: "Augusta Fernandez",
        date: "05/30/2023",
        time: "11:00 AM",
      },
      {
        reservationId: "RES06",
        name: "Yorelisa Perez",
        date: "05/28/2023",
        time: "04:00 PM",
      },

      {
        reservationId: "RES07",
        name: "Ivanoska petrier",
        date: "06/05/2023",
        time: "04:00 PM",
      },
      {
        reservationId: "RES08",
        name: "Augusta Fernandez",
        date: "06/02/2023",
        time: "01:00 PM",
      },
      {
        reservationId: "RES09",
        name: "Yorelisa Perez",
        date: "06/03/2023",
        time: "04:00 PM",
      },

      {
        reservationId: "RES010",
        name: "Gina Alcantara",
        date: "07/30/2023",
        time: "10:00 AM",
      },
      {
        reservationId: "RES12",
        name: "Ezra Terrero",
        date: "07/30/2023",
        time: "11:30 AM",
      },
      {
        reservationId: "RES11",
        name: "Jackie Terrero",
        date: "07/30/2023",
        time: "02:00 PM",
      },

      {
        reservationId: "RES13",
        name: "Ivanoska Misuki",
        date: "07/30/2023",
        time: "03:30 PM",
      },
      {
        reservationId: "RES14",
        name: "Augusta Fernandez",
        date: "07/30/2023",
        time: "05:00 PM",
      },
      {
        reservationId: "RES15",
        name: "Yorelisa Perez",
        date: "07/30/2023",
        time: "06:30 PM",
      },

      {
        reservationId: "RES16",
        name: "Melinda rosa",
        date: "07/01/2023",
        time: "04:00 PM",
      },
      {
        reservationId: "RES17",
        name: "Augusta Fernandez",
        date: "07/01/2023",
        time: "03:30 PM",
      },
      {
        reservationId: "RES18",
        name: "Yorelisa Perez",
        date: "07/01/2023",
        time: "05:00 PM",
      },
    ],
  }),
  actions: {
    //check if time slot is available
    reserveTimes(timeSlot) {
      if (!this.reservedDates.includes(timeSlot)) {
        this.reservedDates.push(timeSlot);
      }
    },
    //to remove the time slot selected
    releaseTimeSlot(timeSlot) {
      const index = this.reserveTimes.indexOf(timeSlot);
      if (index === -1) {
        this.reserveDates.splice(index, 1);
      }
    },
    //will check if there is a slot available
    reserveSlot(date) {
      let availableDates = []; //array with dates available for specific date slot
      let notAvailableDates = [];

      const dateReserved = this.reservedDates.filter((d) => d.date === date); // will retrieve dates for specific date arg

      //will iterate and add the times reserved in available dates
      dateReserved.forEach((item, i) => {
        notAvailableDates.push( item.time);
        console.log("time =" + i + " " +  item.time);
      });
      this.workingHours.forEach((item) => {
        console.log(item);
 
      });

      if(availableDates.includes(notAvailableDates)){
        console.log("GOOD")
      }else{
        console.log("AVAILABLE")
      }


      return dateReserved;
    },
  },
  getters: {
    dates(state) {
      return state.reservedDates.filter((el) => el.date);
    },

    datesFilter() {
      return (dates) =>
        this.reservedDates.filter((date) => date.date === dates);
    },
  },
});

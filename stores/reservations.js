import { defineStore } from "pinia";

export const useReservationsStore = defineStore("reservations", {
  state: () => ({
    workHours: {
      start: "10:00 AM",
      end: "08:30 PM",
    },
    reservedDates: [
      {
        name: "Sergio Terrero",
        date: "05/22/2023",
        time: "06:00 PM",
      },
      {
        name: "Jackie Terrero",
        date: "05/22/2023",
        time: "03:00 PM",
      },
      {
        name: "Ezra Terrero",
        date: "05/22/2023",
        time: "04:00 PM",
      },

      {
        name: "Ivanoska petrier",
        date: "06/29/2023",
        time: "04:00 PM",
      },
      {
        name: "Augusta Fernandez",
        date: "05/30/2023",
        time: "11:00 AM",
      },
      {
        name: "Yorelisa Perez",
        date: "05/28/2023",
        time: "04:00 PM",
      },

      {
        name: "Ivanoska petrier",
        date: "06/05/2023",
        time: "04:00 PM",
      },
      {
        name: "Augusta Fernandez",
        date: "06/02/2023",
        time: "01:00 PM",
      },
      {
        name: "Yorelisa Perez",
        date: "06/03/2023",
        time: "4:00 PM",
      },
    ],
  }),
  actions: {},
  getters: {
    dates(state) {
      return state.reservedDates.filter((el) => el.date);
    },
  },
});

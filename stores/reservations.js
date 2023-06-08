import { defineStore } from "pinia";

export const useReservationsStore = defineStore("reservations", {
  state: () => ({
    workHours: {
      start: "10:00 AM",
      end: "08:30 PM",
    },
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

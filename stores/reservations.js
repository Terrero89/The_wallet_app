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

      {
        reservationId: "RES010",
        name: "Gina Alcantara",
        date: "06/30/2023",
        time: "10:00 AM",
      },
      {
        reservationId: "RES12",
        name: "Ezra Terrero",
        date: "06/30/2023",
        time: "11:30 AM",
      },
      {
        reservationId: "RES11",
        name: "Jackie Terrero",
        date: "06/30/2023",
        time: "02:00 PM",
      },

      {
        reservationId: "RES13",
        name: "Ivanoska Misuki",
        date: "06/30/2023",
        time: "03:30 PM",
      },
      {
        reservationId: "RES14",
        name: "Augusta Fernandez",
        date: "06/30/2023",
        time: "05:00 PM",
      },
      {
        reservationId: "RES15",
        name: "Yorelisa Perez",
        date: "06/30/2023",
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
  actions: {},
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

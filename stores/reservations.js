import { defineStore } from "pinia";

export const useReservationsStore = defineStore("reservations", {
  state: () => ({
    reservedDates: [
      {
        reservationOwner: "Sergio Terrero",
        date: "05/22/2023",
        reserved: true,
        slotNumber: 4,
        available: false,
        time: "6:00 PM",
        isCompleted: false,
      },
      {
        reservationOwner: "Jackie Terrero",
        date: "05/22/2023",
        slotNumber: 1,
        available: true,
        time: "11:00 PM",
        isCompleted: true,
      },
      {
        reservationOwner: "Ezra Terrero",
        date: "05/22/2023",
        slotNumber: 3,
        available: true,
        time: "4:00 PM",
        isCompleted: true,
      },

      {
        reservationOwner: "Ivanoska petrier",
        date: "06/29/2023",
        slotNumber: 5,
        available: true,
        time: "7:30 PM",
        isCompleted: false,
      },
      {
        reservationOwner: "Augusta Fernandez",
        date: "05/30/2023",
        slotNumber: 1,
        available: true,
        time: "11:00 PM",
        isCompleted: true,
      },
      {
        reservationOwner: "Yorelisa Perez",
        date: "05/28/2023",
        slotNumber: 3,
        available: true,
        time: "4:00 PM",
        isCompleted: true,
      },

      {
        reservationOwner: "Ivanoska petrier",
        date: "06/05/2023",
        slotNumber: 1,
        available: true,
        time: "7:30 PM",
        isCompleted: false,
      },
      {
        reservationOwner: "Augusta Fernandez",
        date: "06/02/2023",
        slotNumber: 2,
        available: true,
        time: "11:00 PM",
        isCompleted: true,
      },
      {
        reservationOwner: "Yorelisa Perez",
        date: "06/03/2023",
        slotNumber: 3,
        available: true,
        time: "4:00 PM",
        isCompleted: true,
      },
    ],
  }),
  actions: {
    dates(date) {
      return this.reservedDates.filter((el) => el.date === date);
    },
  },
  getters: {},
});

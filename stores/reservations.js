import { defineStore } from "pinia";

export const useReservationsStore = defineStore("reservations", {
  state: () => ({
    reservedDates: [
      {
        reservationOwner: "Sergio Terrero",
        date: "5/22/2023",
        time: "6:00 PM",
        reserved: true,
        slotNumber: 4,
        available: false,

        isCompleted: false,
      },
      {
        reservationOwner: "Jackie Terrero",
        date: "5/22/2023",
        time: "3:00 PM",
        slotNumber: 1,

        available: true,
        isCompleted: true,
      },
      {
        reservationOwner: "Ezra Terrero",
        date: "5/22/2023",
        time: "4:00 PM",
        slotNumber: 3,
        available: true,

        isCompleted: true,
      },

      {
        reservationOwner: "Ivanoska petrier",
        date: "6/29/2023",
        time: "4:00 PM",
        slotNumber: 5,
        available: true,
        time: "7:30 PM",
        isCompleted: false,
      },
      {
        reservationOwner: "Augusta Fernandez",
        date: "5/30/2023",
        time: "11:00 AM",
        slotNumber: 1,
        available: true,
        time: "11:00 PM",
        isCompleted: true,
      },
      {
        reservationOwner: "Yorelisa Perez",
        date: "5/28/2023",
        time: "4:00 PM",
        slotNumber: 3,
        available: true,
        isCompleted: true,
      },

      {
        reservationOwner: "Ivanoska petrier",
        date: "6/05/2023",
        time: "4:00 PM",
        slotNumber: 1,
        available: true,
        isCompleted: false,
      },
      {
        reservationOwner: "Augusta Fernandez",
        date: "6/02/2023",
        time: "1:00 PM",
        slotNumber: 2,
        available: true,
        isCompleted: true,
      },
      {
        reservationOwner: "Yorelisa Perez",
        date: "6/03/2023",
        time: "4:00 PM",
        slotNumber: 3,
        available: true,
        isCompleted: false,
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

import { defineStore } from "pinia";

export const useAccountsStore = defineStore("accounts", {
  state: () => ({
    accounts: "ACCOUNTS STOREEEE",
  }),

  actions: {
   addAccount(data) {
      let resData = {
        ...data,
      };

      let response =  fetch(
        `https://project-manager-app-f9829-default-rtdb.firebaseio.com/history.json`,
   
      );

      if (!response.ok) {
        console.log("ERROR PROJECTS");
      } else {
        return response.json();
      }
    },
  },
  getters: {},
});

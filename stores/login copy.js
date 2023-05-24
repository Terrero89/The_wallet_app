import { defineStore } from "pinia";
import { useUsersStore } from "./users";
export const useLoginStore = defineStore("login", {
  state: () => ({
    isLoggedIn: false,
   
  }),

  actions: {
    login(email, pwd) {
      const usersList = useUsersStore(); //users store
      const found = usersList.users.find((user) => user.email === email);
      //* test condition to check user
      if (found.email === email && found.password === pwd) {
        this.isLoggedIn = true; //testing login
        return "bERY GOOD";
      } else {
        this.isLoggedIn = false;
        return "Not GOOD";
      }
    },
  },
});

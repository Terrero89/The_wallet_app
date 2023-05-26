import { defineStore } from "pinia";
import { useUsersStore } from "./users";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: null,
  }),

  actions: {
    login(email, pwd) {
      const usersList = useUsersStore(); //users store
      const found = usersList.users.find((user) => user.email === email);

      //* test condition to check user
      if (found.email === email && found.password === pwd) {
        this.isAuthenticated = true; //testing login

      const userItem =  localStorage.setItem("user", found.email);
        return "bERY GOOD";
      } else {
        this.isAuthenticated = false;
        return "Not GOOD";
      }
    },

    logout() {
      this.isAuthenticated = false;
      localStorage.removeItem("user");
    },
  },

  // isAdmin(data) {
  //   const usersList = useUsersStore(); //users store
  //   const found = usersList.users.find((user) => user.email === data);
  //   console.log(found.isAdmin)
  //   return found.isAdmin
  // },

  getters: {
    isAuth(state) {
      return state.isAuthenticated;
    },
  },
});

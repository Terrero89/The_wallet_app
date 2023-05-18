import { defineStore } from "pinia";

export const useLoginStore = defineStore("login", {
  state: () => ({
    isLoggedIn: false,

    users: [
      {
        email: "sergio@gmail.com",
        username: "Terrero89",
        password: "123456",
      },

      {
        email: "jackie@gmail.com",
        username: "Jterrero90",
        password: "123456",
      },
      {
        email: "cami@gmail.com",
        username: "Cterrero90",
        password: "123456",
      },

      {
        email: "ezra@gmail.com",
        username: "Eterrero90",
        password: "123456",
      },
    ],
  }),

  actions: {
    confirmEmail(email, pwd) {
      const found = this.users.find(
        (user) =>
          user.email === email 
      );
      if (
        (found.email === email) &&
        found.password === pwd
      ) {
        return (this.isLoggedIn = true);
      } else {
        return (this.isLoggedIn = false);
      }
    },

    cliOn() {
      this.isLoggedIn = true
    }
  },
});

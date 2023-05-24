import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    id: 5,
    isSignedUp: false,

    //users storage for the application
    users: [
      {
        id: "1",
        email: "sergio@gmail.com",
        username: "Terrero89",
        password: "123456",
        isAdmin: true,
      },

      {
        id: "2",
        email: "jackie@gmail.com",
        username: "Jterrero90",
        password: "123456",
        isAdmin:  false
      },
      {
        id: "3",
        email: "cami@gmail.com",
        username: "Cterrero90",
        password: "123456",
        isAdmin: false
      },

      {
        id: "4",
        email: "ezra@gmail.com",
        username: "Eterrero90",
        password: "123456",
        isAdmin: false
      },
    ],
  }),

  actions: {
    //add a new user that signup
    signup(user) {
      let signup = (this.isSignedUp = true);
      let id = String(this.id);
      this.users.push({ ...user, id, signup });
      this.id++;
    },
    getters: {
      //will check if email of user is already on record.
      // userExists(email) {
      //   const foundUser = this.users.find((user) => user.email === email);
      // }
    },
  },
});

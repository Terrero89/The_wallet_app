import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [
      {
        email: "sergio@gmail.com",
        username: "Terrero89",
        password: "Golang2023!",
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

    usernameUsed: [],
    emailsUsed: []
  }),

  actions:{


    confirmLogin(input, pwd){
console.log(input,pwd)
const user = this.users.filter(
  (user) => user.username 
);

console.log(user)
if(input === "sergio@gmail.com"){
  console.log("Say hey")
}
 
    }
  }
});

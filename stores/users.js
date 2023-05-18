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

//   confirmEmail(email,pwd){

// const found = this.users.find(user => (user.email === email|| user.username  === email) && user.password === pwd)
// if(found.email === email && found.password === pwd){
//   console.log("Good")
// }else{
//   return "FUCK"
// }

//   }
}


});

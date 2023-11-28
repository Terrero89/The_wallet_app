import {defineStore} from "pinia";
import {useUsersStore} from "./users";

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


                console.log("Good login")
            } else {
                this.isAuthenticated = false;
                return "Not GOOD";
            }
        },

        logout() {
            this.isAuthenticated = false;

        },

        //async function to wait for the token localstorage
        async needsProfile() {
            const usersList = useUsersStore(); //users store

            return usersList
        },
    },

    getters: {


    },
});

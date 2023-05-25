import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
const { isAuthenticated,isAdmin } = useAuthStore();

export default defineNuxtRouteMiddleware((to, from) => {
    // if (isAuthenticated === false) {
    //     console.log("Is auth")
    //     isAuthenticated === true;
    //     return navigateTo("/data")
    // }
})
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
const { isAuthenticated,isAdmin, isAuth, needsProfile} = useAuthStore();

export default defineNuxtRouteMiddleware((to, from) => {
    // console.log("profile: " + needsProfile())
    // if (!isAuth && needsProfile ) {
    //   navigateTo("/")
    //     // console.log("needs Profile")
        
        
    // }
})


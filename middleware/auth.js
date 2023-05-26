import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
const { isAuthenticated,isAdmin, isAuth} = useAuthStore();

export default defineNuxtRouteMiddleware((to, from) => {
    if (isAuth) {
      navigateTo("/")
        
        
    }
})
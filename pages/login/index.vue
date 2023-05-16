<script setup>
import { useUsersStore } from "@/stores/users";
const store = useUsersStore();
const { users } = useUsersStore();

definePageMeta({
  layout: "login",
});
</script>

<template>
  <div>
   

    <loginForm/>
   

 
  </div>
</template>

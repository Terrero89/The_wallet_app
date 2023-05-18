<script lang="ts" setup>
import { useUsersStore } from "@/stores/users";
import { useLoginStore } from "@/stores/login";

const loginStore = useLoginStore()
const {isLoggedIn,confirmEmail, cliOn} = useLoginStore()
const store = useUsersStore();
const { users } = useUsersStore();

const input = ref<string>("");
const password = ref<string | number>("");

const validation = ref({
  error: false,
  validated: true,
});

const submitForm = () => {
  console.log("login in...");
    console.log(input.value, password.value);
   console.log(confirmEmail(input.value, password.value))
  
};
</script>

<template>
  <div class="form">
    <form @submit.prevent="submitForm">
      <div class="header">
        <h3>Sign in</h3>
      </div>

      <el-input class="input" v-model="input" placeholder="Email or Username" />
      <el-input
        class="input"
        v-model="password"
        type="password"
        placeholder="Passwod"
      />
      <p>{{ validation.error ? "wrong password or username" : "" }}</p>

<p>{{ loginStore.isLoggedIn }}</p>
      <button class="submit-btn" type="submit">Login</button>
      <NuxtLink to="/signup">Not a member? signup here</NuxtLink>
    </form>
  </div>
</template>

<style scoped>
.submit-btn {
  border: solid rgb(240, 240, 240) 1px;
  padding: 0.7rem 2rem;
  border-radius: 5px;
  margin: 2rem 0;
  color: black;
}

.submit-btn:hover {
  background-color: rgb(138, 179, 255);
  transition: 0.5s ease-in-out;
  color: white;
}

.form {
  border: solid rgb(233, 233, 233) 1px;
  max-width: 25rem;
  margin: 0 auto;
  padding: 1.5rem 3rem;
  border-radius: 10px;
  background-color: white;
  box-shadow: 5px 5px 17px 5px rgba(0, 0, 0, 0.1);
}

.input {
  margin: 1.52em 0;
}
</style>

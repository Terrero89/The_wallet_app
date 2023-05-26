<script lang="ts" setup>
import { useUsersStore } from "@/stores/users";

const { users, signup } = useUsersStore();

const email = ref("");
const username = ref<string>("");
const password = ref<string>("");
const password2 = ref<string>("");

const validation = ref({
  error: false,
  validated: true,
});

//contains the data from imputs and return and object.
const data = () => {
  const userSignup = {
    email: email.value,
    username: username.value,
    password: password.value,
    password2: password2.value,
  };
  return userSignup;
};

//will submit form when clicked
const submitForm = () => {
  console.log(password.value, password.value);
  if (password.value !== password2.value) {
    console.log("not good, return and show something....");
    validation.value.error = true;
  } else {
    signup(data()); //add user signup to pinia
  }
};
</script>

<template>
  <div class="form">
    <form @submit.prevent="submitForm">
      <div class="header">
        <h3>Sign up</h3>
      </div>
      <el-input
        class="input"
        @click="validation.error = false"
        v-model="username"
        placeholder="Username"
      />
      <el-input
        class="input"
        @click="validation.error = false"
        v-model="email"
        type="email"
        placeholder="Email"
      />
      <el-input
        class="input"
        @click="validation.error = false"
        v-model="password"
        type="password"
        placeholder="Password"
      />
      <el-input
        class="input"
        @click="validation.error = false"
        v-model="password2"
        type="password"
        placeholder="Confirm password"
      />
      <p class="error-log">
        {{ validation.error ? "Password do not match" : "" }}
      </p>
      <button class="submit-btn" type="submit">Sign up</button>
    </form>
 <!-- <div v-for="user in users">
      <p>{{ user }}</p>
    </div> -->
   
  </div>
</template>

<style scoped>
.submit-btn {
  border: solid rgb(240, 240, 240) 1px;
  padding: 0.7rem 2rem;
  border-radius: 5px;
  margin: 2rem 0;
  color: black;
    width: 100%;
}

.submit-btn:hover {
  background-color: rgb(138, 179, 255);
  transition: 0.5s ease-in-out;
  color: white;
}

.form {
  border: solid rgb(233, 233, 233) 1px;
  max-width: 20rem;
  margin: 0 auto;
  padding: 1.5rem 1rem;
  border-radius: 10px;
  background-color: white;
  box-shadow: 5px 5px 17px 5px rgba(0, 0, 0, 0.1);
}

.error-log {
  color: red;
}

.input {
  margin-top: 1.52em;
}
</style>

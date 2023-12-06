<script lang="ts" setup>
// import { useUsersStore } from "@/stores/users";
// import { useAuthStore } from "@/stores/auth";

// const { users } = useUsersStore();

const props = defineProps(["login"]);

const input = ref("");
const password = ref("");

//validation object
// const validation = reactive({
//   error: false,
//   validated: false,
// });

const submitForm = () => {
  if (input.value !== "" && password.value !== "") {
    // validation.validated = true;
    console.log(input.value, password.value);
    console.log("LOGGEd in...");

    navigateTo("/user");
  }
  // if (password.value.length < 6) {
  //   console.log("FCKKED")
  // }
};

definePageMeta({
  layout: "default",
//   middleware: 'auth',
});
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
        placeholder="Password"
      />
      <button class="submit-btn" type="submit">Login</button>
      <div>
        <span>Not a member?</span>
        <NuxtLink to="/signup"> signup here</NuxtLink>
      </div>
    </form>
  </div>
</template>

<style scoped>
.submit-btn {
  background-color: rgb(96, 150, 252);

  border: solid rgb(240, 240, 240) 1px;
  padding: 0.7rem 2rem;
  border-radius: 5px;
  margin: 2rem 0;
  color: black;
  width: 100%;
  color: white;
}

.submit-btn:hover {
  background-color: rgb(138, 179, 255);

  transition: 0.5s ease-in-out;
  color: white;
}

.form {
  border: solid rgb(233, 233, 233) 1px;
  max-width: 30rem;
  height: 35rem;
  margin: 8rem auto;
  padding: 4rem 2rem;
  border-radius: 10px;
  background-color: white;
  box-shadow: 5px 5px 17px 5px rgba(0, 0, 0, 0.1);
}
@media screen and (min-width: 768px) {
  .form {
    padding: 4rem 2rem;
  }
}

@media screen and (max-width: 480px) {
  .form {
    max-width: 100%;
    height: 95vh;
  }
}

.input {
  margin: 1.52em 0;
}
</style>

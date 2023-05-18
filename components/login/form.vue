<script lang="ts" setup>
import { useUsersStore } from "@/stores/users";

const store = useUsersStore();
const { users,confirmEmail} = useUsersStore();



const input = ref("");
const password = ref("");


const validation = ref({
    error: false,
    validated:true,
})

const submitForm = () =>{
    
    console.log("login in...")
   
console.log(    confirmEmail(input.value,password.value))
}



</script>

<template>
  <div class="form">
 


    <form @submit.prevent="submitForm"> 
        <div class="header">
            <h3>Sign in</h3>
        </div>
    
        <el-input class="input" v-model="input" placeholder="Email or Username" />
        <el-input  class="input"  v-model="password" type="password" placeholder="Passwod" />
        <p>{{ validation.error ? "wrong password or username" : "" }}</p>
      
        <button class="submit-btn" type="submit">Login</button>
        <p>Not a member?  <a href="/signup">signup</a> here</p>

    </form>
  </div>
</template>

<style scoped>
.submit-btn{
    border: solid rgb(240, 240, 240) 1px;
    padding:  0.7rem 2rem;
    border-radius: 5px;
    margin: 2rem 0;
    color: black;
}

.submit-btn:hover{
    background-color: rgb(138, 179, 255);
    transition: 0.5s ease-in-out;
    color: white
}


.form{
    border: solid rgb(233, 233, 233) 1px;
    max-width: 25rem;
    margin: 0 auto ;
    padding: 1.5rem 3rem;
    border-radius: 10px;
    background-color: white;
    box-shadow: 5px 5px 17px 5px rgba(0,0,0,0.10);
}

.input{
margin: 1.52em 0;
}

</style>

<script lang="ts" setup>
const email = ref("");
const username = ref("");
const password = ref("");
const password2 = ref("");

const validation = ref({
    error: false,
    validated:true,
})


const submitForm = () =>{
   
    console.log(password.value, password.value)

    if(password.value !== password2.value){
        console.log("not good, return and show something....")
        validation.value.error = true
    }
}
</script>

<template>
  <div class="form">
 

    <form @submit.prevent="submitForm"> 
        <div class="header">
            <h3>Sign up</h3>
        </div>
        <el-input class="input" @click="validation.error = false" v-model="username" placeholder="Email or Username" />
        <el-input  class="input"  @click="validation.error = false"  v-model="email" type="email" placeholder="Email" />
        <el-input  class="input"  @click="validation.error = false"  v-model="password" type="password" placeholder="Password" />
        <el-input  class="input" @click="validation.error = false"  v-model="password2" type="password" placeholder="Confirm password" />
        <p class="error-log">{{ validation.error ? "Password do not match" : "" }}</p>
        <button class="submit-btn" type="submit"> Sign up</button>

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
    width: 25rem;
    margin: 0 auto ;
    padding: 1.5rem 3rem;
    border-radius: 10px;
    background-color: white;
    box-shadow: 5px 5px 17px 5px rgba(0,0,0,0.10);
}

.error-log{
color: red;
}

.input{
margin-top: 1.52em ;
}

</style>

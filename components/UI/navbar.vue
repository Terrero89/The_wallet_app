<template>

    <nav class="navbar">
       <div>
        <li class="nav-logo"><a href="#">TrackerApp</a></li>
       </div>
    <ul class="nav-links">
     
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <div class="buttons">

   <NuxtLink to="/login"  class="login-btn"> <el-button class="login-btn">Sign in</el-button></NuxtLink>
   <NuxtLink to="/signup"  class="signup-btn"> <el-button type="info" class="signup-btn">Sign up</el-button></NuxtLink>
    </div>
    
  </nav>



</template>


<style scoped>

.nav-logo{
    font-size: 18px;
    padding: 10px 12px;
    margin-right: 10rem;
    list-style: none;
    color: black;
   
    
}

.nav-logo a{
    color: black;
    text-decoration: none;
}
.navbar {
  background-color: #f2f2f2;
  padding: 12px 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border:solid rgb(197, 197, 197) 1px; */

  

}

.nav-links {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

@media screen and (max-width: 678px){
    .nav-links{
        display: none;
    }
}




.nav-links li {
  margin-right: 10px;
}

.nav-links li a {
  text-decoration: none;
  color: #333;
  padding: 5px;
  border-radius: 5px;
}

.buttons{
    margin-left: 10rem;
    

}

.login-btn{
    margin-right:5px ;
    text-decoration: none;
    border: none;
    color: black;
}
.signup-btn {
  padding: 8px 16px;
  

  border: none;
  border-radius: 5px;
  cursor: pointer;

}
</style>
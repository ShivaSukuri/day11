<template>
    <div class=" bg-gray-700 text-white p-4">
      <nav class="flex items-center justify-between" >
      <div><img src="/logo1.png" alt="" class="logo"></div>
        <div class="nill"></div>
            <div >
            <NuxtLink to="/">Home</NuxtLink>
            </div>
            <div v-if="!status"> <NuxtLink to="/login" >Login</NuxtLink> </div>
            <div v-if="!status"> <NuxtLink to="/register" >Register</NuxtLink> </div>
            <div><NuxtLink to="/whishlist">Whishlist</NuxtLink></div>
             <div><NuxtLink to="/cart">Cart</NuxtLink></div>
             <diV><NuxtLink to="/userInfo">User</NuxtLink></diV>
      </nav>
      
      
    </div>
  </template>
  
  <script setup>
  const status=logInStatus();
  </script>
  
  <style lang="scss" scoped>
  .router-link-exact-active{
    color:orangered
  }
 .logo{
  height: 50px;
  width: 100px;
 }
 .nill{
  width: 40vw;
 }

  </style>
  
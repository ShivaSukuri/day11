<template>
    <div class="container flex items-center justify-center bg-gradient-to-r from-gray-500 to-indigo-200">
      <div class="bg-white p-8 rounded shadow-md  ">
        <h1 class="text-2xl font-semibold mb-4">Register Form</h1>
  
        <label class="block mb-2 text-gray-700">Name</label>
        <input type="text" v-model="nameInput" class="w-full border p-2 mb-4 rounded" required />
  
        <label class="block mb-2 text-gray-700">Email</label>
        <input type="text" v-model="emailInput" class="w-full border p-2 mb-4 rounded" required />
  
        <label class="block mb-2 text-gray-700">Password</label>
        <input type="password" v-model="passwordInput" class="w-full border p-2 mb-4 rounded" required />
  
        <button @click="register" class="bg-indigo-500 text-white p-2 rounded">Register</button>
      </div>
    </div>
  </template>
  
  <script setup>
 
  const user = users();
  const nameInput = ref('');
  const emailInput = ref('');
  const passwordInput = ref('');
  const id1=id();
  const register = () => {
    let res = false;
   
    if (nameInput.value !== "" && emailInput.value !== "" && passwordInput.value !== "") {
      const user1 = {
        id:id1.value,
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        status:false,
        cart:[],
        whishlist:[]
      };
      user.value.push(user1);
      console.log(users.value)
      res = true;
      id1.value++;
    }
    if (res === true) {
      alert("User registered successfully");
      navigateTo("/login");
    }
  };
  </script>
  
  <style lang="scss" scoped>
.container{
  min-height: 79vh;
  min-width: 100vw;
}
  </style>
  
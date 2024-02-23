<template>
  <div id="login" class=" flex items-center justify-center bg-gradient-to-r from-gray-500 to-white-500">
    <div class="bg-white p-8 rounded shadow-md">
      <h1 class="text-2xl font-semibold mb-4">Login page</h1>

      <label class="block mb-2 text-gray-700">Email</label>
      <input type="text" v-model="emailInput" class="w-full border p-2 mb-4 rounded" />

      <label class="block mb-2 text-gray-700">Password</label>
      <input type="password" v-model="passwordInput" class="w-full border p-2 mb-4 rounded" />

      <button @click="login" class="bg-blue-500 text-white p-2 rounded mr-2">Login</button>
      <button @click="register" class="bg-purple-500 text-white p-2 rounded">Register</button>
    </div>
  </div>
</template>

<script setup>
// definePageMeta({
//   middleware:["logout"]
// })
const user = users();
const passUser = userLogeedIn();
const logStatus = logInStatus();
const emailInput = ref('');
const passwordInput = ref('');
let userFound=false;
const setTime=ref(false)
const login = () => {
  for (let x of user.value) {
    if (x.email === emailInput.value && x.password === passwordInput.value) {
      x.status = true;
      logStatus.value = true;
      passUser.value = x;
      userFound=true;
      navigateTo('/');
    }
  }
  if(userFound==false){
    alert("Enter a valid credentials")
  }
};

const register = () => {
  navigateTo("/Register");
};
</script>

<style lang="scss" scoped>
/* Ensure the container takes up the full viewport height */
.min-h-screen {
  min-height: 100vh;
}

/* Center the content vertically */
.flex {
  height: 100%;
}
#login{
  height: 79.5vh;
}
</style>

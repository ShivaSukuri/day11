<template>
    <div class="container flex items-center justify-center bg-gradient-to-r from-gray-500 to-indigo-200">
      <div class="bg-white p-8 rounded shadow-md  ">
        <h1 class="text-2xl font-semibold mb-4">Register Form</h1>
  
        <label class="block mb-2 text-gray-700">Name</label>
        <input type="text" v-model="nameInput" class="w-full border p-2 mb-4 rounded" required />
  
        <label class="block mb-2 text-gray-700">Email</label>
        <input type="text" v-model="emailInput" class="w-full border p-2 mb-4 rounded" required />
        <p class="text-red-900" v-if="emailError">Enter a valid email</p>
  
        <label class="block mb-2 text-gray-700">Password</label>
        <input type="password" v-model="passwordInput" class="w-full border p-2 mb-4 rounded" required />
        <p class="text-red-900" v-if="userExist">User already exist provide another credentials</p>
        <p class="text-red-900" v-if="PasswordError">Enter a valid password</p>
        <button @click="register" class="bg-indigo-500 text-white p-2 rounded">Register</button>
        <div>
          <h1 class="text-1xl font-semibold mb-3 mt-3">Password should contain:</h1>
          <ul>
            <li>-    Atleast one small letter</li>
            <li>- Atleast one capital letter</li>
            <li>- Atleast one number</li>
            <li>- Atleast one symbol</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
 
  const user = users();
  const nameInput = ref('');
  const emailInput = ref('');
  const passwordInput = ref('');
  const id1=id();
  const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailError=ref(false);
  const PasswordError=ref(false);
  const userExist=ref(false)
  const register = () => {
    let res = false;
    if (nameInput.value !== "" && emailInput.value !== "" && passwordInput.value !== "") {
          if(emailRegex.test(emailInput.value)  && passwordRegex.test(passwordInput.value)){
            const found=user.value.filter(x=>x.email===emailInput.value)
            if(found.length===0){
                  const user1 = {
                    id:id1.value,
                    name: nameInput.value,
                    email: emailInput.value,
                    password: passwordInput.value,
                    status:false,
                    cart:[],
                    whishlist:[]
                  }
                  user.value.push(user1);
                  res = true;
                  id1.value++;
          }
          else{
            
            userExist.value=true;
          }
       }
          else{
           if(emailRegex.test(emailInput.value)===false){
            emailError.value=true;
           }
           else{
            emailError.value=false;
           }
           if(passwordRegex.test(passwordInput.value)===false){
            PasswordError.value=true;
           }
           else{
            PasswordError.value=false;
           }
          }
    }
    else{
      alert("fill out every details");
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
  
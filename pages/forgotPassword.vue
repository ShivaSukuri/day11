<template>
    <div class="container bg-gradient-to-r from-blue-200 to-blue-100 p-8 rounded-md">
      <div>
        <label class="block mb-2 text-lg font-bold" for="oldPassword">Enter your old password</label>
        <input v-model="oldPassword" type="password" id="oldPassword" class="w-full px-3 py-2 border rounded" /><br>
        <button @click="verify" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Verify</button>
      </div>
  
      <div v-show="verifyStatus" class="mt-8">
        <label class="block mb-2 text-lg font-bold" for="newPassword1">Enter new password</label>
        <input v-model="newPassword1" type="password" id="newPassword1" class="w-full px-3 py-2 border rounded" />
        
        <label class="block mb-2 text-lg font-bold" for="newPassword2">Re-enter new password</label>
        <input v-model="newPassword2" type="password" id="newPassword2" class="w-full px-3 py-2 border rounded" /><br>
        
        <button @click="changePassword" class="mt-4 bg-green-500 text-white px-4 py-2 rounded">Change Password</button>
      </div>
    </div>
  </template>
  
  <script setup>
  const oldPassword = ref('');
  const verifyStatus = ref(false);
  const user = userLogeedIn();
  const newPassword1 = ref('');
  const newPassword2 = ref('');
  
  const verify = () => {
    if (user.value.password === oldPassword.value) {
      verifyStatus.value = true;
    } else {
      alert('Enter a valid password');
      oldPassword.value = '';
      verifyStatus.value = false;
    }
  };
  
  const changePassword = () => {
    if (newPassword1.value === newPassword2.value) {
      if (newPassword1.value !== user.value.password) {
        user.value.password = newPassword1.value;
        alert('Password updated successfully');
        navigateTo('/userInfo');
      } else {
        alert('Old password and new password should not be the same');
      }
    } else {
      alert('Both passwords are not the same');
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .container {
min-height: 81.5vh;
min-width: 100vw;
  }
  .bg-gradient-to-r {
    background-image: linear-gradient(to right, #a0c4ff, #f9f9f9);
  }
  input{
    width: 400px;
  }
  </style>
  
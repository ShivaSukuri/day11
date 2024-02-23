<template>
    <div class="container">
      <table class="table-auto">
        <tr>
          <td class="font-bold">User Id</td>
          <td>: {{ u.id }}</td>
        </tr>
        <tr>
          <td class="font-bold">Name</td>
          <td>:{{ u.name }}</td>
        </tr>
        <tr>
          <td class="font-bold">User Email</td>
          <td>:{{ u.email }}</td>
        </tr>
        <tr>
          <td class="font-bold">Change Password:</td>
          <td><button @click="forgot" class="bg-blue-500 text-white px-4 py-2 rounded">Click me</button></td>
        </tr>
        <tr>
          <td><button @click="logoutUser" class="bg-red-500 text-white px-4 py-2 rounded">Logout</button></td>
          <td></td>
        </tr>
      </table>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    middleware: ["auth"],
  });
  const user = userLogeedIn();
  const u = user.value;
  const { logout } = useNuxtApp();
  const logoutUser = () => {
    logout();
  };
  const forgot = () => {
    navigateTo("/forgotPassword");
  };
  </script>
  
  <style lang="scss" scoped>
    .container {
      @apply min-h-[79vh];
      margin: 50px;
    }
  </style>
  
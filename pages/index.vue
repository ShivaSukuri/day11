<template>
   <button id="logout" @click="logout()">Logout</button>
    <div class="home-container">
     
      <div v-for="product of products" :key="product.id" class="product-item p-4 bg-white rounded-md shadow-lg">
        <p class="font-bold">{{ product.title }}</p>
        <img :src="product.image" alt="Product Image" class="product-image h-40 object-contain mx-auto my-4">
        <p class="price">{{ product.price }}</p>
        <button id="add" @click="addToCart(product)" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
          Add to Cart
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    middleware:["auth"]
  })
    const { data: products } = await useFetch('https://fakestoreapi.com/products');
    const userlogged=userLogeedIn();
    const status=logInStatus();
    const user=users();
    console.log(userlogged.value)
    const addToCart=(product)=>{
      userlogged.value.cart.push(product);
      console.log(userlogged.value)
    }
    const logout=()=>{
      userlogged.value=null;
      status.value=false;
      console.log(userlogged.value+" "+status.value)
      if(status.value===false){
        navigateTo('/login')
      }
    }
  </script>
  
  <style scoped>
    .home-container {
      background-color: #f0f0f0; /* Light gray background color */
      padding: 20px; /* Add padding for better appearance */
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Grid layout with minimum width of 250px */
      gap: 20px; /* Set the gap between products */
    }
    #logout{
      background-color: red;
      float: right;
    
    
    }
    .price{
      text-align: center;
    }
    #add{
     text-align: center
    }
  
  </style>
  
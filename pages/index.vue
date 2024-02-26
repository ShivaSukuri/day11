<template>
 <div>
  <img src="/shop.avif" alt="shop image" class="shop">
  <!-- <div>
        <select name="" id="" v-model="categoryInput">
        <option value="">None</option>
        <option value="men's clothing">Men's clothing</option>
        <option value="women's clothing">women's clothing</option>
        <option value="jewelery">jewelary</option>
        <option value="electronics">electronics</option>
        </select>
        <button class="bg-blue-500" @click="filterrdProducts()">Search</button>
  </div> -->
    <div class="home-container">
     
      <div v-for="product of products" :key="product.id" class="product-item p-4 bg-white rounded-md shadow-lg">
          <button @click="view(product)">
            <p class="font-bold h-20">{{ product.title }}</p>
        <img :src="product.image" alt="Product Image" class="product-image h-40 object-contain ">
        <p class="price h-10 mt-5">Price:${{ product.price }}</p>
          </button>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
  definePageMeta({
    middleware:["auth"]
  })
    const { data: products } = await useFetch('https://fakestoreapi.com/products');
    let items=products.value;
    const { logout }=useNuxtApp();
    const userlogged=userLogeedIn();
    let item=product();
    const categoryInput=ref('');
    const status=logInStatus();
    const user=users();
    const addToCart=(product)=>{
      userlogged.value.cart.push(product);
    }
    const logout1=()=>{
      logout();
    }
    const view=(product)=>{
      item.value.splice(product);
    item.value.push(product);
      navigateTo('/product');
    }
   
  </script>
  
  <style scoped>
    .home-container {
      background-color: #f0f0f0; 
      padding: 20px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
      gap: 20px; /* Set the gap between products */
    }
    #logout{
      background-color: red;
      float: right;
    
    }

    .shop{
      width: 90vw;
      height: 400px;
      margin-left: 5vw;
      margin-top: 5px;
    }
   
  
  </style>
  
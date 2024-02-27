<template>
 <div>
  <img src="/shop.avif" alt="shop image" class="shop">
  <div>
        <select name="input" id="inputFilter" v-model="categoryInput"   class="py-3 px-4 pe-9 block  border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
        <option value="">All</option>
        <option value="men's clothing">Men's clothing</option>
        <option value="women's clothing">women's clothing</option>
        <option value="jewelery">jewelary</option>
        <option value="electronics">electronics</option>
        </select>
        
  </div>
  <!-- <div>
        <select name="input" id="inputFilter" v-model="menFilter"  class="py-3 px-4 pe-9 block  border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
        <option value="">All</option>
        <option value="shirts">shirts</option>
        <option value="backpack">backpacks</option>
        <option value="jacket">jackets</option>
        </select>
        
  </div> -->
    <div class="home-container">
     
      <div v-for="product of filteredProducts" :key="product.id" class="product-item p-4 bg-white rounded-md shadow-lg">
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
    const { logout }=useNuxtApp();
    const userlogged=userLogeedIn();
    let item=product();
    const categoryInput=ref('');
    const status=logInStatus();
    const user=users();
    const menFilter=ref('');
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
    const filteredProducts=computed((input)=>{
      if(categoryInput.value===""){
        return products.value;
      }
      else{
        return products.value.filter(prod=> prod.category===categoryInput.value)
      }
    })
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
   #inputFilter{
    width: 450px;
    margin-left: 35vw;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 2px solid black;
   }
  
  </style>
  
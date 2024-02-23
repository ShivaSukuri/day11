<template>
  <div class="container">
    <div v-show="cartProducts.length>0">
            <div>
              <div class="content grid-4 gap-4">
                <div v-for="product of cartProducts" :key="product.id" class="product-card">
                  
                  <div class="text-left">
                    <img :src="product.image" class="w-full h-32 object-cover mb-2" alt="">
                    <p class="text-lg font-semibold">{{ product.title }}</p>
                    <p class="text-gray-600">{{ product.price }}</p>
                    <button @click="remove(product)" class="bg-red-500 text-white px-2 py-1">Remove</button>
                  </div>
                </div>
              </div>
          
              <div  class="total text-right mt-4" id="total">
                <hr class="border-t-2 border-gray-700">
                <h3 class="text-xl font-semibold">Total: {{ totalAmount }}</h3>
              </div>
            </div>
          </div>
      <div class="empty" v-show="cartProducts.length===0">
          <h1>Your cart in empty</h1>
      </div>
    </div>
  </template>
  

<script setup>
definePageMeta({
    middleware:["auth"]
})
const user=userLogeedIn();
const cartProducts=user.value.cart;
const total=ref(0);

    for(let x of cartProducts){
        total.value+=x.price;
    }
let totalAmount=total.value;
const remove = (product) => {
    const index = cartProducts.indexOf(product);
    if (index !== -1) {
      totalAmount=0;
    cartProducts.splice(index, 1);
    for(let x of cartProducts){
      totalAmount+=x.price;
    }
        

    }
}

   
</script>

<style lang="scss" scoped>
.container{
  min-height: 79vh; 
}
  .product-card {
    display: grid;
    grid-template-rows: 1fr auto;
  }
img
{
    width: 300px;
    height: 400px;
    
}

  hr {
    border-top: 2px solid #8c8b8b;
    width: 100vw;
  }

  .content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  #total{
    margin-bottom: 50px;
    margin-top: 30px;

  }
  .empty{
    font-size: 28px;
    text-align: center;
  }
</style>
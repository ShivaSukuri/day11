<template>
  <div class="container">
    <div v-show="cartProducts.length>0">
            <div>
              <div >
                <div v-for="product of cartProducts" :key="product.id" class="product-card">
                  
                  <div class=" item text-left ">
                    <div class="box2" >
                          <img class="image" :src="product.image" alt="">
                    </div>
                    <div class="content ml-10">
                          <p class="text-lg font-semibold">{{ product.title }}</p>
                          <p class="mt-4">{{ product.description }}</p>
                          <p class="text-gray-600 mt-4" ><b>$:{{ product.price }}</b></p>
                          <button @click="remove(product)" class="mt-4 bg-red-500 text-white px-2 py-1">Remove</button>
                    </div>
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
          <h1 class="mt-20">Your cart in empty</h1>
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


  hr {
    border-top: 2px solid #8c8b8b;
    width: 100vw;
  }

  
  #total{
    margin-bottom: 50px;
    margin-top: 30px;

  }
  .empty{
    font-size: 28px;
    text-align: center;
  }
  .item{
    display: grid;
    grid-template-columns: 20vw 50vw ;
    margin-bottom: 20px;
  }
  .content{
    
  }
  .box2{
    width: 20vw;
  }
  .image{
    width: 300px;
    height: 250px;
    object-fit: contain;
  }

</style>
<template>
    <div class="container">
   
        <div v-for="item of products">
               <div class="product">
                    <div>
                        <img :src="item.image" alt="">
                    </div>
                    <div>
                        <h1 class="mb-5">{{ item.title }}</h1>
                        <p class="mb-5">{{ item.description }}</p>
                        <p class="mb-5">rating :{{ item.rating.rate }}/{{ item.rating.count }}</p>
                        <button class="bg-red-600"></button>
                        <div>
                <button id="add" @click="addToCart(item)" class=" mt-5 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Add to cart</button>
                <button id="add" @click="removeFromWhishlist(item)" class=" mt-5 ml-5 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300">remove from whishlist</button>
               </div>
                    </div>
               </div>
        </div>
        <div v-show="products.length===0">
            <h1 class="text-center mt-20">Whishlist is Empty</h1>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware:["auth"]
})
   const user=userLogeedIn();
  const products=user.value.whishlist;

  const addToCart=(item)=>{
    user.value.cart.push(item);
    let index=products.indexOf(item);
    products.splice(index,1)
  }
  const removeFromWhishlist=(item)=>{
    let index=products.indexOf(item);
    products.splice(index,1)
  }
</script>

<style lang="scss" scoped>
.container{
    min-height: 79vh;
}
.product{
    display: grid;
    grid-template-columns: 20vw 40vw;
    margin-left: 15vw;
}
img{
    width: 300px;
}
h1{
    font-size: 28px;
}
</style>
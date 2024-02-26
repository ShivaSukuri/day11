<template>
    <div class="container">
            <div class="main ">
              <div>
                <img width="400px"  height="400px" :src="item1.image" alt="">
              </div>
               <div class="info">
                <h1>{{ item1.title }}</h1>
                <p class="mt-5">{{ item1.description }}</p>
                <p class="mt-3">rating:{{item1.rating.rate}}/{{ item1.rating.count }}</p>
                <h1 class="mt-4"><b>$ : {{ item1.price }}</b></h1>
                <div>
                <button id="add" @click="addToCart()" class=" mt-5 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Add to cart</button>
                <button id="add" @click="addToWhishlist()" class=" mt-5 ml-5 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Add to whishlist</button>
               </div>
            </div>
            </div>
    </div>
</template>

<script setup>



 const item=product();
 const item1=item.value[0];
 const userlogged=userLogeedIn();
 const addToCart=(product)=>{
      userlogged.value.cart.push(item1);
    }
    const addToWhishlist=()=>{
        userlogged.value.whishlist.push(item1);
    }
</script>

<style lang="scss" scoped>
.container{
    min-height: 79vh;
}
.main{
    margin-top: 2vw;
    display: flex;
}
h1{
    font-size: 30px;
}
.info{
    margin-left: 100px;
}

</style>
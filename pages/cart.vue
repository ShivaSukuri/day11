<template>
    <div>
        <div class="content">
            <div v-for="product of cartProducts" >
            <div>
                <p>{{ product.title }}</p>
            <img :src="product.image" width="200px" alt="">
            <button @click="remove(product)">remove</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware:["auth"]
})
const user=userLogeedIn();
const cartProducts=user.value.cart;
console.log(cartProducts)
const remove = (product) => {
    const index = cartProducts.indexOf(product);
    if (index !== -1) {
        cartProducts.splice(index, 1);
    }
}

   
</script>

<style lang="scss" scoped>
.content{
    height: 300px;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
}
button{
    background-color: red;
}
</style>
<template>
    <div class="container">
            <div>
                <!-- <img :src="item" alt=""> -->
                <p>{{ item1 }}</p>
            </div>
    </div>
</template>

<script setup>
 const item1=product();
console.log(item1)
</script>

<style lang="scss" scoped>
.container{
    min-height: 79vh;
}

</style>
<script setup>
import FormProducts from '../components/FormProducts.vue';
import HeaderUser from '../components/HeaderUser.vue';
import producto from '../assets/imgs/productos.svg';
</script>

<template>
    <HeaderUser />

    <section id="image-title" class="flex items-center max-w-7xl">
        <div class="mx-auto flex flex-row justify-between items-center">
            <h1 class="mt-12 px-10 font-bold text-2xl">Completa los datos del producto</h1>

            <div id="image-product w-2/3">
                <img :src="producto" class="w-32 mt-12" alt="product description image">
            </div>
        </div>
    </section>
    <section id="form-product" class="max-w-7xl mx-auto">
        <FormProducts />
    </section>
</template>
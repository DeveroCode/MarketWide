<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import HeaderUser from '../components/HeaderUser.vue';

const button = ref(false);

const handleClickButton = () => {
    button.value = !button.value;
};

console.log(button);
</script>

<template>
    <HeaderUser />
    <div class="flex flex-col items-center space-y-14">
        <h1 class="text-center mt-32 font-bold text-3xl text-gray-400">No hay productos aún</h1>

        <RouterLink :to="{ name: 'nuevo-producto' }" @click="handleClickButton"
            class=" bg-headers text-white font-bold py-2 px-4 rounded">
            Agregar Productos
        </RouterLink>
    </div>
</template>

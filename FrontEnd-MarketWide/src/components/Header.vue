<script setup>
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router'
import favicon from '../assets/imgs/favicon-white.png'
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'


const openMenu = ref(false);
// const animation = ref('');

const toggleMenu = () => {
    openMenu.value = !openMenu.value
};

// watch(openMenu, () => {
//     animation.value = openMenu.value ? 'scale-in-hor-right' : 'scale-in-hor-left'
// });

</script>

<template>
    <header class="bg-secondary py-5">
        <div class="flex items-center mx-5 md:mx-12 lg:mx-16">
            <div class="flex w-full flex-col md:flex-row md:justify-between items-center">
                <RouterLink :to="{ name: 'home' }">
                    <img :src="favicon" alt="logotipo" class="mx-auto w-40 md:w-32">
                </RouterLink>
                <div class="flex md:block md:mx-auto space-x-12 md:space-x-0">
                    <div class="pt-2 relative mx-auto text-gray-600">
                        <input
                            class="shadow-lg bg-white rounded-sm h-10 w-auto md:w-72 lg:w-[500px] 2xl:w-[750px] px-5 pr-16 text-sm outline-none border transition focus:border-headers focus:ring-headers focus:ring-1 focus:ring-opacity-50"
                            type="search" name="search" placeholder="Busca productos, marcas y más...">
                        <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
                            <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                                viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;"
                                xml:space="preserve" width="512px" height="512px">
                                <path
                                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex md:hidden items-center">
                        <button id="hamburger-button"
                            class="text-primary text-4xl font-bold opacity-70 hover:opacity-100 duration-300 focus:outline-none"
                            @click="toggleMenu()">
                            ☰ </button>
                    </div>
                </div>
            </div>


            <div id="mobile-menu" class="top-0 h-screen bg-secondary w-3/5 z-50 p-10 fixed right-0 block md:hidden"
                :class="['fixed', { 'scale-in-hor-right': openMenu, 'scale-in-hor-left': !openMenu }, openMenu ? 'block' : 'scale-in-hor-left hidden']">
                <div class="flex space-x-11 items-center justify-center mb-12">
                    <RouterLink :to="{ name: 'home' }">
                        <img :src="favicon" alt="logotipo" class="sm:w-32 md:64">
                    </RouterLink>
                    <!-- Close Button -->
                    <div class="flex justify-end mb-5">
                        <button id="close-button"
                            class="text-white text-xl font-bold opacity-70 hover:opacity-100 duration-300 focus:outline-none"
                            @click="toggleMenu()"> X
                        </button>
                    </div>
                </div>

                <nav class="flex flex-col text-white text-xl space-y-3">
                    <RouterLink :to="{ name: 'login' }">Iniciar Sesión</RouterLink>
                    <RouterLink :to="{ name: 'register' }">Soporte</RouterLink>
                    <RouterLink :to="{ name: 'register' }" class="text-white font-bold flex items-center">
                        <ShoppingCartIcon class="w-8 h-8" aria-label="true" />
                        Carrito
                    </RouterLink>
                </nav>
            </div>


            <nav class="hidden md:flex md:space-x-16 md:items-center md:ml-6">
                <RouterLink class="text-white font-bold" :to="{ name: 'login' }">Iniciar</RouterLink>
                <RouterLink class="text-white font-bold" :to="{ name: 'register' }">Soporte</RouterLink>
                <RouterLink class="text-white font-bold flex items-center" :to="{ name: 'register' }">
                    <ShoppingCartIcon class="w-8 h-8" aria-label="true" />
                    Carrito
                </RouterLink>
            </nav>
        </div>
    </header>
</template>

<style>
.scale-in-hor-right {
    -webkit-animation: scale-in-hor-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: scale-in-hor-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.scale-in-hor-left {
    -webkit-animation: scale-in-hor-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: scale-in-hor-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes scale-in-hor-right {
    0% {
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
        opacity: 1;
    }

    100% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
        opacity: 1;
    }
}

@keyframes scale-in-hor-right {
    0% {
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
        opacity: 1;
    }

    100% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
        opacity: 1;
    }
}

@-webkit-keyframes scale-in-hor-left {
    0% {
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transform-origin: 0% 0%;
        transform-origin: 0% 0%;
        opacity: 1;
    }

    100% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
        -webkit-transform-origin: 0% 0%;
        transform-origin: 0% 0%;
        opacity: 1;
    }
}

@keyframes scale-in-hor-left {
    0% {
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transform-origin: 0% 0%;
        transform-origin: 0% 0%;
        opacity: 1;
    }

    100% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
        -webkit-transform-origin: 0% 0%;
        transform-origin: 0% 0%;
        opacity: 1;
    }
}
</style>
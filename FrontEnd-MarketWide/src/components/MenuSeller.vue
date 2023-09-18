<script setup>
import { RouterLink } from 'vue-router';
import { useMenuMobile } from '../stores/menu';
import { XMarkIcon, ShoppingBagIcon, BellAlertIcon, HomeIcon, TagIcon, HeartIcon, ClockIcon, AdjustmentsHorizontalIcon } from '@heroicons/vue/24/outline'
const button = useMenuMobile();
</script>

<template>
    <section id="mobile-menu" class="top-0 h-screen bg-secondary w-3/5 z-50 p-10 fixed right-0 block md:hidden"
        :class="['fixed', button.menu ? 'scale-in-hor-right' : 'slide-right']">
        <div class="flex items-center mb-12">
            <RouterLink :to="{ name: 'home' }">
                <h1 class="text-start font-bold text-2xl text-white">Dashboard</h1>
            </RouterLink>
            <!-- Close Button -->
            <div class="flex justify-end mb-5 mt-6 ml-5">
                <button id="close-button"
                    class="text-white text-xl font-bold opacity-70 hover:opacity-100 duration-300 focus:outline-none"
                    @click="button.handleClickMenu()"> X
                </button>
            </div>
        </div>

        <nav class="flex flex-col text-white text-xl space-y-5">
            <RouterLink :to="{ name: 'home' }" class="text-white text-sm flex items-center gap-1">
                <HomeIcon class="text-white font-bold w-5 h-5" /> Market Wide
            </RouterLink>
            <RouterLink :to="{ name: 'login' }" class="text-sm flex items-center gap-1">
                <BellAlertIcon class="text-white font-bold w-5 h-5" /> Notificaciones
            </RouterLink>
            <RouterLink :to="{ name: 'register' }" class="text-sm flex items-center gap-1">
                <ShoppingBagIcon class="text-white font-bold w-5 h-5 mb-1" /> Mis compras
            </RouterLink>
            <RouterLink :to="{ name: 'update' }" class="text-white text-sm mt-5 flex items-center gap-1">
                <HeartIcon class="text-white font-bold w-5 h-5" /> Favoritos
            </RouterLink>
            <RouterLink :to="{ name: 'update' }" class="text-white text-sm mt-5 flex items-center gap-1">
                <TagIcon class="text-white font-bold w-5 h-5" /> Ofertas
            </RouterLink>
            <RouterLink :to="{ name: 'update' }" class="text-white text-sm mt-5 flex items-center gap-1">
                <ClockIcon class="text-white font-bold w-5 h-5" /> Historial
            </RouterLink>
            <RouterLink :to="{ name: 'update' }" class="text-white text-sm mt-5 flex items-center gap-1">
                <AdjustmentsHorizontalIcon class="text-white font-bold w-5 h-5" /> Mi cuenta
            </RouterLink>
        </nav>
    </section>

    <section id="desktop-menu" class="bg-secondary py-3 hidden md:block">
        <nav class="hidden md:flex justify-between items-center w-7xl-full mx-10">
            <RouterLink :to="{ name: 'home' }" class="text-white text-sm flex items-center gap-1">
                <HomeIcon class="text-white font-bold w-5 h-5" /> Market Wide
            </RouterLink>
            <RouterLink :to="{ name: 'login' }" class="text-sm flex items-center gap-1 text-white">
                <BellAlertIcon class="text-white font-bold w-5 h-5" /> Notificaciones
            </RouterLink>
            <RouterLink :to="{ name: 'register' }" class="text-sm flex items-center gap-1 text-white">
                <ShoppingBagIcon class="text-white font-bold w-5 h-5 mb-1" /> Mis compras
            </RouterLink>
            <RouterLink :to="{ name: 'update' }" class="text-white text-sm flex items-center gap-1">
                <HeartIcon class="text-white font-bold w-5 h-5" /> Favoritos
            </RouterLink>
            <RouterLink :to="{ name: 'update' }" class="text-white text-sm flex items-center gap-1">
                <TagIcon class="text-white font-bold w-5 h-5" /> Ofertas
            </RouterLink>
            <RouterLink :to="{ name: 'update' }" class="text-white text-sm flex items-center gap-1">
                <ClockIcon class="text-white font-bold w-5 h-5" /> Historial
            </RouterLink>
            <RouterLink :to="{ name: 'update' }" class="text-white text-sm flex items-center gap-1">
                <AdjustmentsHorizontalIcon class="text-white font-bold w-5 h-5" /> Mi cuenta
            </RouterLink>
        </nav>
    </section>
</template>
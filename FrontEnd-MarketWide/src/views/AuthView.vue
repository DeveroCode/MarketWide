<script setup>
import { RouterView, RouterLink } from 'vue-router'
import favicon from '../assets/imgs/favicon.png'
</script>

<template>
    <div>
        <RouterLink :to="{ name: 'home' }">
            <img :src="favicon" alt="logotipo" class="mx-auto w-80">
        </RouterLink>
    </div>
    <main class="mx-auto h-96">
        <RouterView />
    </main>
</template>
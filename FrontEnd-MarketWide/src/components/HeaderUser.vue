<script setup>
import { ref, watchEffect } from 'vue';
import MenuSeller from './MenuSeller.vue';
import { UserIcon } from '@heroicons/vue/24/outline'
import { useMenuMobile } from '../stores/menu';
import { userMethods } from '../stores/userMethods.js';

const { dataUser } = userMethods();
const users = ref([]);
const button = useMenuMobile();

watchEffect(async () => {
    dataUser(users);
});

</script>

<template>
    <header class="bg-secondary py-10">
        <div class="data-name px-10 flex items-center justify-between">
            <h1 class="text-white text-4xl font-bold">Hi!, {{ users.name }}</h1>

            <div class="flex items-center">
                <button id="hamburger-button"
                    class="text-primary text-4xl font-bold opacity-70 hover:opacity-100 duration-300 focus:outline-none block md:hidden"
                    @click="button.handleClickMenu()">
                    <UserIcon class="w-8 h-8 text-white mt-2" />
                </button>
            </div>
        </div>
    </header>

    <!-- Start menu -->
    <MenuSeller />
</template>
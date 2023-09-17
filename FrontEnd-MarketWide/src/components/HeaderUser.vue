<script setup>
import { ref, watchEffect } from 'vue';
import { UserIcon } from '@heroicons/vue/24/outline'
import { userMethods } from '../stores/userMethods.js';

const { dataUser } = userMethods();
const users = ref([]);

watchEffect(async () => {
    dataUser(users);
});

</script>

<template>
    <header class="bg-secondary py-10">
        <div class="data-name px-10 flex items-center justify-between">
            <h1 class="text-white text-4xl font-bold">Hi!, {{ users.name }}</h1>

            <UserIcon class="w-8 h-8 text-white mt-2" />
        </div>
    </header>
</template>
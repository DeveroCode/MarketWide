<script setup>
import { ref, watchEffect } from 'vue';
import { userMethods } from '../stores/userMethods.js';

const { dataUser } = userMethods();
const users = ref([]);

watchEffect(async () => {
    dataUser(users);
});

</script>

<template>
    <h1>{{ users.name }}</h1>
    <p>{{ users.email }}</p>
</template>
<script setup>
import { userMethods } from '../stores/userMethods';
const { user } = userMethods();

const reactive = user.name;

console.log(reactive);
</script>

<template>
    <h1>Vendedor ${reactive}</h1>
</template>
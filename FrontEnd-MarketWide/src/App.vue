<script setup>
// Script vue
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue';

const router = useRoute();
const auth = computed(() => {
  return router.name === 'login' || router.name === 'register';
});
// Components
import Header from './components/Header.vue';
</script>

<template>
  <!-- Header -->
  <Header v-if="!auth" />
  <RouterView />
</template>

<style scoped></style>

<script setup>
// Script vue
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue';

const router = useRoute();
const auth = computed(() => {
  return router.matched.some(route => route.name === 'auth') || router.matched.some(route => route.name === 'dashboard');
});
import Header from './components/Header.vue';
import Alert from './components/Alert.vue';
</script>

<template>
  <!-- Header -->
  <Header v-if="!auth" />
  <RouterView />
  <Alert />
</template>

<style scoped></style>

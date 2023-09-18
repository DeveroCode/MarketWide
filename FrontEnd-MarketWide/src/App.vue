<script setup>
// Script vue
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue';

const router = useRoute();
const auth = computed(() => {
  return router.name === 'login' || router.name === 'register' || router.name === 'update' || router.name === 'dashboard';
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

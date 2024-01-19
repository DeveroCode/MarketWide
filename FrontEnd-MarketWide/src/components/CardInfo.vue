<script setup>
const props = defineProps(['title', 'subtitle']);
</script>

<template>
    <div id="information mt-5 mb-5">
        <h1 class="font-bold text-lg md:text-xl">{{ title }}</h1>
        <span class="text-sm text-gray-400">{{ subtitle }}</span>
    </div>
</template>
<script setup>
const props = defineProps(['img', 'title', 'more']);
</script>

<template>
    <div id="img-code-bar"
        class="bg-gray-100 rounded-lg flex flex-col md:flex-row items-center justify-between my-5 md:my-10 py-5">
        <div class="flex flex-col mx-5 md:mx-10">
            <span class="font-bold">{{ title }}</span>
            <a href="#" class="text-blue-700 mt-3 cursor-pointer w-32">{{ more }}</a>
        </div>
        <img :src="img" alt="example of code bars" class="w-24 md:w-32 mx-5 md:mx-10">
    </div>
</template>
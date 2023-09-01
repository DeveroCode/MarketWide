import { ref } from "vue";
import { defineStore } from 'pinia';

export const useMenuMobile = defineStore('menu', () => {
    const menu = ref(false);

    function handleClickMenu() {
        menu.value = !menu.value;
    }

    return {
        menu,
        handleClickMenu
    }
});
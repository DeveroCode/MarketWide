import { ref } from "vue";
import APIservice from "../services/APIservice";
import { useRouter } from 'vue-router';
import { useNotificationsStore } from '../stores/notifications';
import { defineStore } from 'pinia';

export const useMenuMobile = defineStore('menu', () => {
    const menu = ref(false);
    const router = useRouter();
    const notification = useNotificationsStore();

    function handleClickMenu() {
        menu.value = !menu.value;
    }
    async function handleLogOut() {
        try {
            await APIservice.logOut();
            localStorage.removeItem('AUTH_TOKEN');
            notification.mostrar = true;
            notification.texto = 'Sesión cerrada';
            notification.success = 'Sera dirigido al login';
            notification.error = false;
            setTimeout(() => {
                router.push({ name: 'login' });
            }, 1000)
        } catch (error) {
            console.log(error);
        }
    }

    return {
        menu,
        handleClickMenu,
        handleLogOut
    }
});
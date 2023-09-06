import { ref, watch } from "vue";
import { defineStore } from "pinia";

export const useNotificationsStore = defineStore('notification', () => {

    const texto = ref('');
    const errors = ref({});
    const error = ref(false);
    const mostrar = ref(false);

    watch(mostrar, () => {
        setTimeout(() => {
            texto.value = ''
            error.value = false
            mostrar.value = false
        }, 5000);
    });

    return {
        texto, error, mostrar, errors
    }
});
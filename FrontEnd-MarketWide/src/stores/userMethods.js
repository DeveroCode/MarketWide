import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import useSWRV from 'swrv';
import clienteApi from '../lib/axios';
import APIservice from '../services/APIservice';
import { useNotificationsStore } from './notifications';

export const userMethods = defineStore('users', () => {
    const router = useRouter();
    const token = localStorage.getItem('AUTH_TOKEN'); // Obtiene el token del usuario registrado
    const notification = useNotificationsStore();

    const { data: user, error, mutate } = useSWRV('/api/user', () =>
        clienteApi('/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.data) // Asegúrate de que la respuesta contenga la propiedad 'data'
            .catch(error => {
                throw Error(error.response.data.erros)
            })
    );

    async function userRegister(data, errores) {
        try {
            const response = await APIservice.register(data);
            router.push({ name: 'login' });
        } catch (error) {
            errores.value = Object.values(error.response.data.errors);
            notification.mostrar = true;
            notification.texto = 'Error al registrar usuario'
            notification.error = true;
            notification.errors = errores.value;
        }
    }


    return {
        userRegister,
    }
});
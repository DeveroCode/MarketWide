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

    async function types(user) {
        try {
            const { data } = (await APIservice.type_user());
            user.value = data.data;
        } catch (error) {
            console.error(error);
        }
    }

    async function userRegister(data, errores) {
        try {
            const response = await APIservice.register(data);
            router.push({ name: 'login' });
        } catch (error) {
            console.log(error.response.data.message);
            // Definicion de los errores
            let e = []; // Almacenamos los errores en un array de nuevo
            const erro = error.response.data.errors;
            for (const key in erro) {
                if (erro.hasOwnProperty(key)) {
                    e.push(erro[key][0]); // Con el if los convetirmos a string y los renderisamos en la variable e
                }
            }
            errores.value = e;
            // Fin de los errores
            notification.mostrar = true;
            notification.texto = 'Error al registrar usuario'
            notification.error = true;
            notification.errors = errores.value; // Alamacenamos solo los errores en string
        }
    }


    return {
        userRegister,
        types
    }
});
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import useSWRV from 'swrv';
import { print } from '../helpers/printErrors.js'
import clienteApi from '../lib/axios';
import APIservice from '../services/APIservice'

export const userMethods = defineStore('users', () => {
    const router = useRouter();
    const token = localStorage.getItem('AUTH_TOKEN'); // Obtiene el token del usuario registrado

    const { data: user, error, mutate } = useSWRV('/api/user', () =>
        clienteApi('/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.data) // Asegúrate de que la respuesta contenga la propiedad 'data'
            .catch(error => {
                throw Error(error?.response?.data?.errors)
            })
    );

    // Renderiza los tipos de usuario del backend
    async function types(users) {
        try {
            const { data } = (await APIservice.type_user());
            users.value = data.data;
        } catch (error) {
            console.error(error);
        }
    }

    async function userRegister(data, errores) {
        try {
            const response = await APIservice.register(data);
            router.push({ name: 'login' });
        } catch (error) {
            print(errores, error)
        }
    }

    async function userLogin(datas, errores) {
        try {
            const { data } = await APIservice.login(datas);
            localStorage.setItem('AUTH_TOKEN', data.token);
            router.push({ name: 'home' });
        } catch (error) {
            print(errores, error)
        }
    }


    return {
        userRegister,
        userLogin,
        types,
        user
    }
});
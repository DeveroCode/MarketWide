import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { print } from '../helpers/printErrors.js'
import APIservice from '../services/APIservice'

export const userMethods = defineStore('users', () => {
    const router = useRouter();

    // Renderiza los tipos de usuario del backend
    async function types(users) {
        try {
            const { data } = (await APIservice.type_user());
            users.value = data.data;
        } catch (error) {
            console.error(error);
        }
    }

    async function dataUser(users) {
        try {
            const response = await APIservice.getUser();
            users.value = response.data;
        } catch (error) {
            console.error('Error al obtener los datos del usuario:', error);
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
        types,
        userRegister,
        userLogin,
        dataUser
    }
});
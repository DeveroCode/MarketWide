import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { useNotificationsStore } from '../stores/notifications';
import { print } from '../helpers/printErrors.js'
import APIservice from '../services/APIservice'

export const userMethods = defineStore('users', () => {
    const router = useRouter();
    const notification = useNotificationsStore();
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

    async function userUpdate(data, errores) {
        try {
            const response = await APIservice.update(data);
            setTimeout(() => {
                window.location.reload();
            }, 2000)
            notification.mostrar = true;
            notification.texto = 'Actualización exitosa';
            notification.success = 'Tus datos han sido actualizados correctamente';
            notification.error = false;
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

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
            const { data } = await APIservice.getUser();
            users.value = data.data;
            console.log(users.value);
        } catch (error) {
            console.error('Error al obtener los datos del usuario:', error);
        }
    }

    return {
        userRegister,
        userLogin,
        userUpdate,
        dataUser,
        types,
    }
});
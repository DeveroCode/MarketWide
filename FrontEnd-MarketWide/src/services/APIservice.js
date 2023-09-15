import clienteApi from "../lib/axios";

export default {
    type_user() {
        return clienteApi.get('/api/type_users')
    },
    getUser() {
        const token = localStorage.getItem('AUTH_TOKEN')
        return clienteApi.get('/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .catch(error => {
                // Manejar errores aquí
                console.error(error);
            });
    },
    register(data) {
        return clienteApi.post('/api/register', data);
    },
    login(data) {
        return clienteApi.post('/api/login', data);
    },
    logOut() {
        const token = localStorage.getItem('AUTH_TOKEN')
        return clienteApi.post('/api/logout', null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }
}
import clienteApi from "../lib/axios";
const token = localStorage.getItem('AUTH_TOKEN');

export default {
    getUser() {
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
    update(data) {
        return clienteApi.put('/api/update', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },
    logOut() {
        return clienteApi.post('/api/logout', null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }
}
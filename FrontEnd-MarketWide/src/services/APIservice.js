import clienteApi from "../lib/axios";

export default {
    type_user() {
        return clienteApi.get('/api/type_users');
    },
    register(data) {
        return clienteApi.post('/api/register', data);
    },
    login(data) {
        return clienteApi.post('/api/login', data);
    }
}
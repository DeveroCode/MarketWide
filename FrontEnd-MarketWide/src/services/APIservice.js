import clienteApi from "../lib/axios";

export default {
    register(data) {
        return clienteApi.post('/api/register', data);
    },
    login(data) {
        return clienteApi.post('/api/login', data);
    }
}
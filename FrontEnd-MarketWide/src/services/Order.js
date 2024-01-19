import clienteApi from "../lib/axios";

export default {
    type_user() {
        return clienteApi.get('/api/type_users')
    },
    getProductStatus() {
        return clienteApi.get('/api/estado')
    }
}
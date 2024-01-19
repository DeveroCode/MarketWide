import clienteApi from "../lib/axios";
const token = localStorage.getItem("AUTH_TOKEN");

export default {

    create(data) {
        return clienteApi.post('/api/create-product', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }
}
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { useNotificationsStore } from "./notifications";
import { print } from "../helpers/printErrors";
import Order from "../services/Order";
import APIproduct from "../services/APIproduct";

export const productMethods = defineStore("product", () => {
    const notification = useNotificationsStore();
    async function productStatus(status) {
        try {
            const { data } = await Order.getProductStatus();
            status.value = data.data;
            console.log(status);
        } catch (error) {
            console.log(error);
        }
    }
    async function productRegister(data, errores) {
        try {
            const response = await APIproduct.create(data);
            setTimeout(() => {
                window.location.reload();
            }, 2000)
            notification.mostrar = true;
            notification.texto = 'Registro exitoso';
            notification.success = 'Tu producto ha sido registrado correctamente';
            notification.error = false;
        } catch (error) {
            print(errores, error);
        }
    }


    return {
        productRegister,
        productStatus
    }
}); 
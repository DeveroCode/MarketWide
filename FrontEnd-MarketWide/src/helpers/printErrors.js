import { useNotificationsStore } from "../stores/notifications";
const notification = useNotificationsStore();
export function print(errores, error) {
    // Definicion de los errores
    let e = []; // Almacenamos los errores en un array de nuevo
    const erro = error.response.data.errors;
    for (const key in erro) {
        if (erro.hasOwnProperty(key)) {
            e.push(erro[key][0]); // Con el if los convetirmos a string y los renderisamos en la variable e
        }
    }
    errores.value = e;
    // Fin de los errores
    notification.mostrar = true;
    notification.texto = 'Error al iniciar sesion'
    notification.error = true;
    notification.errors = errores.value; // Alamacenamos solo los errores en string
}
<script setup>
// Vue Js
import { reactive, ref, onMounted } from 'vue';
// My Functions
import { productMethods } from '../stores/productMethods.js';
import CardInfo from './CardInfo.vue';
import CardMoreInfo from './CardMoreInfo.vue';
// Images
import code from '../assets/imgs/codigo_barra.png'
import prodcutExample from '@/assets/imgs/product-example.png'
const { productRegister, productStatus } = productMethods();

const condition = reactive({});
const errores = ref([]);


const dataProduct = reactive({
    titulo: '',
    marca: '',
    modelo: '',
    condicion: '',
    codigo: '',
    // foto: '', -> Pendiendte
    descripcion: '',
});

const handleForm = () => {
    const data = {
        titulo: dataProduct.titulo,
        marca: dataProduct.marca,
        modelo: dataProduct.modelo,
        condicion: dataProduct.condicion,
        codigo: dataProduct.codigo,
        // fotos: dataProduct.fotos, -> Pendiendte
        descripcion: dataProduct.descripcion,
    };
    // console.log(data);
    productRegister(data, errores);
};

// Get conditions
const typeCondition = () => {
    productStatus(condition);
};

onMounted(() => {
    typeCondition();
});
</script>

<template>
    <form class="max-w-7xl flex flex-col" @submit.prevent="handleForm" novalidate>
        <!-- Caracteristicas -->
        <section class="bg-white rounded-lg mt-5 md:mt-24 px-5 md:px-10 py-5 md:py-10 shadow-sm w-full md:w-2/3 mx-auto">
            <CardInfo title="Características del producto" subtitle="Características del Producto" />
            <hr class="mt-5 md:mt-10 mb-5 md:mb-10 separator">

            <label for="titulo" class="text-sm">Titulo</label>
            <input type="text" name="titulo" id="titulo"
                class="border border-gray-400 mt-2 text-gray-900 text-sm rounded-lg focus:outline-headers block w-full p-2.5 mb-5"
                v-model="dataProduct.titulo">


            <label for="marca" class="text-sm">Marca</label>
            <input type="text" name="marca" id="marca"
                class="border border-gray-400 mt-2 text-gray-900 text-sm rounded-lg focus:outline-headers block w-full p-2.5"
                v-model="dataProduct.marca">

            <label for="modelo" class="text-sm mt-5 block">Modelo</label>
            <input type="text" name="modelo" id="modelo"
                class="border border-gray-400 mt-2 text-gray-900 text-sm rounded-lg focus:outline-headers block w-full p-2.5"
                v-model="dataProduct.modelo">

            <div class="mt-5 flex justify-between space-x-5">
                <fieldset class="w-1/2">
                    <label for="marca" class="text-sm">Marca</label>
                    <input type="text" name="marca" id="marca"
                        class="border border-gray-400 mt-2 text-gray-900 text-sm rounded-lg focus:outline-headers block w-full p-2.5 mb-5"
                        v-model="dataProduct.marca">
                </fieldset>

                <fieldset class="w-1/2">
                    <label for="marca" class="text-sm">Marca</label>
                    <input type="text" name="marca" id="marca"
                        class="border border-gray-400 mt-2 text-gray-900 text-sm rounded-lg focus:outline-headers block w-full p-2.5"
                        v-model="dataProduct.marca">
                </fieldset>

            </div>
        </section>

        <!-- condicion -->
        <section class="bg-white rounded-lg mx-auto mt-5 md:mt-12 px-5 md:px-10 py-5 md:py-10 shadow-sm w-full md:w-2/3">
            <CardInfo title="Condición del producto" subtitle="Indica el estado en que se encuentra tu producto." />

            <hr class="mt-5 md:mt-10 mb-5 md:mb-10 separator">
            <label for="condicion" class="text-sm block">Condición</label>
            <div class="mt-2 space-x-4">
                <div class="mt-2 space-x-4">
                    <label v-for="status in condition.value" :key="status.id" :for="status.condicion">
                        <input type="radio" :id="status.id" name="condicion" :value="status.id"
                            v-model="dataProduct.condicion">
                        {{ status.condicion }}
                    </label>
                </div>
            </div>
        </section>

        <!-- codigo -->
        <section class="bg-white rounded-lg mx-auto mt-5 md:mt-12 px-5 md:px-10 py-5 md:py-10 shadow-sm w-full md:w-2/3"
            id="code">
            <CardInfo title="Código universal del producto"
                subtitle="Es el número que identifica un producto a nivel global." />

            <hr class="mt-5 md:mt-10 mb-5 md:mb-10 separator">

            <CardMoreInfo title="Puedes encontrar el código en la caja o etiqueta, junto al código de barras."
                more="Quiero saber más" :img="code" />

            <label for="codigo" class="text-sm block">Código de producto</label>
            <input type="text" name="codigo" id="codigo"
                class="border border-gray-400 mt-2 text-gray-900 text-sm rounded-lg focus:outline-headers block w-full p-2.5"
                placeholder="Ej: 8911223092" v-model="dataProduct.codigo">
        </section>

        <!-- foto -->
        <section class="bg-white rounded-lg mx-auto mt-5 md:mt-12 px-5 md:px-10 py-5 md:py-10 shadow-sm w-full md:w-2/3"
            id="fotos">
            <CardInfo title="Fotos" subtitle="Sube las fotos para que el producto se destaque" />
            <hr class="mt-5 md:mt-10 mb-5 md:mb-10 separator">

            <CardMoreInfo title="La primera foto debe tener fondo blanco y buena calidad, será la
            portada" more="Quiero saber más" :img="prodcutExample" />

            <label for="codigo" class="text-sm block">Código de producto</label>
            <input type="number" name="codigo" id="codigo"
                class="border border-gray-400 mt-2 text-gray-900 text-sm rounded-lg focus:outline-headers block w-full p-2.5"
                placeholder="Ej: 8911223092" max="19">
        </section>

        <!-- Descripción -->
        <section
            class="bg-white rounded-lg mx-auto mt-5 md:mt-12 mb-24 px-5 md:px-10 py-5 md:py-10 shadow-sm w-full md:w-2/3"
            id="description">
            <CardInfo title="Descripción" subtitle="Describe tu producto, incluyendo especificaciones y
            características" />
            <hr class="mt-5 md:mt-10 mb-5 md:mb-10 separator">

            <label for="descripcion" class="text-sm block">Descripción del producto</label>
            <textarea name="descripcion" id="descripcion"
                class="border border-gray-400 mt-2 h-48 md:h-64 text-gray-900 text-sm rounded-lg focus:outline-headers block w-full p-2.5"
                v-model="dataProduct.descripcion" />
        </section>

        <div class="md:w-2/3 mx-auto">
            <!-- Boton aliniear al lado derecho -->
            <input type="submit" value="Enviar"
                class="bg-secondary hover:bg-headers text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5 md:mt-10 mb-10 cursor-pointer">
        </div>
    </form>
</template>

<style>
.separator {
    max-width: 100% !important;
}
</style>
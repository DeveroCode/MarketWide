<script setup>
import code from '../assets/imgs/codigo_barra.png'
</script>

<template>
    <form class="max-w-7xl flex flex-col">
        <!-- Caracteristicas -->
        <section class="bg-white rounded-lg mt-5 md:mt-24 px-5 md:px-10 py-5 md:py-10 shadow-sm w-full md:w-2/3 mx-auto">
            <div id="information">
                <h1 class="font-bold text-lg md:text-xl">Características del producto</h1>
                <span class="text-sm text-gray-400">Completa estos datos con las especificaciones correctas de tu
                    producto. Puedes usar la caja o el envase del producto para consultar la información
                    necesaria.</span>
            </div>

            <hr class="mt-5 md:mt-10 mb-5 md:mb-10 separator">

            <label for="marca" class="text-sm">Marca</label>
            <input type="text" name="marca" id="marca"
                class="border border-gray-400 mt-2 text-gray-900 text-sm rounded-lg focus:outline-headers block w-full p-2.5">

            <label for="modelo" class="text-sm mt-5 block">Modelo</label>
            <input type="text" name="modelo" id="modelo"
                class="border border-gray-400 mt-2 text-gray-900 text-sm rounded-lg focus:outline-headers block w-full p-2.5">
        </section>

        <!-- condicion -->
        <section class="bg-white rounded-lg mx-auto mt-5 md:mt-12 px-5 md:px-10 py-5 md:py-10 shadow-sm w-full md:w-2/3">
            <div id="information mt-5 mb-5">
                <h1 class="font-bold text-lg md:text-xl">Condición del producto</h1>
                <span class="text-sm text-gray-400">Indica el estado en que se encuentra tu producto.</span>
            </div>

            <hr class="mt-5 md:mt-10 mb-5 md:mb-10 separator">
            <label for="condicion" class="text-sm block">Condición</label>
            <div class="mt-2 space-x-4">
                <label for="usado">
                    <input type="radio" id="usado" name="condicion" value="usado">
                    Usado
                </label>
                <label for="nuevo">
                    <input type="radio" id="nuevo" name="condicion" value="nuevo">
                    Nuevo
                </label>
            </div>
        </section>

        <!-- codigo -->
        <section class="bg-white rounded-lg mx-auto mt-5 md:mt-12 px-5 md:px-10 py-5 md:py-10 shadow-sm w-full md:w-2/3"
            id="code">
            <div id="information mt-5 mb-5">
                <h1 class="font-bold text-lg md:text-xl">Código universal del producto</h1>
                <span class="text-sm text-gray-400">Es el número que identifica un producto a nivel global.</span>
            </div>

            <hr class="mt-5 md:mt-10 mb-5 md:mb-10 separator">

            <div id="img-code-bar"
                class="bg-gray-100 rounded-lg flex flex-col md:flex-row items-center justify-between my-5 md:my-10 py-5">
                <div class="flex flex-col mx-5 md:mx-10">
                    <span>Puedes encontrar el código en la caja o etiqueta, junto al código de barras.</span>
                    <a href="#" class="text-blue-700 mt-3 cursor-pointer">Quiero saber más</a>
                </div>
                <img :src="code" alt="example of code bars" class="w-24 md:w-32 mx-5 md:mx-10">
            </div>

            <label for="codigo" class="text-sm block">Código de producto</label>
            <input type="number" name="codigo" id="codigo"
                class="border border-gray-400 mt-2 text-gray-900 text-sm rounded-lg focus:outline-headers block w-full p-2.5"
                placeholder="Ej: 8911223092" max="19">
        </section>

        <!-- foto -->
        <section class="bg-white rounded-lg mx-auto mt-5 md:mt-12 px-5 md:px-10 py-5 md:py-10 shadow-sm w-full md:w-2/3"
            id="code">
            <div id="information mt-5 mb-5">
                <h1 class="font-bold text-lg md:text-xl">Fotos</h1>
                <span class="text-sm text-gray-400">Sube las fotos para que el producto se destaque</span>
            </div>

            <hr class="mt-5 md:mt-10 mb-5 md:mb-10 separator">

            <div id="img-code-bar"
                class="bg-gray-100 rounded-lg flex flex-col md:flex-row items-center justify-between my-5 md:my-10 py-5">
                <div class="flex flex-col mx-5 md:mx-10">
                    <span class="font-bold">La primera foto debe tener fondo blanco y buena calidad, será la
                        portada</span>
                    <a href="#" class="text-blue-700 mt-3 cursor-pointer">Quiero saber más</a>
                </div>
                <img :src="code" alt="example of code bars" class="w-24 md:w-32 mx-5 md:mx-10">
            </div>

            <label for="codigo" class="text-sm block">Código de producto</label>
            <input type="number" name="codigo" id="codigo"
                class="border border-gray-400 mt-2 text-gray-900 text-sm rounded-lg focus:outline-headers block w-full p-2.5"
                placeholder="Ej: 8911223092" max="19">
        </section>

        <!-- Descripcion -->
        <section
            class="bg-white rounded-lg mx-auto mt-5 md:mt-12 mb-24 px-5 md:px-10 py-5 md:py-10 shadow-sm w-full md:w-2/3"
            id="code">
            <div id="information mt-5 mb-5">
                <h1 class="font-bold text-lg md:text-xl">Descripción</h1>
                <span class="text-sm text-gray-400">Describe tu producto, incluyendo especificaciones y
                    características</span>
            </div>

            <hr class="mt-5 md:mt-10 mb-5 md:mb-10 separator">

            <label for="descripcion" class="text-sm block">Descripción del producto</label>
            <textarea name="descripcion" id="descripcion"
                class="border border-gray-400 mt-2 h-48 md:h-64 text-gray-900 text-sm rounded-lg focus:outline-headers block w-full p-2.5" />
        </section>

        <div class="md:w-2/3 mx-auto">
            <!-- Boton aaliniear al lado derecho -->
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
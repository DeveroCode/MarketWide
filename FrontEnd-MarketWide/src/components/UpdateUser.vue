<script setup>
import HeaderUser from './HeaderUser.vue';
import { ref, watchEffect } from 'vue';
import { userMethods } from '../stores/userMethods.js';

const { dataUser } = userMethods();
const users = ref([]);

watchEffect(async () => {
    dataUser(users);
});

</script>

<template>
    <HeaderUser />

    <section class="update container px-10 mt-10">
        <h2 class="text-4xl font-bold">Gestión de datos</h2>
        <span class="text-gray-600">actualiza tus datos de manera segura.</span>
    </section>

    <form class="px-10 mt-32 mb-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex flex-col">
                <label for="name" class="mb-2">Nombre(s)</label>
                <input
                    class="mb-5 rounded-[4px] border p-2 hover:outline-none focus:outline-none hover:border-headers w-full"
                    type="text" placeholder="Nombre" name="name" id="name" :value="users.name" />
            </div>

            <div class="flex flex-col">
                <label for="email" class="mb-2">Email</label>
                <input
                    class="mb-5 rounded-[4px] border p-2 hover:outline-none focus:outline-none hover:border-headers w-full"
                    type="email" placeholder="Email" name="email" id="email" :value="users.email" />
            </div>

            <div class="flex flex-col">
                <label for="type" class="mb-2">Tipo de usuario</label>
                <input
                    class="mb-5 rounded-[4px] border p-2 hover:outline-none focus:outline-none hover:border-headers w-full"
                    type="text" placeholder="type" name="type" id="type" :value="users.type_user" disabled />
            </div>
        </div>

        <section id="change-password">
            <h2 class="text-4xl font-bold mt-10">Cambiar contraseña</h2>
            <span class="text-gray-600 mb-10">Recuerda!!! -Una vez cambiada tu contraseña, tendrás que esperar al meno tres
                días
                para
                volverla a cambiar.</span>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 mb-12">
                <div class="flex flex-col">
                    <label for="password" class="mb-2">Nueva contraseña</label>
                    <input
                        class="mb-5 rounded-[4px] border p-2 hover:outline-none focus:outline-none hover:border-headers w-full"
                        type="password" placeholder="Nueva contraseña" name="password" id="password" />
                </div>

                <div class="flex flex-col">
                    <label for="password_confirmation" class="mb-2">Confirma tu contraseña</label>
                    <input
                        class="mb-5 rounded-[4px] border p-2 hover:outline-none focus:outline-none hover:border-headers w-full"
                        type="password" placeholder="Confirmar contraseña" name="password_confirmation"
                        id="password_confirmation" />
                </div>
            </div>
        </section>
        <input type="button" value="Actualizar datos" class="bg-headers text-white p-2 rounded-md cursor-pointer">
    </form>
</template>
<script setup>
import HeaderUser from './HeaderUser.vue';
import { ref, watchEffect } from 'vue';
import { userMethods } from '../stores/userMethods.js';

const { dataUser, userUpdate } = userMethods();
const users = ref([]);


// Errores
const errores = ref([]);

const handleSubmit = () => {
    const data = {
        name: users.value.name,
        email: users.value.email,
        password: users.value.password,
        password_confirmation: users.value.password_confirmation,
    }
    userUpdate(data, errores);
    // console.log(data);
};

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

    <form class="px-10 mt-32 mb-10" @submit.prevent="handleSubmit" novalidate>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex flex-col">
                <label for="name" class="mb-2">Nombre(s)</label>
                <input
                    class="mb-5 rounded-[4px] border p-2 hover:outline-none focus:outline-none hover:border-headers w-full"
                    type="text" placeholder="Nombre" name="name" id="name" v-model="users.name" />
            </div>

            <div class="flex flex-col">
                <label for="email" class="mb-2">Email</label>
                <input
                    class="mb-5 rounded-[4px] border p-2 hover:outline-none focus:outline-none hover:border-headers w-full"
                    type="email" placeholder="Email" name="email" id="email" v-model="users.email" />
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
                        type="password" placeholder="Nueva contraseña" name="password" id="password"
                        v-model="users.password" />
                </div>

                <div class="flex flex-col">
                    <label for="password_confirmation" class="mb-2">Confirma tu contraseña</label>
                    <input
                        class="mb-5 rounded-[4px] border p-2 hover:outline-none focus:outline-none hover:border-headers w-full"
                        type="password" placeholder="Confirmar contraseña" name="password_confirmation"
                        v-model="users.password_confirmation" id="password_confirmation" />
                </div>
            </div>
        </section>

        <button class="bg-headers text-white p-2 rounded-md cursor-pointer">Actualizar datos</button>
    </form>
</template>
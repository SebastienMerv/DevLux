<script setup>
import {ref} from 'vue';
import {useNotificationStore} from '@/stores/notificationStore';
import Notification from "@/components/Notification.vue";
import {useI18n} from "vue-i18n";
import router from "@/router.js";
import {useRouter} from "vue-router";

const {t} = useI18n();

const email = ref('');
const password = ref('');
const notificationStore = useNotificationStore();
const isLoading = ref(false)

async function login(email, password) {
    isLoading.value = true;
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const data = await response.json();
    if (response.status === 200) {
        isLoading.value = false;
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        router.push({name: 'dashboard'});
    } else {
        isLoading.value = false;
        notificationStore.showNotification({
            title: t('sign.error'),
            description: t('sign.invalid_credentials'),
        });

    }
}
</script>

<template>
    <div class="flex min-h-screen flex-1">
        <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="mx-auto w-full max-w-sm lg:w-96">
                <div>
                    <img class="h-16 w-auto" src="@/assets/devlux-logo.png" alt="DevLux"/>
                    <h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        {{ $t('sign.login_to_your_account') }}</h2>
                    <p class="mt-2 text-sm leading-6 text-gray-500">
                        {{ $t('sign.dont_have_an_account') }}
                        <a href="#" class="font-semibold text-blue-600 hover:text-blue-500">{{
                                $t('sign.create_account')
                            }}</a>
                    </p>
                </div>

                <div v-if="isLoading" class="text-center text-blue-600 mt-24">
                    <!-- Indicateur de chargement (spinner) -->
                    <svg class="animate-spin h-5 w-5 text-blue-600 mx-auto" xmlns="http://www.w3.org/2000/svg"
                         fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                    {{ $t('sign.loading') }}
                </div>

                <div v-else>
                    <div class="mt-10">
                        <form @submit.prevent="login(email, password)" class="space-y-6">
                            <div>
                                <label for="email"
                                       class="block text-sm font-medium leading-6 text-gray-900">{{
                                        $t('placeholders.email')
                                    }}</label>
                                <div class="mt-2">
                                    <input v-model="email" id="email" name="email" type="email" required
                                           class="px-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div>
                                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">{{
                                        $t('placeholders.password')
                                    }}</label>
                                <div class="mt-2">
                                    <input v-model="password" id="password" name="password" type="password" required
                                           class="px-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox"
                                           class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"/>
                                    <label for="remember-me"
                                           class="ml-3 block text-sm leading-6 text-gray-700">{{
                                            $t('sign.remember_me')
                                        }}</label>
                                </div>

                                <div class="text-sm leading-6">
                                    <a href="#"
                                       class="font-semibold text-blue-600 hover:text-blue-500">{{
                                            $t('sign.forgot_password')
                                        }}</a>
                                </div>
                            </div>

                            <div>
                                <button type="submit"
                                        class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                                    {{ $t('sign.login') }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

        <div class="relative hidden w-0 flex-1 lg:block">
            <img class="absolute inset-0 h-full w-full object-cover"
                 src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
                 alt=""/>
        </div>
    </div>

    <Notification/>
</template>

<template>
    <header class="bg-white">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex flex-1">
                <div class="hidden lg:flex lg:gap-x-12">
                    <RouterLink v-for="item in navigation" :key="item.name" :to="{name: item.href}"
                                class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}
                    </RouterLink>
                </div>
                <div class="flex lg:hidden">
                    <button type="button"
                            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            @click="mobileMenuOpen = true">
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon class="h-6 w-6" aria-hidden="true"/>
                    </button>
                </div>
            </div>
            <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">DevLux</span>
                <img class="h-16 w-auto" src="@/assets/devlux-logo.png" alt=""/>
            </a>
            <div class="flex flex-1 justify-end">
                <RouterLink :to="{name: 'login'}" class="text-sm font-semibold leading-6 text-gray-900">{{ $t('actions.login') }}
                    <span
                        aria-hidden="true">&rarr;</span></RouterLink>
            </div>
        </nav>
        <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-10"/>
            <DialogPanel class="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
                <div class="flex items-center justify-between">
                    <div class="flex flex-1">
                        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700"
                                @click="mobileMenuOpen = false">
                            <span class="sr-only">Close menu</span>
                            <XMarkIcon class="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="h-8 w-auto"
                             src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
                    </a>
                    <div class="flex flex-1 justify-end">
                        <RouterLink :to="{name: 'login'}" class="text-sm font-semibold leading-6 text-gray-900">
                            {{ $t('actions.login') }} <span
                            aria-hidden="true">&rarr;</span></RouterLink>
                    </div>
                </div>
                <div class="mt-6 space-y-2">
                    <RouterLink v-for="item in navigation" :key="item.name" :to="{name: item.href}"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        {{ item.name }}
                    </RouterLink>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
</template>

<script setup>
import {ref} from 'vue'
import {Dialog, DialogPanel} from '@headlessui/vue'
import {Bars3Icon, XMarkIcon} from '@heroicons/vue/24/outline'
import {useI18n} from "vue-i18n";

const {t} = useI18n()

const navigation = [
    {name: t('navigation.home'), href: 'home'},
    {name: t('navigation.our_developers'), href: 'developers'},
]

const mobileMenuOpen = ref(false)
</script>

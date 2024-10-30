<template>
    <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
        <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
            <transition
                enter-active-class="transform ease-out duration-300 transition"
                enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
                leave-active-class="transition ease-in duration-100"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0">
                <div v-if="isVisible"
                     class="bg-white pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div class="p-4">
                        <div class="flex items-start">
                            <div class="flex-shrink-0">
                                <component :is="icon" class="h-6 w-6" :class="iconColor" aria-hidden="true" />
                            </div>
                            <div class="ml-3 w-0 flex-1 pt-0.5">
                                <p class="text-sm font-medium text-gray-900">{{ title }}</p>
                                <p class="mt-1 text-sm text-gray-500">{{ description }}</p>
                            </div>
                            <div class="ml-4 flex flex-shrink-0">
                                <button type="button" @click="hideNotification"
                                        class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <span class="sr-only">Close</span>
                                    <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useNotificationStore } from '../stores/notificationStore.js';
import { ExclamationCircleIcon, CheckCircleIcon, XMarkIcon } from '@heroicons/vue/24/outline';

const notificationStore = useNotificationStore();

const isVisible = computed(() => notificationStore.isVisible);
const title = computed(() => notificationStore.title);
const description = computed(() => notificationStore.description);
const type = computed(() => notificationStore.type);

const notificationClasses = computed(() => {
    return type.value === 'success' ? 'bg-green-50' : 'bg-red-50';
});

const icon = computed(() => {
    return type.value === 'success' ? CheckCircleIcon : ExclamationCircleIcon;
});

const iconColor = computed(() => {
    return type.value === 'success' ? 'text-green-400' : 'text-red-400';
});

const hideNotification = () => {
    notificationStore.hideNotification();
};
</script>

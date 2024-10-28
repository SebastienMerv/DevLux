<template>
    <div>
        <h3 class="text-base font-semibold leading-6 text-gray-900">{{ $t('admin.last_days', {days: 30}) }}</h3>
        <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div v-for="item in stats" :key="item.name"
                 class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                <dt class="truncate text-sm font-medium text-gray-500">{{ item.name }}</dt>
                <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{{ item.stat }}</dd>
            </div>
        </dl>
    </div>
</template>

<script setup>

import {useI18n} from "vue-i18n";

const {t} = useI18n();

const stats = [
    {name: t('admin.stats.projects'), stat: 56},
    {name: t('admin.stats.euro_earned'), stat: 23},
];

</script>

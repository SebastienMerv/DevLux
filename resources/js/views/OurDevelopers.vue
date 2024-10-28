<script setup>
import Navbar from "@/components/Navbar.vue";

const people = [
    {
        name: 'Sébastien MERVEILLE',
        role: 'Co-fondateur',
        imageUrl:
            'https://sebastienmerv.be/photo.jpg',
    },
]
</script>

<template>
    <Navbar />

        <div class="bg-white py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:mx-0">
                    <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{{$t('our_developers.title')}}</h2>
                    <p class="mt-6 text-lg leading-8 text-gray-600">{{ $t('our_developers.subtitle')}}</p>
                </div>
                <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6">
                    <li v-for="person in people" :key="person.name">
                        <img class="mx-auto h-24 w-24 rounded-full object-cover" :src="person.imageUrl" alt="" />
                        <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{{ person.name }}</h3>
                        <p class="text-sm leading-6 text-gray-600">{{ person.role }}</p>
                    </li>
                </ul>
            </div>
        </div>

</template>

<style scoped>

</style>

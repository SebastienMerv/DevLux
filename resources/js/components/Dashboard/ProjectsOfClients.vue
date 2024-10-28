<template>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div v-for="project in projects" :key="project.name"
             class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:border-gray-400">
            <div class="min-w-0 flex-1">
                <a href="#" class="focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true"/>
                    <p class="text-sm font-medium text-gray-900">{{ project.name }}</p>
                    <p class="truncate text-sm text-gray-500">{{ project.description }}</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
const projects = [
    {
        name: 'Project 1',
        description: 'This is a project description'
    },
    {
        name: 'Project 2',
        description: 'This is a project description'
    },
    {
        name: 'Project 3',
        description: 'This is a project description'
    },
    {
        name: 'Project 4',
        description: 'This is a project description'
    }
]
</script>

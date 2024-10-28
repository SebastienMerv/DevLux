<template>
    <AdminView>
        <h1 class="text-xl font-semibold">{{$t('admin.discover_project_of_your_clients')}}</h1>

        <ProjectsOfClients class="mt-8"/>
    </AdminView>
</template>
<script setup lang="ts">
import AdminView from "@/components/Dashboard/AdminView.vue";
import ProjectsOfClients from "@/components/Dashboard/ProjectsOfClients.vue";
</script>

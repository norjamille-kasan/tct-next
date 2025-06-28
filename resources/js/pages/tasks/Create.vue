<template>
    <AppLayout :breadcrumbs="breadcrumbs"> </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';

const breadcrumbs = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Tasks',
        href: '/dashboard/tasks',
    },
    {
        title: 'Create',
        href: '#',
    },
];
</script>

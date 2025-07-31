<script setup lang="ts">
import MyTaskController from '@/actions/App/Http/Controllers/MyTaskController';
import DashboardContent from '@/components/dashboard/DashboardContent.vue';
import Heading from '@/components/Heading.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'My Tasks',
        href: MyTaskController.url(),
    },
];

defineOptions({
    layout: AppLayout,
});
</script>

<template>
    <Head title="My Tasks" />
    <DashboardContent :breadcrumbs="breadcrumbs">
        <Heading title="My Tasks" description="List of all my tasks" />
    </DashboardContent>
</template>

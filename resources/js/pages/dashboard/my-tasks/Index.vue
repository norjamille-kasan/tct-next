<script setup lang="ts">
import SubmissionController from '@/actions/App/Http/Controllers/Dashboard/Submissions/SubmissionController';
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
        title: 'Submissions',
        href: SubmissionController.index().url,
    },
];

defineOptions({
    layout: AppLayout,
});
</script>

<template>
    <Head title="Submissions" />
    <DashboardContent :breadcrumbs="breadcrumbs">
        <Heading title="Submissions" description="List of all submissions" />
    </DashboardContent>
</template>

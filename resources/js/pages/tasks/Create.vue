<template>
    <AppLayout :breadcrumbs="breadcrumbs">
        <TaskCreateForm :companies :segments />
    </AppLayout>
</template>

<script setup lang="ts">
import TaskCreateForm from '@/components/dashboard/TaskCreateForm.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import { Company, Segment } from '@/types/models';

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

interface Props {
    companies: Company[];
    segments: Segment[];
}

const props = defineProps<Props>();
</script>

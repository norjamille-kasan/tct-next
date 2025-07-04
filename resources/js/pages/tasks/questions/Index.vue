<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Task } from '@/types/models';
import { Head } from '@inertiajs/vue3';

interface Props {
    task: Task;
}

const props = defineProps<Props>();

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Tasks',
        href: '/dashboard/tasks',
    },
    {
        title: props.task.title,
        href: `#`,
    },
    {
        title: 'Questions',
        href: `#`,
    },
];
</script>

<template>
    <Head title="Questions" />
    <AppLayout :breadcrumbs="breadcrumbs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, sed sunt! Officiis qui itaque iste officia hic. Libero ullam, ratione sint amet
        adipisci natus officiis modi voluptates quis, veniam expedita.
    </AppLayout>
</template>

<template>
    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex items-center justify-between gap-2">
            <form>
                <Input placeholder="Search" type="search" class="sm:w-80" />
            </form>
            <ModalLink :href="route('tasks.create')" :class="buttonVariants()">
                <PlusIcon />
                Create Task
            </ModalLink>
        </div>
    </AppLayout>
</template>

<script setup lang="ts">
import { buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/AppLayout.vue';
import { PlusIcon } from 'lucide-vue-next';

const breadcrumbs = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Tasks',
        href: '/dashboard/tasks',
    },
];
</script>

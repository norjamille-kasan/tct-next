<template>
    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex items-center justify-between gap-2">
            <form>
                <Input placeholder="Search" type="search" class="sm:w-80" />
            </form>
            <Link :href="route('tasks.create')" :class="buttonVariants()">
                <PlusIcon />
                Create Task
            </Link>
        </div>
    </AppLayout>
</template>

<script setup lang="ts">
import { buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/AppLayout.vue';
import { Link } from '@inertiajs/vue3';
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

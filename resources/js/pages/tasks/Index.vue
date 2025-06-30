<template>
    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex items-center justify-between gap-2">
            <form @submit.prevent="search">
                <Input placeholder="Search" v-model="query.filter.title" type="search" class="sm:w-80" />
            </form>
            <Link :href="route('tasks.create')" :class="buttonVariants()">
                <PlusIcon />
                Create Task
            </Link>
        </div>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead> Title </TableHead>
                    <TableHead> Company </TableHead>
                    <TableHead> Segment </TableHead>
                    <TableHead> Computation Category </TableHead>
                    <TableHead> Ref Key </TableHead>
                    <TableHead class="text-right"> </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow v-for="task in tasks.data" :key="task.id">
                    <TableCell class="font-medium">
                        {{ task.title }}
                    </TableCell>
                    <TableCell>
                        {{ task.company.name }}
                    </TableCell>
                    <TableCell>
                        {{ task.segment.name }}
                    </TableCell>
                    <TableCell>
                        {{ task.computation_category }}
                    </TableCell>
                    <TableCell>
                        {{ task.ref_key }}
                    </TableCell>
                    <TableCell class="text-right"> </TableCell>
                </TableRow>
                <TableEmpty :colspan="5" v-if="tasks.data.length === 0"> No tasks found. </TableEmpty>
            </TableBody>
        </Table>
    </AppLayout>
</template>

<script setup lang="ts">
import { buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableEmpty, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/AppLayout.vue';
import { Paginated } from '@/types';
import { Company, Segment, Task } from '@/types/models';
import { Link, router } from '@inertiajs/vue3';
import { PlusIcon } from 'lucide-vue-next';
import { reactive } from 'vue';

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

interface Props {
    tasks: Paginated<
        Task & {
            company: Company;
            segment: Segment;
        }
    >;
    filter?: {
        title?: string;
        ref_key?: string;
        company_id?: number | null;
        segment_id?: number | null;
        computation_category?: string;
    } | null;
}

const { tasks, filter } = defineProps<Props>();

const query = reactive({
    filter: {
        title: filter?.title || filter?.ref_key || '',
        ref_key: filter?.ref_key || '',
        company_id: filter?.company_id || null,
        segment_id: filter?.segment_id || null,
        computation_category: filter?.computation_category || '',
    },
});

const search = () => {
    if (query.filter.title.startsWith('ref/')) {
        query.filter.ref_key = query.filter.title.replace('ref/', '');
        query.filter.title = '';
    } else {
        query.filter.ref_key = '';
    }
    router.reload({
        data: {
            filter: query.filter,
        },
        only: ['tasks', 'filter'],
        replace: true,
    });
};
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex items-center justify-between gap-2">
            <form @submit.prevent="search">
                <Input placeholder="Search" v-model="query.searchable" type="search" class="sm:w-96" />
            </form>
            <Link :href="route('tasks.create')" :class="buttonVariants()">
                <PlusIcon />
                Create Task
            </Link>
        </div>
        <Table class="border">
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
                    <TableCell class="text-right">
                        <div class="-my-1 flex justify-end space-x-1">
                            <Link href="#" :class="buttonVariants({ variant: 'outline', size: 'icon' })">
                                <EditIcon />
                            </Link>
                            <Button variant="outline" size="icon">
                                <TrashIcon class="text-destructive" />
                            </Button>
                        </div>
                    </TableCell>
                </TableRow>
                <TableEmpty :colspan="6" v-if="tasks.data.length === 0"> No tasks found. </TableEmpty>
            </TableBody>
        </Table>
        <Pagination :links="tasks.links" />
    </AppLayout>
</template>

<script setup lang="ts">
import Pagination from '@/components/Pagination.vue';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableEmpty, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/AppLayout.vue';
import { Paginated } from '@/types';
import { Company, Segment, Task } from '@/types/models';
import { Link, router } from '@inertiajs/vue3';
import { EditIcon, PlusIcon, TrashIcon } from 'lucide-vue-next';
import { ref } from 'vue';
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
        searchable: string;
    } | null;
}

const { tasks, filter } = defineProps<Props>();

const query = ref({
    searchable: filter?.searchable || '',
});

const search = () => {
    router.reload({
        data: {
            filter: query.value,
        },
        only: ['tasks', 'filter'],
        replace: true,
    });
};
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex flex-col items-center justify-between gap-2 sm:flex-row">
            <div class="flex flex-wrap items-center gap-2 sm:flex-nowrap">
                <form @submit.prevent="search" class="w-full sm:w-auto">
                    <Input placeholder="Search" v-model="query.searchable" type="search" class="sm:w-96" />
                </form>
                <Select v-model="query.company_id" @update:model-value="search" class="w-full sm:w-auto">
                    <SelectTrigger>
                        <SelectValue placeholder="Select Company" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem v-for="company in companies" :key="company.id" :value="company.id">
                            {{ company.name }}
                        </SelectItem>
                    </SelectContent>
                </Select>
                <Select class="w-full sm:w-auto">
                    <SelectTrigger>
                        <SelectValue placeholder="Select Computation Category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem v-for="computation_category in computation_categories" :key="computation_category" :value="computation_category">
                            {{ computation_category }}
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Link v-if="userCan('create:task')" :href="route('tasks.create')" :class="buttonVariants()">
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
                    <TableCell class="text-right">
                        <div class="-my-1 flex justify-end space-x-1">
                            <Link :href="route('tasks.questions.index', { task })" :class="buttonVariants({ variant: 'outline', size: 'icon' })">
                                <FileTextIcon />
                            </Link>
                            <Link
                                v-if="userCan('edit:task')"
                                :href="route('tasks.edit', { task })"
                                :class="buttonVariants({ variant: 'outline', size: 'icon' })"
                            >
                                <EditIcon />
                            </Link>
                            <Button v-if="userCan('delete:task')" @click="deleteTask(task.id)" variant="outline" size="icon">
                                <TrashIcon class="text-destructive" />
                            </Button>
                        </div>
                    </TableCell>
                </TableRow>
                <TableEmpty :colspan="6" v-if="tasks.data.length === 0"> No tasks found. </TableEmpty>
            </TableBody>
        </Table>
        <Pagination :links="tasks.links" />
        <ConfirmDialog
            v-model="deleteTaskConfirmation.isRevealed.value"
            title="Delete Task"
            description="Are you sure you want to delete this task?"
            @cancel="deleteTaskConfirmation.cancel"
            @confirm="deleteTaskConfirmation.confirm"
        />
    </AppLayout>
</template>

<script setup lang="ts">
import ConfirmDialog from '@/components/ConfirmDialog.vue';
import Pagination from '@/components/Pagination.vue';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableEmpty, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { usePermissions } from '@/composables/usePermissions';
import AppLayout from '@/layouts/AppLayout.vue';
import { Paginated } from '@/types';
import { Company, Segment, Task } from '@/types/models';
import { Link, router } from '@inertiajs/vue3';
import { useConfirmDialog } from '@vueuse/core';
import { EditIcon, FileTextIcon, PlusIcon, TrashIcon } from 'lucide-vue-next';
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
    companies: Company[];
    computation_categories: string[];
    filter?: {
        searchable: string;
        company_id: number;
    } | null;
}

const { tasks, filter } = defineProps<Props>();

const query = ref({
    searchable: filter?.searchable || '',
    company_id: filter?.company_id || null,
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

const deleteTaskConfirmation = useConfirmDialog();

const deleteTask = async (id: number) => {
    const { isCanceled } = await deleteTaskConfirmation.reveal();
    if (!isCanceled) {
        router.delete(route('tasks.destroy', { task: id }));
    }
};

const { userCan } = usePermissions();
</script>

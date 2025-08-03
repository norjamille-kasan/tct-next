<script setup lang="ts">
import TaskController from '@/actions/App/Http/Controllers/TaskController';
import TaskQuestionController from '@/actions/App/Http/Controllers/TaskQuestionController';
import ConfirmDialog from '@/components/ConfirmDialog.vue';
import DashboardContent from '@/components/dashboard/DashboardContent.vue';
import Heading from '@/components/Heading.vue';
import Pagination from '@/components/Pagination.vue';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableEmpty, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { usePermissions } from '@/composables/usePermissions';
import AppLayout from '@/layouts/AppLayout.vue';
import { Paginated } from '@/types';
import { Company, Segment, Task } from '@/types/models';
import { Link, router } from '@inertiajs/vue3';
import { useConfirmDialog } from '@vueuse/core';
import { Building2Icon, CalculatorIcon, Edit2Icon, Ellipsis, FileTextIcon, PlayIcon, PlusIcon, TagsIcon, TrashIcon } from 'lucide-vue-next';
import { computed, toRef } from 'vue';

defineOptions({
    layout: AppLayout,
});

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
    companies: Array<Company & { segments: Segment[] }>;
    computation_categories: string[];
    filter: {
        search: string;
        company_id: string;
        segment_id: string | null;
        computation_category: string;
    };
}

const props = defineProps<Props>();

const query = toRef(props.filter);

const search = (filterKey?: string) => {
    // reset segment_id when company_id is changed
    if (filterKey && filterKey === 'company_id') {
        query.value.segment_id = null;
    }
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
        router.delete(TaskController.destroy(id).url);
    }
};

const { userCan } = usePermissions();

const segments = computed(() => {
    return props.companies.find((company) => company.id === Number(query.value.company_id))?.segments || [];
});
</script>

<template>
    <DashboardContent :breadcrumbs="breadcrumbs">
        <Heading title="Tasks" description="List of all tasks" />
        <div class="flex flex-col items-center justify-between gap-2 sm:flex-row">
            <div class="flex flex-wrap items-center gap-2 sm:flex-nowrap">
                <form @submit.prevent="search()" class="w-full sm:w-auto">
                    <Input placeholder="Search" v-model="query.search" type="search" class="sm:w-96" />
                </form>
                <Select v-model="query.company_id" @update:model-value="search('company_id')" class="w-full sm:w-auto">
                    <SelectTrigger>
                        <SelectValue placeholder="Select Company" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem :value="null">Show All</SelectItem>
                        <SelectItem v-for="company in companies" :key="company.id" :value="company.id.toString()">
                            {{ company.name }}
                        </SelectItem>
                    </SelectContent>
                </Select>
                <Select v-model="query.segment_id" @update:model-value="search()" class="w-full sm:w-auto">
                    <SelectTrigger>
                        <SelectValue placeholder="Select Segment" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem :value="null">Show All</SelectItem>
                        <SelectItem v-for="segment in segments" :key="segment.id" :value="segment.id.toString()">
                            {{ segment.name }}
                        </SelectItem>
                    </SelectContent>
                </Select>
                <Select v-model="query.computation_category" @update:model-value="search()" class="w-full sm:w-auto">
                    <SelectTrigger>
                        <SelectValue placeholder="Select Computation Category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem :value="null">Show All</SelectItem>
                        <SelectItem v-for="computation_category in computation_categories" :key="computation_category" :value="computation_category">
                            {{ computation_category }}
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Link v-if="userCan('create:task')" :href="TaskController.create()" :class="buttonVariants()">
                <PlusIcon />
                Create Task
            </Link>
        </div>
        <div class="w-full overflow-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead> Title </TableHead>
                        <TableHead> </TableHead>
                        <TableHead class="w-[100px] text-right"> </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="task in props.tasks.data" :key="task.id">
                        <TableCell>
                            <div class="max-w-lvh truncate">
                                {{ task.title }}
                            </div>
                        </TableCell>
                        <TableCell>
                            <div class="flex items-center justify-end gap-2">
                                <Badge variant="secondary">
                                    <Building2Icon />
                                    {{ task.company.name }}
                                </Badge>
                                <Badge variant="secondary">
                                    <TagsIcon />
                                    {{ task.segment.name }}
                                </Badge>
                                <Badge variant="secondary">
                                    <CalculatorIcon />
                                    {{ task.computation_category }}
                                </Badge>
                            </div>
                        </TableCell>
                        <TableCell class="text-right">
                            <div class="-my-1 mr-2 flex justify-end gap-2">
                                <DropdownMenu>
                                    <DropdownMenuTrigger as-child>
                                        <Button variant="ghost" size="icon">
                                            <Ellipsis class="size-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent class="mr-5">
                                        <DropdownMenuItem @click="router.visit(TaskQuestionController.index({ task }).url)">
                                            <FileTextIcon />
                                            Questions
                                        </DropdownMenuItem>
                                        <DropdownMenuItem v-if="userCan('edit:task')" @click="router.visit(TaskController.edit({ task }).url)">
                                            <Edit2Icon />
                                            Edit
                                        </DropdownMenuItem>
                                        <DropdownMenuItem v-if="userCan('delete:task')" @click="deleteTask(task.id)">
                                            <TrashIcon class="text-destructive" />
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <Button variant="outline" size="sm">
                                    <PlayIcon />
                                    Start Task
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableEmpty :colspan="6" v-if="tasks.data.length === 0"> No tasks found. </TableEmpty>
                </TableBody>
            </Table>
        </div>
        <Pagination :links="props.tasks.links" />
        <ConfirmDialog
            v-model="deleteTaskConfirmation.isRevealed.value"
            title="Delete Task"
            description="Are you sure you want to delete this task?"
            @cancel="deleteTaskConfirmation.cancel"
            @confirm="deleteTaskConfirmation.confirm"
        />
    </DashboardContent>
</template>

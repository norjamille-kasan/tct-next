<script setup lang="ts">
import SubmissionController from '@/actions/App/Http/Controllers/Dashboard/Submissions/SubmissionController';
import DashboardContent from '@/components/dashboard/DashboardContent.vue';
import Heading from '@/components/Heading.vue';
import Pagination from '@/components/Pagination.vue';
import SubmissionStatusBadge from '@/components/SubmissionStatusBadge.vue';
import TableContainer from '@/components/TableContainer.vue';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableEmpty, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/AppLayout.vue';
import { Paginated, type BreadcrumbItem } from '@/types';
import { Company, Segment, Submission, Task } from '@/types/models';
import { Head, Link } from '@inertiajs/vue3';
import { useClipboard } from '@vueuse/core';
import { Building2Icon, CalculatorIcon, CopyIcon, EditIcon, Ellipsis, FileInputIcon, TagsIcon, TrashIcon } from 'lucide-vue-next';
import { toast } from 'vue-sonner';

defineOptions({
    layout: AppLayout,
});

interface Props {
    submissions: Paginated<Submission & { task: Task & { segment: Segment; company: Company } }>;
}

const props = defineProps<Props>();

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

const { copy, isSupported } = useClipboard();

const copyTaskId = (taskRefId: string) => {
    copy(taskRefId);
    toast.success('Copied to clipboard');
};
</script>

<template>
    <Head title="Submissions" />
    <DashboardContent :breadcrumbs="breadcrumbs">
        <Heading title="Submissions" description="List of all submissions" />
        <div class="flex flex-col items-center justify-between gap-2 sm:flex-row">
            <div class="flex flex-wrap items-center gap-2 sm:flex-nowrap">
                <form class="w-full sm:w-auto">
                    <Input placeholder="Search" type="search" class="sm:w-96" />
                </form>
            </div>
        </div>
        <TableContainer>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead> Name </TableHead>
                        <TableHead> Status </TableHead>
                        <TableHead> </TableHead>
                        <TableHead> </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="submission in props.submissions.data" :key="submission.id" class="divide-x">
                        <TableCell>
                            <div class="max-w-lvh truncate">
                                {{ submission.task.title }}
                            </div>
                        </TableCell>
                        <TableCell>
                            <SubmissionStatusBadge :status="submission.status" />
                        </TableCell>
                        <TableCell>
                            <div class="flex items-center justify-end gap-2">
                                <Badge variant="secondary">
                                    <Building2Icon />
                                    {{ submission.task.company.name }}
                                </Badge>
                                <Badge variant="secondary">
                                    <TagsIcon />
                                    {{ submission.task.segment.name }}
                                </Badge>
                                <Badge variant="secondary">
                                    <CalculatorIcon />
                                    {{ submission.task.computation_category }}
                                </Badge>
                            </div>
                        </TableCell>
                        <TableCell class="text-right">
                            <div class="-my-1 flex justify-end gap-2">
                                <DropdownMenu>
                                    <DropdownMenuTrigger as-child>
                                        <Button variant="ghost" size="icon">
                                            <Ellipsis class="size-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent class="mr-5">
                                        <DropdownMenuItem as-child>
                                            <Link :href="SubmissionController.edit(submission.id)">
                                                <FileInputIcon />
                                                Open Submission
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem v-if="isSupported" @click="copyTaskId(submission.ref_id)">
                                            <CopyIcon />
                                            Copy Task ID
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <EditIcon />
                                            Edit Task
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <TrashIcon class="text-destructive" />
                                            Delete Task
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableEmpty :colspan="100" v-if="props.submissions.data.length === 0"> No tasks found. </TableEmpty>
                </TableBody>
            </Table>
        </TableContainer>
        <Pagination :links="props.submissions.links" />
    </DashboardContent>
</template>

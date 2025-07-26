<script setup lang="ts">
import ConfirmDialog from '@/components/ConfirmDialog.vue';
import DashboardContent from '@/components/dashboard/DashboardContent.vue';
import Heading from '@/components/Heading.vue';
import Pagination from '@/components/Pagination.vue';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableEmpty, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/AppLayout.vue';
import { Paginated, type BreadcrumbItem } from '@/types';
import { Company, Segment } from '@/types/models';
import { Head, router } from '@inertiajs/vue3';
import { formatDate, useConfirmDialog } from '@vueuse/core';
import { EditIcon, TrashIcon, XIcon } from 'lucide-vue-next';
import { provide, toRef } from 'vue';
import AddToCompanyForm from './partials/AddToCompanyForm.vue';
import SegmentCreateForm from './partials/SegmentCreateForm.vue';

defineOptions({
    layout: AppLayout,
});

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Segments',
        href: '/dashboard/segments',
    },
];

const props = defineProps<{
    segments: Paginated<Segment & { companies: Company[] }>;
    filter: {
        search: string;
    };
    companies: Company[];
}>();

provide('companies', props.companies);

const query = toRef(props.filter);

const search = () => {
    router.reload({
        data: {
            filter: query.value,
        },
        only: ['segments', 'filter'],
        replace: true,
    });
};

const deleteSegmentDialog = useConfirmDialog();

const deleteSegment = async (segmentId: number) => {
    const { isCanceled } = await deleteSegmentDialog.reveal();

    if (!isCanceled) {
        router.delete(route('segments.destroy', { segment: segmentId }));
    }
};

const detachCompanyDialog = useConfirmDialog();

const detachCompany = async (segmentId: number, companyId: number) => {
    const { isCanceled } = await detachCompanyDialog.reveal();
    if (!isCanceled) {
        router.delete(route('segments.detach-company', { segment: segmentId, company: companyId }));
    }
};
</script>

<template>
    <Head title="Segments" />

    <DashboardContent :breadcrumbs="breadcrumbs">
        <Heading title="Segments" description="List of all segments" />
        <div class="flex items-center justify-between gap-2">
            <form @submit.prevent="search">
                <Input v-model="query.search" placeholder="Search" type="search" class="sm:w-80" />
            </form>
            <SegmentCreateForm />
        </div>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Used By</TableHead>
                    <TableHead>Last Modified</TableHead>
                    <TableHead class="text-right"> </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow v-for="segment in props.segments.data" :key="segment.id">
                    <TableCell class="font-medium">
                        {{ segment.name }}
                    </TableCell>
                    <TableCell>
                        <div class="flex flex-wrap items-center gap-2">
                            <Badge v-for="company in segment.companies" :key="company.id" variant="secondary">
                                {{ company.name }}
                                <button type="button" @click="detachCompany(segment.id, company.id)">
                                    <XIcon class="size-4 text-muted-foreground" />
                                </button>
                            </Badge>
                            <AddToCompanyForm :addedCompanies="segment.companies" :segment-id="segment.id" />
                        </div>
                    </TableCell>
                    <TableCell>
                        {{ formatDate(new Date(segment.updated_at), ' YYYY MMM DD h:mm a') }}
                    </TableCell>
                    <TableCell class="text-right">
                        <div class="-my-1 flex justify-end">
                            <ModalLink :href="route('segments.edit', segment.id)" :class="buttonVariants({ variant: 'ghost', size: 'icon' })">
                                <EditIcon />
                            </ModalLink>
                            <Button @click="deleteSegment(segment.id)" variant="ghost" size="icon">
                                <TrashIcon class="text-destructive" />
                            </Button>
                        </div>
                    </TableCell>
                </TableRow>
                <TableEmpty :colspan="3" v-if="props.segments.data.length === 0"> No segments found. </TableEmpty>
            </TableBody>
        </Table>
        <Pagination :links="props.segments.links" />
        <ConfirmDialog
            v-model="deleteSegmentDialog.isRevealed.value"
            title="Delete Company"
            description="Are you sure you want to delete this segment?"
            @cancel="deleteSegmentDialog.cancel"
            @confirm="deleteSegmentDialog.confirm"
        />
        <ConfirmDialog
            v-model="detachCompanyDialog.isRevealed.value"
            title="Remove Company"
            description="Are you sure you want to remove this company from this segment?"
            @cancel="detachCompanyDialog.cancel"
            @confirm="detachCompanyDialog.confirm"
        />
    </DashboardContent>
</template>

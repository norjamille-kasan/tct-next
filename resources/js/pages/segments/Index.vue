<script setup lang="ts">
import ConfirmDialog from '@/components/ConfirmDialog.vue';
import Pagination from '@/components/Pagination.vue';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableEmpty, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/AppLayout.vue';
import { Paginated, type BreadcrumbItem } from '@/types';
import { Company, Segment } from '@/types/models';
import { Head, router } from '@inertiajs/vue3';
import { formatDate, useConfirmDialog } from '@vueuse/core';
import { EditIcon, TrashIcon } from 'lucide-vue-next';
import { toRef } from 'vue';
import SegmentCreateForm from './partials/SegmentCreateForm.vue';

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
    segments: Paginated<Segment>;
    filter: {
        search: string;
    };
    companies: Company[];
}>();

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
</script>

<template>
    <Head title="Segments" />

    <AppLayout :breadcrumbs="breadcrumbs">
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
    </AppLayout>
</template>

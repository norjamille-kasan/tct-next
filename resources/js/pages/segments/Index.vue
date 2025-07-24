<script setup lang="ts">
import Pagination from '@/components/Pagination.vue';
import { Button, buttonVariants } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableEmpty, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/AppLayout.vue';
import { Paginated, type BreadcrumbItem } from '@/types';
import { Segment } from '@/types/models';
import { Head, Link } from '@inertiajs/vue3';
import { formatDate } from '@vueuse/core';
import { EditIcon, TrashIcon } from 'lucide-vue-next';
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

const { segments: data } = defineProps<{
    segments: Paginated<Segment>;
}>();
</script>

<template>
    <Head title="Segments" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex items-center justify-between gap-2">
            <form>
                <Input placeholder="Search" type="search" class="sm:w-80" />
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
                <TableRow v-for="company in data.data" :key="company.id">
                    <TableCell class="font-medium">
                        {{ company.name }}
                    </TableCell>
                    <TableCell>
                        {{ formatDate(new Date(company.updated_at), ' YYYY MMM DD h:mm a') }}
                    </TableCell>
                    <TableCell class="text-right">
                        <div class="-my-1 flex justify-end">
                            <Link href="#" :class="buttonVariants({ variant: 'ghost', size: 'icon' })">
                                <EditIcon />
                            </Link>
                            <Button variant="ghost" size="icon">
                                <TrashIcon class="text-destructive" />
                            </Button>
                        </div>
                    </TableCell>
                </TableRow>
                <TableEmpty :colspan="3" v-if="data.data.length === 0"> No segments found. </TableEmpty>
            </TableBody>
        </Table>
        <Pagination :links="data.links" />
    </AppLayout>
</template>

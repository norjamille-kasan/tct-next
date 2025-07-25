<script setup lang="ts">
import ConfirmDialog from '@/components/ConfirmDialog.vue';
import Pagination from '@/components/Pagination.vue';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableEmpty, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem, Paginated } from '@/types';
import { Company } from '@/types/models';
import { Head, Link, router } from '@inertiajs/vue3';
import { formatDate, useConfirmDialog } from '@vueuse/core';
import { EditIcon, PlusIcon, TrashIcon } from 'lucide-vue-next';
import { toRef } from 'vue';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Companies',
        href: '/dashboard/companies',
    },
];

const props = defineProps<{
    companies: Paginated<Company>;
    filter: {
        search: string;
    };
}>();

const query = toRef(props.filter);

const search = () => {
    router.reload({
        data: {
            filter: query.value,
        },
        only: ['companies', 'filter'],
        replace: true,
    });
};

const deleteCompanyDialog = useConfirmDialog();

const deleteCompany = async (id: number) => {
    const { isCanceled } = await deleteCompanyDialog.reveal();
    if (!isCanceled) {
        router.delete(route('companies.destroy', { company: id }));
    }
};
</script>
<template>
    <Head title="Companies" />
    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex items-center justify-between gap-2">
            <form @submit.prevent="search">
                <Input v-model="query.search" placeholder="Search" type="search" class="sm:w-80" />
            </form>
            <Link :href="route('companies.create')" :class="buttonVariants()">
                <PlusIcon />
                Create Company
            </Link>
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
                <TableRow v-for="company in props.companies.data" :key="company.id">
                    <TableCell class="font-medium">
                        {{ company.name }}
                    </TableCell>
                    <TableCell>
                        {{ formatDate(new Date(company.updated_at), ' YYYY MMM DD h:mm a') }}
                    </TableCell>
                    <TableCell class="text-right">
                        <div class="-my-1 flex justify-end">
                            <Link :href="route('companies.edit', company.id)" :class="buttonVariants({ variant: 'ghost', size: 'icon' })">
                                <EditIcon />
                            </Link>
                            <Button @click="deleteCompany(company.id)" variant="ghost" size="icon">
                                <TrashIcon class="text-destructive" />
                            </Button>
                        </div>
                    </TableCell>
                </TableRow>
                <TableEmpty :colspan="3" v-if="companies.data.length === 0"> No companies found. </TableEmpty>
            </TableBody>
        </Table>
        <Pagination :links="props.companies.links" />
        <ConfirmDialog
            v-model="deleteCompanyDialog.isRevealed.value"
            title="Delete Company"
            description="Are you sure you want to delete this company?"
            @cancel="deleteCompanyDialog.cancel"
            @confirm="deleteCompanyDialog.confirm"
        />
    </AppLayout>
</template>

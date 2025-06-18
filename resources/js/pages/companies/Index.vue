<template>
    <Head title="Companies" />
    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="space-y-5 p-5">
            <div class="flex items-center justify-between">
                <div>
                    <Input type="search" class="sm:w-80" />
                </div>
                <div>
                    <Link :href="route('companies.create')" :class="buttonVariants({ variant: 'outline' })">
                        <PlusIcon />
                        Create Company
                    </Link>
                </div>
            </div>
            <div class="rounded-lg border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead class="text-right"> </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow v-for="company in data.data" :key="company.id">
                            <TableCell class="font-medium">
                                <div class="inline-flex items-center">
                                    <Building2Icon class="mr-2 size-4" />
                                    {{ company.name }}
                                </div>
                            </TableCell>
                            <TableCell class="text-right">
                                <div class="-my-1 flex justify-end space-x-1">
                                    <Link
                                        :href="route('companies.edit', company.id)"
                                        prefetch
                                        :class="buttonVariants({ variant: 'outline', size: 'icon' })"
                                    >
                                        <EditIcon />
                                    </Link>
                                    <Button variant="outline" size="icon">
                                        <TrashIcon class="text-destructive" />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    </AppLayout>
</template>

<script setup lang="ts">
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/AppLayout.vue';
import { Pagination, type BreadcrumbItem } from '@/types';
import { Company } from '@/types/models';
import { Head, Link } from '@inertiajs/vue3';
import { Building2Icon, EditIcon, PlusIcon, TrashIcon } from 'lucide-vue-next';

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

const { companies: data } = defineProps<{
    companies: Pagination<Company>;
}>();
</script>

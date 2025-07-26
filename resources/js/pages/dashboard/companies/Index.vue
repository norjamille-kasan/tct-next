<script setup lang="ts">
import ConfirmDialog from '@/components/ConfirmDialog.vue';
import Heading from '@/components/Heading.vue';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
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
    companies: Company[];
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
        <Heading title="Companies" description="List of all companies" />
        <div class="flex items-center justify-between gap-2">
            <form @submit.prevent="search">
                <Input v-model="query.search" placeholder="Search" type="search" class="sm:w-80" />
            </form>
            <Link :href="route('companies.create')" :class="buttonVariants()">
                <PlusIcon />
                Create Company
            </Link>
        </div>
        <div class="grid gap-4 sm:grid-cols-3">
            <template v-for="company in props.companies" :key="company.id">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            {{ company.name }}
                        </CardTitle>
                        <CardDescription> Last modified: {{ formatDate(new Date(company.updated_at), ' YYYY MMM DD h:mm a') }} </CardDescription>
                        <CardAction>
                            <Link :href="route('companies.edit', company.id)" :class="buttonVariants({ variant: 'ghost', size: 'icon' })">
                                <EditIcon />
                            </Link>
                            <Button @click="deleteCompany(company.id)" variant="ghost" size="icon">
                                <TrashIcon class="text-destructive" />
                            </Button>
                        </CardAction>
                    </CardHeader>
                </Card>
            </template>
        </div>
        <ConfirmDialog
            v-model="deleteCompanyDialog.isRevealed.value"
            title="Delete Company"
            description="Are you sure you want to delete this company?"
            @cancel="deleteCompanyDialog.cancel"
            @confirm="deleteCompanyDialog.confirm"
        />
    </AppLayout>
</template>

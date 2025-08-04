<script setup lang="ts">
import CompanyController from '@/actions/App/Http/Controllers/Dashboard/Companies/CompanyController';
import DashboardContent from '@/components/dashboard/DashboardContent.vue';
import Heading from '@/components/Heading.vue';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Company } from '@/types/models';
import { Head, Link, router } from '@inertiajs/vue3';
import { formatDate } from '@vueuse/core';
import { EditIcon, PlusIcon } from 'lucide-vue-next';
import { toRef } from 'vue';

defineOptions({
    layout: AppLayout,
});

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
</script>
<template>
    <Head title="Companies" />
    <DashboardContent :breadcrumbs="breadcrumbs">
        <Heading title="Companies" description="List of all companies" />
        <div class="flex items-center justify-between gap-2">
            <form @submit.prevent="search">
                <Input v-model="query.search" placeholder="Search" type="search" class="sm:w-80" />
            </form>
            <Link :href="CompanyController.create()" :class="buttonVariants()">
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
                            <Link :href="CompanyController.edit(company.id)" :class="buttonVariants({ variant: 'ghost', size: 'icon' })">
                                <EditIcon />
                            </Link>
                        </CardAction>
                    </CardHeader>
                </Card>
            </template>
        </div>
    </DashboardContent>
</template>

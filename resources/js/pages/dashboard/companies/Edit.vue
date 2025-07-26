<script setup lang="ts">
import DashboardContent from '@/components/dashboard/DashboardContent.vue';
import FormControl from '@/components/FormControl.vue';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { usePermissions } from '@/composables/usePermissions';
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Company } from '@/types/models';
import { Head, Link, router, useForm } from '@inertiajs/vue3';
import { useConfirmDialog } from '@vueuse/core';
import DeleteCompany from './partials/DeleteCompany.vue';

defineOptions({
    layout: AppLayout,
});

const { userCan } = usePermissions();

interface Props {
    company: Company;
}

const { company } = defineProps<Props>();

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Companies',
        href: '/dashboard/companies',
    },
    {
        title: company.name,
        href: '#',
    },
    {
        title: 'Edit',
        href: `/dashboard/companies/${company.id}/edit`,
    },
];

const form = useForm({
    name: company.name,
    ref_key: company.ref_key,
});

const submit = () => {
    form.put(route('companies.update', { company }), {
        only: ['company'],
    });
};

const deleteSegmentConfirmation = useConfirmDialog();

const deleteSegment = async (id: number) => {
    const { isCanceled } = await deleteSegmentConfirmation.reveal();
    if (!isCanceled) {
        router.delete(route('companies.segments.destroy', { company, segment: id }), {
            only: ['segments'],
        });
    }
};
</script>

<template>
    <Head title="Edit Company" />
    <DashboardContent :breadcrumbs="breadcrumbs">
        <div class="mx-auto max-w-7xl space-y-6">
            <form @submit.prevent="submit">
                <Card>
                    <CardHeader>
                        <CardTitle>Edit Company</CardTitle>
                        <CardDescription> Use this form to edit a company. Ensure you fill in all required fields. </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="grid gap-6 md:grid-cols-2">
                            <FormControl label="Company" :error="form.errors.name">
                                <Input v-model="form.name" type="text" name="name" />
                            </FormControl>
                            <FormControl
                                label="Reference Key"
                                :error="form.errors.ref_key"
                                help="Leave blank to generate a random key (it is used for internal/development reference)"
                            >
                                <Input v-model="form.ref_key" type="text" name="ref_key" />
                            </FormControl>
                        </div>
                    </CardContent>
                    <CardFooter class="gap-2">
                        <Link :href="route('companies.index')" :class="buttonVariants({ variant: 'outline' })"> Return </Link>
                        <Button type="submit"> Save Changes </Button>
                    </CardFooter>
                </Card>
            </form>
            <DeleteCompany v-if="userCan('delete:company')" :company="company" />
        </div>
    </DashboardContent>
</template>

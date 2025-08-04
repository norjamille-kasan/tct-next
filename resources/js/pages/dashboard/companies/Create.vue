<template>
    <Head title="Create Company" />

    <DashboardContent :breadcrumbs="breadcrumbs">
        <div class="mx-auto max-w-7xl">
            <form @submit.prevent="submit">
                <Card>
                    <CardHeader>
                        <CardTitle>Create Company</CardTitle>
                        <CardDescription> Create a new company to manage your tasks </CardDescription>
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
                        <Link :href="CompanyController.index()" :class="buttonVariants({ variant: 'outline' })"> Return </Link>
                        <Button type="submit"> Save Company </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    </DashboardContent>
</template>

<script setup lang="ts">
import CompanyController from '@/actions/App/Http/Controllers/Dashboard/Companies/CompanyController';
import DashboardContent from '@/components/dashboard/DashboardContent.vue';
import FormControl from '@/components/FormControl.vue';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/vue3';

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
    {
        title: 'Create',
        href: '/dashboard/companies/create',
    },
];

const form = useForm({
    name: '',
    ref_key: '',
});

const submit = () => {
    form.submit(CompanyController.store());
};
</script>
